---
id: plan-document.benefit-appendix.self-funded-skinny-mec
title: Self-Funded Skinny MEC Benefit Appendix
kind: benefit-appendix
status: template
version: "1.0"
jurisdiction: United States
parent_document: CommonCare Welfare Benefit Plan — Core Plan Document
related_product: plan.self-funded-skinny-mec
context_schema: ./self-funded-mec-plan-document-context.schema.json
---

# Self-Funded Skinny MEC Benefit Appendix

Version: ${extensions.selfFundedMec.document.version}<br>
Benefit Appendix Number: ${extensions.selfFundedMec.document.appendixNumber}<br>
Effective Date: ${extensions.selfFundedMec.document.effectiveDate|dateLong}

---

# Adoption and incorporation

The Employer adopts this Self-Funded Skinny MEC Benefit Appendix ("Appendix") as a Benefit Appendix under the CommonCare Welfare Benefit Plan ("Plan"). This Appendix is incorporated into and forms part of the Plan.

The Core Plan Document governs matters not addressed by this Appendix. If this Appendix and the Core Plan Document address the same subject, this Appendix controls only with respect to the benefit established here.

This Appendix establishes a self-funded group health benefit designed to provide minimum essential coverage through a deliberately narrow schedule of preventive and elected supplemental benefits. It is not comprehensive major medical coverage and is not intended to provide minimum value unless Schedule A expressly states otherwise.

---

# Schedule A — Employer elections

This schedule records the normalized plan and benefit configuration used to generate the Appendix.

| Plan term | Employer election |
|---|---|
| Employer | ${sponsor.legalName} |
| Plan Administrator | ${administration.planAdministrator.name}; ${administration.planAdministrator.contact.formatted} |
| Plan Year | ${plan.year.startDate|dateLong} through ${plan.year.endDate|dateLong} |
| Effective Date | ${extensions.selfFundedMec.document.effectiveDate|dateLong} |
| Eligible employee class | ${eligibility.defaultClass.description} |
| Waiting period | ${eligibility.defaultWaitingPeriod.description} |
| Enrollment tier | ${extensions.selfFundedMec.enrollmentTier|titleCase} |
| Intended MEC status | ${extensions.selfFundedMec.isMec|yesNo} |
| Intended minimum-value status | ${extensions.selfFundedMec.isMv|yesNo} |
| Intended HDHP status | ${extensions.selfFundedMec.isHdhp|yesNo} |
| Self-only HDHP deductible, if applicable | ${extensions.selfFundedMec.hdhp.selfOnlyDeductible|currencyUSDOrDash} |
| Family HDHP deductible, if applicable | Not applicable to employee-only coverage unless amended |
| Self-only out-of-pocket maximum, if applicable | ${extensions.selfFundedMec.hdhp.selfOnlyOutOfPocketMaximum|currencyUSDOrDash} |
| Claims submission contact | ${administration.serviceContacts.claims.formatted} |
| Provider-navigation and approval contact | ${administration.serviceContacts.providerNavigation.formatted} |
| Appeals contact | ${administration.serviceContacts.appeals.formatted} |
| COBRA or continuation administrator, if applicable | ${administration.serviceContacts.continuation.formatted} |

Amounts intended to satisfy Internal Revenue Code §223 must be tested against the indexed requirements for the applicable calendar year before adoption and at each renewal.

---

# Definitions specific to this benefit

The definitions in the Core Plan Document apply unless this Appendix provides a more specific definition.

**Approved Amount** means the price established by the Plan for a particular service through a direct agreement, negotiated cash price, reference-based pricing method, or another method stated in the applicable provider approval.

**Approved Provider** means a qualified provider identified or approved by the Plan to furnish a Covered Service for the Approved Amount and to accept the Plan's payment arrangement as payment in full, except for amounts the Participant is expressly required to pay under this Appendix.

**Covered Service** means an item or service covered under this Appendix, including a Required Preventive Service and any optional benefit expressly adopted in Schedule C.

**HDHP** means a high-deductible health plan satisfying Internal Revenue Code §223 and applicable guidance.

**MEC** means minimum essential coverage under Internal Revenue Code §5000A and applicable regulations.

**Required Preventive Service** means an item or service that this non-grandfathered group health plan must cover under Public Health Service Act §2713 for the applicable Plan Year.

**Service Schedule** means the versioned preventive-services and claims schedule maintained for this benefit and incorporated under Schedule B.

---

# Eligibility and enrollment

An Employee in the eligible class identified in Schedule A may enroll in this benefit after satisfying the stated waiting period and enrollment requirements.

This Appendix provides employee-only coverage. A spouse, child, or other dependent may not enroll under this Appendix. The Employer may adopt dependent coverage only through a written amendment or replacement appendix specifying the applicable eligibility, contribution, deductible, and coverage terms.

Employee-only coverage under this Appendix does not itself satisfy any separate requirement applicable to an Applicable Large Employer to offer MEC to the dependent children of full-time employees.

