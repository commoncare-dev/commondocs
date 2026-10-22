# Retrieval document conversion

The human-readable plan guide is canonical. The retrieval converters restructure it into records for search and AI retrieval; edit the source guide, then regenerate its companion files.

## Prerequisites

- Run from a Git checkout with a valid `HEAD`; both converters record `git rev-parse HEAD`.
- Use Node.js with support for `import.meta.dirname` and the built-in modules imported by these scripts. The converters have no third-party package imports.
- Keep the guide and its adjacent metadata together. [document-source.mjs](document-source.mjs) looks for `metadata.yaml`, then `metadata.yml`, then `metadata.md`; it falls back to front matter in the guide if no adjacent metadata is found.

## Convert one ordinary plan guide

From the repository root:

```sh
node scripts/convert-human-readable.mjs plan-structures/self-funded-dental/human-readable.md
```

[convert-human-readable.mjs](convert-human-readable.mjs) requires the source filename to be `human-readable.md`. It replaces `vector-store.md` in the same directory. Pass one source path per invocation; it does not scan the whole repository.

Headings receive record identifiers and retrieval context. Markdown table rows become labeled records with the column names retained. The output records the source path, metadata path, current commit, and hashes of the inputs.

## Convert CommonFunds

Use the specialized converter for CommonFunds:

```sh
node scripts/convert-commonfunds-vector-stores.mjs
```

[convert-commonfunds-vector-stores.mjs](convert-commonfunds-vector-stores.mjs) reads `plan-structures/common-funds/human-readable.md` and replaces these two adjacent files:

- `vectorstore-explaining-commonfunds.md`
- `vectorstore-rules.md`

It splits the source at `## 1. Classify the dollar before applying a limit`. Keep that marker intact when editing the guide; a missing marker causes generation to fail.

## Review the generated change

1. Review and commit the canonical source edits before generating if the output should identify that source commit. The scripts hash the files on disk, but the commit field always identifies the current `HEAD`.
2. Run the appropriate converter for that guide.
3. Inspect `git diff --check` and `git diff --stat`, then review the generated diff for the expected sections and records.
4. Commit the generated companions on the same PR branch. Substantive corrections belong in the canonical guide.

The scripts overwrite their target files without prompting. Run them on the intended branch and review any existing local changes first.

[generate-interpolated-docs.mjs](generate-interpolated-docs.mjs) is a separate template-population utility; it does not regenerate these retrieval companions.

## Generate plan documents and an SPD

Populate one template with the canonical context:

```sh
node scripts/generate-interpolated-docs.mjs \
  --template plan-docs/core-doc-template.md \
  --values plan-docs/sample-plan-variables.json \
  --output generated/core-plan-document.md
```

Assemble the common SPD and one or more benefit-specific SPD sections:

```sh
node scripts/generate-spd.mjs \
  --template plan-docs/spd-template.md \
  --values plan-docs/sample-plan-variables.json \
  --benefit-template plan-structures/self-funded-mec/basic-mec/plan-docs/mec-spd-section.md \
  --output generated/summary-plan-description.md
```

Both commands refuse to overwrite an existing output unless `--overwrite` is supplied.
