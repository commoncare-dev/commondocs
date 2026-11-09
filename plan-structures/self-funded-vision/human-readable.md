## CommonCare Self-Funded Vision Plan

> Document-generation note: The governing appendix and participant summary now use a schedule mapped from the selected coverage's actual variants, deductibles, coinsurance, caps, copayments, and other benefit details. Illustrative amounts, service lists, and frequency assumptions in this guide do not override that adopted coverage. Missing descriptive values refer to the incorporated coverage terms; the document setup does not require duplicate financial elections. The original claim filing deadline defaults to 180 days unless the coverage specifies another period.


An employer vision plan that pays routine examinations in full, shares the cost of prescription eyewear, and limits nonpreventive payments through individual and family annual maximums. This guide follows the self-funded dental product's structure; the adopted vision appendix controls the actual benefit.

## Find what you need

| Goal | Section |
| --- | --- |
| Understand the product | [Design thesis](#design-thesis) |
| Compare benefit options | [Benefit design](#2-benefit-design) |
| Understand provider pricing | [Cash-price network](#4-lowest-negotiable-cash-price-network) |
| Calculate claims and caps | [Claims calculation](#6-claims-calculation) · [Cap-aware model](#7-cap-aware-pricing-model) |
| Identify services to quote | [Service inventory](#appendix-a-common-services-and-price-guidance) |

## At a glance

| Question | Answer |
| --- | --- |
| Funding | Self-funded employer group health benefit; no insurer promises payment |
| Excepted-benefit design | Limited-scope vision with a separate right to decline coverage |
| Preventive coverage | One routine examination including refraction per person per Plan Year; 100% of approved amount, no deductible |
| Nonpreventive coverage | Prescription eyewear and fitting; elected per-event deductible and Plan share |
| Do preventive payments consume maximums? | No |
| Provider choice | Any qualified provider; amounts above the approved price may be balance-billed |
| Employer exposure | Nonpreventive annual payment maximums plus frequency-limited examination benefits; not one aggregate cap on all costs |

> [!NOTE]
> This is a product guide. Sample values and arithmetic examples are illustrations, not adopted benefits, market quotes, or actuarial rates.

## Design thesis

Routine vision care and corrective eyewear can be purchased directly. The employer can fund those purchases without buying a vision insurance policy, while retaining defined cost sharing, frequency limits, and maximum payments.

The Plan approves complete prices before expensive eyewear is ordered. Participant choice remains available, with clear responsibility for upgrades, excluded services, and charges above the approved amount. Unused Employer general assets remain with the Employer; actual Plan assets remain subject to the core's fiduciary protections.

## 1. Legal classification

Vision care is medical care. The benefit is intended to qualify as limited-scope vision excepted benefits under [29 CFR Section 2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732): substantially all benefits concern treatment of the eye, and participants may decline this coverage separately, whether or not they must contribute. A separate insurance contract is not necessary for this self-funded design.

Excepted-benefit status does not remove applicable ERISA administration and claims duties, HIPAA privacy and security duties, COBRA, tax rules, or state requirements that otherwise apply. The core and adopted appendices govern those matters. This is a vision benefit, not an FSA or HRA account.

## 2. Benefit design

The extension uses the same fields as dental, under `extensions.selfFundedVision`.

| Feature | Governing rule |
| --- | --- |
| Routine examination and refraction | One per covered person per Plan Year, paid at 100% of approved amount |
| Preventive deductible | None |
| Preventive counts toward maximum | No |
| Corrective-eyewear frequency | One complete pair of glasses OR one contact-lens supply of up to 12 months, including related fitting, per person per Plan Year |
| Nonpreventive deductible | Elected amount per clinically connected treatment event |
| Plan share after deductible | Elected fraction of remaining approved amount |
| Individual annual maximum | Elected maximum on nonpreventive Plan payments per person per Plan Year |
| Family annual maximum | Elected maximum on collective nonpreventive Plan payments per enrolled family per Plan Year |

Unused maximums and frequency allowances do not carry forward. Maximums limit Plan payments, not provider charges or participant liability. The sample context mirrors dental's financial values for template testing; it does not establish recommended vision limits or pricing.

## 3. Covered services

### Preventive

One routine examination per person per Plan Year, including refraction needed to establish a corrective prescription. Additional imaging or diagnostic tests are not automatically included. “Preventive” is a Plan category, not a promise to provide the full ACA preventive-services package.

### Basic and major

Subject to the event deductible, Plan share, approved amount, frequency rules, and remaining individual and family maximums:

- Prescription frames and standard single-vision, bifocal, or trifocal lenses;
- Prescription contact lenses and related fitting as the alternative to glasses;
- Progressive lenses, specialty contacts, or lens enhancements only when expressly approved as covered options before ordering.

Excluded services include eye-disease or injury treatment, surgery, implanted lenses, drugs, LASIK/PRK, nonprescription or cosmetic eyewear, accessories, warranties, missed appointments, and financing charges. Lost or damaged eyewear does not create an additional frequency allowance. A price approval does not itself approve an excluded service. Medical care may be considered under separate medical coverage, without a guarantee of payment.

## 4. Lowest negotiable cash-price network

This is a procurement process, not a leased carrier network. The administrator identifies qualified, accessible providers and compares complete prices for the same prescription, materials, quantities, and services. A low advertised frame price is not comparable to a complete pair with prescription lenses.

### Workflow

1. Identify the examination, eyewear order, or fitting requested.
2. Confirm the prescription, covered options, frequency eligibility, and remaining maximums.
3. Obtain comparable complete cash quotes.
4. Document the approved amount and whether the provider accepts it as payment in full, subject to participant cost sharing.
5. Calculate payment from the approved amount. If a selected provider charges more without accepting the approved amount, the participant may owe the difference.

A higher approved amount may be appropriate for prescription complexity, clinical need, continuity, accessibility, pediatric expertise, urgency, or unreasonable travel. These exceptions affect pricing, not the coverage exclusions or frequency limits.

## 5. Predetermination

Advance approval is required for progressive lenses, specialty contacts, lens enhancements, and other expensive or multi-stage vision care. Submit the prescription, materials, quantities, fitting requirements, and complete charges. Standard covered examinations and ordinary prescription eyewear do not require predetermination.

Approval is based on the facts then available. Payment remains subject to actual service or dispensing, eligibility, frequency limits, and remaining maximums. The dispensing date determines when eyewear is incurred; a deposit or order alone does not create a claim.

## 6. Claims calculation

Let A be the lesser of the provider charge and approved price, D the elected event deductible, c the elected Plan share, and I and F the individual and family remaining maximums.

For a covered preventive examination, Plan payment is A and does not reduce I or F.

For a covered nonpreventive event:

`Plan payment = min(c × max(A − D, 0), I, F)`

One eyewear order is one event: integral frame, lens, fabrication, and dispensing lines do not create multiple deductibles. Contact lenses and their related fitting ordered together form one event. The separately covered routine examination does not trigger a nonpreventive deductible.

### Example

Assume a $400 provider charge, $300 approved price, $50 event deductible, and 75% Plan share. Before maximums, the Plan pays $187.50. The participant owes $112.50 of the approved price, plus a possible $100 balance bill if the provider has not agreed to accept $300.

### When a remaining maximum reduces payment

| Individual remaining | Family remaining | Plan payment | Participant share of approved price | Possible balance bill |
| ---: | ---: | ---: | ---: | ---: |
| $100 | $500 | $100 | $200 | $100 |
| $500 | $75 | $75 | $225 | $100 |

These examples assume frequency eligibility and no other payer. Payment cannot exceed the expense remaining after another payer's reimbursement; the same expense cannot be reimbursed twice.

## 7. Cap-aware pricing model

For n enrolled people in one family:

`Nonpreventive payment ceiling = min(n × individual annual maximum, family annual maximum)`

Add frequency-limited examination costs and administration separately. This ceiling is not an expected-claims estimate and does not include balance bills or participant spending. Frequency limits may keep actual claims well below the ceiling even when annual dollar maximums are high.

### Expected-claims algorithm

1. Model examination utilization and approved local examination prices outside the caps.
2. Model glasses versus contact-lens selection under the mutually exclusive frequency rule.
3. Group integral items into one event and apply the event deductible and Plan share.
4. Apply individual and family remaining maximums in service-date order.
5. Add administration and the Employer's chosen reserve.
6. Compare modeled results with actual utilization and uncapped claim experience at renewal.

`Annual funding estimate = expected examinations + expected capped eyewear claims + administration + reserve`

### Example monthly pricing

No vision pricing model or live local quotes were supplied for this module. Monthly rates must be developed from the approved service prices, enrolled population, utilization assumptions, adopted limits, and reserve policy. Dental's example monthly prices are not vision prices and are not carried into this guide.

The Employer contribution allocates funding responsibility; it does not change the claims formula or payment maximums.

## 8. Administration

The formal appendix defines coverage, frequency, event grouping, price approvals, exclusions, claim filing, and review. The core supplies general eligibility, leave and restoration protections, fiduciary duties, privacy, and amendment provisions. Its Appendix E supplies applicable HIPAA sponsor-access terms.

The vision appendix provides ERISA group-health claims timeframes: generally 30 days for post-service claims with a permitted 15-day extension, at least 180 days to appeal, and 60 days for a single-level post-service appeal. Shorter rules apply to pre-service and urgent-care claims. The original filing deadline is a separate elected term, not the appeal deadline. See [29 CFR Section 2560.503-1](https://www.law.cornell.edu/cfr/text/29/2560.503-1).

## Appendix A: Common services and price guidance

Obtain current complete local quotes. This inventory supplies comparison units rather than unsupported national prices or reimbursement guarantees.

### Diagnostic and preventive

| Service | Quote unit | Confirm included components |
| --- | --- | --- |
| Routine vision examination | Per examination | Examination and refraction; identify separately billed tests |
| Contact-lens fitting | Per fitting course | Initial fitting, trial lenses, and included follow-up |

### Corrective eyewear

| Service | Quote unit | Confirm included components |
| --- | --- | --- |
| Standard single-vision glasses | Complete pair | Frame, both prescription lenses, fabrication, dispensing |
| Bifocal or trifocal glasses | Complete pair | Frame, lens design and material, fabrication, dispensing |
| Progressive glasses | Complete pair, advance approval | Lens design, material, measurements, adjustment/remake terms |
| Prescription contact lenses | Specified supply up to 12 months | Brand/type, prescription, quantity, fitting charge |
| Specialty contacts | Complete order, advance approval | Materials, fitting visits, follow-up, replacement terms |

### Compare complete treatments

Compare identical prescription requirements and quantities. Separate covered base items, approved upgrades, excluded accessories, warranty charges, and discounts. Do not pay again for a component already included in an approved bundle.

## Appendix B: Data needed for renewal

Track examination use, glasses versus contact-lens selection, complete approved prices, fitting costs, event counts, upgrades, frequency denials, individual and family maximum exhaustion, uncapped claims, balance bills, negotiation savings, and claim lag. Record both provider charges and approved amounts so procurement savings are distinguishable from benefit reductions.

## Primary references

- [Limited-scope vision excepted benefits: 29 CFR Section 2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732)
- [ERISA claims procedures: 29 CFR Section 2560.503-1](https://www.law.cornell.edu/cfr/text/29/2560.503-1)
- [DOL 2014 dental and vision excepted-benefit changes](https://www.dol.gov/newsroom/releases/ebsa/ebsa20141863)
