import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const IDENTIFIER_SOURCE = String.raw`[A-Za-z_][A-Za-z0-9_]*`;
const FORMATTER_SOURCE = String.raw`[A-Za-z][A-Za-z0-9]*`;
const PATH_SOURCE = String.raw`${IDENTIFIER_SOURCE}(?:\.${IDENTIFIER_SOURCE})*`;
const TOKEN_SOURCE = String.raw`\$\{(${PATH_SOURCE})(?:\|(${FORMATTER_SOURCE}))?\}`;
const EACH_PATTERN = new RegExp(
	String.raw`\$\{#each\s+(${PATH_SOURCE})\s+as\s+(${IDENTIFIER_SOURCE})\}([\s\S]*?)\$\{\/each\}`,
	"g",
);
const BLOCKED_SEGMENTS = new Set(["__proto__", "prototype", "constructor"]);

/**
 * A scalar value that may be inserted into a template.
 * `null` is rendered as an empty string.
 *
 * @typedef {string | number | boolean | null} InterpolationScalar
 */

/**
 * JSON-compatible input. Arrays and objects may exist in the normalized
 * context, but a token must resolve to a scalar leaf.
 *
 * @typedef {InterpolationScalar | InterpolationObject | InterpolationValue[]} InterpolationValue
 */

/** @typedef {{ [key: string]: InterpolationValue }} InterpolationObject */

/**
 * @template {object} [TValues=InterpolationObject]
 * Arguments accepted by {@link generateInterpolatedFile}.
 * @typedef {object} GenerateInterpolatedFileArguments
 * @property {string} templatePath File containing `${dot.path}` tokens.
 * @property {string} outputPath Destination path for the generated file.
 * @property {TValues} values Normalized context resolved through dot paths.
 * @property {boolean} [overwrite=false] Whether an existing destination may be replaced.
 */

/**
 * Information about a successfully generated file.
 *
 * @typedef {object} GenerateInterpolatedFileResult
 * @property {string} outputPath Absolute path of the generated file.
 * @property {string[]} replacedTokens Sorted list of unique tokens replaced.
 * @property {number} byteLength UTF-8 byte length of the generated content.
 */

/**
 * Resolves a dot path without evaluating executable code.
 *
 * @param {object} values
 * @param {string} token
 * @returns {unknown}
 */
function resolvePath(values, token) {
	const segments = token.split(".");
	/** @type {unknown} */
	let current = values;
	
	for (const segment of segments) {
		if (BLOCKED_SEGMENTS.has(segment)) {
			throw new Error(`Unsafe interpolation path: ${token}`);
		}
		if (current === null || typeof current !== "object" || !(segment in current)) {
			throw new Error(`Missing interpolation value: ${token}`);
		}
		current = current[segment];
	}
	
	return current;
}

/**
 * @param {object} values
 * @param {string} token
 * @returns {InterpolationScalar}
 */
function resolveValue(values, token) {
	const value = resolvePath(values, token);
	if (value !== null && typeof value === "object") {
		throw new Error(`Interpolation value must be a string, number, boolean, or null: ${token}`);
	}
	return /** @type {InterpolationScalar} */ (value);
}

/**
 * Applies an explicitly requested presentation formatter.
 *
 * @param {InterpolationScalar} value
 * @param {string | undefined} formatter
 * @returns {string}
 */
function renderValue(value, formatter) {
	if (!formatter) return value === null ? "" : String(value);
	if (formatter === "dash") return value === null || value === "" ? "—" : String(value);
	if (formatter === "yesNo") return value ? "Yes" : "No";
	if (formatter === "titleCase") {
		if (value === null) return "";
		return String(value)
			.replace(/[-_]+/g, " ")
			.replace(/\b\w/g, (character) => character.toUpperCase());
	}
	if (formatter === "dateLong" || formatter === "dateLongOrDash") {
		if (value === null || value === "") return formatter === "dateLongOrDash" ? "—" : "";
		const text = String(value);
		if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
			throw new Error(`Formatter ${formatter} requires an ISO date; received: ${text}`);
		}
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "long",
			timeZone: "UTC",
		}).format(new Date(`${text}T00:00:00Z`));
	}
	throw new Error(`Unknown interpolation formatter: ${formatter}`);
}

/**
 * Finds every interpolation token and optionally replaces it through the same
 * parsing path. Omitting `values` performs discovery without changing content.
 *
 * @param {string} content
 * @param {object} [values]
 * @returns {{ content: string, expressions: string[] }}
 */
function processTokens(content, values) {
	const expressions = [];
	const processed = content.replace(new RegExp(TOKEN_SOURCE, "g"), (token, tokenPath, formatter) => {
		expressions.push(formatter ? `${tokenPath}|${formatter}` : tokenPath);
		if (values === undefined) return token;
		return renderValue(resolveValue(values, tokenPath), formatter);
	});
	return { content: processed, expressions };
}

