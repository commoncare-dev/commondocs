---
id: product.dpc-companion.vector-store
title: DPC Companion — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/dpc-companion/human-readable.md
metadata_document: plan-structures/dpc-companion/metadata.yaml
source_commit: 3248ad43c9a7d8964f35e9e5332ce12fe7a25fc0
source_sha256: e8a9c37579d48e973d4a52278b017c3070f420882c9b23092b5c2d915c785c66
metadata_sha256: 312d1ad714384c8bf99aa22418a4cb13ba807ddffa26d7f5515e406746646681
generation_method: deterministic-markdown-conversion
canonical_source: false
source_status: draft
source_version: 1.0
jurisdiction: United States
owner: CommonCare
last_reviewed: 2026-11-06
---

# DPC Companion — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/dpc-companion/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

<!-- record_id: product.dpc-companion.dpc-companion -->
## DPC Companion
> Retrieval context: DPC Companion — DPC Companion

> One DPC election. One payment experience. The appropriate qualified-benefit treatment behind it.

DPC Companion (`dpc-companion`) is a coverage concept that lets an employee select direct primary care (**DPC**) as an independent option alongside the rest of the employee's health benefits. The plan can apply an employer allowance, an employee's own pre-tax contributions, or both toward that selection.

The employee is choosing a provider and a coverage option. Whether the payment is legally a Health FSA benefit, an integrated HRA benefit, an excepted-benefit HRA benefit, or an ICHRA reimbursement depends on the underlying plan terms, funding rights, and the employee's other coverage and elections. An eligible employee may also use an HSA.

CommonCare makes these arrangements turn-key through its existing enrollment and provider-payment structure. Employees can select DPC through the same process used for other options, and CommonCare can group employee payments to the provider. The legal classification of those payments can differ among employees without requiring a different DPC product or enrollment experience.

The purpose of this structure is to explain how the same DPC election can fit within different qualified benefits. DPC Companion does not create another statutory account category.

<!-- record_id: product.dpc-companion.1-the-coverage-election-and-the-funding-classification-answer-different- -->
## 1. The coverage election and the funding classification answer different questions
> Retrieval context: DPC Companion — DPC Companion > 1. The coverage election and the funding classification answer different questions

**The coverage election answers:** Which DPC option does the employee want?

**The funding classification answers:** Which legally available benefit dollars can pay for it?

An employer can describe a common allowance to employees while its legal allocation differs according to their elections and circumstances. This is the same distinction established by [CommonFunds](../common-funds/human-readable.md): one participant experience can contain several legally distinct benefit components.

For DPC, that means:

- An employee's DPC charge may be paid from the Health FSA portion of CommonFunds.
- Another employee's identical DPC charge may be paid from an HRA portion.
- A qualifying ICHRA participant may use the ICHRA balance available for eligible medical expenses.
- An employee may elect additional salary reduction into the Health FSA to cover some or all of the cost.
- A payment may combine eligible portions of these benefits without reimbursing the same expense twice.

The employer's budget label does not determine the result. A credit that an employee could take as taxable cash but elects into the Health FSA is salary reduction; a genuinely employer-only HRA contribution is different. The actual rights attached to the dollar control. [IRS Notice 2002-45, Parts I–IV](https://www.irs.gov/pub/irs-drop/n-02-45.pdf); [26 CFR 54.9831-1(c)(3)(v)(B)](https://www.ecfr.gov/current/title-26/section-54.9831-1).

This flexibility comes from establishing the appropriate benefits and allocation terms. An amount already committed to an ICHRA does not become an FSA contribution simply because the employee cannot use the ICHRA. CommonFunds supplies the allowance-classification framework; DPC Companion supplies a coverage choice those benefits can pay for.

<!-- record_id: product.dpc-companion.2-dpc-as-a-medical-expense -->
## 2. DPC as a medical expense
> Retrieval context: DPC Companion — DPC Companion > 2. DPC as a medical expense

The medical-care portion of a DPC arrangement can be an eligible expense under a benefit that permits that care. Section 213(d) supplies the general medical-care definition; the particular FSA, HRA, or ICHRA determines the reimbursable scope. DPC Companion does not turn every charge sold as a membership into an eligible medical expense. Nonmedical amenities and other excluded charges retain their own treatment. [26 USC 213(d)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section213&num=0&edition=prelim).

