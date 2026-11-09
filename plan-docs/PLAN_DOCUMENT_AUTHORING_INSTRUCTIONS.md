# CommonCare plan-document authoring instructions

## Objective

Create one durable **Core Plan Document** for the employer's welfare benefit plan, then add each specific benefit through a separately adopted **Benefit Appendix**.

The Core Plan Document supplies the common legal and administrative framework. A Benefit Appendix supplies only the terms needed to define and operate its particular coverage. Together, the core and all adopted appendices constitute the Plan.

## Required architecture

```text
Welfare Benefit Plan
├── Core Plan Document
├── Appendix A — Employer and Plan Information
├── Appendix B — Adopted Benefit Appendices
├── Appendix C — Contributions and Enrollment Records
├── Appendix D — Section 125 Elections and Employer Flex Credits
├── Appendix E — HIPAA Plan Administration
├── Benefit Appendix — [Coverage 1]
│   ├── Coverage elections
├── Benefit Appendix — [Coverage 2]
│   ├── Coverage elections
└── Required participant notices and summaries
```

Use the CommonCare `plan-docs/core-doc-template.md` as the starting point. Do not recreate the core for each benefit.

The product-specific inventory is maintained in `plan-docs/PRODUCT_DOCUMENT_TEMPLATE_INDEX.md`. Use the document type identified there; not every product structure is itself a Plan benefit.

## The anti-repetition rule

**State a rule once at the highest level where it is true.**

- If a rule applies to the entire welfare benefit plan, put it in the Core Plan Document.
- If a rule applies only to one benefit, put it in that Benefit Appendix.
- If a value changes by employer, employee class, plan year, geography, age, family tier, provider, or product, maintain its calculation in plan settings and disclose the resulting participant value through enrollment, as described in Appendix C. Do not restate allowance amounts in the Plan Document, Benefit Appendix, or SPD.
- If an appendix merely agrees with the core, do not repeat the core language. Incorporate it by reference.
- If an appendix needs a different rule, state only the difference and its scope.

Avoid copying general boilerplate into every Benefit Appendix. Repetition makes amendments harder, creates accidental conflicts, and obscures the terms that actually distinguish the benefit.

## What belongs in the Core Plan Document

The Core Plan Document should address matters common to substantially all adopted benefits, including:

- Establishment and purpose of the welfare benefit plan;
- The relationship among the core, appendices, amendments, and schedules;
- General governing-law language;
- Definitions used across benefits;
- Plan Administrator identity and general authority;
- General funding and contribution methods;
- Section 125 election framework;
- General eligibility architecture;
- General claims and appeals principles;
- Participant rights;
- Privacy framework;
- Amendment and termination authority;
- Nondiscrimination intent;
- No-employment-contract language;
- Incorporation of Benefit Appendices; and
- Execution and effective-date provisions.

Employer-specific information should ordinarily be completed in Appendix A rather than embedded repeatedly throughout the core.

Appendix B should maintain the authoritative list of adopted Benefit Appendices, their versions, effective dates, and termination dates.

## What belongs in a Benefit Appendix

A Benefit Appendix should contain only the provisions necessary to identify and administer that benefit, such as:

- Benefit name, stable identifier, version, and effective date;
- Express adoption and incorporation into the Core Plan Document;
- Coverage-specific definitions;
- The eligible employee or dependent class, but only if different or more specific than the core;
- Coverage-specific enrollment and termination rules;
- Insured, self-funded, or reimbursement funding status;
- Covered benefits;
- Participant cost sharing;
- Exclusions and limitations;
- Networks, provider access, pricing, reimbursement, or substantiation rules;
- Coverage-specific claims classifications or procedures;
- Coordination with another plan component;
- Tax treatment the design is intended to receive;
- Coverage-specific continuation rules;
- Employer execution.

Do not restate the core's amendment, privacy, fiduciary, general administrative, or general claims language unless the benefit actually changes or supplements that rule.

## Coverage settings and enrollment records

Maintain detailed administrative data in the existing coverage, Plan, and enrollment records. Do not introduce an operational-schedules collection or require users to name, version, or locate separate administrative documents. Governing provisions and required participant notices continue to apply when material benefit terms change.

## Drafting workflow

