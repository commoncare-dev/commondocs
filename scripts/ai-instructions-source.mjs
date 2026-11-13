import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

export async function loadAiInstructions(repoRoot, sourcePath) {
  const instructionsPath = path.join(path.dirname(sourcePath), "AI-instructions.md");
  const body = await fs.readFile(instructionsPath, "utf8");
  const instructionsRel = path.relative(repoRoot, instructionsPath).split(path.sep).join("/");
  const sha256 = crypto.createHash("sha256").update(body).digest("hex");

  return {
    body,
    instructionsRel,
    sha256,
  };
}

export function asVectorStoreSection(body) {
  return body.trim().replace(/^(#{1,5})(?=\s)/gm, "$1#");
}
