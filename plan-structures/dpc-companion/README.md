# DPC Companion

An open-source coverage concept and document set for an independent DPC election funded through the qualified benefits available to each employee.

[The concept guide](human-readable.md) explains the legal classification and citation backbone. [CommonFunds](../common-funds/human-readable.md) supplies the broader allowance-allocation and calculation model. CommonCare administers enrollment and grouped provider payments through its existing structure.

## Documents

- [Coverage Appendix](plan-docs/dpc-companion-benefit-appendix.md): establishes the DPC election and its relationship to the adopted underlying benefits.
- [SPD section](plan-docs/dpc-companion-spd-section.md): summarizes the same concept for participants.
- [Document context](plan-docs/dpc-companion-plan-document-context.schema.json) and [extension](plan-docs/extensions/dpc-companion.schema.json): use the common PlanDocumentContext with DPC document version and effective date.

The underlying adopted FSA, HRA, and ICHRA documents retain their own rules. The DPC Appendix does not create those benefits or duplicate their allowance calculations. Provider agreements and employee elections remain part of CommonCare's existing structure; no separate patient authorization document is included.

The extension contains document identity only. It does not select one funding pathway for the entire employer group: employees with the same DPC election can have different lawful funding classifications. Participant-specific contribution amounts, coverage circumstances, and elections remain in the existing Plan and enrollment records.

## Render the illustrative documents

From the repository root:

```sh
node scripts/generate-interpolated-docs.mjs \
  --template plan-structures/dpc-companion/plan-docs/dpc-companion-benefit-appendix.md \
  --values plan-structures/dpc-companion/plan-docs/sample-dpc-companion-context.json \
  --output generated/dpc-companion/coverage-appendix.md

node scripts/generate-spd.mjs \
  --template plan-docs/spd-template.md \
  --values plan-structures/dpc-companion/plan-docs/sample-dpc-companion-context.json \
  --benefit-template plan-structures/common-funds/plan-docs/common-funds-spd-section.md \
  --benefit-template plan-structures/dpc-companion/plan-docs/dpc-companion-spd-section.md \
  --output generated/dpc-companion/summary-plan-description.md
```

The sample adds DPC document identity to the repository's illustrative base context. Rendering does not constitute employer adoption. Actual Plan documents include the core and applicable underlying benefit provisions. Template-set metadata groups the governing and participant-facing DPC documents under `dpc-companion`.

## Retrieval source

`human-readable.md` and adjacent `metadata.yaml` are canonical. Regenerate the retrieval derivative using the existing converter:

```sh
node scripts/convert-human-readable.mjs plan-structures/dpc-companion/human-readable.md
```

`vector-store.md` records source provenance and is not a separate editorial source. General authoring and generation conventions remain in the repository's existing plan-document and script documentation.
