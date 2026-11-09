---
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

# Adoption and scope

The Employer adopts this Appendix as part of the Plan. It establishes a self-funded, limited-scope vision benefit. The Core Plan Document governs matters not specifically addressed here. Participants may elect or decline this benefit separately from other health coverage, whether or not a Participant contribution is required. Substantially all benefits are for treatment of the eye. The benefit is intended to qualify as limited-scope vision excepted benefits under 29 CFR Section 2590.732(c)(3).

The benefit pays routine vision examinations and a defined share of covered corrective eyewear and other expressly covered vision services. It is not vision insurance, major medical coverage, or an unlimited promise to pay vision expenses.

# Employer elections

| Term | Election |
|---|---|
| Employer | ${sponsor.legalName} |
| Eligible class | ${eligibility.defaultClass.description} |
| Waiting period | ${eligibility.defaultWaitingPeriod.description} |
| Coverage tier | ${extensions.selfFundedVision.coverageTier|titleCase} |
| Deductible | ${extensions.selfFundedVision.deductiblePerEvent|currencyUSD} per treatment event |
| Plan share after deductible | ${extensions.selfFundedVision.planCoinsurance|percent} |
| Individual annual maximum | ${extensions.selfFundedVision.individualAnnualMaximum|currencyUSD} |
| Family annual maximum | ${extensions.selfFundedVision.familyAnnualMaximum|currencyUSD} |
| Claim filing deadline | ${extensions.selfFundedVision.claimFilingDeadlineDays} days after the service date |

# Definitions

**Approved Amount** means the lesser of the provider's charge and the complete cash price approved by the Plan for the treatment.

**Covered Vision Service** means a preventive or nonpreventive vision service expressly covered by this Appendix and its schedules.

**Treatment Event** means a clinically connected course of covered vision care or one covered corrective-eyewear order. A pair of lenses and its frame, or contact lenses and their related fitting, are one event when ordered together. Integral stages and billing lines do not create separate deductibles merely because they occur on different dates or use different codes. A routine examination paid under the preventive provision does not create a nonpreventive deductible.

# Eligibility and enrollment

Employees in the eligible class may enroll after satisfying the waiting period. Dependents may enroll only when included in the adopted coverage tier and when they satisfy the Plan's dependent rules. General enrollment, election-change, leave, rehire, and termination rules appear in the Core Plan Document, Appendix A, and Appendix D of the Core Plan Document.

# Funding

This benefit is self-funded. Benefits are paid from Employer general assets and applicable Participant contributions. Any bookkeeping balance records claims experience and does not itself establish a trust or individual ownership right.

# Covered preventive services

The Plan pays 100% of the Approved Amount for covered preventive services without a deductible. Preventive payments do not reduce the individual or family annual maximum.

Covered preventive services are routine vision examinations, including refraction needed to determine a corrective prescription. One examination per covered person per Plan Year is covered. Additional screening, imaging, or diagnostic tests are not automatically part of this benefit. The term preventive describes this Plan benefit and does not promise all services required of an ACA major medical plan.

# Covered nonpreventive services

Subject to the deductible, Plan share, Approved Amount, predetermination requirements, and remaining annual maximums, covered nonpreventive services include prescription eyeglass frames and lenses, prescription contact lenses, and contact-lens fitting. Each covered person may receive one complete pair of prescription eyeglasses or one supply of prescription contact lenses of up to 12 months, including a related fitting, per Plan Year. The person may choose either eyewear option, but not both in the same Plan Year. Standard single-vision, bifocal, or trifocal lenses are covered; progressive lenses, specialty contacts, and lens enhancements require predetermination and express approval as a covered option. Approval of a price alone does not create coverage. Unused frequency allowances do not carry forward. These limits apply separately from the annual payment maximums.