/**
 * Expands deterministic `${#each collection as item}` blocks. The collection
 * must resolve to an array. Nested repeat blocks are intentionally unsupported.
 *
 * @param {string} template
 * @param {object} values
 * @returns {string}
 */
function expandEachBlocks(template, values) {
	const expanded = template.replace(
		EACH_PATTERN,
		(_whole, collectionPath, alias, block) => {
			const collection = resolvePath(values, collectionPath);
			if (!Array.isArray(collection)) {
				throw new Error(`Repeat-block value must be an array: ${collectionPath}`);
			}
			
			const rowTemplate = block.replace(/^\r?\n/, "").replace(/\r?\n$/, "");
			return collection
				.map((item) => {
					const scope = { ...values, [alias]: item };
					return processTokens(rowTemplate, scope).content;
				})
				.join("\n");
		},
	);
	
	if (expanded.includes("${#each") || expanded.includes("${/each}")) {
		throw new Error("Malformed or nested repeat block");
	}
	
	return expanded;
}

/**
 * Generates any UTF-8 text file by replacing `${dot.path}` tokens with supplied
 * scalar values. The template is never evaluated as JavaScript. Every token is
 * resolved before output begins, and the destination is written atomically.
 *
 * Values are inserted exactly as supplied. Callers are responsible for escaping
 * values when the destination format requires it—for example, escaping `|` in a
 * Markdown table cell.
 *
 * @template {object} TValues
 * @param {GenerateInterpolatedFileArguments<TValues>} args
 * @returns {Promise<GenerateInterpolatedFileResult>}
 */
export async function generateInterpolatedFile(args) {
	const templatePath = resolve(args.templatePath);
	const outputPath = resolve(args.outputPath);
	
	if (templatePath === outputPath) {
		throw new Error("Template and output paths must be different");
	}
	
	const template = await readFile(templatePath, "utf8");
	const templateTokens = processTokens(template).expressions;
	const expandedTemplate = expandEachBlocks(template, args.values);
	const generated = processTokens(expandedTemplate, args.values).content;
	const unresolved = processTokens(generated).expressions;
	if (unresolved.length > 0) {
		throw new Error(`Unresolved interpolation values: ${[...new Set(unresolved)].join(", ")}`);
	}
	
	await mkdir(dirname(outputPath), { recursive: true });
	const temporaryPath = `${outputPath}.tmp-${process.pid}-${Date.now()}`;
	
	try {
		await writeFile(temporaryPath, generated, { encoding: "utf8", flag: "wx" });
		if (!args.overwrite) {
			try {
				await writeFile(outputPath, "", { flag: "wx" });
				await rm(outputPath);
			} catch (error) {
				throw new Error(`Output already exists: ${outputPath}`, { cause: error });
			}
		}
		await rename(temporaryPath, outputPath);
	} catch (error) {
		await rm(temporaryPath, { force: true });
		throw error;
	}
	
	return {
		outputPath,
		replacedTokens: [...new Set(templateTokens)].sort(),
		byteLength: Buffer.byteLength(generated, "utf8"),
	};
}

/**
 * @param {string[]} argv
 * @returns {{ templatePath: string, valuesPath: string, outputPath: string, overwrite: boolean }}
 */
function parseCliArguments(argv) {
	const options = new Map();
	let overwrite = false;
	
	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (argument === "--overwrite") {
			overwrite = true;
			continue;
		}
		if (!argument.startsWith("--") || index + 1 >= argv.length) {
			throw new Error(`Invalid argument: ${argument}`);
		}
		options.set(argument, argv[index + 1]);
		index += 1;
	}
	
	const templatePath = options.get("--template");
	const valuesPath = options.get("--values");
	const outputPath = options.get("--output");
	if (!templatePath || !valuesPath || !outputPath) {
		throw new Error(
			"Usage: node generate-interpolated-file.mjs --template <file> --values <json> --output <file> [--overwrite]",
		);
	}
	
	return { templatePath, valuesPath, outputPath, overwrite };
}

async function runCli() {
	const cli = parseCliArguments(process.argv.slice(2));
	const json = await readFile(resolve(cli.valuesPath), "utf8");
	const values = JSON.parse(json);
	const result = await generateInterpolatedFile({
		templatePath: cli.templatePath,
		outputPath: cli.outputPath,
		values,
		overwrite: cli.overwrite,
	});
	process.stdout.write(
		`Generated ${result.outputPath} with ${result.replacedTokens.length} unique values.\n`,
	);
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : "";
if (invokedPath === import.meta.url) {
	runCli().catch((error) => {
		const message = error instanceof Error ? error.message : String(error);
		process.stderr.write(`${message}\n`);
		process.exitCode = 1;
	});
}
