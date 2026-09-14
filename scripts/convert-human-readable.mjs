import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const repoRoot = path.resolve(import.meta.dirname, "..");
const sourceRel = process.argv[2];

if (!sourceRel) {
  throw new Error("Usage: node scripts/convert-human-readable.mjs <path/to/human-readable.md>");
}

const sourcePath = path.resolve(repoRoot, sourceRel);
if (path.basename(sourcePath) !== "human-readable.md") {
  throw new Error("The source filename must be human-readable.md");
}

const targetPath = path.join(path.dirname(sourcePath), "vector-store.md");
const source = await fs.readFile(sourcePath, "utf8");
const sourceSha256 = crypto.createHash("sha256").update(source).digest("hex");
const sourceCommit = execFileSync("git", ["-C", repoRoot, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();

const fm = source.match(/^---\n([\s\S]*?)\n---\n/);
if (!fm) throw new Error("Source document requires YAML front matter");

const getScalar = (key, fallback = "") => {
  const match = fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match ? match[1].replace(/^['"]|['"]$/g, "") : fallback;
};

const docId = getScalar("id", "document.unknown");
const title = getScalar("title", "Untitled document");
const body = source.slice(fm[0].length);

const slugify = (value) => value
  .toLowerCase()
  .replace(/&[a-z]+;/g, " ")
  .replace(/[`*_~]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 72) || "record";

const cleanCell = (value) => value
  .trim()
  .replace(/^\|\s*|\s*\|$/g, "")
  .replace(/\\\|/g, "|");

const splitRow = (line) => cleanCell(line).split(/(?<!\\)\|/).map(cleanCell);
const isSeparator = (line) => /^\s*\|?\s*:?-{3,}/.test(line);

const lines = body.split("\n");
const out = [];
const headingStack = [];
const ids = new Map();

function uniqueId(base) {
  const count = (ids.get(base) || 0) + 1;
  ids.set(base, count);
  return count === 1 ? base : `${base}-${count}`;
}

function currentContext() {
  return headingStack.filter(Boolean).join(" > ");
}

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];
  const heading = line.match(/^(#{1,6})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    const label = heading[2].replace(/<[^>]+>/g, "").trim();
    headingStack[level - 1] = label;
    headingStack.length = level;
    const recordId = uniqueId(`${docId}.${slugify(label)}`);
    out.push(`<!-- record_id: ${recordId} -->`);
    out.push(line);
    out.push(`> Retrieval context: ${title} — ${currentContext()}`);
    continue;
  }

  const beginsTable = line.trim().startsWith("|") && i + 1 < lines.length && isSeparator(lines[i + 1]);
  if (beginsTable) {
    const headers = splitRow(line);
    i += 2;
    let rowNumber = 0;
    while (i < lines.length && lines[i].trim().startsWith("|")) {
      const cells = splitRow(lines[i]);
      const label = (cells[0] || `row-${rowNumber + 1}`).replace(/[*_`]/g, "");
      const recordId = uniqueId(`${docId}.${slugify(currentContext())}.${slugify(label)}`);
      out.push(`#### ${label}`);
      out.push(`<!-- record_id: ${recordId}; record_type: table-row -->`);
      out.push(`- Context: ${title} — ${currentContext()}`);
      headers.forEach((header, index) => {
        if (header && cells[index] !== undefined) out.push(`- ${header}: ${cells[index]}`);
      });
      out.push("");
      rowNumber += 1;
      i += 1;
    }
    i -= 1;
    continue;
  }

  if (/^<\/?(details|summary)>/.test(line.trim())) continue;
  out.push(line);
}

const generated = `---
id: ${docId}.vector-store
title: ${title} — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: ${sourceRel}
source_commit: ${sourceCommit}
source_sha256: ${sourceSha256}
generation_method: deterministic-markdown-conversion
canonical_source: false
last_reviewed: ${getScalar("last_reviewed", "unknown")}
---

# ${title} — Vector Store Source

> Retrieval context: This generated document restructures \`${sourceRel}\` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

${out.join("\n").replace(/^# /m, "## ").trim()}\n`;

await fs.writeFile(targetPath, generated);
console.log(`${path.relative(repoRoot, targetPath)} written (${generated.split("\n").length} lines)`);