### 1. Establish the core

Start with the CommonCare Core Plan Document template. Complete its employer-specific Appendix A, including any optional employer-specific rehire and leave wording, and adopted-benefits Appendix B. Include required Appendices C, D, and E. Appendix E applies only where HIPAA applies; retain the separate sponsor certification before sponsor access to PHI for Plan administration. The SPD must summarize the protected-leave and privacy rules consistently with the governing documents. Confirm that the core does not contain assumptions unique to one benefit.

### 2. Define the benefit before drafting

Identify:

- Who may enroll;
- What the benefit promises;
- What it excludes;
- How it is funded;
- How participants obtain the benefit;
- How claims are valued and paid;
- What tax or regulatory classification is intended;
- Which terms change annually; and
- Which operational data must live outside the narrative document.

### 3. Draft only the coverage-specific terms

Begin the Benefit Appendix with adoption, scope, and a clear relationship to the core. Use cross-references for common rules. Add language only when it defines the specific benefit or modifies the core for that benefit.

Preferred:

> Claims and appeals are governed by the Core Plan Document and the applicable Health Benefit Claims Procedure under the Core Plan Document. A pre-service provider approval under this benefit is treated as a pre-service claim when it requests a coverage determination.

Avoid:

> Reproducing the entire claims and appeals section from the Core Plan Document, followed by one coverage-specific sentence.

### 4. Isolate variables

Put blanks and employer elections in a clear adoption schedule. Do not scatter placeholders throughout operative prose when one schedule can control them.

Every blank must have:

- A defined owner;
- A permissible value or drafting instruction;
- A completed value before execution; and
- A validation rule when applicable.

Every plan-document template receives the same versioned `PlanDocumentContext` defined by `plan-docs/plan-document-context.schema.json`. Templates use `${dot.path}` tokens from that canonical object; authors do not invent a new top-level variable model for each document. Token names must contain only letters, numbers, underscores, and dot-separated object paths.

```markdown
| Employer | ${sponsor.legalName} |
| Plan Year | ${plan.year.startDate} through ${plan.year.endDate} |
```

Generate a completed individual document with `scripts/generate-interpolated-docs.mjs`. The directly executable Node module performs literal token replacement without evaluating the template as code, rejects missing or non-scalar values, supports deterministic repeat and truthy conditional blocks, refuses to overwrite an existing output unless directed, and writes through a temporary file before completing the destination.

Configuration values are inserted exactly as supplied. When generating Markdown, a value intended for a table cell must not contain an unescaped pipe character or other text that would corrupt the table structure.

The normalized roots are:

- `sponsor` — the employer establishing the plan;
- `plan` — the welfare plan identity, dates, number, and Plan Year;
- `administration` — the Plan Administrator, named fiduciary, and agent for service;
- `eligibility` — defaults shared across benefits;
- `benefits` — versioned references to adopted Benefit Appendices;
- `adoption` — the platform or written adoption record;
- `extensions` — registered coverage-specific schemas; and
- `custom` — an explicit last-resort namespace for sponsor-specific additions.

Before adding a field under `custom`, determine whether it is reusable across sponsors or documents. Reusable fields belong in a versioned base or coverage-extension schema. A template that requires a registered extension must identify that extension and its schema; it must not silently treat custom data as part of the common contract.

Each template declares its input contract in front matter:

```yaml
context_schema: ./plan-document-context.schema.json
```

A coverage-specific template points to a composed schema that applies the common context first and then requires its registered extension. For example, the basic MEC appendix uses `schemas/self-funded-mec-plan-document-context.schema.json`, which composes the common schema with `schemas/extensions/self-funded-mec.schema.json`.

This produces three deliberate levels:

1. The common schema supplies fields available to every plan document.
2. A registered extension supplies reusable fields for one plan structure.
3. `custom` permits a genuine one-off without allowing one-off fields to become the default design process.

### 5. Add incorporated schedules

Identify each schedule by name, version or effective date, and custodian or location. The appendix must make clear which schedule controls each operational question.

### 6. Test the assembled Plan

Read the Core Plan Document, completed employer appendices, Benefit Appendix, and incorporated schedules as one instrument. Confirm that the assembled Plan answers:

