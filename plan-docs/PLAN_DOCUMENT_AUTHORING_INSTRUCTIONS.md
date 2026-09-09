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
├── Benefit Appendix — [Coverage 1]
│   ├── Coverage elections
│   └── Incorporated operational schedules
├── Benefit Appendix — [Coverage 2]
│   ├── Coverage elections
│   └── Incorporated operational schedules
└── Required participant notices and summaries
```

Use the CommonCare `core-plan-document-template.md` as the starting point. Do not recreate the core for each benefit.

## The anti-repetition rule

**State a rule once at the highest level where it is true.**

- If a rule applies to the entire welfare benefit plan, put it in the Core Plan Document.
- If a rule applies only to one benefit, put it in that Benefit Appendix.
- If a value changes by employer, plan year, geography, provider, or product, put it in a schedule referenced by the applicable document.
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
- Incorporated operational schedules; and
- Employer execution.

Do not restate the core's amendment, privacy, fiduciary, general administrative, or general claims language unless the benefit actually changes or supplements that rule.

## What belongs in an operational schedule

Use a schedule for information that is detailed, frequently updated, data-driven, or unsuitable for narrative plan language. Examples include:

- Preventive-service matrices;
- Procedure and product codes;
- Formularies;
- Provider and price lists;
- Medicare locality calculations;
- Cash-price approvals;
- Contribution amounts;
- Indexed deductibles and out-of-pocket limits;
- Reimbursement substantiation requirements;
- Claims addresses and contact information; and
- Versioned clinical or administrative procedures.

The governing document must clearly identify each incorporated schedule and explain which changes require a formal amendment or participant notice. Calling something a schedule does not permit the Plan to change a material benefit informally.

## Drafting workflow

### 1. Establish the core

Start with the CommonCare Core Plan Document template. Complete its employer-specific Appendix A and adopted-benefits Appendix B. Confirm that the core does not contain assumptions unique to one benefit.

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

> Claims and appeals are governed by the Core Plan Document and the Health Benefit Claims Procedure incorporated in Schedule B. A pre-service provider approval under this benefit is treated as a pre-service claim when it requests a coverage determination.

Avoid:

> Reproducing the entire claims and appeals section from the Core Plan Document, followed by one coverage-specific sentence.

### 4. Isolate variables

Put blanks and employer elections in a clear adoption schedule. Do not scatter placeholders throughout operative prose when one schedule can control them.

Every blank must have:

- A defined owner;
- A permissible value or drafting instruction;
- A completed value before execution; and
- A validation rule when applicable.

Every plan-document template receives the same versioned `PlanDocumentContext` defined by `schemas/plan-document-context.schema.json`. Templates use `${dot.path}` tokens from that canonical object; authors do not invent a new top-level variable model for each document. Token names must contain only letters, numbers, underscores, and dot-separated object paths.

```markdown
| Employer | ${sponsor.legalName} |
| Plan Year | ${plan.year.startDate} through ${plan.year.endDate} |
```

Generate the completed document with `generate-interpolated-file.mjs`. The directly executable Node module performs literal token replacement without evaluating the template as code, rejects missing or non-scalar values, refuses to overwrite an existing output unless directed, and writes through a temporary file before completing the destination. Its JSDoc documents JavaScript usage, and `generate-interpolated-file.d.ts` supplies matching types for TypeScript consumers.

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
context_schema: ./schemas/plan-document-context.schema.json
```

A coverage-specific template points to a composed schema that applies the common context first and then requires its registered extension. For example, the skinny MEC appendix uses `schemas/self-funded-mec-plan-document-context.schema.json`, which composes the common schema with `schemas/extensions/self-funded-mec.schema.json`.

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
