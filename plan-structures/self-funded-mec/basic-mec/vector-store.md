---
id: plan.self-funded-basic-mec.vector-store
title: Self-Funded Basic MEC Plan — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/self-funded-mec/basic-mec/human-readable.md
source_commit: 60e70311beb1445caf6faea4c5bd6c60ac8e1a5b
source_sha256: 7f01eda26c6dcb0aacdb96515d3ad20702fc1d67d8ffc5bcfa397de05510cd8d
generation_method: deterministic-markdown-conversion
canonical_source: false
jurisdiction: United States
last_reviewed: 2026-09-08
---

# Self-Funded Basic MEC Plan — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/self-funded-mec/basic-mec/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan -->
## Self-Funded Basic MEC Plan
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan

> **A narrowly focused, self-funded group health plan designed to provide minimum essential coverage, deliver required preventive care, and—when structured correctly - support HSA eligibility at a low monthly cost.**

<!-- record_id: plan.self-funded-basic-mec.primary-purpose -->
## Primary Purpose
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > Primary Purpose
The primary purpose of this plan is to satsify the minimum requirments for offering a group health plan AND to create HSA eligibility - something that otherwise often requires sacrificing extra premium dollars to inefficient or trivial plan offerings. 

It is good to remember that a participant looking for HSA eligibility can sign up just a single participant in the plan to reduce premiums. A plan can also restrict enrollment to employee participants if desired for simplicity. 

Secondarily this plan also offers great access to basic healthcare on a tax-free basis, fully self fundable by even small employers due to fully definable risk because the covered services are finite, priceable, and measurable.

<!-- record_id: plan.self-funded-basic-mec.at-a-glance -->
## At a glance
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance

#### Is this a group health plan?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.is-this-a-group-health-plan; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Is this a group health plan?
- Answer: Yes

#### Is it minimum essential coverage?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.is-it-minimum-essential-coverage; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Is it minimum essential coverage?
- Answer: Generally, yes, when properly established as an eligible employer-sponsored self-funded group health plan

#### Must it comply with the ACA market reforms?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.must-it-comply-with-the-aca-market-reforms; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Must it comply with the ACA market reforms?
- Answer: Yes, unless a specific exception applies

#### Must it cover §2713 preventive services without cost sharing?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.must-it-cover-2713-preventive-services-without-cost-sharing; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Must it cover §2713 preventive services without cost sharing?
- Answer: Yes, if it is non-grandfathered

#### Must it provide minimum value?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.must-it-provide-minimum-value; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Must it provide minimum value?
- Answer: No. MEC and minimum value are separate standards

#### Is it major medical coverage?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.is-it-major-medical-coverage; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Is it major medical coverage?
- Answer: No, not in the design described here

#### Does it automatically make someone HSA-eligible?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.does-it-automatically-make-someone-hsa-eligible; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Does it automatically make someone HSA-eligible?
- Answer: No. The coverage must also satisfy the federal HDHP rules, and the person must have no disqualifying other coverage

#### Can it still be useful?
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-at-a-glance.can-it-still-be-useful; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance
- Question: Can it still be useful?
- Answer: Yes. It can provide valuable basic care, satisfy important regulatory objectives, and serve as an HSA-compatible foundation at low cost


> [!WARNING]
> This is a product-design reference, not a finalized plan document or a legal opinion. Implentation requires coordination with the full group sponsored plan.

<!-- record_id: plan.self-funded-basic-mec.appendix-a-lists-an-inventory-of-required-preventive-services-last-updat -->
### Appendix A: Lists an inventory of required preventive services last updated September 2026
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance > Appendix A: Lists an inventory of required preventive services last updated September 2026
<!-- record_id: plan.self-funded-basic-mec.appendix-b-gives-pricing-recommendations-for-premiums-on-a-sef-funded-ba -->
### Appendix B: Gives pricing recommendations for premiums on a sef-funded basis
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > At a glance > Appendix B: Gives pricing recommendations for premiums on a sef-funded basis

<!-- record_id: plan.self-funded-basic-mec.the-design-thesis -->
## The design thesis
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > The design thesis

Not every health plan can (or should) try to cover everything.

Expansive major medical coverage protects against a broad range of healthcare costs, but it cannot also be extraordinarily inexpensive. A basic MEC has a different job. It is laser-focused on:

1. Establishing minimum essential coverage;
2. Complying with the federal market reforms that apply to the plan;
3. Providing required preventive care without cost sharing;
4. Creating useful access to selected, predictable forms of routine care; and
5. When deliberately designed as a qualifying HDHP, allowing eligible participants to contribute to an HSA at the minimum premium cost possible.

The goal is not to deny valid care or valid claims. The goal is to define the plan's promise precisely, fulfill that promise reliably, and keep its cost proportional to its deliberately narrow purpose.

<!-- record_id: plan.self-funded-basic-mec.a-word-on-self-funding -->
## A word on self-funding
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > A word on self-funding

This plan is self-fundable even for small employers with little or no experience in self-funding because its required benefits are limited, identifiable, and priceable. The remaining outliers are not catastrophically expensive.

This document discusses compliance in detail, which can feel heavy, because the plan must work as promised. That language should not make self-funding appear more forbidding than it is.

Good faith is a useful operating principle: understand the requirements, create a reasonable structure, communicate it accurately, pay valid claims, and respond quickly when the structure fails someone in practice.

Network adequacy illustrates the point. A network may look sufficient on paper yet fail because a listed provider is unavailable, too distant, unable to perform the service, or unwilling to accept the approved price. Insurance companies thrive on making their networks and processes seem expansive, but that expanse is often impersonal—and even useless.

Many compliance problems become serious because a plan is unresponsive, not because its original design failed to anticipate every possible circumstance. A responsive plan can identify practical gaps, resolve individual cases, document what happened, and improve its process.

This document provides means of technical compliance that are practically reachable. Federal regulation of group health plans is not generally a preclearance regime in which an enforcement team collects every plan document and searches for theoretical network inadequacies before the plan can operate. Enforcement more often arises from real complaints, reporting, audits, investigations, and evidence of fraud or actual harm.

You can do this. Much of the law is written to constrain circumstances in which a behemoth insurer or administrator might squash an individual participant. In real life, you can be responsive and reasonable—and that operating posture avoids many of the failures that produce adverse outcomes.


<!-- record_id: plan.self-funded-basic-mec.1-mec-means-minimum-essential-coverage -->
## 1. MEC means minimum essential coverage
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 1. MEC means minimum essential coverage

**MEC** is short for **minimum essential coverage**. It is a legal classification under the Affordable Care Act - not a statement that a plan is comprehensive, generous, or equivalent to major medical insurance.

An eligible employer-sponsored plan is generally MEC. The ACA regulations do not permit offering non excepted (excepted is a specific set of benefit concepts) plans of any kind that don't meet the market reform requirements. Therefore, any legitimate plan offered is MEC. [CMS MEC guidance](https://www.cms.gov/CCIIO/Resources/Regulations-and-Guidance/Downloads/mec-guidance-10-31-2013.pdf)

<!-- record_id: plan.self-funded-basic-mec.individual-coverage-mandates -->
### Individual coverage mandates
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 1. MEC means minimum essential coverage > Individual coverage mandates

