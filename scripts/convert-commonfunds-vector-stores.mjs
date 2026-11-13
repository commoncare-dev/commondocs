import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { loadDocumentSource } from "./document-source.mjs";
import { asVectorStoreSection, loadAiInstructions } from "./ai-instructions-source.mjs";

const repoRoot = path.resolve(import.meta.dirname, "..");
const sourceRel = "plan-structures/common-funds/human-readable.md";
const sourceCommit = execFileSync("git", ["-C", repoRoot, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const { sourcePath, body, sourceSha256, metadataRel, metadataSha256, scalar } =
  await loadDocumentSource(repoRoot, sourceRel);
const {
  body: aiInstructions,
  instructionsRel: aiInstructionsRel,
  sha256: aiInstructionsSha256,
} = await loadAiInstructions(repoRoot, sourcePath);

const documentId = scalar("id", "product.commonfunds");
const title = scalar("title", "CommonFunds");
const sourceMetadata = [
  ["source_status", "status"],
  ["source_version", "version"],
  ["jurisdiction", "jurisdiction"],
  ["owner", "owner"],
].map(([outputKey, sourceKey]) => {
  const value = scalar(sourceKey);
  return value ? `${outputKey}: ${value}` : "";
}).filter(Boolean).join("\n");
const rulesMarker = "## 1. Classify the dollar before applying a limit";
const rulesStart = body.indexOf(rulesMarker);
if (rulesStart < 0) throw new Error(`Missing section marker: ${rulesMarker}`);

const slugify = (value) => value
  .toLowerCase()
  .replace(/&[a-z]+;/g, " ")
  .replace(/[`*_~]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 72) || "record";

const cleanCell = (value) => value.trim().replace(/^\|\s*|\s*\|$/g, "").replace(/\\\|/g, "|");
const splitRow = (line) => cleanCell(line).split(/(?<!\\)\|/).map(cleanCell);
const isSeparator = (line) => /^\s*\|?\s*:?-{3,}/.test(line);

function convert(section, idPrefix) {
  const lines = section.trim().split("\n");
  const out = [];
  const headingStack = [];
  const ids = new Map();
  const uniqueId = (base) => {
    const count = (ids.get(base) || 0) + 1;
    ids.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
  const context = () => headingStack.filter(Boolean).join(" > ");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const label = heading[2].replace(/<[^>]+>/g, "").trim();
      headingStack[level - 1] = label;
      headingStack.length = level;
      out.push(`<!-- record_id: ${uniqueId(`${documentId}.${idPrefix}.${slugify(label)}`)} -->`);
      out.push(line);
      out.push(`> Retrieval context: ${title} — ${context()}`);
      continue;
    }

    const beginsTable = line.trim().startsWith("|") && i + 1 < lines.length && isSeparator(lines[i + 1]);
    if (beginsTable) {
      const headers = splitRow(line);
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = splitRow(lines[i]);
        const label = (cells[0] || "row").replace(/[*_`]/g, "");
        out.push(`#### ${label}`);
        out.push(`<!-- record_id: ${uniqueId(`${documentId}.${idPrefix}.${slugify(context())}.${slugify(label)}`)}; record_type: table-row -->`);
        out.push(`- Context: ${title} — ${context()}`);
        headers.forEach((header, index) => {
          if (header && cells[index] !== undefined) {
            out.push(cells[index] ? `- ${header}: ${cells[index]}` : `- ${header}:`);
          }
        });
        out.push("");
        i += 1;
      }
      i -= 1;
      continue;
    }

    if (/^<\/?(details|summary)>/.test(line.trim())) continue;
    out.push(line.trimEnd());
  }
  return out.join("\n").trim();
}

async function writeStore({ filename, storeId, storeTitle, scope, section }) {
  const generated = `---
id: ${documentId}.${storeId}
title: ${title} — ${storeTitle}
kind: vector-store-source
schema_version: "1.0"
source_document: ${sourceRel}
metadata_document: ${metadataRel}
ai_instructions_document: ${aiInstructionsRel}
source_commit: ${sourceCommit}
source_sha256: ${sourceSha256}
metadata_sha256: ${metadataSha256}
ai_instructions_sha256: ${aiInstructionsSha256}
generation_method: deterministic-commonfunds-split-conversion
canonical_source: false
${sourceMetadata}
scope: ${scope}
last_reviewed: ${scalar("last_reviewed", "unknown")}
---

# ${title} — ${storeTitle}

> Retrieval context: This generated document is the ${scope} retrieval view of \`${sourceRel}\`. The human-readable source remains canonical. Substantive edits belong in that source and must be regenerated here.

${asVectorStoreSection(aiInstructions)}

${convert(section, storeId)}
`;
  const target = path.join(path.dirname(sourcePath), filename);
  await fs.writeFile(target, generated);
  return `${path.relative(repoRoot, target)} written (${generated.split("\n").length} lines)`;
}

const results = await Promise.all([
  writeStore({
    filename: "vectorstore-explaining-commonfunds.md",
    storeId: "explaining.vector-store",
    storeTitle: "Explanation and Design Rationale",
    scope: "explanation-and-design-rationale",
    section: body.slice(0, rulesStart),
  }),
  writeStore({
    filename: "vectorstore-rules.md",
    storeId: "rules.vector-store",
    storeTitle: "Rules and Calculation Specification",
    scope: "rules-and-calculation-specification",
    section: body.slice(rulesStart),
  }),
]);

console.log(results.join("\n"));
