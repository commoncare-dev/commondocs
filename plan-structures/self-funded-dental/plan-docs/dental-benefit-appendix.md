---
id: plan-document.benefit-appendix.self-funded-dental
title: CommonCare Self-Funded Dental Benefit Appendix
kind: benefit-appendix
status: template
version: "1.0"
parent_document: CommonCare Welfare Benefit Plan — Core Plan Document
context_schema: ./self-funded-dental-plan-document-context.schema.json
---

# CommonCare Self-Funded Dental Benefit Appendix

Version: ${extensions.selfFundedDental.document.version}<br>
Appendix Number: ${extensions.selfFundedDental.document.appendixNumber}<br>
Effective Date: ${extensions.selfFundedDental.document.effectiveDate|dateLong}

# Adoption and scope

The Employer adopts this Appendix as part of the Plan. It establishes a self-funded, limited-scope dental benefit. The Core Plan Document governs matters not specifically addressed here.

The benefit pays preventive dental care and a defined share of covered nonpreventive dental care. It is not dental insurance, major medical coverage, or an unlimited promise to pay dental expenses.

# Employer elections

| Term | Election |
|---|---|
| Employer | ${sponsor.legalName} |
| Eligible class | ${eligibility.defaultClass.description} |
| Waiting period | ${eligibility.defaultWaitingPeriod.description} |
| Coverage tier | ${extensions.selfFundedDental.coverageTier|titleCase} |
| Deductible | ${extensions.selfFundedDental.deductiblePerEvent|currencyUSD} per treatment event |
| Plan share after deductible | ${extensions.selfFundedDental.planCoinsurance|percent} |
| Individual annual maximum | ${extensions.selfFundedDental.individualAnnualMaximum|currencyUSD} |
| Family annual maximum | ${extensions.selfFundedDental.familyAnnualMaximum|currencyUSD} |
| Claim filing deadline | ${extensions.selfFundedDental.claimFilingDeadlineDays} days after the service date |

# Definitions

**Approved Amount** means the lesser of the provider's charge and the complete cash price approved by the Plan for the treatment.

**Covered Dental Service** means a preventive or nonpreventive dental service expressly covered by this Appendix and its schedules.

**Treatment Event** means a clinically connected course of treatment. Integral stages and billing lines do not create separate deductibles merely because they occur on different dates or use different codes.

# Eligibility and enrollment

Employees in the eligible class may enroll after satisfying the waiting period. Dependents may enroll only when included in the adopted coverage tier and when they satisfy the Plan's dependent rules. General enrollment, election-change, leave, rehire, and termination rules appear in the Core Plan Document, Appendix A, and the applicable cafeteria plan.

# Funding

This benefit is self-funded. Benefits are paid from Employer general assets and applicable Participant contributions. Any bookkeeping balance records claims experience and does not itself establish a trust or individual ownership right.

# Covered preventive services

The Plan pays 100% of the Approved Amount for covered preventive services without a deductible. Preventive payments do not reduce the individual or family annual maximum.

Covered preventive services include routine examinations and cleanings, ordinary preventive radiographs, child fluoride treatment, and child sealants, subject to the frequencies and clinical conditions in the incorporated dental schedule.

# Covered nonpreventive services

Subject to the deductible, Plan share, Approved Amount, predetermination requirements, and remaining annual maximums, covered nonpreventive services include fillings, extractions, periodontal treatment, crowns, root-canal therapy, implants, dentures, and medically necessary anesthesia associated with covered dental treatment.

For each Treatment Event:

1. The allowed amount is the lesser of the provider charge and Approved Amount.
2. The event deductible is subtracted once.
3. The Plan pays the elected Plan share of the remainder.
4. Payment is limited by both the Participant's individual remaining maximum and the family's remaining maximum.

# Approved-price process and balance billing

The Plan identifies qualified, reasonably accessible providers and comparable complete cash prices for the proposed treatment. A complete price includes the integral imaging, professional, material, laboratory, anesthesia, and follow-up components identified in the approval.

The Participant may use a provider that accepts the Approved Amount as payment in full, subject to the Participant's stated cost sharing. If the Participant chooses a provider that does not accept that amount, the Plan still calculates its payment using the Approved Amount and the provider may bill the Participant for the difference.

The Plan Administrator may approve a higher amount when the lower-priced option is not reasonably usable because of clinical complexity, continuity of care, disability access, pediatric specialization, urgency, material difference, or unreasonable travel.

# Predetermination

Predetermination is required for crowns, root canals, implants, dentures, periodontal treatment, oral surgery, and other expensive or multi-stage care identified in the schedule. A request must include enough clinical and pricing information to identify the complete treatment.

Predetermination confirms the information and price then available. It does not guarantee payment if eligibility ends, maximums are exhausted, the treatment changes, or the service is not actually performed.

# Exclusions

The Plan does not cover cosmetic treatment, investigational treatment, medical or hospital charges, services by a non-dental provider, missed-appointment charges, financing charges, or treatment outside stated frequency and replacement rules unless the Plan Administrator approves an applicable exception under the governing schedule.

# Claims and appeals

Claims must be filed within the elected deadline. Claims and appeals otherwise follow the Core Plan Document and incorporated dental claims procedure. Participants receive at least the appeal period required by applicable ERISA group-health claims rules.

Claims contact: ${administration.serviceContacts.claims.formatted}<br>
Appeals contact: ${administration.serviceContacts.appeals.formatted}<br>
Provider navigation and predetermination: ${administration.serviceContacts.providerNavigation.formatted}

# Incorporated schedules

| Schedule | Version and effective date | Location or custodian |
|---|---|---|
${#each extensions.selfFundedDental.operationalSchedules as schedule}
| ${schedule.name} | ${schedule.version}; effective ${schedule.effectiveDate|dateLong} | ${schedule.location} |
${/each}