Enrollment, election changes, effective dates, and termination are administered under the Core Plan Document, the Employer's Section 125 arrangement when applicable, and the enrollment procedures adopted for this benefit.

---

# Funding

This benefit is self-funded by the Employer. Benefits are paid from the Employer's general assets, participant contributions, a trust if one is identified in Schedule A, or a combination of those sources.

This Appendix is not an insurance policy. Any stop-loss coverage protects the Employer and does not expand a Participant's rights or the benefits payable under the Plan.

---

# Covered benefits

## Required preventive services

The Plan covers Required Preventive Services without cost sharing when furnished in accordance with the controlling recommendation or guideline and this Appendix's provider-access and reasonable-medical-management rules.

The operative preventive schedule consists of:

1. Evidence-based items and services rated **A** or **B** by the United States Preventive Services Task Force;
2. Immunizations recommended for routine use by the Advisory Committee on Immunization Practices and adopted by the Centers for Disease Control and Prevention;
3. Preventive care and screenings for infants, children, and adolescents provided for in HRSA-supported guidelines; and
4. Preventive care and screenings for women provided for in HRSA-supported guidelines.

A new or revised recommendation becomes part of the Service Schedule when federal law makes it applicable to the Plan Year. Removal or downgrading of a recommendation is administered under the transition rules required by applicable law.

Coverage includes items and services integral to furnishing or completing a Required Preventive Service when the governing rule requires those items and services to be covered without cost sharing. Coverage is determined by the substance of the recommendation and the circumstances of the service, not merely by whether a claim line is labeled preventive.

## No cost sharing

The Plan imposes no deductible, copayment, coinsurance, or other participant payment on a Required Preventive Service obtained through an Approved Provider in accordance with the Plan's procedures.

If the Plan does not have an Approved Provider who can furnish a particular Required Preventive Service with reasonable access, the Plan will arrange or cover the service from another qualified provider without cost sharing. The Participant should contact provider navigation before receiving non-emergency service so the Plan can establish the provider and price in advance. Failure to obtain advance assistance does not eliminate any right that applicable law requires the Plan to preserve.

## Reasonable medical management

When the controlling recommendation or guideline does not specify the frequency, method, treatment, product, or setting, the Plan may use reasonable medical-management techniques to determine the covered pathway.

The Plan maintains an exceptions process when the attending provider determines that the otherwise approved pathway is medically inappropriate for the Participant. Requests are decided using the applicable recommendation, the Participant's circumstances, and the expedited timing required by law.

## Contraceptive services

For Participants to whom the applicable HRSA-supported guideline applies, the Plan covers required contraceptive counseling, products, services, and female sterilization procedures without cost sharing under the Service Schedule.

The Plan may select covered products or methods within a recognized contraceptive category when reasonable medical management is permitted. The exceptions process applies when a Participant's attending provider determines that a different covered product or service is medically necessary.

## Immunizations

The Plan covers immunizations included in the applicable federal preventive schedule, including the vaccine or immunizing product and required administration services. Eligibility may depend on age, vaccination history, pregnancy, medical condition, occupation, travel, season, shared clinical decision-making, or another criterion contained in the operative recommendation.

---

# Provider access and payment

The Plan's network consists of Approved Providers willing to furnish Covered Services under the Plan's payment terms. The network may include directly contracted providers, providers accepting a negotiated cash price, providers accepting a reference amount as payment in full, and providers participating through a contracted network.

The Plan may establish the Approved Amount using:

- A direct or bundled agreement; such agreements will be published and accessible to all participants;
- A published cash price; such prices will be published and accessible to all participants;
- A negotiated cash price; timely negotiations will be performed for services with no acceptable in-network provider available. 
- A second-lowest bona fide negotiable cash price available from comparable qualified providers in the geographic market;
- A stated percentage of the applicable Medicare amount; or
- Another reasonable method documented before the service is furnished.

Provider navigation will identify an Approved Provider, confirm practical availability, document the Approved Amount and included services, and give the Participant usable instructions for obtaining the service.

For a Required Preventive Service:

- If an accessible Approved Provider can furnish the service, the Plan may limit no-cost coverage to the approved pathway and apply its stated out-of-network terms elsewhere.
- If no accessible Approved Provider can furnish the service, the Plan will cover the service from an available qualified provider without cost sharing.
- The Plan will address facility, professional, anesthesia, pathology, device, laboratory, and other integral charges required to deliver or complete the preventive service.

The Plan Administrator may resolve an individual access or pricing failure by approving another provider, negotiating the claim, paying an additional amount, or taking another reasonable action that gives the Participant the benefit promised by the Plan.

---

# Optional benefits

No benefit beyond the Required Preventive Services is covered unless the Employer expressly adopts it in Schedule C.

An adopted optional benefit must state:

- The covered item or service;
- Eligibility and frequency rules;
- The provider pathway;
- The participant cost, if any;
- Whether the HDHP deductible applies;
- Any limit or exclusion; and
- Its effective date.

