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


### Related document implementations

CommonFunds' governing sources and SPD summary publish a `template_set` JSON flow value in their YAML front matter. They share the `common-funds` concept key, with member contracts under `implementations.plan-document` or `implementations.spd`. The core governing document, Appendices A/B/C/D/E, and base SPD similarly share `welfare-plan`. Its `plan-document` implementation requires the core followed by Appendix A (employer and plan information), Appendix B (adopted benefits), Appendix C (contribution and enrollment records), Appendix D (Section 125 elections and employer flex credits), and Appendix E (HIPAA Plan Administration). The core requires all five appendix slots, and each appendix requires the core `base` slot. The `spd` implementation uses its separate base without these governing appendices. Publish and sync each source template to make the full package available in CommonCare. These declare roles, suggested ordering, required/optional participation, dependencies within an output, and conditional applicability. They do not change the rendering scripts or select a project's sources automatically.

CommonCare imports this metadata onto doc-templates. Governing generation selects the administration appendix, adding the independently optional Health FSA and EBHRA components only when their respective `extensions.commonFunds.healthFsa.componentEnabled` and `extensions.commonFunds.hra.componentEnabled` flags are true. CommonCare derives those flags and other benefit terms from the coverage settings; contribution amounts and Participant elections remain in settings and enrollment. SPD generation selects the base SPD and the CommonFunds summary instead of its governing components. Other applicable benefit concepts may supply additional summary sections. A caller still chooses the output, provides complete context, and explicitly selects its sources.


### Plan settings and document-specific terms

The base templates integrate Section 125 elections into the Plan. They use the existing contribution settings and participant enrollment records described in Appendix C; Appendix D states the Section 125 written terms, while Appendix C describes native contribution and enrollment records. Appendix B lists employer-sponsored benefits without a required version, effective date, termination date, or status for every benefit. Individual marketplace options outside group sponsorship are excluded by the CommonCare mapper.

The base context schema keeps older metadata and schedule fields optional for compatibility. It does not require SPD/adoption metadata for a governing-document render or a service-provider roster. Actual template placeholders and selected extension contracts still require their document terms. CommonCare treats mapped settings as read-only, follows its same-as-sponsor contact convention, and presents only the selected templates' fields. Publish the changed templates and sync their CommonCare records to adopt source changes; saved documents require a reviewed regeneration.


Appendix D is a required governing member of `welfare-plan`, with order 40 and a dependency on `base`. It authorizes Employer flex credits and Employee salary reductions, distinguishes cashable and restricted amounts, states election and contribution-limit rules, and retains employee-specific amounts and restrictions in enrollment disclosures. It does not require enumerating class formulas or participant calculations in the global document. Its provisions do not constitute an IRS determination of qualification. Reference guidance: [proposed written-plan requirements and contribution provisions, Sections 1.125-1(c) and (r)](https://www.irs.gov/irb/2007-39_IRB), [IRS Notice 2012-40](https://www.irs.gov/irb/2012-26_IRB). Publish and sync Appendix D and the updated core metadata before assembling the updated set.

Appendix E is the required governing `welfare-plan` member at order 50. Its HIPAA duties apply only to covered benefits and applicable sponsor access. Publish and sync Appendix E together with the updated core dependency metadata. Sponsor certification, privacy notices, access authorizations, and business associate agreements remain separate compliance records; adopting the template does not complete those actions. Appendix A renders the existing rehire and leave context fields, and the SPD summarizes protected-leave and privacy rights.

### Self-funded vision

`plan-structures/self-funded-vision` mirrors the dental folder layout: a human-readable guide, metadata, generated retrieval companion, governing benefit appendix, SPD section, extension schema, and composed context schema. Its `self-funded-vision` set supplies the governing appendix or SPD summary for the corresponding output. Combine it with `welfare-plan`. The extension is `extensions.selfFundedVision`, with the same field names and validation shape as dental. The shared sample context includes illustrative vision values copied from dental to exercise rendering; they are not recommended vision benefits or rates. Regenerate the retrieval companion with `node scripts/convert-human-readable.mjs plan-structures/self-funded-vision/human-readable.md`.

The product template sets also include `choice-ichra`, `common-funded`, `self-funded-dental`, and `self-funded-basic-mec`, each with a required governing member and a separate required SPD summary. See `plan-docs/PRODUCT_DOCUMENT_TEMPLATE_INDEX.md` for the full grouping inventory and outside-Plan exclusions. Metadata does not automatically adopt CommonFunded's underlying coverage or introduce cross-set dependencies.
