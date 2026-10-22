---
id: spd-section.self-funded-dental
title: CommonCare Self-Funded Dental — SPD Section
kind: spd-section-template
context_schema: ./self-funded-dental-plan-document-context.schema.json
source_document: ./dental-benefit-appendix.md
---

## CommonCare Self-Funded Dental

This self-funded dental benefit pays preventive care and helps pay covered restorative and major dental treatment. It is not insurance and does not promise unlimited payment.

| Feature | Your benefit |
|---|---|
| Preventive care | 100% of the approved amount; no deductible; does not reduce annual maximums |
| Nonpreventive deductible | ${extensions.selfFundedDental.deductiblePerEvent|currencyUSD} per clinically connected treatment event |
| Plan share after deductible | ${extensions.selfFundedDental.planCoinsurance|percent} |
| Individual annual maximum | ${extensions.selfFundedDental.individualAnnualMaximum|currencyUSD} |
| Family annual maximum | ${extensions.selfFundedDental.familyAnnualMaximum|currencyUSD} |

Covered preventive services generally include routine examinations, cleanings, ordinary preventive radiographs, child fluoride treatment, and child sealants. Covered nonpreventive services include specified fillings, extractions, periodontal treatment, crowns, root canals, implants, dentures, and related medically necessary anesthesia.

Contact ${administration.serviceContacts.providerNavigation.formatted} before expensive or multi-stage treatment. The Plan will identify or approve a complete cash price. If you use a provider that does not accept that price, the Plan calculates payment from the approved amount and you may owe the difference.

File claims through ${administration.serviceContacts.claims.formatted} within ${extensions.selfFundedDental.claimFilingDeadlineDays} days after the service. File appeals through ${administration.serviceContacts.appeals.formatted}.
