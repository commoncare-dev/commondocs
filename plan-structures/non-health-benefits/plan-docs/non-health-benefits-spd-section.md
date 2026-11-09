---
class: spd
template_set: {"key":"non-health-benefits","name":"Non-Health Benefits","implementations":{"spd":{"key":"summary","role":"summary","order":10,"required":true}}}
id: spd-section.non-health-benefits
title: Non-Health Benefits — SPD Section
kind: spd-section-template
status: template
version: "1.0"
context_schema: ./non-health-benefits-plan-document-context.schema.json
source_document: ./non-health-benefits-appendix.md
---

## Non-Health Welfare Benefits

The Plan includes only the insured benefits listed below. Read the identified policies and certificates furnished with this summary for the complete coverage, exclusions, reductions, filing instructions, and conversion or portability rights.

${#each extensions.nonHealthBenefits.benefits as benefit}
### ${benefit.name}

| Feature | Your coverage |
|---|---|
| Insurer / policy | ${benefit.insurer} / ${benefit.policyNumber} |
| Effective date | ${benefit.effectiveDate|dateLong} |
| Governing materials | ${benefit.incorporatedDocuments} |
| Eligibility and coverage conditions | ${benefit.eligibility} |
| Benefits, limits, and exclusions | ${benefit.benefitDescription} |
| Contributions and tax treatment | ${benefit.contributions} |
| Claims | ${benefit.claimsContact} |
| Appeals | ${benefit.appealsContact} |
| Conversion, portability, and continuation | ${benefit.continuationRights} |

${/each}

An election alone does not satisfy underwriting or evidence-of-insurability requirements. Keep beneficiary designations current using the insurer's process. On termination or reduction of coverage, promptly check the listed policy's conversion, portability, and waiver deadlines; the wrap does not extend them. These benefits do not receive health-plan COBRA rights merely because they share a Plan with health benefits.

Premium source affects taxation. Life benefits and coverage may have Code Section 79 or other tax consequences. Disability benefits funded by Employer or pre-tax contributions are generally taxable; after-tax employee funding may affect the exclusion. Consult the communicated tax election and policy terms.

### Claims and appeals

Use the claims and appeals contacts above and the incorporated policy's filing instructions. Submit required claim forms, proof of loss, and supporting records within its filing period. You may use an authorized representative, submit supporting evidence, and obtain relevant claim records without charge. There are no claim or appeal fees. A denial explains the reason, governing provisions, review steps and deadlines, and applicable rights to sue under ERISA.

For claims other than disability determinations, an initial decision is generally due within 90 days, with one permitted 90-day extension; you have at least 60 days after receiving the denial to appeal. A single-level appeal is decided within 60 days, with a permitted extension of up to 60 days.

If benefit entitlement requires a disability determination, an initial decision is due within 45 days, with up to two permitted 30-day extensions. You receive at least 45 days to supply requested missing information, with tolling as law permits. You have at least 180 days after receiving the denial to appeal. A single-level appeal is decided within 45 days, with one permitted 45-day extension. Required extension notices explain the reason and expected decision date. Disability review is independent, gives the original denial no deference, and affords an opportunity to respond to new evidence or a new rationale before an appeal denial. Applicable language assistance, detailed denial explanations, civil-action deadline disclosures, and deemed-exhaustion rights follow 29 CFR Section 2560.503-1. Contact the Plan Administrator for assistance and the complete incorporated claims procedure; more protective lawful policy rules remain applicable.
