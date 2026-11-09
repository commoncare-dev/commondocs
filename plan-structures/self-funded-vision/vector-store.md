---
id: plan.self-funded-vision.vector-store
title: CommonCare Self-Funded Vision Plan — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/self-funded-vision/human-readable.md
metadata_document: plan-structures/self-funded-vision/metadata.yaml
source_commit: 4b27e8be2cb032b10e25218a004ec5d3f4841823
source_sha256: ad612ea2cb6d227f201fc138587d860404821340f9b5721b43c68503344f5b30
metadata_sha256: f972647cc51635fa9a7aa99113fc55d27384addfc1287bdcf9ed19b3ca670c17
generation_method: deterministic-markdown-conversion
canonical_source: false
source_status: draft
source_version: 1.0
jurisdiction: United States
last_reviewed: 2026-11-09
---

# CommonCare Self-Funded Vision Plan — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/self-funded-vision/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

<!-- record_id: plan.self-funded-vision.commoncare-self-funded-vision-plan -->
## CommonCare Self-Funded Vision Plan
> Retrieval context: CommonCare Self-Funded Vision Plan — CommonCare Self-Funded Vision Plan

> Document-generation note: The governing appendix and participant summary now use a schedule mapped from the selected coverage's actual variants, deductibles, coinsurance, caps, copayments, and other benefit details. Illustrative amounts, service lists, and frequency assumptions in this guide do not override that adopted coverage. Missing descriptive values refer to the incorporated coverage terms; the document setup does not require duplicate financial elections. The original claim filing deadline defaults to 180 days unless the coverage specifies another period.


An employer vision plan that pays routine examinations in full, shares the cost of prescription eyewear, and limits nonpreventive payments through individual and family annual maximums. This guide follows the self-funded dental product's structure; the adopted vision appendix controls the actual benefit.

<!-- record_id: plan.self-funded-vision.find-what-you-need -->
## Find what you need
> Retrieval context: CommonCare Self-Funded Vision Plan — Find what you need