- Who is the sponsor and Plan Administrator?
- Who is eligible?
- When does coverage begin and end?
- What exactly is covered?
- What does the participant pay?
- How is a provider or reimbursement amount determined?
- What is excluded?
- How is a claim submitted and appealed?
- Which document controls if terms conflict?
- Who may amend or terminate the benefit?
- Which notices and summaries must be delivered?

### 7. Generate participant-facing documents

The governing Plan is not a substitute for an SPD, SBC, enrollment materials, provider instructions, privacy notices, or other required communications. Generate those documents from the same adopted terms; do not allow them to establish conflicting benefits.

The common SPD template is `plan-docs/spd-template.md`. Each Benefit Appendix that appears in an SPD must have a paired, participant-facing SPD section template whose front matter identifies the governing source document. Assemble them with `scripts/generate-spd.mjs`:

```sh
node scripts/generate-spd.mjs \
  --template plan-docs/spd-template.md \
  --values plan-docs/sample-plan-variables.json \
  --benefit-template plan-structures/self-funded-mec/basic-mec/plan-docs/mec-spd-section.md \
  --output generated/example-spd.md
```

The script renders every section from the same context, removes section-template front matter, inserts the sections at the explicit benefit marker, rejects unresolved values, and writes the assembled SPD atomically. A benefit-specific SPD section must summarize—not replace—the adopted Benefit Appendix. New substantive coverage language belongs in the governing appendix first.

## Conflict hierarchy

Apply the hierarchy established by the Core Plan Document:

1. Applicable law controls the Plan.
2. A Benefit Appendix controls over the Core Plan Document only for the specific benefit and subject addressed by that appendix.
3. The Core Plan Document governs all other matters.
4. An incorporated schedule controls operational detail only within the authority granted by the governing document.
5. An SPD, SBC, enrollment page, provider directory, or administrative communication does not amend the Plan unless adopted through the Plan's amendment procedure.

If two Benefit Appendices conflict, follow the Core Plan Document's adoption rule and clarify the result in Appendix B rather than leaving both texts apparently operative.

## Reuse without drift

Each document should have:

- A stable document ID;
- A semantic version;
- A status such as template, adopted, amended, or retired;
- An effective date;
- An owner;
- A parent Core Plan Document ID;
- References to incorporated schedules; and
- A dated change history.

Never alter an executed plan document silently. Create an amendment or a newly adopted version, retain the prior version, and preserve which version applied to each claim date.

## Authoring checklist

- [ ] The CommonCare Core Plan Document template was used.
- [ ] Employer and Plan information is complete.
- [ ] Appendix B lists every adopted benefit and version.
- [ ] The Benefit Appendix is expressly adopted and incorporated.
- [ ] Core language is referenced rather than duplicated.
- [ ] Every repeated provision is necessary because this benefit changes or supplements it.
- [ ] Eligibility and dependent treatment are explicit.
- [ ] Funding status is explicit.
- [ ] Covered benefits, exclusions, cost sharing, and access rules are determinable.
- [ ] Tax and regulatory intentions are distinguished from guarantees.
- [ ] Frequently changing data is isolated in a controlled schedule.
- [ ] Claims and appeals procedures fit the benefit.
- [ ] Conflict rules produce one answer.
- [ ] All blanks are completed before execution.
- [ ] Required notices and participant-facing materials match the governing terms.
- [ ] Version, effective date, adoption, and amendment history are preserved.

## Rule for future CommonCare generation

When asked to create a plan document:

1. Begin with the CommonCare Core Plan Document unless an already adopted core is supplied.
2. Treat that core as the shared legal and administrative framework.
3. Create one minimally repetitive Benefit Appendix for each distinct coverage or arrangement.
4. Put employer elections and mutable operational data in identified schedules.
5. Never introduce a substantive rule only in an SPD, SBC, vector-store file, interface, or claims configuration.
6. Validate the full assembled Plan before producing participant-facing or machine-readable derivatives.

## Definitions and interpolation

Define stable concepts once in the core Definitions section or the benefit appendix that owns them, then use those defined terms in operative provisions. Employer, Plan Administrator, Plan Year, Employer Contribution, and Enrollment Records should not become repeated free-text questions in every paragraph.

