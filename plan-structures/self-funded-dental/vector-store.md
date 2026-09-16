---
id: plan.self-funded-dental.vector-store
title: CommonCare Self-Funded Dental Plan — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/self-funded-dental/human-readable.md
source_commit: fed8062947b6045779a0fea1438b9e1ffcdc6f5f
source_sha256: 7328e4aa99dcb2e69a4963e7f525b0d1e024bfada48a18288028279df241f2f5
generation_method: deterministic-markdown-conversion
canonical_source: false
last_reviewed: 2026-09-16
---

# CommonCare Self-Funded Dental Plan — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/self-funded-dental/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan -->
## CommonCare Self-Funded Dental Plan
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan

A simple employer dental plan that pays routine preventive care in full, shares the cost of restorative care, and limits employer exposure through individual and family benefit maximums.

<!-- record_id: plan.self-funded-dental.find-what-you-need -->
## Find what you need
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Find what you need

#### Understand the product
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-find-what-you-need.understand-the-product; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Find what you need
- Goal: Understand the product
- Section: [Design thesis](#design-thesis)

#### Compare benefit options
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-find-what-you-need.compare-benefit-options; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Find what you need
- Goal: Compare benefit options
- Section: [Benefit design](#2-benefit-design)

#### Understand provider pricing
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-find-what-you-need.understand-provider-pricing; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Find what you need
- Goal: Understand provider pricing
- Section: [Cash-price network](#4-lowest-negotiable-cash-price-network)

#### Calculate claims and caps
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-find-what-you-need.calculate-claims-and-caps; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Find what you need
- Goal: Calculate claims and caps
- Section: [Claims calculation](#6-claims-calculation) · [Cap-aware model](#7-cap-aware-pricing-model)

#### Look up common service prices
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-find-what-you-need.look-up-common-service-prices; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Find what you need
- Goal: Look up common service prices
- Section: [Service inventory](#appendix-a-common-services-and-price-guidance)


<!-- record_id: plan.self-funded-dental.at-a-glance -->
## At a glance
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance

#### Is this insurance?
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.is-this-insurance; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Is this insurance?
- Answer: No. It is a self-funded employer group health plan paid from employer assets

#### Can it be an excepted benefit?
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.can-it-be-an-excepted-benefit; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Can it be an excepted benefit?
- Answer: Yes, when it satisfies the limited-scope dental rules

#### Preventive coverage
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.preventive-coverage; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Preventive coverage
- Answer: 100% of the approved amount; no deductible

#### Nonpreventive coverage
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.nonpreventive-coverage; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Nonpreventive coverage
- Answer: \$50 per treatment-event deductible, then 75% of the approved amount

#### Do preventive benefits consume the maximum?
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.do-preventive-benefits-consume-the-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Do preventive benefits consume the maximum?
- Answer: No

#### Can any dentist be used?
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.can-any-dentist-be-used; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Can any dentist be used?
- Answer: Yes, but amounts above the approved price may be balance-billed unless pricing is agreed in advance

#### Is employer exposure bounded?
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-at-a-glance.is-employer-exposure-bounded; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > At a glance
- Question: Is employer exposure bounded?
- Answer: Yes. Nonpreventive claims have individual and family caps; preventive care has service-frequency limits


> [!NOTE]
> This document explains the product design. The formal plan document controls.

<!-- record_id: plan.self-funded-dental.design-thesis -->
## Design thesis
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Design thesis

Conventional dental insurance is itself a small-dollar financing product with an annual benefit maximum—not catastrophic protection. CommonCare retains the useful parts of that structure while removing the insurer from routine dental transactions.

The plan makes preventive care easy to obtain, helps with common restorative expenses, establishes prices before expensive treatment, and leaves unused plan assets with the employer instead of converting the entire budget into premium.

Dental care is unusually suitable for self-funding. Services are discrete, scheduled, described by CDT codes, and commonly sold in a competitive cash market. Even expensive treatments can ordinarily be priced before they begin. The annual maximums create a second, firm boundary around nonpreventive risk.

<!-- record_id: plan.self-funded-dental.1-legal-classification -->
## 1. Legal classification
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 1. Legal classification

Dental benefits are medical care and create a group health plan. Limited-scope dental benefits are nevertheless **excepted benefits** when substantially all benefits treat the mouth and the coverage is not integral to another group health plan because participants may decline it or its claims are administered under a separate contract. The rule permits dental coverage to be the only plan offered. [29 CFR §2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732)

Excepted status means the dental plan does not have to operate as ACA major medical coverage. It remains an employer welfare benefit plan subject to its terms and the ERISA rules that still apply.

<!-- record_id: plan.self-funded-dental.2-benefit-design -->
## 2. Benefit design
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design

The options differ only in the maximum nonpreventive benefit.

#### Preventive services
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.preventive-services; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Preventive services
- \$1,000 / \$3,000 option: 100% approved amount
- \$3,000 / \$7,500 option: 100% approved amount

#### Preventive deductible
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.preventive-deductible; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Preventive deductible
- \$1,000 / \$3,000 option: None
- \$3,000 / \$7,500 option: None

#### Preventive counts toward maximum
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.preventive-counts-toward-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Preventive counts toward maximum
- \$1,000 / \$3,000 option: No
- \$3,000 / \$7,500 option: No

#### Nonpreventive deductible
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.nonpreventive-deductible; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Nonpreventive deductible
- \$1,000 / \$3,000 option: \$50 per treatment event
- \$3,000 / \$7,500 option: \$50 per treatment event

#### Plan share after deductible
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.plan-share-after-deductible; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Plan share after deductible
- \$1,000 / \$3,000 option: 75%
- \$3,000 / \$7,500 option: 75%

#### Individual annual maximum
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.individual-annual-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Individual annual maximum
- \$1,000 / \$3,000 option: \$1,000
- \$3,000 / \$7,500 option: \$3,000

#### Family annual maximum
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-2-benefit-design.family-annual-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 2. Benefit design
- Feature: Family annual maximum
- \$1,000 / \$3,000 option: \$3,000
- \$3,000 / \$7,500 option: \$7,500


The maximum limits what the plan pays. It does not cap the provider's charge, participant cost sharing, a balance bill, or preventive benefits.

> [!IMPORTANT]
> The attached template alternates between a \$50 **per-event** and **annual** deductible. This product model uses a per-treatment-event deductible. The formal plan document must use one rule consistently.

<!-- record_id: plan.self-funded-dental.3-covered-services -->
## 3. Covered services
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 3. Covered services

<!-- record_id: plan.self-funded-dental.preventive -->
### Preventive
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 3. Covered services > Preventive

- Routine exams and cleanings, generally twice per year;
- Bitewing radiographs, generally once per year;
- Full-mouth or panoramic radiographs, generally once every 36 months;
- Fluoride treatment for children; and
- Sealants for children on eligible permanent teeth.

<!-- record_id: plan.self-funded-dental.basic-and-major -->
### Basic and major
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 3. Covered services > Basic and major

Subject to deductible, coinsurance, approved price, and both maximums:

- Fillings, extractions, and periodontal treatment;
- Crowns and root-canal therapy;
- Implants and dentures; and
- Medically necessary anesthesia associated with covered dental treatment.

Cosmetic or investigational treatment, medical or hospital charges, non-dental providers, replacement-frequency exceptions, and unusually expensive treatment plans require individual approval. Missed-appointment and financing fees are not dental benefits.

<!-- record_id: plan.self-funded-dental.4-lowest-negotiable-cash-price-network -->
## 4. Lowest negotiable cash-price network
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 4. Lowest negotiable cash-price network

The CommonCare network is a procurement process rather than a leased carrier directory.

For the service and geography, CommonCare identifies actual providers willing to perform the treatment and obtains comparable cash prices. The lowest usable complete price becomes the approval target when the provider is licensed, reasonably accessible, accepting patients, and able to furnish the needed care.

“Lowest” does not mean an unusable advertisement. Quotes are comparable only when they include the same procedure, tooth or quadrant, material, imaging, laboratory work, anesthesia, follow-up, and other components necessary to complete treatment.

<!-- record_id: plan.self-funded-dental.workflow -->
### Workflow
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 4. Lowest negotiable cash-price network > Workflow

1. The participant submits the proposed service or treatment plan.
2. CommonCare obtains or confirms complete local cash prices.
3. The participant may use a provider who accepts the approved price.
4. CommonCare documents the agreement and adjudicates against it.
5. If the participant chooses a more expensive provider, the plan may calculate its benefit from the approved amount and the provider may balance-bill the difference.

> [!TIP]
> Advance approval removes balance-billing uncertainty. Negotiation after treatment can still work, but provider acceptance can no longer be guaranteed.

The administrator may approve more when the nominally lowest option is not genuinely usable because of clinical complexity, continuity of treatment, disability access, pediatric specialization, urgency, material differences, or unreasonable travel.

<!-- record_id: plan.self-funded-dental.5-predetermination -->
## 5. Predetermination
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 5. Predetermination

Predetermination is the normal tool for crowns, root canals, implants, dentures, periodontal treatment, oral surgery, and other expensive or multi-stage care. A request should include CDT codes, tooth/surface/arch/quadrant information, radiographs, diagnosis, all anticipated stages and charges, material or laboratory specifications, and proposed dates.

Predetermination confirms the information and price then available. It does not create payment beyond eligibility, the remaining maximums, or treatment actually performed.

<!-- record_id: plan.self-funded-dental.6-claims-calculation -->
## 6. Claims calculation
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 6. Claims calculation

```text
allowed_amount = min(provider_charge, approved_price)
```

For preventive care:

```text
plan_payment = allowed_amount
```

For a nonpreventive treatment event:

```text
amount_after_deductible = max(allowed_amount - 50, 0)
uncapped_plan_payment = 0.75 × amount_after_deductible

plan_payment = min(
  uncapped_plan_payment,
  individual_remaining,
  family_remaining
)
```

An event is a clinically connected course of treatment—not each CDT line and not necessarily each visit. A crown's preparation, temporary, laboratory fabrication, and placement should not produce four deductibles. The claims specification must define event grouping.

<!-- record_id: plan.self-funded-dental.example -->
### Example
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 6. Claims calculation > Example

For a crown billed at \$1,400 with a \$1,050 approved price:

```text
allowed_amount = \$1,050
amount_after_deductible = \$1,000
uncapped_plan_payment = \$750
```

If \$750 remains under both maximums, the plan pays \$750. The participant owes \$300 of the approved price, plus any balance bill if the provider did not accept \$1,050 as payment in full.

<!-- record_id: plan.self-funded-dental.7-cap-aware-pricing-model -->
## 7. Cap-aware pricing model
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model

For `n` enrolled people:

```text
nonpreventive_exposure_ceiling = min(
  n × individual_annual_maximum,
  family_annual_maximum
)
```

#### 1
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model.1; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model
- Enrolled people: 1
- \$1,000 / \$3,000 option: \$1,000
- \$3,000 / \$7,500 option: \$3,000

#### 2
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model.2; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model
- Enrolled people: 2
- \$1,000 / \$3,000 option: \$2,000
- \$3,000 / \$7,500 option: \$6,000

#### 3
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model.3; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model
- Enrolled people: 3
- \$1,000 / \$3,000 option: \$3,000
- \$3,000 / \$7,500 option: \$7,500

#### 4+
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model.4; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model
- Enrolled people: 4+
- \$1,000 / \$3,000 option: \$3,000
- \$3,000 / \$7,500 option: \$7,500


This is a severity ceiling—not expected claims. Pricing every family as though it exhausts the ceiling would materially overstate ordinary claims.

<!-- record_id: plan.self-funded-dental.expected-claims-algorithm -->
### Expected-claims algorithm
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Expected-claims algorithm

For each simulated person and plan year:

1. Generate preventive utilization and pay approved prices outside the caps.
2. Generate nonpreventive treatment events.
3. Apply one \$50 deductible per event and the 75% plan share.
4. Stop payments at the person's maximum.
5. Stop family payments at the family maximum.
6. Average many simulated years, then add administration and the chosen reserve.

```text
annual_guidance_price =
  expected_preventive_claims
  + expected_capped_nonpreventive_claims
  + administration
  + risk_reserve
```

#### Aggressive
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-expected-cl.aggressive; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Expected-claims algorithm
- Pricing posture: Aggressive
- Target claims share of price: 88%–92%
- Best use: Larger/predictable group with reserves

#### Medium
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-expected-cl.medium; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Expected-claims algorithm
- Pricing posture: Medium
- Target claims share of price: 78%–85%
- Best use: Ordinary starting position

#### Low-risk
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-expected-cl.low-risk; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Expected-claims algorithm
- Pricing posture: Low-risk
- Target claims share of price: 68%–76%
- Best use: Small group prioritizing rate stability


Do not triple price because the individual cap triples. The higher option's incremental claim cost is only the expected claims the lower caps would have stopped:

```text
incremental_cost =
  expected claims under \$3,000 / \$7,500
  - expected claims under \$1,000 / \$3,000
```

<!-- record_id: plan.self-funded-dental.example-monthly-pricing -->
### Example monthly pricing
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing

The following table shows an example output from the current CommonCare pricing model. It is not part of the benefit formula and does not guarantee that the same rates are appropriate for every employer, geography, enrollment mix, or plan year.

#### Employee only
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-example-mon.employee-only; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing
- Enrollment tier: Employee only
- \$1,000 individual / \$3,000 family cap: \$24
- \$3,000 individual / \$7,500 family cap: \$44
- Increase for higher cap: \$20

#### Employee + spouse
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-example-mon.employee-spouse; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing
- Enrollment tier: Employee + spouse
- \$1,000 individual / \$3,000 family cap: \$48
- \$3,000 individual / \$7,500 family cap: \$88
- Increase for higher cap: \$40

#### Employee + 1 child
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-example-mon.employee-1-child; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing
- Enrollment tier: Employee + 1 child
- \$1,000 individual / \$3,000 family cap: \$61
- \$3,000 individual / \$7,500 family cap: \$110
- Increase for higher cap: \$49

#### Employee + 2 children
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-example-mon.employee-2-children; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing
- Enrollment tier: Employee + 2 children
- \$1,000 individual / \$3,000 family cap: \$92
- \$3,000 individual / \$7,500 family cap: \$140
- Increase for higher cap: \$48

#### Employee + 3 or more children
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-example-mon.employee-3-or-more-children; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing
- Enrollment tier: Employee + 3 or more children
- \$1,000 individual / \$3,000 family cap: \$109
- \$3,000 individual / \$7,500 family cap: \$170
- Increase for higher cap: \$61

#### Family
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-7-cap-aware-pricing-model-example-mon.family; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 7. Cap-aware pricing model > Example monthly pricing
- Enrollment tier: Family
- \$1,000 individual / \$3,000 family cap: \$109
- \$3,000 individual / \$7,500 family cap: \$170
- Increase for higher cap: \$61


The cap-aware result matters:

- Employee-only and employee-plus-spouse pricing rises most directly with each additional person's individual maximum.
- Family pricing does not continue increasing indefinitely with family size because the family maximum stops additional nonpreventive exposure.
- The higher-cap option costs more because it pays a portion of claims stopped by the lower maximum—not because every participant is assumed to exhaust the higher maximum.

```text
monthly_participant_cost =
  applicable_monthly_price
  - monthly_employer_contribution
```

The employer contribution changes who funds the plan. It does not change the claims calculation or the individual and family maximums.

<!-- record_id: plan.self-funded-dental.8-administration -->
## 8. Administration
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > 8. Administration

Formal plan materials should specify eligibility, benefits, frequency and replacement rules, event grouping, approved-price rules, balance billing, predetermination, claims deadlines, coordination, appeals, and amendment authority.

Dental benefits are group health benefits for ERISA claims procedures. The process must provide full and fair review; participants generally receive at least 180 days to appeal an adverse determination. [DOL claims guidance](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/group-health-and-disability-plans-benefit-claims-procedure-regulation)

A 180-day deadline for submitting the original claim is a separate plan rule from the participant's appeal period.

<!-- record_id: plan.self-funded-dental.appendix-a-common-services-and-price-guidance -->
## Appendix A: Common services and price guidance
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance

These are national working estimates for complete cash-pay treatment in ordinary settings—not an official fee schedule or a substitute for live local quotes. The ADA discontinued its national Survey of Dental Fees after 2022, making actual local procurement and plan experience especially important. [ADA Health Policy Institute](https://www.ada.org/resources/research/health-policy-institute/dental-care-market)

<!-- record_id: plan.self-funded-dental.diagnostic-and-preventive -->
### Diagnostic and preventive
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive

#### Periodic exam
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.periodic-exam; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Periodic exam
- CDT family: D0120
- Cash range: \$40–\$90
- Initial target: \$55

#### Comprehensive exam
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.comprehensive-exam; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Comprehensive exam
- CDT family: D0150
- Cash range: \$70–\$150
- Initial target: \$90

#### Adult cleaning
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.adult-cleaning; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Adult cleaning
- CDT family: D1110
- Cash range: \$80–\$160
- Initial target: \$100

#### Child cleaning
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.child-cleaning; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Child cleaning
- CDT family: D1120
- Cash range: \$60–\$130
- Initial target: \$80

#### Bitewing radiographs
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.bitewing-radiographs; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Bitewing radiographs
- CDT family: D0272–D0274
- Cash range: \$35–\$100
- Initial target: \$55

#### Full-mouth radiographs
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.full-mouth-radiographs; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Full-mouth radiographs
- CDT family: D0210
- Cash range: \$100–\$220
- Initial target: \$130

#### Panoramic radiograph
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.panoramic-radiograph; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Panoramic radiograph
- CDT family: D0330
- Cash range: \$90–\$180
- Initial target: \$110

#### Fluoride
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.fluoride; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Fluoride
- CDT family: D1206/D1208
- Cash range: \$25–\$65
- Initial target: \$35

#### Sealant, per tooth
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.sealant-per-tooth; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Sealant, per tooth
- CDT family: D1351
- Cash range: \$35–\$75
- Initial target: \$45


<!-- record_id: plan.self-funded-dental.restorative-and-surgical -->
### Restorative and surgical
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical

#### One-surface composite filling
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.one-surface-composite-filling; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: One-surface composite filling
- CDT family: D2391
- Cash range: \$150–\$275
- Initial target: \$175

#### Two-surface composite filling
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.two-surface-composite-filling; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Two-surface composite filling
- CDT family: D2392
- Cash range: \$190–\$350
- Initial target: \$225

#### Three-plus-surface filling
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.three-plus-surface-filling; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Three-plus-surface filling
- CDT family: D2393–D2394
- Cash range: \$240–\$450
- Initial target: \$290

#### Simple extraction
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.simple-extraction; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Simple extraction
- CDT family: D7140
- Cash range: \$150–\$350
- Initial target: \$200

#### Surgical extraction
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.surgical-extraction; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Surgical extraction
- CDT family: D7210
- Cash range: \$275–\$650
- Initial target: \$350

#### Impacted extraction
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.impacted-extraction; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Impacted extraction
- CDT family: D7220–D7241
- Cash range: \$350–\$900
- Initial target: Quote

#### Core buildup
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.core-buildup; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Core buildup
- CDT family: D2950
- Cash range: \$200–\$450
- Initial target: \$250

#### Crown, ordinary lab work included
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.crown-ordinary-lab-work-included; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Restorative and surgical
- Service: Crown, ordinary lab work included
- CDT family: D2740 family
- Cash range: \$900–\$1,700
- Initial target: \$1,050


<!-- record_id: plan.self-funded-dental.endodontic-and-periodontal -->
### Endodontic and periodontal
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal

#### Anterior root canal
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.anterior-root-canal; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal
- Service: Anterior root canal
- CDT family: D3310
- Cash range: \$650–\$1,100
- Initial target: \$750

#### Premolar root canal
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.premolar-root-canal; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal
- Service: Premolar root canal
- CDT family: D3320
- Cash range: \$750–\$1,300
- Initial target: \$900

#### Molar root canal
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.molar-root-canal; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal
- Service: Molar root canal
- CDT family: D3330
- Cash range: \$950–\$1,700
- Initial target: \$1,100

#### Scaling/root planing, quadrant
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.scaling-root-planing-quadrant; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal
- Service: Scaling/root planing, quadrant
- CDT family: D4341/D4342
- Cash range: \$180–\$400
- Initial target: \$225

#### Periodontal maintenance
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.periodontal-maintenance; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal
- Service: Periodontal maintenance
- CDT family: D4910
- Cash range: \$120–\$240
- Initial target: \$150

#### Gingival/osseous surgery
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.gingival-osseous-surgery; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Endodontic and periodontal
- Service: Gingival/osseous surgery
- CDT family: D4210–D4261
- Cash range: \$700–\$2,000
- Initial target: Quote


<!-- record_id: plan.self-funded-dental.prosthodontics-implants-and-anesthesia -->
### Prosthodontics, implants, and anesthesia
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia

#### Acrylic partial denture
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.acrylic-partial-denture; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Acrylic partial denture
- Pricing unit: Per arch
- Cash range: \$900–\$1,800
- Initial target: \$1,050

#### Cast-metal partial denture
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.cast-metal-partial-denture; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Cast-metal partial denture
- Pricing unit: Per arch
- Cash range: \$1,400–\$2,800
- Initial target: \$1,700

#### Complete denture
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.complete-denture; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Complete denture
- Pricing unit: Per arch
- Cash range: \$1,000–\$2,500
- Initial target: \$1,250

#### Implant body placement
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.implant-body-placement; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Implant body placement
- Pricing unit: Per implant
- Cash range: \$1,500–\$3,000
- Initial target: Quote

#### Implant abutment and crown
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.implant-abutment-and-crown; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Implant abutment and crown
- Pricing unit: Per tooth
- Cash range: \$1,500–\$3,000
- Initial target: Quote

#### Complete single-tooth implant
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.complete-single-tooth-implant; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Complete single-tooth implant
- Pricing unit: Complete course
- Cash range: \$3,000–\$6,000
- Initial target: Quote

#### Nitrous oxide
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.nitrous-oxide; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: Nitrous oxide
- Pricing unit: Encounter
- Cash range: \$75–\$175
- Initial target: \$100

#### IV moderate sedation
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.iv-moderate-sedation; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Prosthodontics, implants, and anesthesia
- Service: IV moderate sedation
- Pricing unit: Encounter/time
- Cash range: \$400–\$1,200
- Initial target: Quote


Consumer cash-price compilations show similarly wide ranges, including roughly \$100–\$400 for fillings, \$150–\$600 for extractions, \$700–\$1,500 for root canals, and \$950–\$2,100 for crowns. They support these planning ranges but do not replace local quotes. [DentalPrice](https://www.dentalprice.org/) · [CareCredit](https://www.carecredit.com/dentistry/costs/)

<!-- record_id: plan.self-funded-dental.compare-complete-treatments -->
### Compare complete treatments
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Compare complete treatments

#### Crown
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.crown; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Compare complete treatments
- Treatment: Crown
- Components often omitted from the headline price: Exam, imaging, buildup, temporary, laboratory work, placement

#### Root canal
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.root-canal; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Compare complete treatments
- Treatment: Root canal
- Components often omitted from the headline price: Imaging, testing, treatment, temporary, buildup, final crown

#### Implant
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.implant; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Compare complete treatments
- Treatment: Implant
- Components often omitted from the headline price: Imaging, extraction, graft, implant, abutment, crown, follow-up

#### Denture
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.denture; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Compare complete treatments
- Treatment: Denture
- Components often omitted from the headline price: Exam, impressions, extractions, immediate appliance, adjustments, relines

#### Periodontal care
<!-- record_id: plan.self-funded-dental.commoncare-self-funded-dental-plan-appendix-a-common-services-and-price-.periodontal-care; record_type: table-row -->
- Context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix A: Common services and price guidance > Compare complete treatments
- Treatment: Periodontal care
- Components often omitted from the headline price: Measurements, quadrants, anesthesia, maintenance


The plan should approve explicit bundles and prevent duplicated payment when integral services are separated into additional billing lines.

<!-- record_id: plan.self-funded-dental.appendix-b-data-needed-for-renewal -->
## Appendix B: Data needed for renewal
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Appendix B: Data needed for renewal

Track any-service utilization, preventive visits, nonpreventive events, approved cost per event, individual and family cap exhaustion, charges above caps, balance bills, negotiation savings, and claim lag.

The most useful renewal input is the **uncapped claim distribution**, not merely total paid claims. It reveals exactly what the higher option would have paid and lets both options be priced from the same experience.

National data provide a reasonableness check: ADA reports 45% of the population had a dental visit in 2022; CDC reports 65.5% of adults had an exam or cleaning in 2023. Enrolled dental-plan populations may use more care, so insured experience should control when available. [ADA](https://www.ada.org/resources/research/health-policy-institute/dental-care-market) · [CDC](https://www.cdc.gov/nchs/fastats/dental.htm)

> **The human-readable document explains the promise. The product store structures it. The claims specification tells the system exactly how to pay it.**

<!-- record_id: plan.self-funded-dental.primary-references -->
## Primary references
> Retrieval context: CommonCare Self-Funded Dental Plan — CommonCare Self-Funded Dental Plan > Primary references

- [29 CFR §2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732)
- [DOL federal health-benefit compliance guide](https://www.dol.gov/sites/dolgov/files/EBSA/about-ebsa/our-activities/resource-center/publications/compliance-assistance-guide.pdf)
- [DOL group-health claims guidance](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/group-health-and-disability-plans-benefit-claims-procedure-regulation)
- [ADA Health Policy Institute](https://www.ada.org/resources/research/health-policy-institute/dental-care-market)
- [CDC oral and dental health](https://www.cdc.gov/nchs/fastats/dental.htm)