The distinction matters because an employee may view DPC as a coverage election while the legal payment is reimbursement for medical care. The name of the election does not make the fee an insurance premium. Health FSAs cannot reimburse insurance premiums, and HSA payments have specific DPC rules discussed below. [Proposed cafeteria-plan regulation 1.125-5(k), published in 2007](https://www.irs.gov/irb/2007-39_IRB); [IRS Notice 2026-5, Q&As 18–20](https://www.irs.gov/pub/irs-drop/n-26-05.pdf).

Sections 105 and 106 supply the employer health-benefit tax framework. For this concept, the reimbursement rules expressly recognize payment to a provider to discharge an employee's medical obligation as indirect reimbursement to the employee. Direct provider payment can therefore preserve the underlying reimbursement treatment. [26 CFR 1.105-2](https://www.ecfr.gov/current/title-26/section-1.105-2); [26 CFR 1.106-1](https://www.ecfr.gov/current/title-26/section-1.106-1).

Direct payment changes the payment experience while the underlying benefit's eligible-expense, substantiation, and reimbursement rules continue to apply.

<!-- record_id: product.dpc-companion.3-the-same-coverage-through-different-benefit-structures -->
## 3. The same coverage through different benefit structures
> Retrieval context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures

#### Enrolled in qualifying employer group major medical
<!-- record_id: product.dpc-companion.dpc-companion-3-the-same-coverage-through-different-benefit-structures.enrolled-in-qualifying-employer-group-major-medical; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures
- Employee's circumstances: Enrolled in qualifying employer group major medical
- Possible classification of the DPC payment: Integrated HRA; Health FSA; or a combination
- Legal basis: Group HRA integration and separate Health FSA rules

#### Participates in ICHRA with qualifying individual coverage or Medicare
<!-- record_id: product.dpc-companion.dpc-companion-3-the-same-coverage-through-different-benefit-structures.participates-in-ichra-with-qualifying-individual-coverage-or-medicare; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures
- Employee's circumstances: Participates in ICHRA with qualifying individual coverage or Medicare
- Possible classification of the DPC payment: Available ICHRA funds for eligible nonpremium care; eligible Health FSA funds where separately supported
- Legal basis: ICHRA coverage and expense-scope rules; CommonFunds' split allocation

#### Employer offers qualifying non-excepted group coverage, such as an appropriate MEC plan, without sponsoring group major medical
<!-- record_id: product.dpc-companion.dpc-companion-3-the-same-coverage-through-different-benefit-structures.employer-offers-qualifying-non-excepted-group-coverage-such-as-an-approp; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures
- Employee's circumstances: Employer offers qualifying non-excepted group coverage, such as an appropriate MEC plan, without sponsoring group major medical
- Possible classification of the DPC payment: Excepted-benefit HRA and/or excepted Health FSA
- Legal basis: Each component's supporting-coverage offer and benefit-limit tests

#### Elects personal pre-tax funding through an available Health FSA
<!-- record_id: product.dpc-companion.dpc-companion-3-the-same-coverage-through-different-benefit-structures.elects-personal-pre-tax-funding-through-an-available-health-fsa; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures
- Employee's circumstances: Elects personal pre-tax funding through an available Health FSA
- Possible classification of the DPC payment: Employee salary reduction, including elected cashable flex credits
- Legal basis: Section 125 elections and the Health FSA salary-reduction limit

#### Has an HSA and an eligible DPC expense
<!-- record_id: product.dpc-companion.dpc-companion-3-the-same-coverage-through-different-benefit-structures.has-an-hsa-and-an-eligible-dpc-expense; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures
- Employee's circumstances: Has an HSA and an eligible DPC expense
- Possible classification of the DPC payment: HSA distribution
- Legal basis: Section 223 and the DPC-specific rules effective in 2026


These are possible classifications, not interchangeable names for one unrestricted account. The following sections identify the facts that support each result.

<!-- record_id: product.dpc-companion.group-major-medical -->
### Group major medical
> Retrieval context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures > Group major medical

An employer with group major medical can make DPC an additional selection for its employees. Employer funding may be provided through an integrated HRA, and an available Health FSA may pay eligible DPC expenses as well.

The integrated HRA is not an EBHRA and does not acquire the EBHRA annual cap merely because it pays the same DPC provider. Its treatment depends on the applicable integration method, including actual qualifying group enrollment, permitted expense scope, and opt-out rights. Some integration methods restrict reimbursement to expenses that would not include a separate DPC membership; the chosen method and plan terms therefore matter. [26 CFR 54.9815-2711(d)](https://www.ecfr.gov/current/title-26/section-54.9815-2711).

The Health FSA has its own classification. Offering group major medical does not create a general exception for a non-excepted “integrated FSA.” Notice 2013-54, Q&A 7 explains the market-reform problem for a non-excepted Health FSA. DPC Companion uses an excepted Health FSA where those conditions are satisfied. [IRS Notice 2013-54, Q&As 4–8](https://www.irs.gov/pub/irs-drop/n-13-54.pdf).

<!-- record_id: product.dpc-companion.ichra-coverage-qualification-and-allowance-availability -->
### ICHRA: coverage qualification and allowance availability
> Retrieval context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures > ICHRA: coverage qualification and allowance availability

An ICHRA can reimburse eligible DPC medical expenses if its terms permit nonpremium care and the employee satisfies its coverage conditions. A premium-only ICHRA cannot pay DPC. An ICHRA offering medical-expense reimbursement need not pay the employee's insurance premium before it may pay other eligible expenses; what matters is qualifying coverage, the adopted expense scope, and available reimbursement rights. [26 CFR 54.9802-4(a), (c)(1), and (c)(5)](https://www.ecfr.gov/current/title-26/section-54.9802-4).

This creates the distinction behind the allowance example:

- If the employee lacks ICHRA-qualifying coverage, the ICHRA amount is unavailable for DPC.
- If the employee has qualifying coverage and available ICHRA funds, the same DPC election may be paid from that benefit.
- If the employee's insurance premium uses part of the allowance, only the remaining available amount can fund other eligible expenses.
- If qualifying coverage is obtained independently and the employee does not need the ICHRA for premium reimbursement, more of the allowance may remain for DPC and other eligible care.

**Spouse coverage requires a precise distinction.** Enrollment as a dependent in a spouse's qualifying individual policy can satisfy the individual-coverage requirement. Coverage through a spouse's employer group plan alone does not qualify the employee for ICHRA reimbursement. Qualifying Medicare coverage is another permitted integration basis. A group-plan integrated HRA is a different arrangement with different requirements. [26 CFR 54.9802-4(c)(1) and (e)](https://www.ecfr.gov/current/title-26/section-54.9802-4); [26 CFR 54.9815-2711(d)](https://www.ecfr.gov/current/title-26/section-54.9815-2711).

CommonFunds can pair an ICHRA with a separately qualifying Health FSA. The FSA and ICHRA portions retain their own conditions; an EBHRA is not added for the same ICHRA recipient. The Health FSA's excepted-benefit requirements and the ICHRA class rules must both be satisfied. The product concept does not treat an individual insurance policy as a substitute for every supporting group-coverage requirement. [26 CFR 54.9831-1(c)(3)(v) and (viii)](https://www.ecfr.gov/current/title-26/section-54.9831-1); [26 CFR 54.9802-4(c)(2)](https://www.ecfr.gov/current/title-26/section-54.9802-4).

<!-- record_id: product.dpc-companion.small-group-without-group-major-medical -->
### Small group without group major medical
> Retrieval context: DPC Companion — DPC Companion > 3. The same coverage through different benefit structures > Small group without group major medical

DPC can also be an independent election where the employer does not offer group major medical. CommonFunds supplies the excepted-benefit approach: an EBHRA, an excepted Health FSA, or both, alongside the qualifying employer group coverage offer.

An appropriate non-excepted, non-account-based group MEC plan can support the required offer. For the EBHRA, the same sponsor must make that other coverage available. The Health FSA applies its separate class-level offer test. These are offer requirements; enrollment in that supporting coverage is not required solely to establish the excepted status. DPC membership itself is not the supporting coverage. [26 CFR 54.9831-1(c)(3)(v)(A) and (viii)(A)](https://www.ecfr.gov/current/title-26/section-54.9831-1).

EBHRA allocations remain subject to the indexed EBHRA limit, and the Health FSA retains its own salary-reduction and maximum-benefit rules. A common DPC allowance does not combine those statutory limits into a new DPC limit. Where Marketplace premium tax credits matter, the separate [Premium Tax Credit Plan](../ptc-plan/human-readable.md) explains the significance of offering versus enrolling in employer coverage.

<!-- record_id: product.dpc-companion.4-how-commonfunds-applies-the-allowance -->
## 4. How CommonFunds applies the allowance
> Retrieval context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance

DPC Companion relies on [CommonFunds' classification and calculation](../common-funds/human-readable.md#1-classify-the-dollar-before-applying-a-limit). The same participant-facing allowance may support different allocations because its funding rights and the employee's other choices differ.

#### Genuinely employer-only funding on an excepted pathway
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance.genuinely-employer-only-funding-on-an-excepted-pathway; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance
- Source or right: Genuinely employer-only funding on an excepted pathway
- Classification relevant to DPC: EBHRA first within its applicable cap; eligible employer Health FSA funding where permitted

#### Employer amount established under an ICHRA
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance.employer-amount-established-under-an-ichra; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance
- Source or right: Employer amount established under an ICHRA
- Classification relevant to DPC: ICHRA, available for DPC only while its coverage, expense, and availability conditions are satisfied

#### Cashable employer flex credit elected into the Health FSA
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance.cashable-employer-flex-credit-elected-into-the-health-fsa; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance
- Source or right: Cashable employer flex credit elected into the Health FSA
- Classification relevant to DPC: Employee salary reduction, even though the employer originally budgeted the credit

#### Employee's own additional payroll election into the Health FSA
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance.employee-s-own-additional-payroll-election-into-the-health-fsa; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance
- Source or right: Employee's own additional payroll election into the Health FSA
- Classification relevant to DPC: Employee salary reduction, subject to the same applicable salary-reduction limit

#### True employer Health FSA contribution
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance.true-employer-health-fsa-contribution; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance
- Source or right: True employer Health FSA contribution
- Classification relevant to DPC: Employer FSA funding within the applicable maximum-benefit test


The source distinction has practical consequences. For an excepted Health FSA, let `S` be the employee's total salary-reduction election, including cashable flex elected into the FSA:

```text
maximum total Health FSA benefit = max(2 × S, S + $500)
maximum true employer FSA contribution = max(S, $500)
```

This is one component's financial test, not the entire qualification test. It explains why an employee's FSA election can increase the capacity for employer FSA funding. It does not convert employer HRA dollars into salary reduction or waive the supporting-coverage requirement. [26 CFR 54.9831-1(c)(3)(v)](https://www.ecfr.gov/current/title-26/section-54.9831-1).

<!-- record_id: product.dpc-companion.an-identical-dpc-selection-different-underlying-dollars -->
### An identical DPC selection, different underlying dollars
> Retrieval context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance > An identical DPC selection, different underlying dollars

Assume employees select the same DPC option costing $100 a month. These examples illustrate separate permissible designs; they do not imply that every benefit is simultaneously available to every employee.

#### Group-plan participant with an eligible integrated HRA benefit
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance-an-identical-dpc-s.group-plan-participant-with-an-eligible-integrated-hra-benefit; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance > An identical DPC selection, different underlying dollars
- Example: Group-plan participant with an eligible integrated HRA benefit
- What the employee sees: DPC selected; employer allowance applied
- What the payment legally represents: $100 of integrated-HRA reimbursement

#### ICHRA participant with qualifying coverage and at least $100 available for eligible nonpremium care
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance-an-identical-dpc-s.ichra-participant-with-qualifying-coverage-and-at-least-100-available-fo; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance > An identical DPC selection, different underlying dollars
- Example: ICHRA participant with qualifying coverage and at least $100 available for eligible nonpremium care
- What the employee sees: The same DPC selection and allowance application
- What the payment legally represents: $100 of ICHRA reimbursement

#### CommonFunds participant with $60 available from an eligible HRA portion and $40 payable from the Health FSA
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance-an-identical-dpc-s.commonfunds-participant-with-60-available-from-an-eligible-hra-portion-a; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance > An identical DPC selection, different underlying dollars
- Example: CommonFunds participant with $60 available from an eligible HRA portion and $40 payable from the Health FSA
- What the employee sees: The same DPC selection and one $100 provider payment
- What the payment legally represents: $60 of HRA reimbursement plus $40 of Health FSA benefit

#### Employee covers the full cost through a valid $1,200 annual Health FSA election
<!-- record_id: product.dpc-companion.dpc-companion-4-how-commonfunds-applies-the-allowance-an-identical-dpc-s.employee-covers-the-full-cost-through-a-valid-1-200-annual-health-fsa-el; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 4. How CommonFunds applies the allowance > An identical DPC selection, different underlying dollars
- Example: Employee covers the full cost through a valid $1,200 annual Health FSA election
- What the employee sees: The same DPC selection, funded through payroll
- What the payment legally represents: Health FSA salary reduction and benefit payments under its coverage rules


The legal component determines availability. The Health FSA generally makes its elected annual benefit available under uniform coverage; an HRA follows its own adopted availability terms. A common allowance display does not make those timing rules identical. [Proposed cafeteria-plan regulation 1.125-5(d)](https://www.irs.gov/irb/2007-39_IRB); [IRS Notice 2002-45](https://www.irs.gov/pub/irs-drop/n-02-45.pdf).

DPC Companion therefore adds a use for the allowance, rather than another allowance engine. CommonFunds remains the source for detailed allocation, affordability, limits, deductible treatment, and balance calculations.

<!-- record_id: product.dpc-companion.5-hsa-as-another-funding-avenue -->
## 5. HSA as another funding avenue
> Retrieval context: DPC Companion — DPC Companion > 5. HSA as another funding avenue

An employee may use an HSA for eligible DPC fees. Employer HSA contributions and employee HSA salary reductions can support that choice when the employee is eligible to contribute. Existing HSA funds may remain available for qualified expenses even after contribution eligibility ends. HSA assets belong to the employee; they are not another employer HRA balance. [26 USC 223(b)–(d)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section223&num=0&edition=prelim).

Beginning in 2026, section 223 provides a DPC exception for HSA contribution eligibility. The arrangement must meet the statutory primary-care, practitioner, fixed-fee, and service restrictions. The aggregate fee threshold is $150 a month, or $300 where the multi-person rule applies, for 2026; later years are indexed. HSA expense reimbursement has no corresponding fee ceiling for an otherwise qualifying DPC arrangement. [26 USC 223(c)(1)(E) and (d)(2)(C)(v)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section223&num=0&edition=prelim); [IRS Notice 2026-5, Q&As 11–20](https://www.irs.gov/pub/irs-drop/n-26-05.pdf).

HSA contribution eligibility also depends on qualifying HDHP coverage and other coverage restrictions. MEC status alone is insufficient, and a general-purpose FSA or HRA may prevent contributions even when the DPC arrangement qualifies. The DPC exception does not authorize an HDHP itself to provide ordinary DPC benefits before its deductible. An expense already paid through an employer benefit cannot also be reimbursed from the HSA. [26 USC 223(c)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section223&num=0&edition=prelim); [IRS Notice 2026-5, Q&As 15–18](https://www.irs.gov/pub/irs-drop/n-26-05.pdf).

<!-- record_id: product.dpc-companion.6-relationship-to-the-plan -->
## 6. Relationship to the Plan
> Retrieval context: DPC Companion — DPC Companion > 6. Relationship to the Plan

DPC Companion is the independent coverage election. The underlying adopted benefit provisions establish how its expense is funded and treated. The core Plan and applicable FSA, HRA, or ICHRA documents continue to govern eligibility, contribution rights, expense scope, claims, and continuation.

CommonCare handles provider agreements, enrollment, and grouped provider payments through its existing structure. A separate DPC-specific patient agreement process is not part of this concept. Grouping several employees' payments does not pool their benefit rights or change the classification of any employee's dollars.

The classification follows the facts and adopted terms for the affected employee and period. It is not fixed by the DPC product name, and it does not change merely because the employee interface looks the same.

<!-- record_id: product.dpc-companion.7-citation-backbone -->
## 7. Citation backbone
> Retrieval context: DPC Companion — DPC Companion > 7. Citation backbone

Reviewed November 6, 2026. The mapping above is CommonDocs' product-design application of these authorities.

#### What is medical care?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.what-is-medical-care; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: What is medical care?
- Primary authority: [26 USC 213(d)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section213&num=0&edition=prelim)

#### Can payment go directly to the medical provider?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.can-payment-go-directly-to-the-medical-provider; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: Can payment go directly to the medical provider?
- Primary authority: [26 CFR 1.105-2](https://www.ecfr.gov/current/title-26/section-1.105-2); employer contribution treatment under [26 CFR 1.106-1](https://www.ecfr.gov/current/title-26/section-1.106-1)

#### What distinguishes employer HRA funding from salary reduction?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.what-distinguishes-employer-hra-funding-from-salary-reduction; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: What distinguishes employer HRA funding from salary reduction?
- Primary authority: [IRS Notice 2002-45, Parts I–IV](https://www.irs.gov/pub/irs-drop/n-02-45.pdf)

#### When can a group-plan HRA be integrated?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.when-can-a-group-plan-hra-be-integrated; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: When can a group-plan HRA be integrated?
- Primary authority: [26 CFR 54.9815-2711(d)](https://www.ecfr.gov/current/title-26/section-54.9815-2711); [Notice 2013-54, Q&As 4–6](https://www.irs.gov/pub/irs-drop/n-13-54.pdf)

#### What coverage supports ICHRA reimbursement?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.what-coverage-supports-ichra-reimbursement; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: What coverage supports ICHRA reimbursement?
- Primary authority: [26 CFR 54.9802-4(c)(1), (c)(5), and (e)](https://www.ecfr.gov/current/title-26/section-54.9802-4)

#### What makes a Health FSA or EBHRA excepted?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.what-makes-a-health-fsa-or-ebhra-excepted; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: What makes a Health FSA or EBHRA excepted?
- Primary authority: [26 CFR 54.9831-1(c)(3)(v) and (viii)](https://www.ecfr.gov/current/title-26/section-54.9831-1)

#### Why is a non-excepted FSA not automatically integrated?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.why-is-a-non-excepted-fsa-not-automatically-integrated; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: Why is a non-excepted FSA not automatically integrated?
- Primary authority: [Notice 2013-54, Q&A 7](https://www.irs.gov/pub/irs-drop/n-13-54.pdf)

#### What governs employee cafeteria-plan contributions?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.what-governs-employee-cafeteria-plan-contributions; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: What governs employee cafeteria-plan contributions?
- Primary authority: [26 USC 125, including subsection (i)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section125&num=0&edition=prelim); [2007 proposed cafeteria-plan regulations 1.125-5 and 1.125-6](https://www.irs.gov/irb/2007-39_IRB)

#### How does DPC interact with HSA eligibility and spending?
<!-- record_id: product.dpc-companion.dpc-companion-7-citation-backbone.how-does-dpc-interact-with-hsa-eligibility-and-spending; record_type: table-row -->
- Context: DPC Companion — DPC Companion > 7. Citation backbone
- Question: How does DPC interact with HSA eligibility and spending?
- Primary authority: [26 USC 223](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section223&num=0&edition=prelim); [Notice 2026-5, Q&As 11–20](https://www.irs.gov/pub/irs-drop/n-26-05.pdf)


The 2007 cafeteria-plan provisions cited here are proposed regulations, not final regulations; their permitted reliance status must be distinguished from enacted law. The related CommonDocs concepts provide the broader analysis: [CommonFunds](../common-funds/human-readable.md), [CHOICE ICHRA](../choice-ichra/human-readable.md), [CommonFunded](../common-funded/human-readable.md), and [Basic MEC](../self-funded-mec/basic-mec/human-readable.md).