Use interpolation for actual plan identity, configured dates, record-backed contacts, and genuinely variable adopted terms. Reuse a canonical context path for the same fact. Do not require storage IDs, duplicate administrative contacts, repeated benefit effective dates, or a separately authored Section 125 document.

Keep dynamic, class-dependent contribution calculations in plan settings and enrollment records. Definitions should explain the nature and permitted use of a contribution; they should not require authors to transcribe every employee calculation into global plan prose.

CommonCare draft generation may substitute visible `[Needs review: …]` prompts for missing scalar data. These are editorial placeholders, not adopted values or defaults. Drafts remain marked incomplete and retain unresolved-detail diagnostics. Conditions controlling document applicability, required choices, and invalid supplied values must still be resolved. Complete-document generation remains strict.

## Coverage terms and CommonFunds

Keep the plan-wide document generic wherever a rule is administered through coverage settings, contribution settings, or enrollment. CommonFunds does not require a separate schedule of monthly Employer-only amounts, flex credits, Participant elections, or fixed contribution formulas. State the classifications and the applicable statutory maximum; CommonCare supplies an annual salary-reduction-limit description from its existing limits table.

Deductible amounts, accumulation periods, expense categories, and exceptions belong to the applicable coverage settings. Require proper billing evidence without a separately authored satisfaction-evidence or credited-expense argument. The only pre-deductible benefit exception in this product is preventive care enabled by coverage.preventive, subject to applicable law. Post-deductible Health FSA provisions remain available where adopted through coverage settings; applicable HSA restrictions continue to apply.

Unused funds remain Employer property at year end, subject to eligible claims and applicable law. Carryover, grace periods, or a different permitted treatment must be established in the applicable coverage or Plan settings. CommonCare's coverage-level disposition enum is rendered as policy terms: Employer retention and discretion, legally permitted component-specific carryover, or pro-rata uniform distribution of legally distributable experience gains. Distribution is never based on individual unused balances or claims experience and does not convert HRA reimbursement rights to cash; do not maintain an independent document-only balance rule.

Coverage-owned optional text may use `${path|optional}`. Missing, null, or empty values render as blank, including in CommonCare drafts; they do not create a value-to-complete prompt. Reserve this for genuinely optional terms such as a coverage-defined year-end exception. Required values and inclusion conditions remain strict. Allocation, coordinated-coverage metadata, and ending-balance rules are not manually entered document argument groups.

CommonFunds credits all Code section 213(d) medical expenses toward its applicable deductible unless expressly excluded by an applicable Appendix or the terms of coordinated coverage. This is a standing default, not a document-specific argument. Credit toward a deductible does not itself authorize reimbursement. For HSA-compatible post-deductible benefits, only expenses covered by the coordinated HDHP count toward its required deductible (Notice 2008-59, Q&A 15).

## Document classification

Every grouped source template declares `class` in YAML front matter: `core` for the welfare core and its shared Appendices A–E, `coverage` for governing benefit appendices/components/overlays, and `spd` for the SPD base and benefit summaries. Use `class`, not `docClass`. The importer stores the declared value in the existing template `class` field and rejects unsupported values or a conflict with the output implementation. Older sources without this declaration preserve locally managed classification. Outside-Plan policies and notices are not reclassified as benefits. Generation rejects mixing SPD and governing classes; governing assemblies containing a core source are classified `core`, coverage-only assemblies `coverage`, and SPD output `spd`.

Rehire and leave narratives (`eligibility.rehireRule` and `eligibility.leaveRule`) are optional supplements. Appendix A and the SPD contain general governing wording and use `|optional` for those narratives; do not require a separate document-setup answer when no supplemental rule is needed. Benefit-specific terms and statutory restoration protections continue to control.

Dental and vision appendices use a coverage-backed schedule rather than duplicate financial elections. Map `coverageSummary` from coverage variants, deductibles (including category and accumulation rules), participant coinsurance, caps, copayments, preventive terms, and the claim-filing deadline. Missing descriptive settings refer to the incorporated coverage contract or adopted coverage details; do not invent amounts or require users to repeat them. The adopted coverage materials must still define the benefit. The original claim filing period defaults to 180 days and is separate from appeal rights.
