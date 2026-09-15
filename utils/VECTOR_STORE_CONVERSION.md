# Human-readable to vector-store conversion instructions

## Purpose

CommonDocs maintains two representations of the same knowledge:

- `human-readable.md` is the canonical editorial document for people, GitHub review, and the documentation site.
- `vector-store.md` is a generated retrieval source optimized for chunking, embedding, semantic search, and AI use.

The vector-store file is not a separate editorial draft and is not an executable claims specification. It must preserve the human-readable document's substance while making each retrievable unit identifiable, self-contained, and attributable.

## Governing rule

**Preserve meaning. Restructure presentation. Do not silently improve, sanitize, correct, expand, or reinterpret the source.**

If the source contains an error, ambiguity, unsupported assertion, stale citation, or conflicting rule, flag it for correction in `human-readable.md`. Do not resolve it only in `vector-store.md`.

## Required file relationship

For each convertible document, use this colocated pair:

```text
human-readable.md   # canonical source
vector-store.md     # generated retrieval source
```

Every `vector-store.md` must identify:

- The stable source-document ID;
- The relative source path;
- The Git commit used for conversion;
- A SHA-256 hash of the exact source contents;
- The conversion schema version;
- The source's jurisdiction, effective context, and review date; and
- That the generated file is not canonical.

## Conversion procedure

### 1. Read the complete source

Read the entire file before converting it. Include front matter, callouts, tables, footnotes, quotations, citations, appendices, and material inside collapsible HTML elements.

### 2. Preserve source metadata

Carry forward the source's stable ID, title, jurisdiction, effective context, status, ownership, relationships, aliases, and review date where applicable. Add generation metadata without replacing the source metadata.

### 3. Create stable retrieval records

Each substantive topic must have a stable `record_id` derived from the document ID and a durable semantic slug.

Good:

```text
plan.self-funded-basic-mec.minimum-essential-coverage
plan.self-funded-basic-mec.preventive-services.female-sterilization
```

Avoid IDs based only on section numbers, line numbers, row positions, or prose order. Those values change during ordinary editing.

When two records would receive the same ID, add a deterministic suffix and flag the collision for editorial review.

### 4. Make records self-contained

A retrieved chunk must make sense without preceding chunks. Each record should identify:

- The document or plan structure it belongs to;
- Its subject;
- The population, service, rule, or decision it addresses;
- Any necessary jurisdiction or effective-date context;
- The operative assertion and its qualifications; and
- Supporting authority located directly with the assertion.

Pronouns and phrases such as “this,” “the plan,” “the requirement,” or “as stated above” may remain in quoted source language, but retrieval context must identify their referent.

### 5. Convert tables into atomic records

Do not leave a large inventory or comparison table as one embedding unit. Convert each substantive row into its own record and retain:

- The table's section context;
- Every column name;
- Every cell value;
- Currency units and time bases such as PEPM or annual;
- Footnotes and qualifications; and
- Links or authorities attached to the table or row.

Small orientation tables may remain tables when all rows answer one compact question and are unlikely to be retrieved independently.

### 6. Keep authority attached to the claim

Preserve citations as direct Markdown links. A legal, clinical, pricing, or operational assertion must not be separated from the citation or source note that qualifies it.

Do not describe a secondary article as controlling authority. Preserve the source's distinction among statutes, regulations, agency guidance, clinical recommendations, claims studies, and CommonCare modeling assumptions.

### 7. Preserve epistemic status

Retain explicit distinctions among:

- Legal requirement;
- Regulatory interpretation;
- Agency guidance;
- Clinical recommendation;
- CommonCare design position;
- Operational practice;
- Pricing assumption;
- Empirical observation; and
- Open question.

Never transform “may,” “generally,” “working estimate,” or “CommonCare proposes” into an unconditional rule. Never add hedging that is absent from the source merely to make the language sound safer.

### 8. Preserve effective-date logic

For time-sensitive material, retain recommendation dates, plan-year effective dates, indexed amounts, dataset periods, and last-reviewed dates. Do not label information “current” without a date.

### 9. Preserve intentional voice

The conversion may remove decorative formatting that harms retrieval, including emoji-only labels, HTML disclosure wrappers, visual column alignment, and redundant navigation. It must not neutralize CommonCare's tone, soften criticism, add promotional language, or introduce new legal conclusions.

### 10. Separate retrieval data from claims execution

The vector-store source may describe claims rules, codes, prices, networks, exceptions, and medical-management logic. It is still a knowledge artifact. It does not become an executable claims specification until those concepts are represented in a validated deterministic schema with code-set versions, tests, and adjudication controls.

## Chunking and ingestion recommendations

Chunk on retrieval-record boundaries whenever possible.

- Keep a record intact when it fits within the embedding model's practical limit.
- Split an oversized record only at semantic subheadings or complete list/table-row boundaries.
- Repeat the record ID and retrieval context in every derived chunk.
- Do not use blind fixed-character windows as the primary splitter.
- If overlap is used, keep it small and do not merge unrelated records.
- Store the source path, source commit, source hash, record ID, section path, jurisdiction, effective context, and review date as vector metadata.
- Use the stable `record_id` as the upsert key so regeneration replaces stale records instead of creating duplicates.

Embeddings are an index, not the source of truth. Retrieval results should retain a path back to the exact Git revision and human-readable source.

## Validation checklist

Before accepting a generated vector-store file, verify all of the following:

- [ ] Every substantive source section appears in the generated file.
- [ ] Every source table row appears exactly once as a record unless intentional duplication is documented.
- [ ] Numeric values, units, ranges, symbols, and dates match the source.
- [ ] Links and citations remain attached to the assertions they support.
- [ ] Quotations remain verbatim and visibly identified as quotations.
- [ ] Legal requirements and CommonCare positions remain distinguishable.
- [ ] No new substantive idea appears only in the generated file.
- [ ] Every record has a unique stable ID and retrieval context.
- [ ] The source path, commit, and SHA-256 hash are present.
- [ ] The generated file states that `human-readable.md` is canonical.
- [ ] Re-running the converter without changing the source produces no substantive diff.
- [ ] The ingestion process deletes or supersedes records from older source hashes.

## Repository workflow

1. Edit `human-readable.md`.
2. Review and approve the human-readable change.
3. Regenerate `vector-store.md` from the approved source.
4. Run structural and content validation.
5. Commit both files together.
6. Ingest only the committed `vector-store.md` and attach its Git revision as metadata.

Never accept a pull request that changes substantive content only in `vector-store.md`. The correct fix is to edit the canonical human-readable source and regenerate.

## Current converter

From the repository root:

```bash
node scripts/convert-human-readable.mjs plan-structures/self-funded-mec/basic-mec/human-readable.md
```

The converter performs deterministic structural conversion, assigns record IDs and retrieval context, expands Markdown tables into row-level records, removes disclosure-only HTML wrappers, and records source provenance. It does not use an AI model and therefore cannot silently rewrite the source.
