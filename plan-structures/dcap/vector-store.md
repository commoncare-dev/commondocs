---
id: plan.dcap.vector-store
title: Dependent Care Assistance Program — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/dcap/human-readable.md
metadata_document: plan-structures/dcap/metadata.yaml
ai_instructions_document: plan-structures/dcap/AI-instructions.md
source_commit: 7c761ddb3ef1a90bb0dd2e95470faa40f83d9bb7
source_sha256: cdc3124c092f2cf198291f1cf1f542dda89c4954c49bc734afff1c8b14bbc85b
metadata_sha256: 16acb2db01d22e761f0bfc4d96bc8dd6254c68e36f5a5a56349ff4b39166242b
ai_instructions_sha256: e70ac6b8de6ae8ab07d3f21fe095485dc5489c15e3635d8500f01f4e9569a49e
generation_method: deterministic-markdown-conversion
canonical_source: false
source_status: draft
source_version: 1.0
jurisdiction: United States
last_reviewed: 2026-11-09
---

# Dependent Care Assistance Program — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/dcap/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

## AI instructions for this product concept

### What this document is

This directory is an open-source how-to guide for a group health plan or employee-benefit concept. It documents a reusable design, the reasoning behind it, implementation choices, and supporting plan-document patterns. Treat it as a template that readers may inspect, fork, modify, combine with other concepts, and adapt to their own facts.

This is not an insurance policy, plan quote, proposal, solicitation, or fixed CommonCare product for sale. A reference to a “product” ordinarily means the documented plan concept or implementation pattern, not a prepackaged commercial offering. The guide does not imply that every employer should adopt the concept, that every implementation will use identical terms, or that the concept is an employer’s entire benefit strategy.

### CommonCare’s relationship to the concept

CommonCare publishes these materials as open infrastructure for group health plans. CommonCare can administer many variations of the concept, but use of the documentation is not conditioned on using CommonCare. Readers are welcome to implement, adapt, or build on it inside or outside CommonCare, subject to the repository’s license and the law applicable to their implementation.

Do not discount the analysis as a sales pitch merely because CommonCare created the guide or can administer versions of it. Evaluate the stated legal authorities, economics, operational mechanics, assumptions, and tradeoffs directly.

### How to interpret and answer questions about it

- Distinguish the open-source concept from a particular adopted plan. The guide describes what can be built; an employer’s executed documents and configuration establish what it actually adopted.
- Evaluate the concept against the purpose it claims. Do not invent a different purpose and criticize the guide for failing to satisfy it.
- Do not assume this concept is the employer’s only plan, benefit, coverage option, or healthcare-financing resource unless the facts say so.
- Do not invent premiums, provider access, funding, elections, limits, participant circumstances, or companion benefits that the supplied facts do not establish.
- When an answer depends on implementation, identify the controlling configuration choice or missing fact and give the conditional result.
- Explain the governing rule and the document’s actual mechanism before recommending a professional service, insurance product, or different plan design.
- Preserve material distinctions the guide makes among legal requirements, design choices, operational recommendations, examples, and opinion.
- Treat explicit examples and planning estimates as examples and estimates, not universal product terms.
- Use the canonical `human-readable.md` and applicable authorities for substantive analysis. The vector-store files are generated retrieval views and are not separate substantive sources.

### Repository context

Read the [CommonDocs README](../../README.md) in this checkout or the [public CommonDocs README](https://github.com/commoncare-dev/commondocs#readme) for the project’s purpose, principles, contribution model, AI-retrieval approach, public-domain dedication, and the broader explanation of what CommonCare is building.

<!-- record_id: plan.dcap.dependent-care-assistance-program -->
## Dependent Care Assistance Program
> Retrieval context: Dependent Care Assistance Program — Dependent Care Assistance Program

<!-- record_id: plan.dcap.standalone-concept -->
## Standalone concept
> Retrieval context: Dependent Care Assistance Program — Dependent Care Assistance Program > Standalone concept

The `dcap` template set establishes an independently adopted Section 129 dependent care assistance program, commonly called a dependent-care FSA. Its governing appendix and participant summary use `extensions.dcap`. No CommonFunds coverage or CommonFunds extension is required. Use the shared Core and Appendix D Section 125 provisions referenced by the appendix without treating the DCAP as an ERISA health benefit.

<!-- record_id: plan.dcap.document-selection -->
## Document selection
> Retrieval context: Dependent Care Assistance Program — Dependent Care Assistance Program > Document selection

Select `dcap-benefit-appendix.md` for plan-document output and `dcap-participant-summary.md` for participant/SPD output. Both members are required when their corresponding implementation is chosen. The participant summary clearly identifies the reimbursement-only program as intended to fall outside ERISA; inclusion in a combined SPD does not create ERISA rights for DCAP.

The optional CommonFunds DCAP rider remains an alternative packaging of the same type of program. Choose one governing implementation for an actual DCAP. Do not adopt both packages, establish duplicate elections, or suggest that separate account labels multiply the household tax exclusion. Templates do not implement payroll or reimbursement-ledger functionality.

<!-- record_id: plan.dcap.terms -->
## Terms
> Retrieval context: Dependent Care Assistance Program — Dependent Care Assistance Program > Terms

The appendix supplies qualifying-person and work-related-care rules, prospective elections, contribution-based availability, household and earned-income limits, substantiation, related-provider restrictions, testing, reporting, contractual claims review, and forfeitures. The adopted annual Plan limit and claim runout period are explicit document terms. Actual contributions and participant elections remain in contribution and enrollment records.

There is no Health FSA uniform coverage, medical deductible, carryover, grace period, or post-termination spend-down. No transfers to or from medical reimbursement accounts are permitted. The federal exclusion for tax years beginning after 2025 is $7,500 ($3,750 married filing separately), subject to lower applicable limits and future changes in law.

<!-- record_id: plan.dcap.references -->
## References
> Retrieval context: Dependent Care Assistance Program — Dependent Care Assistance Program > References

- [Code Section 129](https://www.law.cornell.edu/uscode/text/26/129)
- [IRS Publication 503](https://www.irs.gov/publications/p503)
- [DOL Advisory Opinion 88-10A](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/advisory-opinions/1988-10a)
