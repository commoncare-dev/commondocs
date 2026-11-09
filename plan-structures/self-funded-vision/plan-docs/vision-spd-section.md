---
template_set: {"key":"self-funded-vision","name":"Self-Funded Vision","implementations":{"spd":{"key":"vision-summary","role":"summary","order":100,"required":true,"description":"Self-funded limited-scope vision summary provisions."}}}
id: spd-section.self-funded-vision
title: CommonCare Self-Funded Vision — SPD Section
kind: spd-section-template
context_schema: ./self-funded-vision-plan-document-context.schema.json
source_document: ./vision-benefit-appendix.md
---

## CommonCare Self-Funded Vision

This self-funded vision benefit pays routine vision examinations and helps pay covered prescription eyewear and fitting services. It is not insurance and does not promise unlimited payment.

| Feature | Your benefit |
|---|---|
| Preventive care | 100% of the approved amount; no deductible; does not reduce annual maximums |
| Nonpreventive deductible | ${extensions.selfFundedVision.deductiblePerEvent|currencyUSD} per clinically connected treatment event |
| Plan share after deductible | ${extensions.selfFundedVision.planCoinsurance|percent} |
| Individual annual maximum | ${extensions.selfFundedVision.individualAnnualMaximum|currencyUSD} |
| Family annual maximum | ${extensions.selfFundedVision.familyAnnualMaximum|currencyUSD} |

You may elect or decline this benefit separately from other health coverage. One routine vision examination, including refraction, is covered per person per Plan Year. For each person, the Plan also covers either one complete pair of prescription eyeglasses or one supply of prescription contact lenses of up to 12 months and related fitting per Plan Year. Frames and lenses ordered together are one treatment event; contacts and their related fitting are one event. Annual maximums reset each Plan Year; unused amounts and frequency allowances do not carry forward.

Progressive lenses, specialty contacts, and lens enhancements require advance approval as covered options. Medical or surgical eye care, drugs, LASIK/PRK, nonprescription or cosmetic eyewear, accessories, warranties, and additional replacements beyond the frequency limit are excluded. This benefit is separate from major medical coverage.

Contact ${administration.serviceContacts.providerNavigation.formatted} before ordering progressive lenses, specialty contacts, lens enhancements, or other expensive or multi-stage vision care. The Plan will identify or approve a complete cash price. If you use a provider that does not accept that price, the Plan calculates payment from the approved amount and you may owe the difference.

File claims through ${administration.serviceContacts.claims.formatted} within ${extensions.selfFundedVision.claimFilingDeadlineDays} days after the service. File appeals through ${administration.serviceContacts.appeals.formatted}.

You have at least 180 days after a claim denial to appeal and may obtain relevant claim records without charge. Ordinary post-service claims are generally decided within 30 days, subject to a permitted extension; their appeals are decided within 60 days. Shorter deadlines apply to pre-service and urgent-care requests. The denial notice explains your review rights. Another payer's reimbursement reduces the expense remaining eligible for payment; the same expense is not reimbursed twice.