If Schedule A identifies this benefit as an intended HDHP, a nonpreventive medical benefit may not be paid before the applicable HDHP deductible unless Internal Revenue Code §223 expressly permits first-dollar coverage.

## Direct primary care

A direct-primary-care arrangement is not covered or paid by this Appendix unless Schedule C expressly establishes a structure reviewed for the applicable Plan Year. Permission for an individual to participate in a qualifying DPC arrangement does not, by itself, authorize this HDHP to pay the DPC fee before its deductible.

---

# Exclusions

Unless expressly included as a Required Preventive Service or adopted optional benefit, the Plan does not cover:

- Inpatient or outpatient hospital treatment;
- Emergency services;
- Diagnostic evaluation or treatment of illness or injury;
- Primary, specialty, urgent, or behavioral healthcare furnished for a nonpreventive purpose;
- Prescription drugs or biological products;
- Maternity, delivery, or newborn treatment;
- Surgery;
- Durable medical equipment;
- Dental or vision treatment;
- Services furnished solely for employment, licensing, school, travel, legal, or administrative purposes;
- Cosmetic services; or
- Any other item or service outside this Appendix's express coverage.

An exclusion does not apply to the extent the item or service must be covered as part of a Required Preventive Service. A service does not become preventive merely because it is furnished during the same encounter as preventive care.

This narrow coverage means the Plan is not comprehensive major medical coverage and ordinarily does not provide minimum value.

---

# HDHP and HSA treatment

If Schedule A identifies this benefit as an intended HDHP, the Plan will administer it using the applicable annual deductible, out-of-pocket limit, preventive-care exception, and other requirements of Internal Revenue Code §223.

MEC status does not establish HDHP status. HDHP status does not establish an individual's eligibility to contribute to an HSA. Individual eligibility also depends on the Participant's other coverage, Medicare enrollment, tax-dependent status, and other circumstances governed by federal tax law.

The Plan Administrator will update indexed HDHP amounts before each applicable Plan Year. No statement by the Employer, Plan Administrator, or service provider guarantees a Participant's personal tax treatment.

---

# Claims, adverse determinations, and appeals

Claims and appeals are governed by the Core Plan Document and the health-benefit claims procedure incorporated in Schedule B.

The incorporated procedure must identify:

- Where and how claims are submitted;
- The information required to decide a claim;
- Applicable pre-service, urgent-care, concurrent-care, and post-service timeframes;
- The content of an adverse benefit determination;
- The process and deadline for appeal;
- The Participant's right to relevant documents and a full and fair review;
- External review rights when applicable; and
- The person or entity authorized to decide claims and appeals.

A provider-navigation request is not automatically a claim or appeal. If a request seeks a benefit, challenges a coverage determination, or requires expedited treatment, the Plan will classify and process it according to its substance rather than its label.

---

# Coordination and continuation

This benefit coordinates with other coverage under the coordination rules incorporated in Schedule B. The Plan may obtain information reasonably necessary to determine primary and secondary responsibility.

COBRA or another continuation requirement applies only when the Employer, Plan, Participant, and qualifying event are subject to that law. Continuation coverage does not expand the benefits otherwise provided by this Appendix.

---

# Participant materials

The Plan will provide the disclosures required for this benefit, including an applicable Summary Plan Description, Summary of Benefits and Coverage, claims and appeals notices, privacy notices, and material-modification notices.

Participant-facing materials must accurately communicate that this benefit:

- Is intended to constitute MEC;
- Does not provide minimum value unless Schedule A expressly states otherwise;
- Is not comprehensive major medical coverage;
- Covers Required Preventive Services through the Plan's approved-provider process;
- Excludes services outside its narrow coverage unless Schedule C states otherwise; and
- Establishes HSA compatibility only when the benefit and the individual each satisfy the applicable requirements.

The Summary of Benefits and Coverage, enrollment materials, provider directory, and other summaries do not replace or amend the governing terms of the Plan.

---

# Schedule B — Incorporated operational schedules

The following current schedules are incorporated into this Appendix. A schedule may be maintained separately and updated without restating this Appendix to the extent the amendment and notice rules permit.

| Schedule | Version or effective date | Location or custodian |
|---|---|---|
${#each extensions.selfFundedMec.operationalSchedules as schedule}
| ${schedule.name} | ${schedule.version}; effective ${schedule.effectiveDate|dateLong} | ${schedule.location} |
${/each}

---

# Schedule C — Optional benefit elections

No optional benefit is adopted unless described below or in an attached schedule expressly incorporated here.

| Optional benefit | Covered terms | Deductible and participant cost | Effective date |
|---|---|---|---|
${#each extensions.selfFundedMec.optionalBenefits as optionalBenefit}
| ${optionalBenefit.name} | ${optionalBenefit.coveredTerms} | ${optionalBenefit.deductibleAndParticipantCost} | ${optionalBenefit.effectiveDate|dateLong} |
${/each}