The annual maximums apply per Plan Year and reset at the start of each Plan Year; unused amounts do not carry forward. The family maximum applies collectively to the Employee and covered dependents. Preventive examinations remain outside those maximums. The service date is the examination or fitting date for those services and the date eyewear is dispensed for eyewear; an advance order or deposit does not establish an incurred eyewear claim.

For each Treatment Event:

1. The allowed amount is the lesser of the provider charge and Approved Amount.
2. The event deductible is subtracted once.
3. The Plan pays the elected Plan share of the remainder.
4. Payment is limited by both the Participant's individual remaining maximum and the family's remaining maximum.

# Approved-price process and balance billing

The Plan identifies qualified, reasonably accessible providers and comparable complete cash prices for the proposed treatment. A complete price includes the integral examination, refraction, fitting, frame, lens, material, laboratory, dispensing, and follow-up components identified in the approval.

The Participant may use a provider that accepts the Approved Amount as payment in full, subject to the Participant's stated cost sharing. If the Participant chooses a provider that does not accept that amount, the Plan still calculates its payment using the Approved Amount and the provider may bill the Participant for the difference.

The Plan Administrator may approve a higher amount when the lower-priced option is not reasonably usable because of clinical complexity, continuity of care, disability access, pediatric specialization, prescription requirements, urgency, material difference, or unreasonable travel.

# Predetermination

Predetermination is required for progressive lenses, specialty contact lenses, lens enhancements, and other expensive or multi-stage vision care before it is ordered. A request must identify the prescription, proposed items and fitting services, quantities, materials, and complete price. Ordinary covered examinations and standard prescription eyewear do not require predetermination.

Predetermination confirms the information and price then available. It does not guarantee payment if eligibility ends, maximums are exhausted, the treatment changes, or the service is not actually performed.

# Exclusions

The Plan does not cover medical or surgical treatment of eye disease or injury, cataract surgery or implanted lenses, refractive surgery such as LASIK or PRK, drugs, nonprescription eyewear, cosmetic contact lenses, ordinary sunglasses, accessories, cleaning supplies, warranties, investigational treatment, missed-appointment charges, or financing charges. Replacement of lost, stolen, or damaged eyewear does not create an additional frequency allowance. Services or items outside the stated frequency rules and unapproved upgrades are excluded. Services must be furnished or prescribed, as applicable, by an appropriately licensed eye-care professional, and eyewear must be supplied by a lawful optical provider. Referral to medical coverage does not guarantee that another plan will pay.

# Claims and appeals

Claims must be filed within the elected deadline. Claims and appeals otherwise follow the Core Plan Document and applicable ERISA group-health claims rules. Post-service claims are decided within 30 days, subject to one permitted extension of up to 15 days with timely notice; when additional claimant information is needed, the claimant receives at least 45 days to supply it, with tolling as permitted by law. Pre-service benefit determinations are decided within 15 days, with one permitted extension of up to 15 days; urgent-care claims are decided as soon as required by medical circumstances and no later than 72 hours, subject to the applicable incomplete-claim rules.

A claimant has at least 180 days after receiving an adverse benefit determination to appeal and may submit information and obtain relevant claim records without charge. Review is independent of the initial decision and gives it no deference; an appropriate independent health professional is consulted when required for a medical judgment. A single-level appeal is decided within 60 days for post-service claims, 30 days for pre-service claims, or 72 hours for urgent-care claims, with expedited processing where required. Denial notices include reasons, controlling provisions, relevant internal criteria and medical explanations when applicable, review procedures, and applicable ERISA civil-action rights. No external review right is created merely by this Appendix; any external review required by applicable law remains available.

Claims must identify the covered person, service or dispensing date, prescription where applicable, itemized charges, provider, and any other reimbursement. The Plan will not reimburse an expense twice; benefits are limited to the otherwise payable amount remaining after another payer's payment for the same expense.

Claims contact: ${administration.serviceContacts.claims.formatted}

Appeals contact: ${administration.serviceContacts.appeals.formatted}

Provider navigation and predetermination: ${administration.serviceContacts.providerNavigation.formatted}
