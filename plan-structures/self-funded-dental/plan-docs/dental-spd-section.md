---
class: spd
template_set: {"key":"self-funded-dental","name":"Self-Funded Dental","implementations":{"spd":{"key":"summary","role":"summary","order":10,"required":true,"description":"Participant-facing Self-Funded Dental summary for the base SPD; excludes detailed governing provisions."}}}
id: spd-section.self-funded-dental
title: CommonCare Self-Funded Dental — SPD Section
kind: spd-section-template
context_schema: ./self-funded-dental-plan-document-context.schema.json
source_document: ./dental-benefit-appendix.md
---

## CommonCare Self-Funded Dental

This self-funded benefit pays covered dental expenses under the selected coverage's adopted terms. You may elect or decline it separately from other health coverage. Eligibility and the waiting period follow the Plan and applicable coverage terms.

${extensions.selfFundedDental.coverageSummary}

Read the incorporated coverage details or contract furnished with this summary for covered services, exclusions, frequency and replacement rules, category-specific costs, and any required advance approval. An annual deductible is not charged separately for each event. Waiving a deductible does not automatically exclude the service from a benefit maximum. Maximums limit Plan payments, not your total spending.

Contact ${administration.serviceContacts.providerNavigation.formatted} before expensive or multi-stage care. The Plan uses approved complete cash prices. If your provider does not agree to accept the approved amount, you may owe the difference in addition to applicable cost sharing. There is no separate out-of-network benefit. Price approval does not guarantee payment beyond eligibility, covered services, or remaining limits.

File claims through ${administration.serviceContacts.claims.formatted} by the deadline above; if the coverage sets none, it is 180 days after service. Ordinary post-service decisions are due within 30 days with one permitted 15-day extension and timely notice. You have at least 180 days after receiving a denial to appeal through ${administration.serviceContacts.appeals.formatted}; a single-level post-service appeal is decided within 60 days. Pre-service decisions are due within 15 days with one permitted 15-day extension, and their appeals within 30 days. Urgent requests and appeals are decided as medically required and no later than 72 hours, subject to applicable incomplete-claim rules. Requested missing claim information generally receives at least 45 days for response where the regulation requires it. You may use an authorized representative, submit evidence, and obtain relevant records without charge. Denials explain the reasons, governing terms, review rights, and applicable ERISA civil-action rights. The governing Appendix and incorporated materials supply the complete procedure; more protective lawful rules remain applicable.
