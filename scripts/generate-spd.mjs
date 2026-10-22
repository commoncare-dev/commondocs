import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { renderInterpolatedTemplate } from "./generate-interpolated-docs.mjs";

const BENEFIT_SECTION_MARKER = "<!-- BENEFIT_SECTIONS -->";

function stripTemplateFrontMatter(content) {
	return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

function parseArguments(argv) {
	const result = { benefitTemplates: [], overwrite: false };
	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (argument === "--overwrite") {
			result.overwrite = true;
			continue;
		}
		if (!argument.startsWith("--") || index + 1 >= argv.length) throw new Error(`Invalid argument: ${argument}`);
		const value = argv[index + 1];
		index += 1;
		if (argument === "--benefit-template") result.benefitTemplates.push(value);
		else if (argument === "--template") result.templatePath = value;
		else if (argument === "--values") result.valuesPath = value;
		else if (argument === "--output") result.outputPath = value;
		else throw new Error(`Unknown option: ${argument}`);
	}
	if (!result.templatePath || !result.valuesPath || !result.outputPath) {
		throw new Error("Usage: node generate-spd.mjs --template <spd-template> --values <json> --benefit-template <file> [--benefit-template <file> ...] --output <file> [--overwrite]");
	}
	return result;
}

async function writeAtomically(outputPath, content, overwrite) {
	await mkdir(dirname(outputPath), { recursive: true });
	const temporaryPath = `${outputPath}.tmp-${process.pid}-${Date.now()}`;
	try {
		await writeFile(temporaryPath, content, { encoding: "utf8", flag: "wx" });
		if (!overwrite) {
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
}

async function run() {
	const options = parseArguments(process.argv.slice(2));
	const values = JSON.parse(await readFile(resolve(options.valuesPath), "utf8"));
	const baseTemplate = await readFile(resolve(options.templatePath), "utf8");
	const markerCount = baseTemplate.split(BENEFIT_SECTION_MARKER).length - 1;
	if (markerCount !== 1) {
		throw new Error(`SPD template must contain exactly one marker: ${BENEFIT_SECTION_MARKER}`);
	}

	const sections = [];
	for (const path of options.benefitTemplates) {
		const template = stripTemplateFrontMatter(await readFile(resolve(path), "utf8"));
		sections.push(renderInterpolatedTemplate(template, values).content.trim());
	}

	const assembled = baseTemplate.replace(BENEFIT_SECTION_MARKER, sections.join("\n\n---\n\n"));
	const rendered = renderInterpolatedTemplate(assembled, values).content;
	const outputPath = resolve(options.outputPath);
	await writeAtomically(outputPath, `${rendered.trim()}\n`, options.overwrite);
	process.stdout.write(`Generated ${outputPath} with ${sections.length} benefit section(s).\n`);
}

run().catch((error) => {
	process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
	process.exitCode = 1;
});