#### Understand the product
<!-- record_id: plan.self-funded-vision.find-what-you-need.understand-the-product; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Find what you need
- Goal: Understand the product
- Section: [Design thesis](#design-thesis)

#### Compare benefit options
<!-- record_id: plan.self-funded-vision.find-what-you-need.compare-benefit-options; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Find what you need
- Goal: Compare benefit options
- Section: [Benefit design](#2-benefit-design)

#### Understand provider pricing
<!-- record_id: plan.self-funded-vision.find-what-you-need.understand-provider-pricing; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Find what you need
- Goal: Understand provider pricing
- Section: [Cash-price network](#4-lowest-negotiable-cash-price-network)

#### Calculate claims and caps
<!-- record_id: plan.self-funded-vision.find-what-you-need.calculate-claims-and-caps; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Find what you need
- Goal: Calculate claims and caps
- Section: [Claims calculation](#6-claims-calculation) · [Cap-aware model](#7-cap-aware-pricing-model)

#### Identify services to quote
<!-- record_id: plan.self-funded-vision.find-what-you-need.identify-services-to-quote; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Find what you need
- Goal: Identify services to quote
- Section: [Service inventory](#appendix-a-common-services-and-price-guidance)


<!-- record_id: plan.self-funded-vision.at-a-glance -->
## At a glance
> Retrieval context: CommonCare Self-Funded Vision Plan — At a glance

#### Funding
<!-- record_id: plan.self-funded-vision.at-a-glance.funding; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Funding
- Answer: Self-funded employer group health benefit; no insurer promises payment

#### Excepted-benefit design
<!-- record_id: plan.self-funded-vision.at-a-glance.excepted-benefit-design; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Excepted-benefit design
- Answer: Limited-scope vision with a separate right to decline coverage

#### Preventive coverage
<!-- record_id: plan.self-funded-vision.at-a-glance.preventive-coverage; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Preventive coverage
- Answer: One routine examination including refraction per person per Plan Year; 100% of approved amount, no deductible

#### Nonpreventive coverage
<!-- record_id: plan.self-funded-vision.at-a-glance.nonpreventive-coverage; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Nonpreventive coverage
- Answer: Prescription eyewear and fitting; elected per-event deductible and Plan share

#### Do preventive payments consume maximums?
<!-- record_id: plan.self-funded-vision.at-a-glance.do-preventive-payments-consume-maximums; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Do preventive payments consume maximums?
- Answer: No

#### Provider choice
<!-- record_id: plan.self-funded-vision.at-a-glance.provider-choice; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Provider choice
- Answer: Any qualified provider; amounts above the approved price may be balance-billed

#### Employer exposure
<!-- record_id: plan.self-funded-vision.at-a-glance.employer-exposure; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — At a glance
- Question: Employer exposure
- Answer: Nonpreventive annual payment maximums plus frequency-limited examination benefits; not one aggregate cap on all costs


> [!NOTE]
> This is a product guide. Sample values and arithmetic examples are illustrations, not adopted benefits, market quotes, or actuarial rates.

<!-- record_id: plan.self-funded-vision.design-thesis -->
## Design thesis
> Retrieval context: CommonCare Self-Funded Vision Plan — Design thesis

Routine vision care and corrective eyewear can be purchased directly. The employer can fund those purchases without buying a vision insurance policy, while retaining defined cost sharing, frequency limits, and maximum payments.

The Plan approves complete prices before expensive eyewear is ordered. Participant choice remains available, with clear responsibility for upgrades, excluded services, and charges above the approved amount. Unused Employer general assets remain with the Employer; actual Plan assets remain subject to the core's fiduciary protections.

<!-- record_id: plan.self-funded-vision.1-legal-classification -->
## 1. Legal classification
> Retrieval context: CommonCare Self-Funded Vision Plan — 1. Legal classification

Vision care is medical care. The benefit is intended to qualify as limited-scope vision excepted benefits under [29 CFR Section 2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732): substantially all benefits concern treatment of the eye, and participants may decline this coverage separately, whether or not they must contribute. A separate insurance contract is not necessary for this self-funded design.

Excepted-benefit status does not remove applicable ERISA administration and claims duties, HIPAA privacy and security duties, COBRA, tax rules, or state requirements that otherwise apply. The core and adopted appendices govern those matters. This is a vision benefit, not an FSA or HRA account.

<!-- record_id: plan.self-funded-vision.2-benefit-design -->
## 2. Benefit design
> Retrieval context: CommonCare Self-Funded Vision Plan — 2. Benefit design

The extension uses the same fields as dental, under `extensions.selfFundedVision`.

#### Routine examination and refraction
<!-- record_id: plan.self-funded-vision.2-benefit-design.routine-examination-and-refraction; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Routine examination and refraction
- Governing rule: One per covered person per Plan Year, paid at 100% of approved amount

#### Preventive deductible
<!-- record_id: plan.self-funded-vision.2-benefit-design.preventive-deductible; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Preventive deductible
- Governing rule: None

#### Preventive counts toward maximum
<!-- record_id: plan.self-funded-vision.2-benefit-design.preventive-counts-toward-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Preventive counts toward maximum
- Governing rule: No

#### Corrective-eyewear frequency
<!-- record_id: plan.self-funded-vision.2-benefit-design.corrective-eyewear-frequency; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Corrective-eyewear frequency
- Governing rule: One complete pair of glasses OR one contact-lens supply of up to 12 months, including related fitting, per person per Plan Year

#### Nonpreventive deductible
<!-- record_id: plan.self-funded-vision.2-benefit-design.nonpreventive-deductible; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Nonpreventive deductible
- Governing rule: Elected amount per clinically connected treatment event

#### Plan share after deductible
<!-- record_id: plan.self-funded-vision.2-benefit-design.plan-share-after-deductible; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Plan share after deductible
- Governing rule: Elected fraction of remaining approved amount

#### Individual annual maximum
<!-- record_id: plan.self-funded-vision.2-benefit-design.individual-annual-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Individual annual maximum
- Governing rule: Elected maximum on nonpreventive Plan payments per person per Plan Year

#### Family annual maximum
<!-- record_id: plan.self-funded-vision.2-benefit-design.family-annual-maximum; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 2. Benefit design
- Feature: Family annual maximum
- Governing rule: Elected maximum on collective nonpreventive Plan payments per enrolled family per Plan Year


Unused maximums and frequency allowances do not carry forward. Maximums limit Plan payments, not provider charges or participant liability. The sample context mirrors dental's financial values for template testing; it does not establish recommended vision limits or pricing.

<!-- record_id: plan.self-funded-vision.3-covered-services -->
## 3. Covered services
> Retrieval context: CommonCare Self-Funded Vision Plan — 3. Covered services

<!-- record_id: plan.self-funded-vision.preventive -->
### Preventive
> Retrieval context: CommonCare Self-Funded Vision Plan — 3. Covered services > Preventive

One routine examination per person per Plan Year, including refraction needed to establish a corrective prescription. Additional imaging or diagnostic tests are not automatically included. “Preventive” is a Plan category, not a promise to provide the full ACA preventive-services package.

<!-- record_id: plan.self-funded-vision.basic-and-major -->
### Basic and major
> Retrieval context: CommonCare Self-Funded Vision Plan — 3. Covered services > Basic and major

Subject to the event deductible, Plan share, approved amount, frequency rules, and remaining individual and family maximums:

- Prescription frames and standard single-vision, bifocal, or trifocal lenses;
- Prescription contact lenses and related fitting as the alternative to glasses;
- Progressive lenses, specialty contacts, or lens enhancements only when expressly approved as covered options before ordering.

Excluded services include eye-disease or injury treatment, surgery, implanted lenses, drugs, LASIK/PRK, nonprescription or cosmetic eyewear, accessories, warranties, missed appointments, and financing charges. Lost or damaged eyewear does not create an additional frequency allowance. A price approval does not itself approve an excluded service. Medical care may be considered under separate medical coverage, without a guarantee of payment.

<!-- record_id: plan.self-funded-vision.4-lowest-negotiable-cash-price-network -->
## 4. Lowest negotiable cash-price network
> Retrieval context: CommonCare Self-Funded Vision Plan — 4. Lowest negotiable cash-price network

This is a procurement process, not a leased carrier network. The administrator identifies qualified, accessible providers and compares complete prices for the same prescription, materials, quantities, and services. A low advertised frame price is not comparable to a complete pair with prescription lenses.

<!-- record_id: plan.self-funded-vision.workflow -->
### Workflow
> Retrieval context: CommonCare Self-Funded Vision Plan — 4. Lowest negotiable cash-price network > Workflow

1. Identify the examination, eyewear order, or fitting requested.
2. Confirm the prescription, covered options, frequency eligibility, and remaining maximums.
3. Obtain comparable complete cash quotes.
4. Document the approved amount and whether the provider accepts it as payment in full, subject to participant cost sharing.
5. Calculate payment from the approved amount. If a selected provider charges more without accepting the approved amount, the participant may owe the difference.

A higher approved amount may be appropriate for prescription complexity, clinical need, continuity, accessibility, pediatric expertise, urgency, or unreasonable travel. These exceptions affect pricing, not the coverage exclusions or frequency limits.

<!-- record_id: plan.self-funded-vision.5-predetermination -->
## 5. Predetermination
> Retrieval context: CommonCare Self-Funded Vision Plan — 5. Predetermination

Advance approval is required for progressive lenses, specialty contacts, lens enhancements, and other expensive or multi-stage vision care. Submit the prescription, materials, quantities, fitting requirements, and complete charges. Standard covered examinations and ordinary prescription eyewear do not require predetermination.

Approval is based on the facts then available. Payment remains subject to actual service or dispensing, eligibility, frequency limits, and remaining maximums. The dispensing date determines when eyewear is incurred; a deposit or order alone does not create a claim.

<!-- record_id: plan.self-funded-vision.6-claims-calculation -->
## 6. Claims calculation
> Retrieval context: CommonCare Self-Funded Vision Plan — 6. Claims calculation

Let A be the lesser of the provider charge and approved price, D the elected event deductible, c the elected Plan share, and I and F the individual and family remaining maximums.

For a covered preventive examination, Plan payment is A and does not reduce I or F.

For a covered nonpreventive event:

`Plan payment = min(c × max(A − D, 0), I, F)`

One eyewear order is one event: integral frame, lens, fabrication, and dispensing lines do not create multiple deductibles. Contact lenses and their related fitting ordered together form one event. The separately covered routine examination does not trigger a nonpreventive deductible.

<!-- record_id: plan.self-funded-vision.example -->
### Example
> Retrieval context: CommonCare Self-Funded Vision Plan — 6. Claims calculation > Example

Assume a $400 provider charge, $300 approved price, $50 event deductible, and 75% Plan share. Before maximums, the Plan pays $187.50. The participant owes $112.50 of the approved price, plus a possible $100 balance bill if the provider has not agreed to accept $300.

<!-- record_id: plan.self-funded-vision.when-a-remaining-maximum-reduces-payment -->
### When a remaining maximum reduces payment
> Retrieval context: CommonCare Self-Funded Vision Plan — 6. Claims calculation > When a remaining maximum reduces payment

#### $100
<!-- record_id: plan.self-funded-vision.6-claims-calculation-when-a-remaining-maximum-reduces-payment.100; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 6. Claims calculation > When a remaining maximum reduces payment
- Individual remaining: $100
- Family remaining: $500
- Plan payment: $100
- Participant share of approved price: $200
- Possible balance bill: $100

#### $500
<!-- record_id: plan.self-funded-vision.6-claims-calculation-when-a-remaining-maximum-reduces-payment.500; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — 6. Claims calculation > When a remaining maximum reduces payment
- Individual remaining: $500
- Family remaining: $75
- Plan payment: $75
- Participant share of approved price: $225
- Possible balance bill: $100


These examples assume frequency eligibility and no other payer. Payment cannot exceed the expense remaining after another payer's reimbursement; the same expense cannot be reimbursed twice.

<!-- record_id: plan.self-funded-vision.7-cap-aware-pricing-model -->
## 7. Cap-aware pricing model
> Retrieval context: CommonCare Self-Funded Vision Plan — 7. Cap-aware pricing model

For n enrolled people in one family:

`Nonpreventive payment ceiling = min(n × individual annual maximum, family annual maximum)`

Add frequency-limited examination costs and administration separately. This ceiling is not an expected-claims estimate and does not include balance bills or participant spending. Frequency limits may keep actual claims well below the ceiling even when annual dollar maximums are high.

<!-- record_id: plan.self-funded-vision.expected-claims-algorithm -->
### Expected-claims algorithm
> Retrieval context: CommonCare Self-Funded Vision Plan — 7. Cap-aware pricing model > Expected-claims algorithm

1. Model examination utilization and approved local examination prices outside the caps.
2. Model glasses versus contact-lens selection under the mutually exclusive frequency rule.
3. Group integral items into one event and apply the event deductible and Plan share.
4. Apply individual and family remaining maximums in service-date order.
5. Add administration and the Employer's chosen reserve.
6. Compare modeled results with actual utilization and uncapped claim experience at renewal.

`Annual funding estimate = expected examinations + expected capped eyewear claims + administration + reserve`

<!-- record_id: plan.self-funded-vision.example-monthly-pricing -->
### Example monthly pricing
> Retrieval context: CommonCare Self-Funded Vision Plan — 7. Cap-aware pricing model > Example monthly pricing

No vision pricing model or live local quotes were supplied for this module. Monthly rates must be developed from the approved service prices, enrolled population, utilization assumptions, adopted limits, and reserve policy. Dental's example monthly prices are not vision prices and are not carried into this guide.

The Employer contribution allocates funding responsibility; it does not change the claims formula or payment maximums.

<!-- record_id: plan.self-funded-vision.8-administration -->
## 8. Administration
> Retrieval context: CommonCare Self-Funded Vision Plan — 8. Administration

The formal appendix defines coverage, frequency, event grouping, price approvals, exclusions, claim filing, and review. The core supplies general eligibility, leave and restoration protections, fiduciary duties, privacy, and amendment provisions. Its Appendix E supplies applicable HIPAA sponsor-access terms.

The vision appendix provides ERISA group-health claims timeframes: generally 30 days for post-service claims with a permitted 15-day extension, at least 180 days to appeal, and 60 days for a single-level post-service appeal. Shorter rules apply to pre-service and urgent-care claims. The original filing deadline is a separate elected term, not the appeal deadline. See [29 CFR Section 2560.503-1](https://www.law.cornell.edu/cfr/text/29/2560.503-1).

<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance -->
## Appendix A: Common services and price guidance
> Retrieval context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance

Obtain current complete local quotes. This inventory supplies comparison units rather than unsupported national prices or reimbursement guarantees.

<!-- record_id: plan.self-funded-vision.diagnostic-and-preventive -->
### Diagnostic and preventive
> Retrieval context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Diagnostic and preventive

#### Routine vision examination
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-diagnostic-and-preventive.routine-vision-examination; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Routine vision examination
- Quote unit: Per examination
- Confirm included components: Examination and refraction; identify separately billed tests

#### Contact-lens fitting
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-diagnostic-and-preventive.contact-lens-fitting; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Diagnostic and preventive
- Service: Contact-lens fitting
- Quote unit: Per fitting course
- Confirm included components: Initial fitting, trial lenses, and included follow-up


<!-- record_id: plan.self-funded-vision.corrective-eyewear -->
### Corrective eyewear
> Retrieval context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Corrective eyewear

#### Standard single-vision glasses
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-corrective-eyewear.standard-single-vision-glasses; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Corrective eyewear
- Service: Standard single-vision glasses
- Quote unit: Complete pair
- Confirm included components: Frame, both prescription lenses, fabrication, dispensing

#### Bifocal or trifocal glasses
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-corrective-eyewear.bifocal-or-trifocal-glasses; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Corrective eyewear
- Service: Bifocal or trifocal glasses
- Quote unit: Complete pair
- Confirm included components: Frame, lens design and material, fabrication, dispensing

#### Progressive glasses
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-corrective-eyewear.progressive-glasses; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Corrective eyewear
- Service: Progressive glasses
- Quote unit: Complete pair, advance approval
- Confirm included components: Lens design, material, measurements, adjustment/remake terms

#### Prescription contact lenses
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-corrective-eyewear.prescription-contact-lenses; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Corrective eyewear
- Service: Prescription contact lenses
- Quote unit: Specified supply up to 12 months
- Confirm included components: Brand/type, prescription, quantity, fitting charge

#### Specialty contacts
<!-- record_id: plan.self-funded-vision.appendix-a-common-services-and-price-guidance-corrective-eyewear.specialty-contacts; record_type: table-row -->
- Context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Corrective eyewear
- Service: Specialty contacts
- Quote unit: Complete order, advance approval
- Confirm included components: Materials, fitting visits, follow-up, replacement terms


<!-- record_id: plan.self-funded-vision.compare-complete-treatments -->
### Compare complete treatments
> Retrieval context: CommonCare Self-Funded Vision Plan — Appendix A: Common services and price guidance > Compare complete treatments

Compare identical prescription requirements and quantities. Separate covered base items, approved upgrades, excluded accessories, warranty charges, and discounts. Do not pay again for a component already included in an approved bundle.

<!-- record_id: plan.self-funded-vision.appendix-b-data-needed-for-renewal -->
## Appendix B: Data needed for renewal
> Retrieval context: CommonCare Self-Funded Vision Plan — Appendix B: Data needed for renewal

Track examination use, glasses versus contact-lens selection, complete approved prices, fitting costs, event counts, upgrades, frequency denials, individual and family maximum exhaustion, uncapped claims, balance bills, negotiation savings, and claim lag. Record both provider charges and approved amounts so procurement savings are distinguishable from benefit reductions.

<!-- record_id: plan.self-funded-vision.primary-references -->
## Primary references
> Retrieval context: CommonCare Self-Funded Vision Plan — Primary references

- [Limited-scope vision excepted benefits: 29 CFR Section 2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732)
- [ERISA claims procedures: 29 CFR Section 2560.503-1](https://www.law.cornell.edu/cfr/text/29/2560.503-1)
- [DOL 2014 dental and vision excepted-benefit changes](https://www.dol.gov/newsroom/releases/ebsa/ebsa20141863)