The federal individual shared-responsibility payment has been reduced to zero, but some states maintain their own coverage mandates. California, for example, generally requires residents and their dependents to have MEC for each month, qualify for an exemption, or pay a state individual shared-responsibility penalty. [California Franchise Tax Board](https://www.ftb.ca.gov/file/personal/filing-situations/health-care-mandate/personal.html)

A properly structured employer-sponsored MEC can therefore have concrete value even when it is not major medical coverage: enrollment can satisfy the participant's MEC requirement.

<!-- record_id: plan.self-funded-basic-mec.employer-shared-responsibility-4980h-a-commonly-called-penalty-a -->
### Employer shared responsibility: §4980H(a), commonly called Penalty A
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 1. MEC means minimum essential coverage > Employer shared responsibility: §4980H(a), commonly called Penalty A

The employer shared-responsibility rules apply only to an **applicable large employer**, generally an employer that averaged at least 50 full-time employees, including full-time equivalents, during the preceding calendar year.

An applicable large employer can face a payment under Internal Revenue Code §4980H(a) for a month when:

1. It fails to offer MEC to at least 95% of its full-time employees and their dependents;
2. At least one full-time employee enrolls in Marketplace coverage; and
3. That employee is allowed a premium tax credit.

When triggered, the §4980H(a) calculation is generally based on the employer's full-time population—not merely the one employee who received the tax credit—subject to the statutory reduction and current indexed amount. This is why a low-cost MEC offer can be important to an applicable large employer even when the plan does not provide minimum value. [IRS employer shared-responsibility Q&A](https://www.irs.gov/affordable-care-act/employers/questions-and-answers-on-employer-shared-responsibility-provisions-under-the-affordable-care-act)

> [!IMPORTANT]
> For Penalty A, the operative offer is MEC to at least 95% of full-time employees and their dependents. An offer to spouses is not part of that particular federal requirement.

An employee must receive an **effective opportunity to enroll or decline** at least once for each plan year. Mandatory enrollment is subject to special rules and should not be assumed to count as an offer merely because the employer placed an employee in coverage.

<!-- record_id: plan.self-funded-basic-mec.2-mec-is-not-minimum-value -->
## 2. MEC is not minimum value
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 2. MEC is not minimum value

MEC answers one question:

> **Is this qualifying coverage for the ACA provisions that use the minimum-essential-coverage standard?**

Minimum value answers another:

> **Does this employer plan provide a sufficiently broad and substantial level of coverage?**

A plan generally provides minimum value when it pays at least 60% of the total allowed cost of benefits expected for a standard population **and** provides substantial coverage of inpatient hospitalization and physician services. A basic MEC that intentionally excludes broad hospital and physician coverage will ordinarily not provide minimum value. [IRS minimum-value guidance](https://www.irs.gov/affordable-care-act/employers/minimum-value-and-affordability)

#### Minimum essential coverage
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-2-mec-is-not-minimum-value.minimum-essential-coverage; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 2. MEC is not minimum value
- Standard: Minimum essential coverage
- What it measures: Whether coverage qualifies as MEC
- Does this design target it?: **Yes**

#### ACA market-reform compliance
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-2-mec-is-not-minimum-value.aca-market-reform-compliance; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 2. MEC is not minimum value
- Standard: ACA market-reform compliance
- What it measures: Whether the plan obeys applicable federal coverage rules
- Does this design target it?: **Yes**

#### Minimum value
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-2-mec-is-not-minimum-value.minimum-value; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 2. MEC is not minimum value
- Standard: Minimum value
- What it measures: Breadth and actuarial value, including substantial hospital and physician coverage
- Does this design target it?: **No**

#### Major medical protection
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-2-mec-is-not-minimum-value.major-medical-protection; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 2. MEC is not minimum value
- Standard: Major medical protection
- What it measures: Broad protection from routine and catastrophic medical expense
- Does this design target it?: **No**

#### HSA eligibility
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-2-mec-is-not-minimum-value.hsa-eligibility; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 2. MEC is not minimum value
- Standard: HSA eligibility
- What it measures: Whether the person has qualifying HDHP coverage and no disqualifying coverage
- Does this design target it?: **Only when separately and deliberately designed for it**


Calling all five concepts “ACA compliance” obscures the actual design choices. A plan can be MEC and market-reform compliant without providing minimum value. It can also be MEC without being HSA-compatible.

<!-- record_id: plan.self-funded-basic-mec.3-penalty-b-is-a-separate-employer-decision -->
## 3. Penalty B is a separate employer decision
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 3. Penalty B is a separate employer decision

Internal Revenue Code §4980H(b), commonly called **Penalty B**, concerns affordability and minimum value. It is not the same exposure as Penalty A.

An applicable large employer may face a §4980H(b) payment for a particular full-time employee when:

1. The employee enrolls in Marketplace coverage;
2. The employee is allowed a premium tax credit; and
3. The employer failed to offer that employee affordable coverage providing minimum value.

Unlike Penalty A, Penalty B is calculated employee by employee and month by month, and total §4980H(b) liability is capped by the amount that would apply under §4980H(a). The IRS calls both amounts **employer shared-responsibility payments**. [IRS employer shared-responsibility Q&A](https://www.irs.gov/affordable-care-act/employers/questions-and-answers-on-employer-shared-responsibility-provisions-under-the-affordable-care-act)

This makes Penalty B a financial design consideration rather than proof that every plan offered by an applicable large employer must itself provide minimum value. An employer can evaluate separately:

- Whether to offer MEC broadly enough to address Penalty A;
- Whether to offer a separate minimum-value option;
- Which employees could qualify for premium tax credits;
- The expected §4980H(b) exposure;
- The cost of providing minimum-value coverage; and
- The workforce and participant consequences of each design.

> [!CAUTION]
> “Employee-specific” does not mean “unlikely” or “safe to ignore.” An employee offered only non-minimum-value MEC may remain eligible for a premium tax credit if the other eligibility rules are met. If they obtain said credit, penalty B will apply if the employer is an ALE (50+ FTEs) and they were not also offered coverage that meets minimum value actuarially, which this plan does not. This penalty only applies to employees who actually obtain said credits, which may or may not occur. [HealthCare.gov Employer Coverage Tool](https://www.healthcare.gov/downloads/employer-coverage-tool.pdf)

CommonCare does not take the position that employers should avoid minimum-value coverage. It takes the position that minimum value is a separate plan-design and financial question that should be understood and modeled accurately rather than conflated with MEC.

<!-- record_id: plan.self-funded-basic-mec.4-a-self-funded-mec-is-still-a-real-group-health-plan -->
## 4. A self-funded MEC is still a real group health plan
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 4. A self-funded MEC is still a real group health plan

An employer does not escape the ACA's group-market reforms merely because:

- The plan is self-funded;
- The employer has fewer than 50 full-time-equivalent employees;
- The employer was not required to offer a plan;
- The benefits are narrow; or
- The employer calls the arrangement a reimbursement, stipend, or access program.

The 50-FTE threshold determines whether the employer shared-responsibility provisions apply. It is not a general exemption from the rules governing a group health plan the employer chooses to establish.

A non-grandfathered self-funded group health plan generally must comply with applicable federal market reforms, including PHS Act §2713. Certain arrangements are excepted benefits, and narrow exceptions exist—for example, some rules do not apply to a plan with fewer than two current employees—but those exceptions must be established rather than assumed. [DOL ACA implementation guidance](https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/affordable-care-act/for-employers-and-advisers/aca-implementation-faqs)

Other federal obligations may also apply, depending on the sponsor and plan, including ERISA plan-document, fiduciary, claims, disclosure, reporting, HIPAA, COBRA, PCORI-fee, and ACA information-reporting rules. State rules require separate analysis, especially for governmental plans, church plans, multiple-employer arrangements, stop-loss coverage, providers, administrators, and state individual mandates.

<!-- record_id: plan.self-funded-basic-mec.5-the-core-coverage-requirement-phs-act-2713 -->
## 5. The core coverage requirement: PHS Act §2713
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713

For this product, §2713 is not a footnote. It defines the central covered benefit.

> [!NOTE]
> See the companion [Preventive Services Inventory and Cost Model](./preventive-services-inventory.md) for a human-readable enumeration of current services, likely recipients, and working cash or 120%-of-Medicare procurement targets.

A non-grandfathered group health plan must cover specified recommended preventive items and services **without cost sharing**. No cost sharing means no deductible, copayment, or coinsurance when the service is furnished consistently with the applicable recommendation and the plan's lawful network and medical-management rules.

<!-- record_id: plan.self-funded-basic-mec.where-the-preventive-schedule-comes-from -->
### Where the preventive schedule comes from
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Where the preventive schedule comes from

The required schedule is dynamic. It is assembled from four federal sources:

#### U.S. Preventive Services Task Force
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-5-the-core-coverage-requirement-phs-act-2713.u-s-preventive-services-task-force; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Where the preventive schedule comes from
- Source: U.S. Preventive Services Task Force
- Required recommendations or guidelines: Evidence-based items and services with an **A** or **B** rating

#### CDC Advisory Committee on Immunization Practices
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-5-the-core-coverage-requirement-phs-act-2713.cdc-advisory-committee-on-immunization-practices; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Where the preventive schedule comes from
- Source: CDC Advisory Committee on Immunization Practices
- Required recommendations or guidelines: Immunizations recommended for routine use and adopted by the CDC

#### HRSA-supported guidelines for infants, children, and adolescents
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-5-the-core-coverage-requirement-phs-act-2713.hrsa-supported-guidelines-for-infants-children-and-adolescents; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Where the preventive schedule comes from
- Source: HRSA-supported guidelines for infants, children, and adolescents
- Required recommendations or guidelines: Preventive care and screenings not already captured by the USPSTF framework

#### HRSA-supported Women's Preventive Services Guidelines
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-5-the-core-coverage-requirement-phs-act-2713.hrsa-supported-women-s-preventive-services-guidelines; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Where the preventive schedule comes from
- Source: HRSA-supported Women's Preventive Services Guidelines
- Required recommendations or guidelines: Evidence-informed preventive care and screenings for women not already captured by specified USPSTF recommendations


The plan must monitor these sources. New or revised recommendations generally become mandatory for plan years beginning on or after the date one year after the recommendation or guideline is issued. The effective schedule is therefore determined by both the recommendation date and the plan-year start date—not simply by whatever appears on a website on the date a claim arrives. [DOL preventive-services FAQ Part 64](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-64)

<!-- record_id: plan.self-funded-basic-mec.what-without-cost-sharing-includes -->
### What “without cost sharing” includes
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > What “without cost sharing” includes

Compliance is broader than paying a code labeled “preventive.” The plan must account for:

- The recommended item or service;
- Applicable age, sex, frequency, risk, and clinical criteria;
- Items and services integral to furnishing the preventive service, even when separately billed;
- The attending provider's determination when a recommendation turns on whether a person is high-risk or whether a service is appropriate;
- Prescription requirements for recommended over-the-counter items when applicable;
- Current coding and billing conventions; and
- Claims and appeals processes capable of correcting incorrectly adjudicated preventive claims.

The plan should maintain a versioned coverage matrix connecting each operative recommendation to eligibility logic, codes, frequency rules, integral services, network providers, prior-authorization rules if lawful, and claims instructions.

<!-- record_id: plan.self-funded-basic-mec.reasonable-medical-management -->
### Reasonable medical management
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Reasonable medical management

When the controlling recommendation or guideline does not specify the frequency, method, treatment, or setting, a plan may use **reasonable medical-management techniques** to determine coverage limitations. That authority is useful, but it is not unlimited.

For contraceptive coverage, for example, plans may generally use reasonable medical management within a specified contraceptive category when the guideline does not dictate the precise method or product. The plan must cover at least one form in each identified category without cost sharing and must maintain an accessible, transparent, and sufficiently expedient exceptions process when a participant's provider determines that a particular service or product is medically necessary. [DOL ACA FAQ Part 54](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-54)

<!-- record_id: plan.self-funded-basic-mec.network-and-price-controls -->
### Network and price controls
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Network and price controls

⚠️ CRITICAL: This is the real practical implementation issue for this plan.

>**TL;DR for this section:**
>
>The plan should have a list of core services with published prices that establish a cost-based (anything $65 or below is considered in-network for this service, otherwise you pay the excess) network for said services. This will create the primary plan traffic and control costs intentionally. For conditional recommendations and expensive procedures, the plan should maintain a "wait and see" approach where nuanced action is taken in response to needs that arise.

>This process cannot make it cumbersome to obtain care, it is in place a matter of protecting plan assets for all participants. Reasonable concessions must be made for bona fide preventive care requests that arise, even if a pre-negotiated network doesn't exist for all services.

>A basic MEC may use a narrow network, direct contracts, reference-based pricing, or other price controls, provided the actual arrangement complies with §2713 and all other applicable law.

The central network rule is:

- If an appropriate in-network provider can furnish a required preventive service, the plan may generally impose cost sharing on out-of-network care, subject to its terms and other applicable requirements.
- If the network has no provider who can furnish the required service, the plan must cover the service out of network without cost sharing.

A network cannot be merely theoretical. Participants need a practical way to identify and access the providers through whom the plan promises no-cost preventive services. [DOL ACA FAQ Part XII](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-12)




> **Out-of-Network Services Generally**
>
> **Q3:** My plan does not have any in-network providers to provide a particular preventive service required under PHS Act section 2713. If I obtain this service out-of-network, can the plan impose cost-sharing?
>
> **No.** While nothing in the interim final regulations generally requires a plan or issuer that has a network of providers to provide benefits for preventive services provided out-of-network, this provision is premised on enrollees being able to access the required preventive services from in-network providers. Thus, if a plan or issuer does not have in its network a provider who can provide the particular service, then the plan or issuer must cover the item or service when performed by an out-of-network provider and not impose cost-sharing with respect to the item or service.

— [DOL, FAQs about Affordable Care Act Implementation Part XII](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-12)


Price control should therefore be designed as a procurement function:

1. Identify every required service and its expected utilization;
2. Contract with or approve accessible providers capable of performing it; **or**
3. Establish clear reference-based pricing before claims occur;
4. Give participants usable provider-navigation instructions;
5. Adjudicate the service and its integral components at zero participant cost; and
6. Provide an exception and appeal path when the network or medical-management rule does not work for the individual.

<!-- record_id: plan.self-funded-basic-mec.commoncare-s-second-lowest-negotiable-cash-price-model -->
### CommonCare's second-lowest negotiable cash-price model
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > CommonCare's second-lowest negotiable cash-price model

“Reference-based” pricing is often tied to Medicare. CommonCare proposes another approach designed to reflect the price at which care is actually available: the **second-lowest negotiable cash price** in the participant's geographic market.

The process is straightforward:

1. The participant or provider requests approval before a less common or more complex preventive service;
2. The plan obtains good-faith cash-price offers from comparable, qualified providers in the same geographic market (as of late 2026, CommonCare will provide this service for free if the service can be published to our open network listing);
3. The second-lowest bona fide offer becomes the working reference price;
4. The participant receives an accessible approved-provider option that will perform the covered service at no participant cost; and
5. The approval, price, provider, integral services, and exceptions process are documented before care occurs.

Using the second-lowest price instead of the absolute lowest reduces dependence on an outlier quote while preserving a market-based ceiling. It also proves something Medicare-based pricing alone cannot: that a qualified provider is actually willing to furnish the service locally for the referenced amount.

Cash-price care is readily available and priceable through many channels, including direct conversations with medical providers. For less common or more complex services on the preventive schedule, requiring a prompt cash-price approval process need not be cumbersome if CommonCare performs the procurement work and presents the participant with a usable option.

> [!IMPORTANT]
> Cash price networks ensure there are real providers who offer acceptable services for procedures. This is signficantly stronger than an arbitrary reference like percentage of Medicare. 
> As stated in the beginning of this document, the real key is to handle claims with sense and humanity. There is time to consider the compliance of any decision in real time, with the facts present. Attempting theoretical document-based compliance is a formula for failure both technically and experientially. 

Federal reference-pricing guidance emphasizes adequate access to quality providers and warns that reference pricing cannot operate as a subterfuge for otherwise prohibited coverage limitations. It also states that satisfying the reference-pricing guidance under PHS Act §2707(b) does not itself establish compliance with §2713. [CMS, ACA Implementation FAQs Part XXI](https://www.cms.gov/CCIIO/Resources/Fact-Sheets-and-FAQs/Downloads/Reference_Pricing_FAQ_101014.pdf)

<!-- record_id: plan.self-funded-basic-mec.reference-based-pricing-is-a-recognized-network-design -->
### Reference-based pricing is a recognized network design
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 5. The core coverage requirement: PHS Act §2713 > Reference-based pricing is a recognized network design

Federal guidance expressly recognizes reference-based pricing as a legitimate network design for self-funded and large-group health plans.

A plan may treat providers that accept its reference amount as payment in full as its **in-network providers**. This does not require a conventional carrier network contract.

The Departments evaluate an RBP network using five factors:

1. The service allows enough time for an informed provider choice;
2. Accepting providers are available within reasonable distances and wait times;
3. Accepting providers meet reasonable quality standards;
4. An accessible exceptions process applies when the network is unavailable or medically inappropriate; and
5. The pricing structure, applicable services, exceptions process, and accepting providers are disclosed as required.

For §2713 preventive services, the result is straightforward:

- When an accessible in-network provider will perform the service for the approved price, the plan may generally apply its out-of-network terms elsewhere.
- When no capable in-network provider is available, the plan must cover the service out of network without cost sharing (another plug for cash price, there's always a provider available).

Reference pricing is not merely a reimbursement formula. Properly implemented, it defines the plan’s network.

**Authority:** [ACA Implementation FAQs Part XIX, Q4](https://www.cms.gov/cciio/resources/fact-sheets-and-faqs/aca_implementation_faqs19); [ACA Implementation FAQs Part XXI](https://www.cms.gov/CCIIO/Resources/Fact-Sheets-and-FAQs/Downloads/Reference_Pricing_FAQ_101014.pdf); [ACA Implementation FAQs Part XII, Q3](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-12).

<!-- record_id: plan.self-funded-basic-mec.6-concentrated-risks-within-the-preventive-schedule -->
## 6. Concentrated risks within the preventive schedule
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 6. Concentrated risks within the preventive schedule

A preventive-focused plan is low-cost because most scheduled services are predictable and can be actively purchased. That does not make its liability risk-free.

<!-- record_id: plan.self-funded-basic-mec.potiential-high-cost-procedure-colorectal-cancer-screening -->
### ⚠️ Potiential high-cost procedure: Colorectal-cancer screening
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 6. Concentrated risks within the preventive schedule > ⚠️ Potiential high-cost procedure: Colorectal-cancer screening

The USPSTF recognizes multiple screening strategies, including high-sensitivity guaiac fecal occult-blood testing, fecal immunochemical testing, stool DNA-FIT, colonoscopy, CT colonography, and flexible sigmoidoscopy for applicable populations. A plan may be able to use reasonable medical management where the recommendation leaves room to do so. [USPSTF colorectal-cancer recommendation](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening)

A low-cost FIT or other stool-based program can materially improve convenience and control initial screening cost. But it does **not** eliminate colonoscopy exposure. When a covered non-invasive stool test or direct-visualization screening produces a positive result, the follow-up colonoscopy is an integral part of the preventive screening and must be covered without cost sharing. [DOL ACA FAQ Part 51](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-51)

The correct operational strategy is therefore to procure both stages:

- A convenient, low-cost initial screening pathway; and
- A contracted, navigated, fairly priced follow-up-colonoscopy pathway. As of late 2026, $1,000 - $1,300 is broadly available in most markets. Far short of the frequent $10,000 hospital bills for this procedure, and not a confounding risk for the plan.

<!-- record_id: plan.self-funded-basic-mec.potiential-high-cost-procedure-female-sterilization-procedures -->
### ⚠️ Potiential high-cost procedure: Female sterilization procedures
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 6. Concentrated risks within the preventive schedule > ⚠️ Potiential high-cost procedure: Female sterilization procedures

The HRSA-supported Women's Preventive Services Guidelines include the full range of female-controlled FDA-approved contraceptive methods, effective family-planning practices, and sterilization procedures. This can create a concentrated surgical exposure within an otherwise predictable preventive-only design. [HRSA Women's Preventive Services Guidelines](https://www.hrsa.gov/womens-guidelines)

CommonCare's working design estimate is that a sterilization claim may create approximately **$5,000–$8,000** of plan expense even with strong reference-based pricing or other controls. That figure is a pricing assumption to validate against actual contracts and claims data; it is not a statutory amount or universal market price.

The main risk deterrent for this procedure is the natural fact that women don't want to be cut open and have their reproductive organs modified for fun. The real-world utilization is low. 

The best steps to de-risk are: 
- Modify premiums for women in the target age for this procedure
- Obtain a direct agreement with a provider whom the plan can pay in full quickly for services if needed. This can often be done for well below market estimates, establish a legitimate "in-network" provider that allows boxing-out the risk of more expensive services being obtained. 

> A commercial-claims analysis reported approximately 2.9 procedures per 10,000 women per month in late 2022, which loosely annualizes to approximately 0.35% before adjusting for seasonality or repeat counting. If your group is small, one claim could blow your percentage up - but with a cap of $4,000-8,000 of risk.
> https://pmc.ncbi.nlm.nih.gov/articles/PMC12303756/


> [⚠️ KEY PRACTICAL UNDERSTANDING]
> Low utilization may reduce expected cost. The plan document, SPD, SBC, provider information, and participant communications must accurately describe coverage and the conditions for obtaining it. The plan does not need to advertise the availability of all covered services - it can be up to the participant to seek the service and ascertain whether it is covered, although it cannot be obscured.
> 
> Female sterilization must be covered under the applicable preventive-services requirements, but the plan is not required to promote the procedure. Coverage may be expressed through the plan’s broader contraceptive and preventive-care provisions, with access available through the plan’s approved-provider process. In practice, utilization requires a participant to identify the benefit, elect the procedure, and follow the plan’s access rules. This materially reduces expected utilization without changing the underlying coverage obligation.

<!-- record_id: plan.self-funded-basic-mec.7-hsa-compatibility-is-a-separate-design-test -->
## 7. HSA compatibility is a separate design test
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 7. HSA compatibility is a separate design test

One of the strongest potential uses of this plan is to provide valuable first-dollar preventive coverage while preserving access to a health savings account. But MEC status alone does not accomplish that.

To contribute to an HSA, an individual generally must:

1. Be covered by a qualifying high-deductible health plan;
2. Have no disqualifying other health coverage;
3. Not be enrolled in Medicare; and
4. Not be claimable as another person's tax dependent.

For 2026, the general HDHP minimum deductible is **$1,700 for self-only coverage** and **$3,400 for family coverage**, and the maximum out-of-pocket limit is **$8,500 for self-only coverage** and **$17,000 for family coverage**. These amounts are indexed and must be refreshed annually. [IRS Publication 15-B (2026)](https://www.irs.gov/publications/p15b)

An HDHP may provide federally recognized preventive care before the deductible without destroying HSA eligibility. That makes preventive-focused MEC and an HDHP potentially complementary. The plan documents must nevertheless establish all HDHP elements; “basic MEC” is not itself an IRS-recognized substitute for the HDHP test.

**Non preventive services covered under the plan must be subject to a high deductible.**

This is a feature, not a bug. It serves to further de-risk the plan and hold premiums low.


<!-- record_id: plan.self-funded-basic-mec.8-what-the-plan-may-cover-beyond-the-minimum -->
## 8. What the plan may cover beyond the minimum
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum

A basic MEC can be creative and valuable without pretending to be major medical coverage.

Potential additions include:

- Qualifying preventive drugs and supplies;
- Low-cost generic-drug access structured consistently with the HDHP rules;
- Telehealth or remote-care benefits permitted before the deductible;
- A separately structured qualifying DPC arrangement;
- Navigation to transparent cash-price providers;
- Negotiated laboratory services;
- Preventive-care scheduling and reminders; and
- HSA enrollment, education, and contribution support.

Each added benefit must pass four tests:

#### Legal
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-8-what-the-plan-may-cover-beyond-the-minimum.legal; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum
- Test: Legal
- Question: Does the benefit comply with the ACA and other applicable group-plan rules?

#### HSA
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-8-what-the-plan-may-cover-beyond-the-minimum.hsa; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum
- Test: HSA
- Question: Does it preserve HSA eligibility, or is the product intentionally not HSA-compatible?

#### Operational
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-8-what-the-plan-may-cover-beyond-the-minimum.operational; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum
- Test: Operational
- Question: Can participants actually understand and use it?

#### Financial
<!-- record_id: plan.self-funded-basic-mec.self-funded-basic-mec-plan-8-what-the-plan-may-cover-beyond-the-minimum.financial; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum
- Test: Financial
- Question: Can it be funded predictably without defeating the low-cost purpose?


Benefits should not be added merely because they sound attractive. Every addition expands administrative complexity, claims exposure, or both.

<!-- record_id: plan.self-funded-basic-mec.generic-prescriptions -->
### Generic prescriptions
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum > Generic prescriptions

Generic prescriptions can be a valuable, frequently used benefit—but broad first-dollar prescription coverage can disqualify an individual from HSA contributions.

HSA-compatible options include:

- Covering non-preventive prescriptions only after the HDHP deductible;
- Covering before the deductible only drugs or products recognized as preventive care under applicable IRS guidance;
- Offering a true discount program that does not reimburse medical expense or constitute other health coverage; or
- Keeping a richer prescription benefit in a separate, explicitly non-HSA-compatible product variant.

The plan should maintain an HSA preventive-drug list tied to current IRS guidance rather than assuming that “generic” means “preventive.”

<!-- record_id: plan.self-funded-basic-mec.a-dpc-enhanced-version -->
### A DPC-enhanced version
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 8. What the plan may cover beyond the minimum > A DPC-enhanced version

Beginning January 1, 2026, an otherwise HSA-eligible individual may participate in certain qualifying direct-primary-care service arrangements without the DPC arrangement itself being treated as disqualifying health-plan coverage.

Both primary care and direct primary care (DPC) are good eligible services for this plan to cover due to the fact that they are unlikely to exceed the deductible and the plan can provide a meaningful tax-free wrap for DPC memberships.

For 2026, the aggregate fixed periodic fees generally may not exceed **$150 per month for one individual** or **$300 per month for an arrangement covering more than one individual**. The arrangement must consist solely of qualifying primary-care services furnished by qualifying primary-care practitioners for a fixed periodic fee. Certain procedures requiring general anesthesia, most prescription drugs, and laboratory services not typically administered in an ambulatory primary-care setting are excluded from the statutory definition. [IRS Notice 2026-05](https://www.irs.gov/irb/2026-02_IRB)

A **$99-per-month DPC arrangement** may therefore fit within the 2026 individual dollar limit, but price alone is not enough. The services, providers, compensation arrangement, and interaction with employer funding must all qualify.

> [!IMPORTANT]
> IRS guidance states that an HDHP itself may not pay for or provide a DPC membership before the HDHP deductible merely because the DPC arrangement would not separately disqualify the individual. A CommonCare “MEC + DPC” product must keep those concepts structurally distinct and receive tax and benefits review before promising HSA compatibility. See IRS Notice 2026-05, Q–15.

Potential structures include participant enrollment in a separately qualifying DPC arrangement, participant payment using HSA funds, or carefully reviewed employer funding outside the HDHP. An employer reimbursement arrangement can itself become health-plan coverage and must not be assumed HSA-compatible - it also doesn't constitute a health plan that meets the ACA market reforms and is likely illegal.

<!-- record_id: plan.self-funded-basic-mec.9-participant-communication-and-required-documents -->
## 9. Participant communication and required documents
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 9. Participant communication and required documents

A self-funded basic MEC must be communicated as the plan it actually is: useful, deliberately narrow coverage—not comprehensive major medical insurance.

At minimum, implementation should address:

<!-- record_id: plan.self-funded-basic-mec.formal-plan-terms -->
### Formal plan terms
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 9. Participant communication and required documents > Formal plan terms

- Governing plan document;
- Summary Plan Description when ERISA applies;
- Eligibility, enrollment, termination, and dependent rules;
- Complete schedule of benefits and exclusions;
- Network, approved-provider, and reference-pricing rules;
- Claims, adverse-benefit-determination, and appeal procedures;
- Fiduciary and plan-administration responsibilities;
- Amendment and termination provisions; and
- Coordination with stop-loss coverage, if any.

<!-- record_id: plan.self-funded-basic-mec.summary-of-benefits-and-coverage -->
### Summary of Benefits and Coverage
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 9. Participant communication and required documents > Summary of Benefits and Coverage

The plan must furnish a compliant **Summary of Benefits and Coverage**, or SBC, at the required times. The SBC uses a prescribed federal template and plain language to describe covered benefits, cost sharing, limitations, and coverage examples. It does not replace the plan document or SPD. [DOL SBC resources](https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/affordable-care-act/for-employers-and-advisers/summary-of-benefits)

CommonCare's SBC engine can generate the document from the canonical plan specification, but generation should include validation against the current federal template, instructions, coverage-example calculator, language-access requirements, and delivery rules.

<!-- record_id: plan.self-funded-basic-mec.clear-enrollment-disclosure -->
### Clear enrollment disclosure
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 9. Participant communication and required documents > Clear enrollment disclosure

Enrollment material should say prominently:

- This is minimum essential coverage;
- Whether it provides minimum value;
- That it is not comprehensive major medical coverage;
- Which preventive services are available without cost sharing;
- How to locate an eligible provider;
- Which services are excluded or subject to the deductible;
- Whether the design is intended to qualify as an HDHP;
- That individual HSA eligibility depends on the participant's other coverage and tax circumstances; and
- How to ask questions, submit claims, and appeal a denial.

Clarity is part of the product. The plan's low price should come from disciplined scope, procurement, and administration—not from participant confusion.

<!-- record_id: plan.self-funded-basic-mec.10-commoncare-implementation-model -->
## 10. CommonCare implementation model
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > 10. CommonCare implementation model

The CommonCare implementation should turn this design into a versioned set of connected artifacts:

1. **Canonical plan specification** — benefits, limits, exclusions, pricing rules, and HSA design choices;
2. **Preventive-services matrix** — each current §2713 recommendation mapped to operational coverage rules;
3. **Provider-access map** — an accessible pathway for every required service;
4. **Plan document and SPD** — the governing terms and participant-facing explanation;
5. **SBC** — generated using CommonCare's SBC engine;
6. **Claims rules** — codes, clinical criteria, integral services, pricing, and exceptions;
7. **Funding model** — expected claims, concentrated risks, administrative cost, reserves, and stop-loss decisions;
8. **Employer-mandate model** — Penalty A and Penalty B analyzed separately; and
9. **Annual update process** — indexed HDHP limits, preventive recommendations, regulatory changes, and plan-document amendments.

<!-- record_id: plan.self-funded-basic-mec.design-position -->
## Design position
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > Design position

> A self-funded basic MEC is not failed major medical coverage. It is a different tool for a different job.

Used honestly and administered well, it can:

- Give participants meaningful preventive and basic-care access;
- Satisfy MEC-related regulatory objectives;
- Give employers a disciplined alternative to carrier-controlled plan design;
- Create a low-cost foundation for HSA participation when all HDHP requirements are met; and
- Leave room for participants and employers to purchase other forms of protection deliberately.

It should be judged against the purpose it claims—not against a promise it never made.

<!-- record_id: plan.self-funded-basic-mec.primary-references -->
## Primary references
> Retrieval context: Self-Funded Basic MEC Plan — Self-Funded Basic MEC Plan > Primary references

- [CMS: Minimum Essential Coverage Guidance](https://www.cms.gov/CCIIO/Resources/Regulations-and-Guidance/Downloads/mec-guidance-10-31-2013.pdf)
- [IRS: Employer Shared Responsibility Provisions](https://www.irs.gov/affordable-care-act/employers/questions-and-answers-on-employer-shared-responsibility-provisions-under-the-affordable-care-act)
- [IRS: Minimum Value and Affordability](https://www.irs.gov/affordable-care-act/employers/minimum-value-and-affordability)
- [DOL: ACA Preventive Services FAQ Part XII](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-12)
- [DOL: ACA Preventive Services FAQ Part 51](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-51)
- [DOL: ACA Preventive Services FAQ Part 54](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-54)
- [DOL: ACA Preventive Services FAQ Part 64](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-64)
- [HRSA: Women's Preventive Services Guidelines](https://www.hrsa.gov/womens-guidelines)
- [USPSTF: Colorectal Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening)
- [IRS: Notice 2026-05 and 2026 HSA Guidance](https://www.irs.gov/irb/2026-02_IRB)
- [DOL: Summary of Benefits and Coverage Resources](https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/affordable-care-act/for-employers-and-advisers/summary-of-benefits)
- [California FTB: Health Care Mandate](https://www.ftb.ca.gov/file/personal/filing-situations/health-care-mandate/personal.html)

<!-- record_id: plan.self-funded-basic-mec.appendix-a-inventory-of-preventive-services -->
# Appendix A: Inventory of preventive services
> Retrieval context: Self-Funded Basic MEC Plan — Appendix A: Inventory of preventive services

---
id: compliance.preventive-services-inventory
title: Preventive Services Inventory and Cost Model
kind: compliance-inventory
owners:
- CommonCare
  related:
- plan.self-funded-basic-mec
- compliance.phs-act-2713
  source_of_truth:
- USPSTF A and B Recommendations
- ACIP immunization recommendations
- HRSA-supported guidelines
  last_reviewed: 2026-09-08
---

<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model -->
# Preventive Services Inventory and Cost Model
> Retrieval context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model

> **A practical inventory of the preventive services a non-grandfathered group health plan may need to cover without cost sharing under PHS Act §2713, with likely users and working procurement targets.**

<!-- record_id: plan.self-funded-basic-mec.how-to-use-this-document -->
## How to use this document
> Retrieval context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > How to use this document

This is a **coverage and budgeting map**, not a claims-adjudication specification. The controlling recommendation, participant facts, attending-provider determination, coding, integral services, plan-year effective date, and network availability determine what must be covered in an individual case.

The inventory reflects recommendations identified as current for plan years beginning in 2026 as of **September 8, 2026**. Recommendations change. CommonCare should validate this inventory before each plan year against the official [USPSTF A and B list](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics/uspstf-a-and-b-recommendations), [CDC immunization schedules](https://www.cdc.gov/vaccines/hcp/imz-schedules/), [HRSA Women's Preventive Services Guidelines](https://www.hrsa.gov/womens-guidelines), and [HRSA/Bright Futures pediatric guidelines](https://mchb.hrsa.gov/programs-impact/bright-futures).

> [!IMPORTANT]
> “Likely to receive” is plain-language utilization guidance, not a substitute for the legal eligibility criteria in the governing recommendation.

<!-- record_id: plan.self-funded-basic-mec.pricing-method -->
## Pricing method
> Retrieval context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Pricing method

#### Cash target
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-pricing-method.cash-target; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Pricing method
- Label: **Cash target**
- Meaning: A realistic direct-pay or contracted target for a routine, uncomplicated service

#### 120% Medicare
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-pricing-method.120-medicare; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Pricing method
- Label: **120% Medicare**
- Meaning: A target allowed amount equal to 120% of the applicable Medicare fee-schedule amount for the provider, locality, site, date, modifiers, and component billing

#### Episode target
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-pricing-method.episode-target; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Pricing method
- Label: **Episode target**
- Meaning: A planning range for all ordinary professional, facility, laboratory, pathology, drug, and integral-service components identified in the row

#### Incremental
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-pricing-method.incremental; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Pricing method
- Label: **Incremental**
- Meaning: Often completed inside an office or preventive visit; the listed amount represents likely additional plan cost rather than the entire visit


Prices below are national planning estimates. They are not quotations, fee schedules, or guarantees. Medicare amounts vary geographically and by facility setting. Commercial cash prices vary even more. The claims build should ultimately replace each range with codes, locality-specific Medicare values, contracted prices, and an explicit facility policy.

CMS publishes the [2026 Physician Fee Schedule framework](https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f), [Clinical Laboratory Fee Schedule](https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule-clfs), [preventive-services coding resource](https://www.cms.gov/Medicare/Prevention/PrevntionGenInfo/medicare-preventive-services/MPS-QuickReferenceChart-1.html), and [vaccine pricing](https://www.cms.gov/medicare/payment/part-b-drugs/vaccine-pricing).

<!-- record_id: plan.self-funded-basic-mec.cost-legend -->
## Cost legend
> Retrieval context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Cost legend

#### $
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-cost-legend.record; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Cost legend
- Band: $
- Working episode cost: $0–$75

#### $$
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-cost-legend.record-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Cost legend
- Band: $$
- Working episode cost: $76–$250

#### $$$
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-cost-legend.record-3; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Cost legend
- Band: $$$
- Working episode cost: $251–$750

#### $$$$
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-cost-legend.record-4; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Cost legend
- Band: $$$$
- Working episode cost: $751–$2,500

#### $$$$$
<!-- record_id: plan.self-funded-basic-mec.preventive-services-inventory-and-cost-model-cost-legend.record-5; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Preventive Services Inventory and Cost Model > Cost legend
- Band: $$$$$
- Working episode cost: More than $2,500 or materially open-ended


<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations -->
# Part I — USPSTF A and B recommendations
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations

<!-- record_id: plan.self-funded-basic-mec.cardiovascular-and-metabolic-health -->
## Cardiovascular and metabolic health
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health

#### Abdominal aortic aneurysm screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.abdominal-aortic-aneurysm-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Abdominal aortic aneurysm screening
- Who is likely to receive it?: Men ages 65–75 who have ever smoked
- Typical implementation: One-time abdominal ultrasound
- Target allowed amount: **120% Medicare; $150–$300**
- Band: $$

#### Blood-pressure screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.blood-pressure-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Blood-pressure screening
- Who is likely to receive it?: All adults without known hypertension
- Typical implementation: Office measurement; out-of-office confirmation after a positive screen
- Target allowed amount: **$0–$25 incremental; $40–$100 for home/ambulatory confirmation**
- Band: $–$$

#### Prediabetes and type 2 diabetes screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.prediabetes-and-type-2-diabetes-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Prediabetes and type 2 diabetes screening
- Who is likely to receive it?: Adults ages 35–70 with overweight or obesity
- Typical implementation: Glucose or A1c; referral to effective prevention for prediabetes
- Target allowed amount: **Cash $10–$35 lab; $100–$600+ intervention**
- Band: $–$$$

#### Statin preventive medication
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.statin-preventive-medication; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Statin preventive medication
- Who is likely to receive it?: Adults ages 40–75 with a qualifying risk factor and ≥10% 10-year CVD risk
- Typical implementation: Risk calculation, lipid testing, generic statin
- Target allowed amount: **Cash $15–$40 labs; $2–$15/month medication**
- Band: $

#### Healthy diet and physical-activity counseling
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.healthy-diet-and-physical-activity-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Healthy diet and physical-activity counseling
- Who is likely to receive it?: Adults with cardiovascular risk factors
- Typical implementation: Intensive behavioral counseling or referral
- Target allowed amount: **120% Medicare/cash $75–$200 per session; $300–$900 program**
- Band: $$–$$$$

#### Obesity behavioral interventions
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.obesity-behavioral-interventions; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Obesity behavioral interventions
- Who is likely to receive it?: Adults with BMI ≥30
- Typical implementation: Intensive, multicomponent program
- Target allowed amount: **$300–$1,200 per completed program**
- Band: $$$–$$$$

#### Exercise interventions to prevent falls
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cardiovascular-and-metabolic-healt.exercise-interventions-to-prevent-falls; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cardiovascular and metabolic health
- Preventive service: Exercise interventions to prevent falls
- Who is likely to receive it?: Community-dwelling adults 65+ at increased fall risk
- Typical implementation: Supervised or structured exercise program
- Target allowed amount: **$150–$750 per course**
- Band: $$–$$$


<!-- record_id: plan.self-funded-basic-mec.bone-health -->
## Bone health
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Bone health

#### Osteoporosis screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-bone-health.osteoporosis-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Bone health
- Preventive service: Osteoporosis screening
- Who is likely to receive it?: Women 65+ and postmenopausal women under 65 whose risk assessment indicates increased fracture risk
- Typical implementation: DXA, usually central bone-density scan; risk assessment for younger eligible women
- Target allowed amount: **Cash or 120% Medicare $100–$225**
- Band: $$


<!-- record_id: plan.self-funded-basic-mec.cancer-prevention-and-screening -->
## Cancer prevention and screening
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening

#### Breast-cancer screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.breast-cancer-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Breast-cancer screening
- Who is likely to receive it?: Women ages 40–74
- Typical implementation: Screening mammography every 2 years under current USPSTF recommendation; HRSA may require broader completion services
- Target allowed amount: **Cash or 120% Medicare $150–$275; $300–$1,200 with required follow-up imaging**
- Band: $$–$$$$

#### BRCA risk assessment
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.brca-risk-assessment; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: BRCA risk assessment
- Who is likely to receive it?: Women with qualifying personal/family history or ancestry
- Typical implementation: Brief tool in primary care
- Target allowed amount: **$0–$40 incremental**
- Band: $

#### BRCA genetic counseling
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.brca-genetic-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: BRCA genetic counseling
- Who is likely to receive it?: People with a positive risk assessment
- Typical implementation: Pre-test specialist counseling
- Target allowed amount: **120% Medicare/cash $100–$300**
- Band: $$–$$$

#### BRCA genetic testing
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.brca-genetic-testing; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: BRCA genetic testing
- Who is likely to receive it?: People for whom testing is indicated after counseling
- Typical implementation: Targeted or panel test
- Target allowed amount: **Contracted cash $250–$1,000**
- Band: $$$–$$$$

#### Breast-cancer risk-reducing medication
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.breast-cancer-risk-reducing-medication; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Breast-cancer risk-reducing medication
- Who is likely to receive it?: Women 35+ at increased breast-cancer risk and low adverse-effect risk
- Typical implementation: Tamoxifen, raloxifene, or aromatase inhibitor plus prescribing visit
- Target allowed amount: **Generic cash $5–$40/month; $75–$200 visit**
- Band: $–$$

#### Cervical-cancer screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.cervical-cancer-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Cervical-cancer screening
- Who is likely to receive it?: Women ages 21–65 with a cervix and within recommended interval
- Typical implementation: Cytology, primary hrHPV, or cotesting by age
- Target allowed amount: **Cash/120% Medicare $75–$200 screening episode**
- Band: $–$$

#### Colorectal-cancer screening: FIT/gFOBT
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.colorectal-cancer-screening-fit-gfobt; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Colorectal-cancer screening: FIT/gFOBT
- Who is likely to receive it?: Adults ages 45–75
- Typical implementation: Annual stool test
- Target allowed amount: **Cash $15–$40**
- Band: $

#### Colorectal-cancer screening: stool DNA-FIT
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.colorectal-cancer-screening-stool-dna-fit; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Colorectal-cancer screening: stool DNA-FIT
- Who is likely to receive it?: Adults ages 45–75 selecting that method
- Typical implementation: Every 1–3 years per applicable recommendation/product
- Target allowed amount: **Contracted $400–$650**
- Band: $$$

#### Colorectal-cancer screening: colonoscopy
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.colorectal-cancer-screening-colonoscopy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Colorectal-cancer screening: colonoscopy
- Who is likely to receive it?: Adults ages 45–75 selecting colonoscopy, or after a positive non-invasive test
- Typical implementation: Screening/follow-up colonoscopy with integral anesthesia and pathology
- Target allowed amount: **120% Medicare/bundled ambulatory target $900–$2,000; hospital outpatient can be materially higher**
- Band: $$$$

#### Colorectal-cancer screening: CT colonography
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.colorectal-cancer-screening-ct-colonography; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Colorectal-cancer screening: CT colonography
- Who is likely to receive it?: Adults ages 45–75 selecting that method
- Typical implementation: CT colonography at recommended interval
- Target allowed amount: **Cash/120% Medicare $300–$700; positive result adds colonoscopy**
- Band: $$$

#### Colorectal-cancer screening: flexible sigmoidoscopy
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.colorectal-cancer-screening-flexible-sigmoidoscopy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Colorectal-cancer screening: flexible sigmoidoscopy
- Who is likely to receive it?: Adults ages 45–75 selecting that method
- Typical implementation: Endoscopic screening, sometimes combined with FIT
- Target allowed amount: **120% Medicare $400–$900; positive result may add colonoscopy**
- Band: $$$–$$$$

#### Lung-cancer screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.lung-cancer-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Lung-cancer screening
- Who is likely to receive it?: Adults ages 50–80 with ≥20 pack-years who smoke or quit within 15 years
- Typical implementation: Annual low-dose CT while eligible
- Target allowed amount: **Cash/120% Medicare $200–$400**
- Band: $$–$$$

#### Skin-cancer prevention counseling
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-cancer-prevention-and-screening.skin-cancer-prevention-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Cancer prevention and screening
- Preventive service: Skin-cancer prevention counseling
- Who is likely to receive it?: Fair-skinned people ages 6 months–24 years and parents of young children
- Typical implementation: UV-exposure counseling
- Target allowed amount: **$0–$50 incremental**
- Band: $


> [!WARNING]
> A low-cost stool test controls the initial colorectal-screening cost; it does not close the episode. Federal guidance requires a follow-up colonoscopy after a positive non-invasive test to be covered without cost sharing because it is integral to completing the screen. [DOL FAQ Part 51](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-51)

<!-- record_id: plan.self-funded-basic-mec.infectious-disease-screening-and-prevention -->
## Infectious-disease screening and prevention
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention

#### HIV screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.hiv-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: HIV screening
- Who is likely to receive it?: Everyone ages 15–65; younger/older people at increased risk; all pregnant people
- Typical implementation: Lab antigen/antibody test; repeat based on risk/pregnancy
- Target allowed amount: **Cash $20–$50**
- Band: $

#### HIV preexposure prophylaxis
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.hiv-preexposure-prophylaxis; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: HIV preexposure prophylaxis
- Who is likely to receive it?: Adolescents and adults at increased risk of acquiring HIV
- Typical implementation: Oral or injectable PrEP plus required baseline and monitoring services
- Target allowed amount: **$0–$2,500+ per episode depending on drug and assistance; monitoring $150–$500/year**
- Band: $$$–$$$$$

#### Hepatitis C screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.hepatitis-c-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Hepatitis C screening
- Who is likely to receive it?: Adults ages 18–79
- Typical implementation: Usually one-time antibody test, with reflex RNA confirmation when positive
- Target allowed amount: **Cash $20–$60; positive reflex testing $50–$150**
- Band: $–$$

#### Hepatitis B screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.hepatitis-b-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Hepatitis B screening
- Who is likely to receive it?: Adolescents and adults at increased risk
- Typical implementation: HBsAg/anti-HBs/anti-HBc panel as clinically indicated
- Target allowed amount: **Cash $30–$90**
- Band: $–$$

#### Hepatitis B screening in pregnancy
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.hepatitis-b-screening-in-pregnancy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Hepatitis B screening in pregnancy
- Who is likely to receive it?: All pregnant people at first prenatal visit
- Typical implementation: HBsAg or recommended panel
- Target allowed amount: **Cash $10–$40**
- Band: $

#### Latent tuberculosis screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.latent-tuberculosis-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Latent tuberculosis screening
- Who is likely to receive it?: Asymptomatic adults at increased risk
- Typical implementation: IGRA blood test or tuberculin skin test
- Target allowed amount: **Cash $40–$120**
- Band: $–$$

#### Chlamydia screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.chlamydia-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Chlamydia screening
- Who is likely to receive it?: Sexually active women ≤24 and women 25+ at increased risk, including during pregnancy
- Typical implementation: NAAT, often combined with gonorrhea
- Target allowed amount: **Cash $40–$100 combined panel**
- Band: $–$$

#### Gonorrhea screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.gonorrhea-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Gonorrhea screening
- Who is likely to receive it?: Same general population as chlamydia recommendation
- Typical implementation: NAAT, often combined with chlamydia
- Target allowed amount: **Cash $40–$100 combined panel**
- Band: $–$$

#### Syphilis screening in pregnancy
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.syphilis-screening-in-pregnancy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Syphilis screening in pregnancy
- Who is likely to receive it?: All pregnant people, early; later repeat when applicable
- Typical implementation: Treponemal/nontreponemal testing
- Target allowed amount: **Cash $10–$40**
- Band: $

#### Syphilis screening outside pregnancy
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.syphilis-screening-outside-pregnancy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: Syphilis screening outside pregnancy
- Who is likely to receive it?: Adolescents and adults at increased risk
- Typical implementation: Treponemal/nontreponemal testing
- Target allowed amount: **Cash $10–$40**
- Band: $

#### STI behavioral counseling
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-infectious-disease-screening-and-p.sti-behavioral-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Infectious-disease screening and prevention
- Preventive service: STI behavioral counseling
- Who is likely to receive it?: Sexually active adolescents and adults at increased risk
- Typical implementation: Behavioral counseling
- Target allowed amount: **$25–$150 incremental/session**
- Band: $–$$


PrEP is a special severity item. Required coverage can include the drug, baseline testing, follow-up testing, adherence counseling, and other services integral to furnishing PrEP. The plan needs a current drug strategy and cannot budget this as merely an HIV test.

<!-- record_id: plan.self-funded-basic-mec.mental-health-substance-use-and-interpersonal-safety -->
## Mental health, substance use, and interpersonal safety
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety

#### Anxiety screening in adults
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.anxiety-screening-in-adults; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Anxiety screening in adults
- Who is likely to receive it?: Adults age 64 or younger, including pregnant/postpartum people
- Typical implementation: Questionnaire with systems for evaluation and follow-up
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Anxiety screening in youth
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.anxiety-screening-in-youth; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Anxiety screening in youth
- Who is likely to receive it?: Children and adolescents ages 8–18
- Typical implementation: Questionnaire with systems for evaluation and follow-up
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Depression screening in adults
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.depression-screening-in-adults; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Depression screening in adults
- Who is likely to receive it?: Adults, including pregnant, postpartum, and older adults
- Typical implementation: Questionnaire with diagnosis/treatment/referral capacity
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Depression screening in adolescents
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.depression-screening-in-adolescents; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Depression screening in adolescents
- Who is likely to receive it?: Adolescents ages 12–18
- Typical implementation: Questionnaire with diagnosis/treatment/follow-up systems
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Perinatal-depression prevention
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.perinatal-depression-prevention; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Perinatal-depression prevention
- Who is likely to receive it?: Pregnant/postpartum people at increased risk
- Typical implementation: Counseling intervention or referral
- Target allowed amount: **$300–$1,200 per course**
- Band: $$$–$$$$

#### Unhealthy alcohol-use screening/counseling
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.unhealthy-alcohol-use-screening-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Unhealthy alcohol-use screening/counseling
- Who is likely to receive it?: Adults 18+, including pregnant people
- Typical implementation: Questionnaire and brief counseling for risky use
- Target allowed amount: **$0–$75 incremental; $75–$175 standalone**
- Band: $–$$

#### Unhealthy drug-use screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.unhealthy-drug-use-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Unhealthy drug-use screening
- Who is likely to receive it?: Adults 18+ where diagnosis and treatment/referral are available
- Typical implementation: Verbal/questionnaire screening, not routine specimen testing
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Tobacco cessation in adults
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.tobacco-cessation-in-adults; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Tobacco cessation in adults
- Who is likely to receive it?: All adults; pharmacotherapy applies to nonpregnant adults who use tobacco
- Typical implementation: Ask/advise, counseling, and FDA-approved cessation medication
- Target allowed amount: **Counseling $30–$150/session; generic drugs $15–$150/course; branded products higher**
- Band: $–$$$

#### Tobacco-use prevention in youth
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.tobacco-use-prevention-in-youth; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Tobacco-use prevention in youth
- Who is likely to receive it?: School-aged children and adolescents who have not begun using tobacco
- Typical implementation: Education or brief counseling
- Target allowed amount: **$0–$50 incremental**
- Band: $

#### Intimate-partner violence screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-mental-health-substance-use-and-in.intimate-partner-violence-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Mental health, substance use, and interpersonal safety
- Preventive service: Intimate-partner violence screening
- Who is likely to receive it?: Women of reproductive age, including pregnant/postpartum women
- Typical implementation: Validated screen; referral to multicomponent intervention when indicated
- Target allowed amount: **$0–$25 screen; $100–$1,000+ intervention/navigation**
- Band: $–$$$$


A zero-cost questionnaire is only the initial screen. Where a recommendation requires an intervention, referral, or systems for diagnosis and follow-up, the coverage model must account for that next step.

<!-- record_id: plan.self-funded-basic-mec.pregnancy-postpartum-and-newborn-services -->
## Pregnancy, postpartum, and newborn services
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services

#### Low-dose aspirin to prevent preeclampsia
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.low-dose-aspirin-to-prevent-preeclampsia; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Low-dose aspirin to prevent preeclampsia
- Who is likely to receive it?: Pregnant people at high risk, after 12 weeks
- Typical implementation: 81 mg aspirin and prescribing oversight
- Target allowed amount: **Cash $3–$10/month**
- Band: $

#### Asymptomatic bacteriuria screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.asymptomatic-bacteriuria-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Asymptomatic bacteriuria screening
- Who is likely to receive it?: Pregnant people
- Typical implementation: Urine culture
- Target allowed amount: **Cash $15–$40**
- Band: $

#### Gestational-diabetes screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.gestational-diabetes-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Gestational-diabetes screening
- Who is likely to receive it?: Asymptomatic pregnant people at 24 weeks or later
- Typical implementation: Glucose challenge/tolerance testing
- Target allowed amount: **Cash $20–$75**
- Band: $

#### Hypertensive-disorder screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.hypertensive-disorder-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Hypertensive-disorder screening
- Who is likely to receive it?: All pregnant people
- Typical implementation: Blood pressure throughout pregnancy
- Target allowed amount: **$0–$15 incremental per visit**
- Band: $

#### Healthy-weight-gain counseling
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.healthy-weight-gain-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Healthy-weight-gain counseling
- Who is likely to receive it?: Pregnant people
- Typical implementation: Effective behavioral counseling
- Target allowed amount: **$25–$150 incremental/session; $200–$750 program**
- Band: $–$$$

#### Breastfeeding counseling/support
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.breastfeeding-counseling-support; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Breastfeeding counseling/support
- Who is likely to receive it?: Pregnant and postpartum people
- Typical implementation: Counseling or referral
- Target allowed amount: **$75–$200/session; $150–$600 typical course**
- Band: $$–$$$

#### Folic-acid supplementation
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.folic-acid-supplementation; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Folic-acid supplementation
- Who is likely to receive it?: Anyone planning or able to become pregnant
- Typical implementation: 400–800 mcg daily
- Target allowed amount: **Cash $2–$10/month**
- Band: $

#### Rh(D) blood typing and antibody testing
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.rh-d-blood-typing-and-antibody-testing; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Rh(D) blood typing and antibody testing
- Who is likely to receive it?: All pregnant people at first pregnancy-related visit
- Typical implementation: Blood type and antibody screen
- Target allowed amount: **Cash $25–$75**
- Band: $

#### Repeat Rh(D) antibody testing
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.repeat-rh-d-antibody-testing; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Repeat Rh(D) antibody testing
- Who is likely to receive it?: Unsensitized Rh-negative pregnant people at 24–28 weeks unless biologic father known Rh-negative
- Typical implementation: Repeat antibody screen
- Target allowed amount: **Cash $15–$40**
- Band: $

#### Ocular prophylaxis against gonococcal ophthalmia
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-pregnancy-postpartum-and-newborn-s.ocular-prophylaxis-against-gonococcal-ophthalmia; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Pregnancy, postpartum, and newborn services
- Preventive service: Ocular prophylaxis against gonococcal ophthalmia
- Who is likely to receive it?: All newborns
- Typical implementation: Erythromycin ophthalmic prophylaxis
- Target allowed amount: **Cash $10–$40**
- Band: $


<!-- record_id: plan.self-funded-basic-mec.children-and-adolescents -->
## Children and adolescents
> Retrieval context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Children and adolescents

#### High-BMI intensive intervention
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-children-and-adolescents.high-bmi-intensive-intervention; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Children and adolescents
- Preventive service: High-BMI intensive intervention
- Who is likely to receive it?: Children/adolescents age 6+ with BMI ≥95th percentile
- Typical implementation: Comprehensive intensive behavioral program
- Target allowed amount: **$500–$2,000+ per course**
- Band: $$$–$$$$

#### Fluoride varnish
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-children-and-adolescents.fluoride-varnish; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Children and adolescents
- Preventive service: Fluoride varnish
- Who is likely to receive it?: Infants/children under 5 from tooth eruption
- Typical implementation: Primary-care application
- Target allowed amount: **Cash/120% Medicare $20–$50**
- Band: $

#### Oral fluoride supplementation
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-children-and-adolescents.oral-fluoride-supplementation; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Children and adolescents
- Preventive service: Oral fluoride supplementation
- Who is likely to receive it?: Children 6 months+ whose water is fluoride-deficient
- Typical implementation: Prescription supplement
- Target allowed amount: **Cash $3–$15/month**
- Band: $

#### Vision screening
<!-- record_id: plan.self-funded-basic-mec.part-i-uspstf-a-and-b-recommendations-children-and-adolescents.vision-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part I — USPSTF A and B recommendations > Children and adolescents
- Preventive service: Vision screening
- Who is likely to receive it?: All children ages 3–5, at least once
- Typical implementation: Instrument or chart screening; referral if abnormal
- Target allowed amount: **$0–$40 screen; diagnostic follow-up not automatically preventive**
- Band: $


<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women -->
# Part II — HRSA-supported preventive services for women
> Retrieval context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women

These services overlap with USPSTF recommendations in places but may be broader. Do not deduplicate by title alone; compare the actual population, frequency, method, and required completion services in the current HRSA guideline.

#### Well-woman preventive visits
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.well-woman-preventive-visits; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Well-woman preventive visits
- Who is likely to receive it?: Adolescent and adult women, generally at least annually as needed to obtain recommended services
- Typical implementation: Preventive evaluation; more than one visit may be necessary
- Target allowed amount: **Cash/120% Medicare $125–$250 per visit**
- Band: $$

#### Breast-cancer screening and completion
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.breast-cancer-screening-and-completion; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Breast-cancer screening and completion
- Who is likely to receive it?: Average-risk women beginning between ages 40–50 through at least 74; increased-risk women as indicated
- Typical implementation: Mammography plus indicated imaging/pathology to complete screening
- Target allowed amount: **$150–$275 initial; $300–$1,200+ completion episode**
- Band: $$–$$$$

#### Breast/cervical screening navigation
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.breast-cervical-screening-navigation; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Breast/cervical screening navigation
- Who is likely to receive it?: Women needing help completing breast or cervical screening
- Typical implementation: Person-to-person assessment, education, referrals, and navigation
- Target allowed amount: **$50–$250 per episode**
- Band: $–$$

#### Cervical-cancer screening
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.cervical-cancer-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Cervical-cancer screening
- Who is likely to receive it?: Average-risk women ages 21–65
- Typical implementation: Cytology/hrHPV strategy under current guideline
- Target allowed amount: **$75–$200**
- Band: $–$$

#### Contraceptive counseling
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.contraceptive-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Contraceptive counseling
- Who is likely to receive it?: Adolescent and adult women
- Typical implementation: Annual and as-needed person-centered counseling
- Target allowed amount: **$50–$175/session**
- Band: $–$$

#### OTC and prescription contraception
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.otc-and-prescription-contraception; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: OTC and prescription contraception
- Who is likely to receive it?: Adolescent and adult women with reproductive capacity
- Typical implementation: At least one form in each applicable category; exceptions process for medically necessary product
- Target allowed amount: **$0–$100/month typical; some branded products higher**
- Band: $–$$$

#### Long-acting reversible contraception
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.long-acting-reversible-contraception; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Long-acting reversible contraception
- Who is likely to receive it?: Women choosing an IUD or implant
- Typical implementation: Device, insertion, related services, removal when required
- Target allowed amount: **Contracted/120% Medicare $700–$1,500 episode**
- Band: $$$–$$$$

#### Female sterilization
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.female-sterilization; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Female sterilization
- Who is likely to receive it?: Women choosing permanent contraception
- Typical implementation: Surgical procedure and integral anesthesia/facility services
- Target allowed amount: **Bundled target $5,000–$8,000; validate locally**
- Band: $$$$$

#### Diabetes screening after pregnancy
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.diabetes-screening-after-pregnancy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Diabetes screening after pregnancy
- Who is likely to receive it?: Women with prior gestational diabetes who are not currently pregnant and have not been diagnosed with type 2 diabetes
- Typical implementation: Glucose/A1c at least every 3 years for at least 10 years
- Target allowed amount: **Cash $10–$35**
- Band: $

#### Anxiety screening
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.anxiety-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Anxiety screening
- Who is likely to receive it?: Adolescent and adult women, including pregnant/postpartum women
- Typical implementation: Validated screening tool with follow-up pathway
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Urinary-incontinence screening
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.urinary-incontinence-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Urinary-incontinence screening
- Who is likely to receive it?: Women, generally annually
- Typical implementation: Screening questions; referral for evaluation/treatment when indicated
- Target allowed amount: **$0–$25 incremental**
- Band: $

#### Intimate-partner/domestic-violence screening
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.intimate-partner-domestic-violence-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Intimate-partner/domestic-violence screening
- Who is likely to receive it?: Adolescent and adult women, at least annually
- Typical implementation: Screen; intervention services or referral when needed
- Target allowed amount: **$0–$25 screen; intervention varies**
- Band: $–$$$$

#### Tobacco-use counseling
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.tobacco-use-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Tobacco-use counseling
- Who is likely to receive it?: Adolescent and adult women, expanded counseling for pregnant users
- Typical implementation: Screening and behavioral intervention
- Target allowed amount: **$0–$150 per encounter**
- Band: $–$$

#### STI counseling
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.sti-counseling; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: STI counseling
- Who is likely to receive it?: Sexually active women at increased risk
- Typical implementation: Annual behavioral counseling
- Target allowed amount: **$25–$150 incremental/session**
- Band: $–$$

#### HIV screening
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.hiv-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: HIV screening
- Who is likely to receive it?: Adolescent and adult women, at least once; annual based on risk; pregnancy requirements
- Typical implementation: Lab screening
- Target allowed amount: **Cash $20–$50**
- Band: $

#### Breastfeeding services and supplies
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.breastfeeding-services-and-supplies; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Breastfeeding services and supplies
- Who is likely to receive it?: Pregnant and postpartum women
- Typical implementation: Prenatal/postpartum consultation and breastfeeding equipment
- Target allowed amount: **Consultation $75–$200; pump/supplies $100–$500+**
- Band: $$–$$$

#### Preventing obesity in midlife
<!-- record_id: plan.self-funded-basic-mec.part-ii-hrsa-supported-preventive-services-for-women.preventing-obesity-in-midlife; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women
- Preventive service: Preventing obesity in midlife
- Who is likely to receive it?: Women ages 40–60 with normal or overweight BMI
- Typical implementation: Counseling to maintain weight or limit gain
- Target allowed amount: **$200–$750 program**
- Band: $$–$$$


<!-- record_id: plan.self-funded-basic-mec.contraceptive-categories-requiring-an-operational-pathway -->
## Contraceptive categories requiring an operational pathway
> Retrieval context: Self-Funded Basic MEC Plan — Part II — HRSA-supported preventive services for women > Contraceptive categories requiring an operational pathway

The current legal implementation should map the HRSA guideline and federal FAQ requirements to at least one no-cost form in each applicable category, plus an exceptions process. Operational categories include:

- Sterilization surgery for women;
- Implantable rods;
- Copper intrauterine devices;
- Progestin-releasing intrauterine devices;
- Injectable contraceptives;
- Combined oral contraceptives;
- Progestin-only oral contraceptives;
- Extended or continuous-use oral contraceptives;
- Contraceptive patches;
- Vaginal contraceptive rings;
- Diaphragms;
- Contraceptive sponges;
- Cervical caps;
- Female condoms;
- Spermicides;
- Emergency contraception; and
- Other FDA-approved, cleared, or granted contraceptive products addressed by the applicable guideline.

The precise categories and products must be synchronized to current federal guidance and FDA status. “One cheap contraceptive” is not a compliant substitute for category-based coverage and medical-necessity exceptions.

<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations -->
# Part III — Immunizations
> Retrieval context: Self-Funded Basic MEC Plan — Part III — Immunizations

The legal schedule is ACIP's recommendation as adopted by the CDC, not merely a static vaccine list. Age, prior vaccination, pregnancy, season, medical condition, occupation, travel, and shared clinical decision-making affect eligibility.

<!-- record_id: plan.self-funded-basic-mec.routine-child-and-adolescent-immunizations -->
## Routine child and adolescent immunizations
> Retrieval context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations

#### Hepatitis B
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.hepatitis-b; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Hepatitis B
- Who is likely to receive it?: Infants beginning at birth; catch-up youth
- Typical series/use: 2–4 doses depending on product/combination
- Working product + administration target: **$40–$120/dose**

#### Rotavirus
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.rotavirus; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Rotavirus
- Who is likely to receive it?: Infants
- Typical series/use: 2- or 3-dose oral series
- Working product + administration target: **$100–$180/dose**

#### DTaP
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.dtap; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: DTaP
- Who is likely to receive it?: Infants and children under 7
- Typical series/use: 5-dose primary series
- Working product + administration target: **$45–$100/dose**

#### Hib
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.hib; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Hib
- Who is likely to receive it?: Infants and young children; certain high-risk catch-up
- Typical series/use: 3- or 4-dose series
- Working product + administration target: **$40–$100/dose**

#### Pneumococcal conjugate
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.pneumococcal-conjugate; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Pneumococcal conjugate
- Who is likely to receive it?: Infants/young children; risk-based catch-up
- Typical series/use: Multi-dose series
- Working product + administration target: **$150–$275/dose**

#### Polio (IPV)
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.polio-ipv; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Polio (IPV)
- Who is likely to receive it?: Infants and children
- Typical series/use: 4-dose series
- Working product + administration target: **$40–$90/dose**

#### Influenza
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.influenza; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Influenza
- Who is likely to receive it?: Children 6 months+ each season
- Typical series/use: Annual; 2 doses first season for some young children
- Working product + administration target: **$35–$80/dose**

#### COVID-19
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.covid-19; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: COVID-19
- Who is likely to receive it?: Children meeting current age/risk/recommendation criteria
- Typical series/use: Current seasonal product/series
- Working product + administration target: **CMS product allowance + administration; often $150–$300/dose**

#### MMR
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.mmr; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: MMR
- Who is likely to receive it?: Children beginning around 12 months; catch-up
- Typical series/use: 2 doses
- Working product + administration target: **$90–$160/dose**

#### Varicella
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.varicella; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Varicella
- Who is likely to receive it?: Children beginning around 12 months; catch-up
- Typical series/use: 2 doses
- Working product + administration target: **$150–$240/dose**

#### Hepatitis A
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.hepatitis-a; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Hepatitis A
- Who is likely to receive it?: Children beginning around 12 months; catch-up
- Typical series/use: 2 doses
- Working product + administration target: **$55–$110/dose**

#### Tdap
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.tdap; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Tdap
- Who is likely to receive it?: Adolescents; pregnancy; catch-up
- Typical series/use: Routine adolescent dose and each pregnancy
- Working product + administration target: **$55–$110/dose**

#### HPV
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.hpv; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: HPV
- Who is likely to receive it?: All youth through age 26 under routine/catch-up rules
- Typical series/use: 2 or 3 doses depending on starting age/condition
- Working product + administration target: **$250–$350/dose**

#### Meningococcal ACWY
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.meningococcal-acwy; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Meningococcal ACWY
- Who is likely to receive it?: Adolescents; certain high-risk children
- Typical series/use: Routine adolescent series/risk-based doses
- Working product + administration target: **$140–$240/dose**

#### Meningococcal B
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.meningococcal-b; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: Meningococcal B
- Who is likely to receive it?: Adolescents/young adults under shared decision-making; high-risk groups
- Typical series/use: Product-specific 2- or 3-dose series
- Working product + administration target: **$175–$300/dose**

#### RSV maternal vaccine or infant antibody
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-child-and-adolescent-immunizations.rsv-maternal-vaccine-or-infant-antibody; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine child and adolescent immunizations
- Vaccine or immunizing agent: RSV maternal vaccine or infant antibody
- Who is likely to receive it?: Pregnant person during specified gestational/seasonal window or eligible infant
- Typical series/use: Usually one maternal dose or infant monoclonal dose
- Working product + administration target: **$300–$650**


<!-- record_id: plan.self-funded-basic-mec.routine-and-risk-based-adult-immunizations -->
## Routine and risk-based adult immunizations
> Retrieval context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations

#### Influenza
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.influenza; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Influenza
- Who is likely to receive it?: Nearly all adults each season
- Typical use: Annual
- Working product + administration target: **$35–$80**

#### COVID-19
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.covid-19; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: COVID-19
- Who is likely to receive it?: Adults meeting current age/risk/recommendation criteria
- Typical use: Current seasonal product
- Working product + administration target: **Use current CMS allowance + administration; often $200–$300**

#### Tdap/Td
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.tdap-td; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Tdap/Td
- Who is likely to receive it?: Adults lacking Tdap; booster every 10 years; each pregnancy
- Typical use: One Tdap then Td/Tdap boosters
- Working product + administration target: **$55–$110/dose**

#### HPV
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.hpv; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: HPV
- Who is likely to receive it?: Adults through age 26; ages 27–45 by shared decision-making
- Typical use: 2- or 3-dose series
- Working product + administration target: **$250–$350/dose**

#### Zoster
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.zoster; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Zoster
- Who is likely to receive it?: Adults 50+ and immunocompromised adults 19+
- Typical use: 2-dose recombinant series
- Working product + administration target: **$220–$320/dose**

#### Pneumococcal
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.pneumococcal; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Pneumococcal
- Who is likely to receive it?: Older adults and younger adults with specified risks
- Typical use: Product/history-specific PCV/PPSV pathway
- Working product + administration target: **$150–$300/dose**

#### RSV
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.rsv; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: RSV
- Who is likely to receive it?: Adults 75+; ages 50–74 at increased risk; specified pregnancy window
- Typical use: Generally one dose under current recommendation
- Working product + administration target: **$275–$400/dose**

#### Hepatitis B
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.hepatitis-b; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Hepatitis B
- Who is likely to receive it?: Routine through age 59; age 60+ by risk/request
- Typical use: 2-, 3-, or 4-dose product-specific series
- Working product + administration target: **$60–$150/dose**

#### Hepatitis A
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.hepatitis-a; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Hepatitis A
- Who is likely to receive it?: Anyone requesting it and specified risk groups
- Typical use: 2-dose or combination series
- Working product + administration target: **$80–$160/dose**

#### MMR
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.mmr; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: MMR
- Who is likely to receive it?: Adults without evidence of immunity when indicated
- Typical use: 1–2 doses
- Working product + administration target: **$90–$160/dose**

#### Varicella
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.varicella; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Varicella
- Who is likely to receive it?: Adults without evidence of immunity
- Typical use: 2 doses
- Working product + administration target: **$150–$240/dose**

#### Meningococcal ACWY/B
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.meningococcal-acwy-b; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Meningococcal ACWY/B
- Who is likely to receive it?: Adults with specified medical, occupational, travel, or outbreak risks
- Typical use: Product/risk-specific series and boosters
- Working product + administration target: **$150–$300/dose**

#### Polio
<!-- record_id: plan.self-funded-basic-mec.part-iii-immunizations-routine-and-risk-based-adult-immunizations.polio; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part III — Immunizations > Routine and risk-based adult immunizations
- Vaccine: Polio
- Who is likely to receive it?: Adults known/suspected unvaccinated; exposure-risk booster
- Typical use: Complete 3-dose series or one lifetime booster
- Working product + administration target: **$50–$100/dose**


> [!NOTE]
> Vaccine recommendations and prices are unusually dynamic. The claims system should ingest the current CDC schedule and CMS vaccine-price file rather than hard-code this table.

<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent -->
# Part IV — HRSA/Bright Futures services for infants, children, and adolescents
> Retrieval context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents

The Bright Futures periodicity schedule is a visit-by-visit matrix from prenatal/newborn care through age 21. The plan should procure the **well-child encounter as a bundled preventive platform**, then separately account for vaccines, laboratory tests, screening instruments, fluoride varnish, and follow-up services when billed independently.

<!-- record_id: plan.self-funded-basic-mec.preventive-visits -->
## Preventive visits
> Retrieval context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Preventive visits

#### Newborns and infants
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.newborns-and-infants; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Preventive visits
- Likely recipient: Newborns and infants
- Typical timing: Newborn, first week, 1, 2, 4, 6, and 9 months
- Working target: **Cash/120% Medicare-equivalent $125–$250 per visit**, plus vaccines/tests

#### Toddlers
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.toddlers; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Preventive visits
- Likely recipient: Toddlers
- Typical timing: 12, 15, 18, 24, and 30 months
- Working target: **$125–$250 per visit**, plus vaccines/tests

#### Children
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.children; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Preventive visits
- Likely recipient: Children
- Typical timing: Annual from age 3 through 11
- Working target: **$125–$250 per visit**, plus vaccines/tests

#### Adolescents and young adults
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.adolescents-and-young-adults; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Preventive visits
- Likely recipient: Adolescents and young adults
- Typical timing: Annual from age 12 through 21
- Working target: **$125–$250 per visit**, plus vaccines/tests


<!-- record_id: plan.self-funded-basic-mec.services-embedded-in-or-triggered-by-the-periodicity-schedule -->
## Services embedded in or triggered by the periodicity schedule
> Retrieval context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule

#### Newborn blood screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.newborn-blood-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Newborn blood screening
- Who is likely to receive it?: Newborns
- Practical service: State newborn metabolic panel
- Typical incremental target: **$50–$200**, state-dependent

#### Critical congenital heart-disease screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.critical-congenital-heart-disease-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Critical congenital heart-disease screening
- Who is likely to receive it?: Newborns
- Practical service: Pulse oximetry
- Typical incremental target: **$0–$25**

#### Newborn hearing screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.newborn-hearing-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Newborn hearing screening
- Who is likely to receive it?: Newborns
- Practical service: OAE/AABR
- Typical incremental target: **$50–$150**

#### Bilirubin screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.bilirubin-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Bilirubin screening
- Who is likely to receive it?: Newborns
- Practical service: Transcutaneous or serum bilirubin
- Typical incremental target: **$10–$50**

#### Developmental surveillance
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.developmental-surveillance; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Developmental surveillance
- Who is likely to receive it?: All children at well visits
- Practical service: Clinician surveillance
- Typical incremental target: **Included in visit**

#### Standardized developmental screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.standardized-developmental-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Standardized developmental screening
- Who is likely to receive it?: Young children at scheduled ages
- Practical service: Validated instrument
- Typical incremental target: **$10–$40**

#### Autism screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.autism-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Autism screening
- Who is likely to receive it?: Toddlers at scheduled ages
- Practical service: Validated instrument
- Typical incremental target: **$10–$40**

#### Behavioral/social/emotional screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.behavioral-social-emotional-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Behavioral/social/emotional screening
- Who is likely to receive it?: Children and adolescents at scheduled visits
- Practical service: Validated instrument
- Typical incremental target: **$10–$40**

#### Maternal depression screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.maternal-depression-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Maternal depression screening
- Who is likely to receive it?: Mothers during specified infant visits
- Practical service: Validated instrument
- Typical incremental target: **$10–$40**

#### Psychosocial/behavioral assessment
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.psychosocial-behavioral-assessment; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Psychosocial/behavioral assessment
- Who is likely to receive it?: Children and adolescents
- Practical service: Assessment during preventive encounter
- Typical incremental target: **Included or $10–$50**

#### Substance-use assessment
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.substance-use-assessment; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Substance-use assessment
- Who is likely to receive it?: Adolescents
- Practical service: Validated screening
- Typical incremental target: **$0–$30**

#### Depression/suicide-risk screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.depression-suicide-risk-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Depression/suicide-risk screening
- Who is likely to receive it?: Adolescents
- Practical service: Validated instrument and follow-up pathway
- Typical incremental target: **$0–$30 screen**

#### Oral-health risk assessment
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.oral-health-risk-assessment; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Oral-health risk assessment
- Who is likely to receive it?: Infants and children
- Practical service: Risk assessment/referral
- Typical incremental target: **Included in visit**

#### Fluoride varnish
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.fluoride-varnish; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Fluoride varnish
- Who is likely to receive it?: Young children after tooth eruption
- Practical service: Varnish application
- Typical incremental target: **$20–$50**

#### Vision screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.vision-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Vision screening
- Who is likely to receive it?: Children at scheduled ages/risk points
- Practical service: Instrument/chart screen
- Typical incremental target: **$0–$40**

#### Hearing screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.hearing-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Hearing screening
- Who is likely to receive it?: Newborns and children/adolescents at scheduled ages
- Practical service: Audiometry/OAE
- Typical incremental target: **$25–$100**

#### Blood-pressure measurement
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.blood-pressure-measurement; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Blood-pressure measurement
- Who is likely to receive it?: Children beginning at scheduled age and younger when risk-based
- Practical service: Office measurement
- Typical incremental target: **Included in visit**

#### Growth/BMI assessment
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.growth-bmi-assessment; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Growth/BMI assessment
- Who is likely to receive it?: All children; BMI beginning at recommended age
- Practical service: Height, weight, BMI percentile
- Typical incremental target: **Included in visit**

#### Dyslipidemia screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.dyslipidemia-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Dyslipidemia screening
- Who is likely to receive it?: Children/adolescents at universal and risk-based ages
- Practical service: Lipid panel
- Typical incremental target: **Cash $15–$35**

#### Anemia screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.anemia-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Anemia screening
- Who is likely to receive it?: Infants/children/adolescents when scheduled or risk-based
- Practical service: Hemoglobin/CBC
- Typical incremental target: **Cash $10–$30**

#### Lead screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.lead-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Lead screening
- Who is likely to receive it?: Infants/children at required ages or risk
- Practical service: Blood lead level
- Typical incremental target: **Cash $15–$40**

#### Tuberculosis screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.tuberculosis-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Tuberculosis screening
- Who is likely to receive it?: Children/adolescents at risk
- Practical service: Risk assessment, TST, or IGRA
- Typical incremental target: **$0 assessment; $40–$120 test**

#### STI screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.sti-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: STI screening
- Who is likely to receive it?: Sexually active adolescents under applicable recommendations
- Practical service: NAAT/serology
- Typical incremental target: **$40–$150**

#### HIV screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.hiv-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: HIV screening
- Who is likely to receive it?: Adolescents under applicable schedule/risk
- Practical service: Lab test
- Typical incremental target: **$20–$50**

#### Cervical screening
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.cervical-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Cervical screening
- Who is likely to receive it?: Young adults with a cervix beginning at applicable age
- Practical service: Cytology/hrHPV strategy
- Typical incremental target: **$75–$200**

#### Immunizations
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.immunizations; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Immunizations
- Who is likely to receive it?: Children/adolescents under current CDC schedule
- Practical service: Vaccine product and administration
- Typical incremental target: **See vaccine tables**

#### Anticipatory guidance
<!-- record_id: plan.self-funded-basic-mec.part-iv-hrsa-bright-futures-services-for-infants-children-and-adolescent.anticipatory-guidance; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part IV — HRSA/Bright Futures services for infants, children, and adolescents > Services embedded in or triggered by the periodicity schedule
- Preventive domain: Anticipatory guidance
- Who is likely to receive it?: Children, adolescents, and caregivers
- Practical service: Safety, nutrition, activity, development, sexual health, and other age-appropriate counseling
- Typical incremental target: **Included in visit**


Bright Futures requirements are especially sensitive to age, interval, risk, and state newborn-screening rules. The final adjudication matrix should reproduce the official periodicity schedule at the service-rule level rather than using this human summary as the claims rule.

<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec -->
# Part V — Risk map for a basic MEC
> Retrieval context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC

<!-- record_id: plan.self-funded-basic-mec.predictable-readily-procurable-services -->
## Predictable, readily procurable services
> Retrieval context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Predictable, readily procurable services

These are typically easy to contract at low fixed prices:

- Basic laboratory tests;
- Screening questionnaires;
- FIT colorectal screening;
- Generic preventive medications;
- Routine primary-care measurements;
- Fluoride varnish;
- Basic vision and hearing screens; and
- Preventive visits through a contracted primary-care or DPC network.

<!-- record_id: plan.self-funded-basic-mec.moderate-episodic-services -->
## Moderate episodic services
> Retrieval context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Moderate episodic services

These require active site-of-service and bundled-price controls:

- Mammography and completion imaging;
- DXA screening;
- AAA ultrasound;
- Low-dose lung CT;
- Genetic counseling/testing;
- Breastfeeding equipment and consultation;
- Long-acting contraception; and
- Multi-session behavioral interventions.

<!-- record_id: plan.self-funded-basic-mec.concentrated-or-open-ended-risks -->
## Concentrated or open-ended risks
> Retrieval context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks

#### Female sterilization
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.female-sterilization; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: Female sterilization
- Why it matters: Surgical professional, facility, and anesthesia expense
- Primary control: Bundled approved-provider pathway; target **$5,000–$8,000**

#### Positive stool screening
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.positive-stool-screening; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: Positive stool screening
- Why it matters: Converts a $15–$40 test into a required no-cost colonoscopy episode
- Primary control: Pre-contracted ambulatory colonoscopy pathway

#### Positive breast/cervical screen
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.positive-breast-cervical-screen; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: Positive breast/cervical screen
- Why it matters: Additional imaging, pathology, colposcopy, or biopsy may be integral to completing screening under applicable guidance
- Primary control: Defined completion pathway and contracted diagnostic providers

#### HIV PrEP
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.hiv-prep; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: HIV PrEP
- Why it matters: Drug and monitoring costs can be substantial and product-dependent
- Primary control: Current formulary consistent with federal requirements, assistance coordination, and contracted labs

#### Intensive behavioral interventions
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.intensive-behavioral-interventions; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: Intensive behavioral interventions
- Why it matters: “Screening” may obligate referral to a real multi-session program
- Primary control: Defined network programs with episode pricing

#### Vaccines and immunizing agents
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.vaccines-and-immunizing-agents; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: Vaccines and immunizing agents
- Why it matters: Product prices change and some are several hundred dollars per dose
- Primary control: Current CMS/CDC price feed and pharmacy/clinic contracts

#### No in-network provider
<!-- record_id: plan.self-funded-basic-mec.part-v-risk-map-for-a-basic-mec-concentrated-or-open-ended-risks.no-in-network-provider; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part V — Risk map for a basic MEC > Concentrated or open-ended risks
- Risk: No in-network provider
- Why it matters: Required service may have to be covered out of network without cost sharing
- Primary control: Network completeness audit before launch


<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store -->
# Part VI — From inventory to product data store
> Retrieval context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store

The inventory above should ultimately be represented in CommonCare’s structured product data store. Each service record should include:

- Stable service identifier;
- Plain-language title and description;
- Governing authority and recommendation URL;
- Recommendation publication and plan-year effective dates;
- Grade or guideline source;
- Age, sex, pregnancy, risk, and frequency criteria;
- Permitted methods and products;
- Integral services;
- Representative CPT, HCPCS, ICD-10, NDC, and revenue codes;
- Network and approved-provider rules;
- Reasonable medical-management rule;
- Exceptions and appeals pathway;
- Pricing method;
- Medicare locality and site-of-service logic;
- Contracted cash or bundled price;
- Expected utilization;
- Expected annual cost per enrolled member; and
- Date and owner of the last clinical, legal, and operational review.

This structured record serves two purposes:

1. It gives AI systems a consistent, traversable source for explaining and administering the product.
2. It provides the source material from which a precise claims specification can be created and maintained.

> **The human-readable document explains the product. The product data store structures its meaning. The claims specification tells the system how to pay it.**



Appendix B: Pricing Guidelines

> ⚠️ Do we have to say it? This pricing is a good-faith guideline based on our experience and models. It's not a guarantee of anything.

#### 0–17
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.0-17; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 0–17
- Cohort: Female
- Expected claims: $58.00
- Aggressive: $61
- Medium: $79
- Low-risk: $104

#### 0–17
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.0-17-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 0–17
- Cohort: Male
- Expected claims: $57.50
- Aggressive: $60
- Medium: $78
- Low-risk: $103

#### 18–25
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.18-25; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 18–25
- Cohort: Female
- Expected claims: $36.50
- Aggressive: $41
- Medium: $53
- Low-risk: $70

#### 18–25
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.18-25-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 18–25
- Cohort: Male
- Expected claims: $24.50
- Aggressive: $30
- Medium: $39
- Low-risk: $52

#### 26–34
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.26-34; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 26–34
- Cohort: Female
- Expected claims: $43.50
- Aggressive: $47
- Medium: $62
- Low-risk: $81

#### 26–34
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.26-34-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 26–34
- Cohort: Male
- Expected claims: $23.00
- Aggressive: $29
- Medium: $37
- Low-risk: $49

#### 35–44
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.35-44; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 35–44
- Cohort: Female
- Expected claims: $50.00
- Aggressive: $53
- Medium: $69
- Low-risk: $91

#### 35–44
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.35-44-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 35–44
- Cohort: Male
- Expected claims: $27.00
- Aggressive: $32
- Medium: $42
- Low-risk: $55

#### 45–54
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.45-54; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 45–54
- Cohort: Female
- Expected claims: $64.00
- Aggressive: $66
- Medium: $86
- Low-risk: $113

#### 45–54
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.45-54-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 45–54
- Cohort: Male
- Expected claims: $41.00
- Aggressive: $45
- Medium: $59
- Low-risk: $77

#### 55–64
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.55-64; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 55–64
- Cohort: Female
- Expected claims: $75.00
- Aggressive: $76
- Medium: $99
- Low-risk: $130

#### 55–64
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.55-64-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 55–64
- Cohort: Male
- Expected claims: $58.00
- Aggressive: $61
- Medium: $79
- Low-risk: $104

#### 65+
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.65; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 65+
- Cohort: Female
- Expected claims: $88.50
- Aggressive: $89
- Medium: $116
- Low-risk: $151

#### 65+
<!-- record_id: plan.self-funded-basic-mec.part-vi-from-inventory-to-product-data-store.65-2; record_type: table-row -->
- Context: Self-Funded Basic MEC Plan — Part VI — From inventory to product data store
- Age band: 65+
- Cohort: Male
- Expected claims: $81.00
- Aggressive: $82
- Medium: $107
- Low-risk: $139
