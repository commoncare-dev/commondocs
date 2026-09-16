## CommonCare Self-Funded Dental Plan

A simple employer dental plan that pays routine preventive care in full, shares the cost of restorative care, and limits employer exposure through individual and family benefit maximums.

## Find what you need

| Goal | Section |
| --- | --- |
| Understand the product | [Design thesis](#design-thesis) |
| Compare benefit options | [Benefit design](#2-benefit-design) |
| Understand provider pricing | [Cash-price network](#4-lowest-negotiable-cash-price-network) |
| Calculate claims and caps | [Claims calculation](#6-claims-calculation) · [Cap-aware model](#7-cap-aware-pricing-model) |
| Look up common service prices | [Service inventory](#appendix-a-common-services-and-price-guidance) |

## At a glance

| Question | Answer |
| --- | --- |
| Is this insurance? | No. It is a self-funded employer group health plan paid from employer assets |
| Can it be an excepted benefit? | Yes, when it satisfies the limited-scope dental rules |
| Preventive coverage | 100% of the approved amount; no deductible |
| Nonpreventive coverage | \$50 per treatment-event deductible, then 75% of the approved amount |
| Do preventive benefits consume the maximum? | No |
| Can any dentist be used? | Yes, but amounts above the approved price may be balance-billed unless pricing is agreed in advance |
| Is employer exposure bounded? | Yes. Nonpreventive claims have individual and family caps; preventive care has service-frequency limits |

> [!NOTE]
> This document explains the product design. The formal plan document controls.

## Design thesis

Conventional dental insurance is itself a small-dollar financing product with an annual benefit maximum—not catastrophic protection. CommonCare retains the useful parts of that structure while removing the insurer from routine dental transactions.

The plan makes preventive care easy to obtain, helps with common restorative expenses, establishes prices before expensive treatment, and leaves unused plan assets with the employer instead of converting the entire budget into premium.

Dental care is unusually suitable for self-funding. Services are discrete, scheduled, described by CDT codes, and commonly sold in a competitive cash market. Even expensive treatments can ordinarily be priced before they begin. The annual maximums create a second, firm boundary around nonpreventive risk.

## 1. Legal classification

Dental benefits are medical care and create a group health plan. Limited-scope dental benefits are nevertheless **excepted benefits** when substantially all benefits treat the mouth and the coverage is not integral to another group health plan because participants may decline it or its claims are administered under a separate contract. The rule permits dental coverage to be the only plan offered. [29 CFR §2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732)

Excepted status means the dental plan does not have to operate as ACA major medical coverage. It remains an employer welfare benefit plan subject to its terms and the ERISA rules that still apply.

## 2. Benefit design

The options differ only in the maximum nonpreventive benefit.

| Feature | \$1,000 / \$3,000 option | \$3,000 / \$7,500 option |
| --- | ---: | ---: |
| Preventive services | 100% approved amount | 100% approved amount |
| Preventive deductible | None | None |
| Preventive counts toward maximum | No | No |
| Nonpreventive deductible | \$50 per treatment event | \$50 per treatment event |
| Plan share after deductible | 75% | 75% |
| Individual annual maximum | \$1,000 | \$3,000 |
| Family annual maximum | \$3,000 | \$7,500 |

The maximum limits what the plan pays. It does not cap the provider's charge, participant cost sharing, a balance bill, or preventive benefits.

> [!IMPORTANT]
> The attached template alternates between a \$50 **per-event** and **annual** deductible. This product model uses a per-treatment-event deductible. The formal plan document must use one rule consistently.

## 3. Covered services

### Preventive

- Routine exams and cleanings, generally twice per year;
- Bitewing radiographs, generally once per year;
- Full-mouth or panoramic radiographs, generally once every 36 months;
- Fluoride treatment for children; and
- Sealants for children on eligible permanent teeth.

### Basic and major

Subject to deductible, coinsurance, approved price, and both maximums:

- Fillings, extractions, and periodontal treatment;
- Crowns and root-canal therapy;
- Implants and dentures; and
- Medically necessary anesthesia associated with covered dental treatment.

Cosmetic or investigational treatment, medical or hospital charges, non-dental providers, replacement-frequency exceptions, and unusually expensive treatment plans require individual approval. Missed-appointment and financing fees are not dental benefits.

## 4. Lowest negotiable cash-price network

The CommonCare network is a procurement process rather than a leased carrier directory.

For the service and geography, CommonCare identifies actual providers willing to perform the treatment and obtains comparable cash prices. The lowest usable complete price becomes the approval target when the provider is licensed, reasonably accessible, accepting patients, and able to furnish the needed care.

“Lowest” does not mean an unusable advertisement. Quotes are comparable only when they include the same procedure, tooth or quadrant, material, imaging, laboratory work, anesthesia, follow-up, and other components necessary to complete treatment.

### Workflow

1. The participant submits the proposed service or treatment plan.
2. CommonCare obtains or confirms complete local cash prices.
3. The participant may use a provider who accepts the approved price.
4. CommonCare documents the agreement and adjudicates against it.
5. If the participant chooses a more expensive provider, the plan may calculate its benefit from the approved amount and the provider may balance-bill the difference.

> [!TIP]
> Advance approval removes balance-billing uncertainty. Negotiation after treatment can still work, but provider acceptance can no longer be guaranteed.

The administrator may approve more when the nominally lowest option is not genuinely usable because of clinical complexity, continuity of treatment, disability access, pediatric specialization, urgency, material differences, or unreasonable travel.

## 5. Predetermination

Predetermination is the normal tool for crowns, root canals, implants, dentures, periodontal treatment, oral surgery, and other expensive or multi-stage care. A request should include CDT codes, tooth/surface/arch/quadrant information, radiographs, diagnosis, all anticipated stages and charges, material or laboratory specifications, and proposed dates.

Predetermination confirms the information and price then available. It does not create payment beyond eligibility, the remaining maximums, or treatment actually performed.

## 6. Claims calculation

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

### Example

For a crown billed at \$1,400 with a \$1,050 approved price:

```text
allowed_amount = \$1,050
amount_after_deductible = \$1,000
uncapped_plan_payment = \$750
```

If \$750 remains under both maximums, the plan pays \$750. The participant owes \$300 of the approved price, plus any balance bill if the provider did not accept \$1,050 as payment in full.

## 7. Cap-aware pricing model

For `n` enrolled people:

```text
nonpreventive_exposure_ceiling = min(
  n × individual_annual_maximum,
  family_annual_maximum
)
```

| Enrolled people | \$1,000 / \$3,000 option | \$3,000 / \$7,500 option |
| ---: | ---: | ---: |
| 1 | \$1,000 | \$3,000 |
| 2 | \$2,000 | \$6,000 |
| 3 | \$3,000 | \$7,500 |
| 4+ | \$3,000 | \$7,500 |

This is a severity ceiling—not expected claims. Pricing every family as though it exhausts the ceiling would materially overstate ordinary claims.

### Expected-claims algorithm

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

| Pricing posture | Target claims share of price | Best use |
| --- | ---: | --- |
| Aggressive | 88%–92% | Larger/predictable group with reserves |
| Medium | 78%–85% | Ordinary starting position |
| Low-risk | 68%–76% | Small group prioritizing rate stability |

Do not triple price because the individual cap triples. The higher option's incremental claim cost is only the expected claims the lower caps would have stopped:

```text
incremental_cost =
  expected claims under \$3,000 / \$7,500
  - expected claims under \$1,000 / \$3,000
```

### Example monthly pricing

The following table shows an example output from the current CommonCare pricing model. It is not part of the benefit formula and does not guarantee that the same rates are appropriate for every employer, geography, enrollment mix, or plan year.

| Enrollment tier | \$1,000 individual / \$3,000 family cap | \$3,000 individual / \$7,500 family cap | Increase for higher cap |
| --- | ---: | ---: | ---: |
| Employee only | \$24 | \$44 | \$20 |
| Employee + spouse | \$48 | \$88 | \$40 |
| Employee + 1 child | \$61 | \$110 | \$49 |
| Employee + 2 children | \$92 | \$140 | \$48 |
| Employee + 3 or more children | \$109 | \$170 | \$61 |
| Family | \$109 | \$170 | \$61 |

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

## 8. Administration

Formal plan materials should specify eligibility, benefits, frequency and replacement rules, event grouping, approved-price rules, balance billing, predetermination, claims deadlines, coordination, appeals, and amendment authority.

Dental benefits are group health benefits for ERISA claims procedures. The process must provide full and fair review; participants generally receive at least 180 days to appeal an adverse determination. [DOL claims guidance](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/group-health-and-disability-plans-benefit-claims-procedure-regulation)

A 180-day deadline for submitting the original claim is a separate plan rule from the participant's appeal period.

## Appendix A: Common services and price guidance

These are national working estimates for complete cash-pay treatment in ordinary settings—not an official fee schedule or a substitute for live local quotes. The ADA discontinued its national Survey of Dental Fees after 2022, making actual local procurement and plan experience especially important. [ADA Health Policy Institute](https://www.ada.org/resources/research/health-policy-institute/dental-care-market)

### Diagnostic and preventive

| Service | CDT family | Cash range | Initial target |
| --- | --- | ---: | ---: |
| Periodic exam | D0120 | \$40–\$90 | \$55 |
| Comprehensive exam | D0150 | \$70–\$150 | \$90 |
| Adult cleaning | D1110 | \$80–\$160 | \$100 |
| Child cleaning | D1120 | \$60–\$130 | \$80 |
| Bitewing radiographs | D0272–D0274 | \$35–\$100 | \$55 |
| Full-mouth radiographs | D0210 | \$100–\$220 | \$130 |
| Panoramic radiograph | D0330 | \$90–\$180 | \$110 |
| Fluoride | D1206/D1208 | \$25–\$65 | \$35 |
| Sealant, per tooth | D1351 | \$35–\$75 | \$45 |

### Restorative and surgical

| Service | CDT family | Cash range | Initial target |
| --- | --- | ---: | ---: |
| One-surface composite filling | D2391 | \$150–\$275 | \$175 |
| Two-surface composite filling | D2392 | \$190–\$350 | \$225 |
| Three-plus-surface filling | D2393–D2394 | \$240–\$450 | \$290 |
| Simple extraction | D7140 | \$150–\$350 | \$200 |
| Surgical extraction | D7210 | \$275–\$650 | \$350 |
| Impacted extraction | D7220–D7241 | \$350–\$900 | Quote |
| Core buildup | D2950 | \$200–\$450 | \$250 |
| Crown, ordinary lab work included | D2740 family | \$900–\$1,700 | \$1,050 |

### Endodontic and periodontal

| Service | CDT family | Cash range | Initial target |
| --- | --- | ---: | ---: |
| Anterior root canal | D3310 | \$650–\$1,100 | \$750 |
| Premolar root canal | D3320 | \$750–\$1,300 | \$900 |
| Molar root canal | D3330 | \$950–\$1,700 | \$1,100 |
| Scaling/root planing, quadrant | D4341/D4342 | \$180–\$400 | \$225 |
| Periodontal maintenance | D4910 | \$120–\$240 | \$150 |
| Gingival/osseous surgery | D4210–D4261 | \$700–\$2,000 | Quote |

### Prosthodontics, implants, and anesthesia

| Service | Pricing unit | Cash range | Initial target |
| --- | --- | ---: | ---: |
| Acrylic partial denture | Per arch | \$900–\$1,800 | \$1,050 |
| Cast-metal partial denture | Per arch | \$1,400–\$2,800 | \$1,700 |
| Complete denture | Per arch | \$1,000–\$2,500 | \$1,250 |
| Implant body placement | Per implant | \$1,500–\$3,000 | Quote |
| Implant abutment and crown | Per tooth | \$1,500–\$3,000 | Quote |
| Complete single-tooth implant | Complete course | \$3,000–\$6,000 | Quote |
| Nitrous oxide | Encounter | \$75–\$175 | \$100 |
| IV moderate sedation | Encounter/time | \$400–\$1,200 | Quote |

Consumer cash-price compilations show similarly wide ranges, including roughly \$100–\$400 for fillings, \$150–\$600 for extractions, \$700–\$1,500 for root canals, and \$950–\$2,100 for crowns. They support these planning ranges but do not replace local quotes. [DentalPrice](https://www.dentalprice.org/) · [CareCredit](https://www.carecredit.com/dentistry/costs/)

### Compare complete treatments

| Treatment | Components often omitted from the headline price |
| --- | --- |
| Crown | Exam, imaging, buildup, temporary, laboratory work, placement |
| Root canal | Imaging, testing, treatment, temporary, buildup, final crown |
| Implant | Imaging, extraction, graft, implant, abutment, crown, follow-up |
| Denture | Exam, impressions, extractions, immediate appliance, adjustments, relines |
| Periodontal care | Measurements, quadrants, anesthesia, maintenance |

The plan should approve explicit bundles and prevent duplicated payment when integral services are separated into additional billing lines.

## Appendix B: Data needed for renewal

Track any-service utilization, preventive visits, nonpreventive events, approved cost per event, individual and family cap exhaustion, charges above caps, balance bills, negotiation savings, and claim lag.

The most useful renewal input is the **uncapped claim distribution**, not merely total paid claims. It reveals exactly what the higher option would have paid and lets both options be priced from the same experience.

National data provide a reasonableness check: ADA reports 45% of the population had a dental visit in 2022; CDC reports 65.5% of adults had an exam or cleaning in 2023. Enrolled dental-plan populations may use more care, so insured experience should control when available. [ADA](https://www.ada.org/resources/research/health-policy-institute/dental-care-market) · [CDC](https://www.cdc.gov/nchs/fastats/dental.htm)

> **The human-readable document explains the promise. The product store structures it. The claims specification tells the system exactly how to pay it.**

## Primary references

- [29 CFR §2590.732(c)(3)](https://www.law.cornell.edu/cfr/text/29/2590.732)
- [DOL federal health-benefit compliance guide](https://www.dol.gov/sites/dolgov/files/EBSA/about-ebsa/our-activities/resource-center/publications/compliance-assistance-guide.pdf)
- [DOL group-health claims guidance](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/group-health-and-disability-plans-benefit-claims-procedure-regulation)
- [ADA Health Policy Institute](https://www.ada.org/resources/research/health-policy-institute/dental-care-market)
- [CDC oral and dental health](https://www.cdc.gov/nchs/fastats/dental.htm)
