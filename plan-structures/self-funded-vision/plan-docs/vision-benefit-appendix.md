---
class: coverage
template_set: {"key":"self-funded-vision","name":"Self-Funded Vision","implementations":{"plan-document":{"key":"vision-appendix","role":"appendix","order":100,"required":true,"description":"Self-funded limited-scope vision governing provisions."}}}
id: plan-document.benefit-appendix.self-funded-vision
title: CommonCare Self-Funded Vision Benefit Appendix
kind: benefit-appendix
status: template
version: "1.0"
parent_document: CommonCare Welfare Benefit Plan — Core Plan Document
context_schema: ./self-funded-vision-plan-document-context.schema.json
---

# CommonCare Self-Funded Vision Benefit Appendix

Version: ${extensions.selfFundedVision.document.version}

Effective Date: ${extensions.selfFundedVision.document.effectiveDate|dateLong}

# Adoption and governing coverage terms

The Employer adopts this self-funded, limited-scope vision benefit under the Core Plan Document. The adopted coverage details, benefit descriptions, service and frequency rules, exclusions, and any specifically identified coverage contract are incorporated for this benefit. The Plan Administrator retains the coverage version and enrollment records applicable to each coverage period and furnishes those materials with this Appendix. A reference to a coverage contract does not create one or replace missing substantive benefit terms.

Employer: ${sponsor.legalName}

Eligible class: ${eligibility.defaultClass.description}

Waiting period: ${eligibility.defaultWaitingPeriod.description}

# Coverage summary

${extensions.selfFundedVision.coverageSummary}

The summary records the selected coverage's adopted terms. Category-specific deductibles, copayments, coinsurance, and caps apply to their designated services. The applicable accumulation period and waiver conditions follow the coverage details; an annual deductible is not charged again for each event. A per-event deductible applies once to a clinically connected course of care, rather than separately to integral billing lines. Benefit maximums limit Plan payments, not total Participant spending or a provider's charge. Preventive treatment of deductibles and maximums follows the adopted coverage terms; no exemption from a payment maximum is implied merely by waiving a deductible.

# Funding, enrollment, and continuation

Benefits are paid from Employer general assets and applicable Participant contributions. A bookkeeping balance does not itself establish a trust or individual ownership. General enrollment, election changes, leave, rehire, termination, statutory continuation, and restoration follow the Core and applicable coverage terms. A Participant may elect or decline this limited-scope benefit separately from other health coverage, whether or not a Participant contribution is required. Substantially all covered benefits concern treatment of the eye; the benefit is intended to satisfy 29 CFR Section 2590.732(c)(3).

# Approved prices and Participant responsibility

The Plan pays covered services using the lesser of the provider charge and the complete cash price approved under the coverage terms, after applicable cost sharing and payment limits. Approval compares qualified, reasonably accessible providers and the complete service, including integral professional, material, laboratory, fitting, and follow-up components as applicable. The Plan Administrator may approve a higher amount when clinical needs, continuity, disability access, urgency, or unreasonable travel make a lower-price option unusable.

Participants may use a provider that accepts the approved price subject to stated cost sharing, or choose another provider and pay the difference. This is negotiated cash pricing, not a separate out-of-network benefit. A provider that has not agreed to accept the approved amount may bill the difference. Obtain any required predetermination before expensive or multi-stage care. A price approval does not guarantee eligibility, remaining benefits, or coverage of an excluded service.

# Covered services and limitations

Only services included by the adopted coverage terms are payable, subject to their frequency, replacement, clinical, and predetermination requirements. These terms also identify exclusions and any approved exceptions. An enrollment summary does not create additional services, an unlimited benefit, or major medical coverage. The Plan will not reimburse the same expense twice.

# Claims and appeals

File original claims by the deadline in the coverage summary, with itemized provider evidence, service dates, covered-person identification, and any required clinical or payment information. If the coverage does not specify an original filing period, it is 180 days after service. This filing period is separate from the appeal period.

Post-service claims are decided within 30 days, subject to a permitted extension of up to 15 days with timely notice; requested missing information receives at least 45 days for response, with lawful tolling. Pre-service claims are decided within 15 days with one permitted 15-day extension; urgent-care requests are decided as medically required and no later than 72 hours, subject to applicable incomplete-claim rules. Claimants have at least 180 days after receiving a denial to appeal. A single-level appeal is decided within 60 days for post-service claims, 30 days for pre-service claims, or 72 hours for urgent-care claims. Review is independent, gives the initial denial no deference, and includes required independent medical consultation. Claimants may use an authorized representative, submit evidence, and obtain relevant records without charge. Required denial explanations, review instructions, ERISA civil-action rights, and any additional protections follow the Core and 29 CFR Section 2560.503-1. A coverage contract may provide more protective lawful procedures.

Claims: ${administration.serviceContacts.claims.formatted}

Appeals: ${administration.serviceContacts.appeals.formatted}

Provider pricing and predetermination: ${administration.serviceContacts.providerNavigation.formatted}
