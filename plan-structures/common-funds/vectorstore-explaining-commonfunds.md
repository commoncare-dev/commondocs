---
id: product.commonfunds.explaining.vector-store
title: CommonFunds — Explanation and Design Rationale
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/common-funds/human-readable.md
metadata_document: plan-structures/common-funds/metadata.yaml
source_commit: 4d7391725cf1bfc53f946c93a8150e0a330d3bae
source_sha256: 9a96a6fa8bd438112973047ab9e9ce21711d275a0b5980cea76fa83b7e85f9b8
metadata_sha256: ec2da998690975e56cbbb2bd3f6e342a3faf67c8c52304eb46facc31c41c1c61
generation_method: deterministic-commonfunds-split-conversion
canonical_source: false
source_status: draft
source_version: 1.0
jurisdiction: United States
scope: explanation-and-design-rationale
last_reviewed: 2026-10-01
---

# CommonFunds — Explanation and Design Rationale

> Retrieval context: This generated document is the explanation-and-design-rationale retrieval view of `plan-structures/common-funds/human-readable.md`. The human-readable source remains canonical. Substantive edits belong in that source and must be regenerated here.

<!-- record_id: product.commonfunds.explaining.vector-store.commonfunds -->
## CommonFunds
> Retrieval context: CommonFunds — CommonFunds

> A unified way to administer multiple account-based health benefits—without confusing the participant experience with the legal structure underneath it.

CommonFunds can combine multiple account-based benefits in one participant experience. Its primary employer-funded layer is either:

- An **Excepted Benefit Health Reimbursement Arrangement (EBHRA)** for an eligible excepted-benefit design; or
- A **CHOICE/ICHRA** for an employee offered and participating in qualifying individual coverage.

An **excepted-benefit Health Flexible Spending Arrangement (Health FSA)** may provide an additional layer under either pathway when its separate requirements are satisfied.

CommonFunds is an administrative structure. It is not a separate statutory benefit category, a replacement for an HRA, or a replacement for a Health FSA. Every dollar retains the rules of its underlying benefit component.

This document is the canonical source for CommonFunds account classification, allocation, limits, and claims availability. Two companion structures control questions outside that scope:

- The [Premium Tax Credit Plan](../ptc-plan/human-readable.md) controls when Marketplace PTC access is preserved and how the self-funded MEC offer supports an excepted CommonFunds pathway without enrolling the PTC claimant; and
- [Private Alternatives Alongside an Employer Plan](../alternative-companion/human-readable.md) controls employer neutrality, nonsponsorship, and post-tax payroll treatment for independently selected options.

> [!IMPORTANT]
> A participant can use the `excepted` CommonFunds pathway while enrolled in a PTC-supported Marketplace plan. In that context, CommonFunds pays only expenses permitted by its EBHRA and Health FSA components. It does **not** reimburse the Marketplace major-medical premium, and the employee must decline—not enroll in—the employer MEC offered to support the excepted-benefit structure.

<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule -->
## Find the operating rule
> Retrieval context: CommonFunds — Find the operating rule

For account administration, jump directly to the relevant rule. The foreword explains the design rationale; the sections below explain how to classify and administer each component.

#### Which component receives a dollar?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.which-component-receives-a-dollar; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: Which component receives a dollar?
- Section: [Classify funding](human-readable.md#1-classify-the-dollar-before-applying-a-limit)

#### How are allowances allocated?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.how-are-allowances-allocated; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: How are allowances allocated?
- Section: [Priority engine](human-readable.md#allowance-design-the-priority-engine)

#### How is available reimbursement calculated?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.how-is-available-reimbursement-calculated; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: How is available reimbursement calculated?
- Section: [Calculation engine](human-readable.md#2-commonfunds-calculation-engine)

#### When can a participant claim funds?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.when-can-a-participant-claim-funds; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: When can a participant claim funds?
- Section: [Availability](human-readable.md#4-when-funds-become-available)

#### Which annual limit applies?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.which-annual-limit-applies; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: Which annual limit applies?
- Section: [Component-specific limits](human-readable.md#5-annual-limits-are-component-specific)

#### Is the displayed balance owned cash?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.is-the-displayed-balance-owned-cash; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: Is the displayed balance owned cash?
- Section: [Balance meaning](human-readable.md#6-what-a-commonfunds-balance-means)

#### Which component can pay a claim?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.which-component-can-pay-a-claim; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: Which component can pay a claim?
- Section: [Separate claims rules](human-readable.md#7-one-balance-separate-claims-rules)

#### Does the design preserve HSA eligibility?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.does-the-design-preserve-hsa-eligibility; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: Does the design preserve HSA eligibility?
- Section: [HSA compatibility](human-readable.md#hsa-compatibility-is-a-separate-test)

#### How do common plan structures differ in practice?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.how-do-common-plan-structures-differ-in-practice; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: How do common plan structures differ in practice?
- Section: [Implementation examples](human-readable.md#common-implementation-examples)

#### How should the benefit be explained?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.how-should-the-benefit-be-explained; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: How should the benefit be explained?
- Section: [Interpretation guide](human-readable.md#8-practical-interpretation-guide)

#### Where are the authorities?
<!-- record_id: product.commonfunds.explaining.vector-store.find-the-operating-rule.where-are-the-authorities; record_type: table-row -->
- Context: CommonFunds — Find the operating rule
- Question: Where are the authorities?
- Section: [References](human-readable.md#9-authorities-cited-in-this-document)


<!-- record_id: product.commonfunds.explaining.vector-store.foreword-commonfunds-origin-and-purpose -->
## Foreword: CommonFunds origin and purpose
> Retrieval context: CommonFunds — Foreword: CommonFunds origin and purpose

<!-- record_id: product.commonfunds.explaining.vector-store.how-it-started-because-of-how-commoncare-scores-health-coverages -->
### How it started: because of how CommonCare scores health coverages
> Retrieval context: CommonFunds — Foreword: CommonFunds origin and purpose > How it started: because of how CommonCare scores health coverages
CommonCare's process for ranking health plan options dismisses sentiment and behavioral economics entirely and instead looks at the actuarial efficiency of plans. The actuarial efficiency means: how much you pay for each dollar the plan is expected to pay.

To look at plan value, CommonCare takes realistic medical bills for a given household and simulates many years of randomized bills against the benefits of all plans in question. This produces realistic results, and CommonCare displays overall results as well as which plans perform well in specific scenarios such as high-claim years.

This process produces very different results than the typical "how many expenses do you expect this year?" approach. That question is nearly useless for an insurance discussion.

Of the useful information this process reveals, one of the clearest is that selecting the lowest premium you can manage is almost always best. Lower premiums are largely a function of higher deductibles.

This makes sense for the obvious actuarial reason that most insured don't reach their deductible at all in most years—yet their premium costs are sunk. There hidden reasons for being especially true though:

- Selection bias: the people most likely to select a high deductible feel they are unlikely to use the insurance. This means the risk pool is more optimal—a huge factor.
- Cost distribution: the odds that you don't meet your deductible may be high, but when expensive medical events do arise, the odds the bill greatly exceeds your deductible are also fairly high. Furthermore, across a lifetime, most people's total medical expenses will be disproportionately allocated to the most expensive years. In these years there is a high likelihood the max out of pocket (MOOP) will be reached on any plan. This means the premium savings for a plan with a higher deductible are direct savings. There is some nuance to this since MOOP isn't standard, but it is broadly much more uniform than deductibles.
- Behavioral changes: participants with more cost responsibility become more price-sensitive and service-sensitive.
- Preventive care is still covered: a significant volume of total transactions are preventive services, which are covered without regard to deductibles

These facts aside, there is widespread sentiment for desiring plans with lower deductibles. This is complex material to understand, the stakes are high, and trust in new information is low.

It's hard to imagine otherwise why HSA adoption would not have been universal. HSA is an unbelievably beneficial tool for improving the total economic offer of health insurance. CommonFunds doesn't offer all of the benefits of HSA to an individual, but it offers significant benefits to a group sponsor (employer) that HSA does not and does not come with the stringent requirements of HDHP + no other first-dollar coverage.

CommonFunds addresses both concerns:

- **Efficiency:** pushes insurance toward lower-utilization, higher-risk coverage.
- **Experience:** preserves the participant-friendly feel of low deductibles.

For all insurance arrangements, it's critical to understand the economic utility of insurance and the downsides.

<!-- record_id: product.commonfunds.explaining.vector-store.understanding-why-the-problems-commonfunds-solves-exist-in-health-insura -->
## Understanding why the problems CommonFunds solves exist in health insurance
> Retrieval context: CommonFunds — Understanding why the problems CommonFunds solves exist in health insurance

<!-- record_id: product.commonfunds.explaining.vector-store.economic-utility-of-insurance -->
### Economic utility of insurance
> Retrieval context: CommonFunds — Understanding why the problems CommonFunds solves exist in health insurance > Economic utility of insurance
- Reduce the drastic effects of the outlying tragic scenarios
- Increase the accuracy of insurable event probability data
- If the insured population is large, and claim events unlikely, costs of reducing severe risk can be small
- Enable stable funding for expensive and specialized transactions

<!-- record_id: product.commonfunds.explaining.vector-store.economic-hazards-of-insurance -->
### Economic hazards of insurance
> Retrieval context: CommonFunds — Understanding why the problems CommonFunds solves exist in health insurance > Economic hazards of insurance
- Decreased consumer price sensitivity due to participant incentives to file claims or waste premiums
- Decreased service provider price sensitivity due to bureaucracy and an impersonal payer creating a "victimless crime" mentality for inflating prices
- Increased costs of services due to insurance profit & overhead
- Increased the likelihood of claim events due to decreased financial penalties for the claimant

These are well-known problems and worthwhile tradeoffs where an insurable risk is salient to an insured, and there is a healthy competitive market of insurers for whom the process of handling these concerns shows through in their final price and process.


<!-- record_id: product.commonfunds.explaining.vector-store.key-confounding-differences-in-health-insurance -->
### Key confounding differences in health insurance
> Retrieval context: CommonFunds — Understanding why the problems CommonFunds solves exist in health insurance > Key confounding differences in health insurance

Employer health coverage has long operated within the unusual federal framework created by ERISA. The ACA added guaranteed availability, rating restrictions, required benefits, medical-loss-ratio rules, and other reforms that further separated major medical coverage from conventional risk-priced insurance.

**No real underwriting**

Insurable underwriting and rating classes create significant risk curbs and control costs in a manner that aligns the interests in controlling costs for an insured, their risk pool, and the insurer. These cannot substantially exist in ACA era major medical insurance, nor can insurers limit the dollar amount of coverage for the insured. This has important effects:
- Significant concentration of claim costs among the highest-cost participants. A small percentage of claimants consumes a disproportionate share of total spending, while the cost is distributed across a much larger population of lower-risk insureds. **This means the premium represents a favorable risk tradeoff for disproportionately few participants.**
- Creation of ultra-high-cost drugs and procedures due to the alignment of legal and economic pressures that mean otherwise unviably large bills will be paid
- Significant increase in behavioral moral hazards due to removal of penalties for high utilization
- For groups, regulations assign them their own risk pool. This means managing the population health and claims efficiency of employees becomes an employer task, a daunting task for an employer to attempt to succeed at.

The most recent [AHRQ analysis](https://meps.ahrq.gov/data_files/publications/st560/stat560.shtml) reports that in 2022:
- The highest-spending 1% of people accounted for 21.7% of healthcare expenditures.
- The highest-spending 5% accounted for 49.7%.
- The highest-spending 10% accounted for 65.9%.
- The bottom 50% accounted for only 2.8%.

This is not a social-value opinion. It is an extraordinarily concentrated statistical distribution.

**Medical Loss Ratio Regulations**

Health insurers cannot profit from pressuring underlying service pricing due to medical loss ratio regulations. They are allowed a fixed percentage of premiums as gross profits (80-85% of premiums must be paid as claims and limited research). This means an absolute requirement for growing profitability is increased total claims. This can happen by growing market share (very challenging for large insurers who already control enormous share), or by increasing the cost and/or volume of claims.

Pricing pressures are intense in every market. Broadly removing competitive controls has drastic consequences—and it has here.

**Preventive care incentive creation**

The requirement for insurance to arrange and paying for "preventive" care services with no participant cost-sharing (deductibles, co-pays, etc) creates a number of significant and unusual issues.
1. These transactions are frequent, routine, and low-cost. These are the opposite characteristics from transactions for which insurance creates value. You have added expense, complexity, and incentive erosion with no significant risk removal.
2. Price sensitivity is deliberately removed because the law treats access—not consumer evaluation of price—as the controlling objective. Whatever the social purpose, the economic consequence is the conversion of routine healthcare transactions into mandatory first-dollar insurance claims.
3. The industries who provide these services, that are now paid for as a matter of human rights, also supply the professionals who advise and write the recommendations that determine what services this blank check pays for. As a result, significant growth has occurred in preventive care industries with paltry results in proving improved health outcomes—especially considering expenditure and removal of barriers.


**Premium Subsidies**

Shared responsibility provisions - tax credits in the individual marketplace and employer affordability requirements for groups - create low and even inverse premium price sensitivity for the end consumer

**Diminished Marketplace**

Significant increases in regulatory complexity combined with mandated participation lead to an alarming decrease in the pressures of a competitive marketplace.

---

All of these challenges create the framework for why CommonFunds is uniquely valuable and what problems bred this as a solution.

<!-- record_id: product.commonfunds.explaining.vector-store.how-commonfunds-creates-unique-value-amid-the-problems-facing-group-heal -->
## How CommonFunds creates unique value amid the problems facing group health plans today
> Retrieval context: CommonFunds — How CommonFunds creates unique value amid the problems facing group health plans today

CommonFunds takes these significant challenges and cherry-picks the easiest improvement with the lowest risk. It restores a normal efficient marketplace to the relatively routine and low-cost elements of healthcare, and does it in a tax-free manner to boot.

> 🔑 We arrange the legally defined vehicles for account-based health plans and seamlessly combine them (administratively/technologically) to create the maximum legal amount of account-based health plan funding

This allows critical structural changes with the relationship of insurance to group health plans:

- Routine and low-cost needs are fully self-funded. CommonCare does not add a separate charge for these accounts. No insurance profits. No cost of bureaucracy.
- Insurance premiums are significantly reduced due to the ability for the group and/or individual participants to select a much higher deductible.
- CommonFunds for participants who are insured can create a double benefit. When expenses are billed to insurance and accumulate toward the deductible, those expenses can also be paid via CommonFunds. These amounts still accumulate toward the deductible for the insured, reducing the cost of possibly future expenses that exceed the deductible. This is the case because CommonFunds are excepted and do not coordinate with insurance.
- Also, for insured participants, preventive care is covered with no-cost sharing, which reduces the expected CommonFunds claims and reduces the odds of depleting the funds.
- Participant claims track to their individual account—they are not shared among other participants. This restores price sensitivity to the bulk of healthcare transactions by volume and rewards efficient consumption.
- The risk is fully contained to the contribution amount, and funds remain employer property indefinitely unless paid out as claims. This creates a significant opportunity for experience gains (leftover money).

In short, CommonFunds pushes health insurance back toward what it was meant to be: a major medical coverage layer, not a payment system for predictable claims. Of course, problems in the marketplace still exist that we wish did not, but it is fantastically effective given the circumstances. Compared with assigning the same dollars to additional insurance premium so the insurer can adjudicate routine expenses, CommonFunds has no meaningful structural downside. Employer exposure is capped, unused amounts may produce experience gains, and the Health FSA’s early-claim risk is counterbalanced by forfeitures.

Furthermore, CommonCare's implementation of this solution enables participant-level cherry-picking in the beneficial sense: each employee can select the available combination that produces the best projected economic result for themselves. A predictable high-cost claimant may belong in the lower-deductible plan, while a lower-utilizing participant may perform better with a high deductible and CommonFunds. The optimization favors the participant’s actual economics; it does not exclude or disadvantage people because they are expensive.

---

<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea -->
## The essential idea
> Retrieval context: CommonFunds — The essential idea

Participants see one CommonFunds balance while the system maintains multiple classifications behind it:

#### EBHRA
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea.ebhra; record_type: table-row -->
- Context: CommonFunds — The essential idea
- Component: EBHRA
- Typical funding source: Employer-only
- Core availability rule: Available according to the plan document
- Treatment of unused amounts: Defaults to no carryover; a rollover applies only when expressly adopted

#### CHOICE/ICHRA
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea.choice-ichra; record_type: table-row -->
- Context: CommonFunds — The essential idea
- Component: CHOICE/ICHRA
- Typical funding source: Employer-only
- Core availability rule: Available only while the individual satisfies the ICHRA coverage conditions and according to the plan document
- Treatment of unused amounts: Governed by the ICHRA; may reimburse premiums and, if the plan permits, nonpremium §213(d) expenses

#### Health FSA
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea.health-fsa; record_type: table-row -->
- Context: CommonFunds — The essential idea
- Component: Health FSA
- Typical funding source: Employee salary reduction and permitted employer contributions
- Core availability rule: Maximum annual benefit is generally available throughout the coverage period
- Treatment of unused amounts: Generally forfeited unless the plan provides a permitted carryover or grace period


> [!IMPORTANT]
> The combined user experience does not merge the legal classifications. Compliance, tax treatment, limits, claims eligibility, and availability are determined component by component.

<!-- record_id: product.commonfunds.explaining.vector-store.coverage-context-is-separate-from-benefit-pathway -->
### Coverage context is separate from benefit pathway
> Retrieval context: CommonFunds — The essential idea > Coverage context is separate from benefit pathway

`benefit_path` identifies the employer account structure. `coverage_context` identifies the participant's major-medical situation. They answer different questions:

#### employergroup
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-coverage-context-is-separate-from-benefit-pathway.employergroup; record_type: table-row -->
- Context: CommonFunds — The essential idea > Coverage context is separate from benefit pathway
- `coverage_context`: `employer_group`
- Common major-medical position: Enrolled in employer group coverage
- Compatible primary CommonFunds path: `excepted`
- Premium rule: Applicable employer-plan premiums may receive only the treatment permitted by the cafeteria-plan documents and tax rules

#### ptcmarketplace
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-coverage-context-is-separate-from-benefit-pathway.ptcmarketplace; record_type: table-row -->
- Context: CommonFunds — The essential idea > Coverage context is separate from benefit pathway
- `coverage_context`: `ptc_marketplace`
- Common major-medical position: Enrolled in a Marketplace QHP with or without PTC
- Compatible primary CommonFunds path: `excepted`
- Premium rule: Marketplace QHP premium is paid with PTC and unrestricted post-tax employee money; never through Section 125

#### outsidegroup
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-coverage-context-is-separate-from-benefit-pathway.outsidegroup; record_type: table-row -->
- Context: CommonFunds — The essential idea > Coverage context is separate from benefit pathway
- `coverage_context`: `outside_group`
- Common major-medical position: Enrolled in a spouse's or other outside group plan
- Compatible primary CommonFunds path: `excepted`
- Premium rule: Outside-plan premium treatment depends on the applicable plan and tax rules; no ICHRA reimbursement

#### ichraindividual
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-coverage-context-is-separate-from-benefit-pathway.ichraindividual; record_type: table-row -->
- Context: CommonFunds — The essential idea > Coverage context is separate from benefit pathway
- `coverage_context`: `ichra_individual`
- Common major-medical position: Enrolled in qualifying individual coverage under CHOICE/ICHRA
- Compatible primary CommonFunds path: `split ICHRA/excepted FSA`
- Premium rule: Employer choice is primarily between flexibility vs allowance counting toward affordability. FSA funds can be a mix of flex and health flex credits and can be used more flexibly.


The calculation engine must never infer one value from the other. In particular, `ptc_marketplace` remains an `excepted` account pathway; PTC is not a third type of HRA.

<!-- record_id: product.commonfunds.explaining.vector-store.hsa-compatibility-is-a-separate-test -->
### HSA compatibility is a separate test
> Retrieval context: CommonFunds — The essential idea > HSA compatibility is a separate test

PTC compatibility does not establish HSA compatibility. Neither does excepted-benefit status. These are separate legal tests serving different purposes:

#### Health FSA excepted-benefit test
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test.health-fsa-excepted-benefit-test; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test
- Test: Health FSA excepted-benefit test
- Controlling question: Does the Health FSA satisfy 45 C.F.R. § 146.145(b)(3)(v), including the other-coverage-availability and maximum-benefit requirements?

#### HSA eligibility test
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test.hsa-eligibility-test; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test
- Test: HSA eligibility test
- Controlling question: Does the participant have disqualifying first-dollar health coverage under Internal Revenue Code § 223?

#### PTC eligibility test
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test.ptc-eligibility-test; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test
- Test: PTC eligibility test
- Controlling question: Is the participant eligible for the premium tax credit under the separate Marketplace coverage, employer-offer, affordability, minimum-value, and enrollment rules?


Passing one test does not establish compliance with either of the others. In particular, a Health FSA may be an excepted benefit under 45 C.F.R. § 146.145 and still disqualify a participant from making or receiving HSA contributions if it can reimburse ordinary medical expenses before the statutory HDHP minimum deductible is satisfied.

<!-- record_id: product.commonfunds.explaining.vector-store.reimbursement-scope-and-timing-determine-hsa-compatibility -->
#### Reimbursement scope and timing determine HSA compatibility
> Retrieval context: CommonFunds — The essential idea > HSA compatibility is a separate test > Reimbursement scope and timing determine HSA compatibility

An HRA or Health FSA label does not, by itself, determine HSA compatibility. The controlling question is what reimbursement the component makes available and when. A participant who can receive reimbursement for ordinary § 213(d) medical expenses before satisfying the applicable statutory HDHP deductible ordinarily has disqualifying coverage. A component can instead be drafted and administered as limited-purpose, post-deductible, suspended, or another HSA-compatible design.

When pre-deductible ordinary medical reimbursement is available, the HSA result generally remains the same even when:

- The participant never submits a claim;
- The account has been exhausted during its active coverage period;
- The participant intends to use only dental or vision benefits;
- The participant is covered by the arrangement through a spouse's employer; or
- The arrangement separately qualifies as an excepted benefit.

HSA eligibility depends on the coverage made available under the governing terms, not merely how the participant ultimately uses it.

A narrow statutory exception applies to Health FSA grace-period coverage when the prior-year balance is zero. That exception should be applied only when its conditions are affirmatively verified; it does not make an otherwise pre-deductible reimbursement design HSA-compatible.

<!-- record_id: product.commonfunds.explaining.vector-store.permitted-hsa-compatible-designs -->
#### Permitted HSA-compatible designs
> Retrieval context: CommonFunds — The essential idea > HSA compatibility is a separate test > Permitted HSA-compatible designs

CommonFunds may preserve HSA eligibility when every applicable reimbursement component is designed and administered as one or more of the following:

1. **Limited-purpose Health FSA or HRA.** Before the deductible is satisfied, reimbursement is limited to permitted coverage such as dental, vision, and qualifying preventive care.
2. **Post-deductible Health FSA or HRA or combo.** The arrangement may reimburse qualifying preventive care before the deductible, but it may reimburse other § 213(d) medical expenses only when those expenses are incurred after the applicable statutory minimum HDHP deductible has been satisfied.
3. **Combined limited-purpose/post-deductible design.** Before the deductible is satisfied, the component pays only permitted limited-purpose expenses. After the deductible is satisfied, it may convert prospectively to general-purpose reimbursement for eligible expenses incurred after that point.

The post-deductible threshold does not have to equal the deductible of the participant's particular HDHP. It may be higher. It must never allow nonpreventive, nonpermitted benefits before the applicable minimum annual deductible under § 223(c)(2)(A) has been satisfied.

For calendar year 2026:

#### Maximum HSA contribution
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-permitted-hsa-co.maximum-hsa-contribution; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Permitted HSA-compatible designs
- HSA/HDHP measure: Maximum HSA contribution
- Self-only: \$4,400
- Family: \$8,750

#### Minimum HDHP deductible
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-permitted-hsa-co.minimum-hdhp-deductible; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Permitted HSA-compatible designs
- HSA/HDHP measure: Minimum HDHP deductible
- Self-only: \$1,700
- Family: \$3,400

#### Maximum HDHP out-of-pocket amount
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-permitted-hsa-co.maximum-hdhp-out-of-pocket-amount; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Permitted HSA-compatible designs
- HSA/HDHP measure: Maximum HDHP out-of-pocket amount
- Self-only: \$8,500
- Family: \$17,000


These amounts are indexed and must be updated for the applicable year. Beginning in 2026, eligible Exchange bronze and catastrophic plans receive separate statutory HSA treatment; the participant must still have no other disqualifying reimbursement coverage.

> [!WARNING]
> The controlling date is the date the medical expense is **incurred**, not the date the claim is submitted, approved, or paid. An ordinary medical expense incurred before the deductible was satisfied cannot become reimbursable merely because the participant later meets the deductible.

<!-- record_id: product.commonfunds.explaining.vector-store.administrative-requirements-for-an-hsa-compatible-pathway -->
#### Administrative requirements for an HSA-compatible pathway
> Retrieval context: CommonFunds — The essential idea > HSA compatibility is a separate test > Administrative requirements for an HSA-compatible pathway

> CommonCare managed CommonFunds handles all of these requirements through our claims processing and coverage configuration engines.

An HSA-compatible CommonFunds configuration must do more than label the account `post-deductible` or `limited-purpose`. The plan documents, eligibility configuration, claims engine, participant communications, and substantiation process must align. At minimum, administration must:

1. Identify which participants are intended to remain HSA-eligible and apply the compatible restrictions to every FSA and HRA layer available to them.
2. Store the applicable statutory deductible threshold for the coverage tier and plan year rather than relying only on the deductible printed on a particular insurance card.
3. Obtain reliable evidence that the applicable deductible has been satisfied and record the effective date on which it was satisfied.
4. Compare each expense's incurred date with that effective date. For ordinary medical expenses, reject any claim incurred earlier even if submitted or paid later.
5. Apply the correct self-only or family-coverage rule, including any embedded-individual deductible issue, under then-current § 223 guidance.
6. Permit pre-deductible payment only for qualifying preventive care or other coverage expressly disregarded under § 223—not merely because the underlying medical plan paid the claim before its deductible.
7. Preserve the same restrictions during any carryover, grace period, run-out period, or automatic account conversion. A general-purpose carryover or grace-period balance can independently disrupt HSA eligibility.
8. Coordinate all available coverage, including a spouse's FSA or HRA, before representing that the participant may contribute to an HSA.

The application should treat HSA compatibility as an affirmative configuration state supported by plan terms and claims controls, not as a conclusion inferred from `benefit_path = excepted`.

<!-- record_id: product.commonfunds.explaining.vector-store.operational-example -->
#### Operational example
> Retrieval context: CommonFunds — The essential idea > HSA compatibility is a separate test > Operational example

Assume the applicable statutory minimum HDHP deductible is satisfied on June 18:

#### Qualifying preventive care
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-operational-exam.qualifying-preventive-care; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Operational example
- Expense: Qualifying preventive care
- Incurred: March 10
- Result under a post-deductible Health FSA: May be reimbursed before the deductible, if otherwise eligible

#### Ordinary office visit
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-operational-exam.ordinary-office-visit; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Operational example
- Expense: Ordinary office visit
- Incurred: June 2
- Result under a post-deductible Health FSA: Not reimbursable; later satisfaction of the deductible does not cure the claim

#### Ordinary office visit
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-operational-exam.ordinary-office-visit-2; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Operational example
- Expense: Ordinary office visit
- Incurred: June 20
- Result under a post-deductible Health FSA: May be reimbursed, if otherwise eligible

#### Dental or vision expense
<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea-hsa-compatibility-is-a-separate-test-operational-exam.dental-or-vision-expense; record_type: table-row -->
- Context: CommonFunds — The essential idea > HSA compatibility is a separate test > Operational example
- Expense: Dental or vision expense
- Incurred: May 5
- Result under a post-deductible Health FSA: May be reimbursed if the arrangement includes a limited-purpose benefit


This design is recognized in IRS Revenue Ruling 2004-45 and IRS Notice 2008-59. IRS Publications 969 and 15-B provide current plain-language summaries. The governing plan documents and current law control if guidance or indexed thresholds change.

---

<!-- record_id: product.commonfunds.explaining.vector-store.common-implementation-examples -->
## Common implementation examples
> Retrieval context: CommonFunds — Common implementation examples

CommonFunds is a unified administrative experience, not a single legal account type. The structure underneath it depends on the employer's coverage strategy and on whether participants should have ordinary medical reimbursement before satisfying an HDHP deductible.

The examples below show common architectures. They do not replace the eligibility, integration, nondiscrimination, affordability, claims, or documentation rules applicable to each component.

#### Group plan with integrated HRA
<!-- record_id: product.commonfunds.explaining.vector-store.common-implementation-examples.group-plan-with-integrated-hra; record_type: table-row -->
- Context: CommonFunds — Common implementation examples
- Example: Group plan with integrated HRA
- Underlying coverage: Employee is enrolled in qualifying non-HRA group coverage or is FSA-only CommonFunds
- Primary employer reimbursement component: Integrated HRA, optionally accompanied or even fronted by a Health FSA
- Ordinary medical reimbursement from the first dollar?: A plan-design choice; reimbursement can begin immediately or after a specified threshold
- HSA-compatible?: Depends on what the HRA/FSA makes available and when; ordinary pre-deductible reimbursement generally disqualifies, while limited-purpose or post-deductible designs may preserve eligibility

#### Group HDHP preserving HSA eligibility
<!-- record_id: product.commonfunds.explaining.vector-store.common-implementation-examples.group-hdhp-preserving-hsa-eligibility; record_type: table-row -->
- Context: CommonFunds — Common implementation examples
- Example: Group HDHP preserving HSA eligibility
- Underlying coverage: Employee is enrolled in an HSA-qualified HDHP or is FSA-only CommonFunds
- Primary employer reimbursement component: HSA contribution plus limited-purpose or post-deductible HRA/FSA
- Ordinary medical reimbursement from the first dollar?: No, except permitted coverage and preventive care; ordinary claims wait until the applicable deductible is satisfied
- HSA-compatible?: Yes, if every available component satisfies the HSA rules

#### Excepted CommonFunds pathway
<!-- record_id: product.commonfunds.explaining.vector-store.common-implementation-examples.excepted-commonfunds-pathway; record_type: table-row -->
- Context: CommonFunds — Common implementation examples
- Example: Excepted CommonFunds pathway
- Underlying coverage: Qualifying non-excepted group coverage available (MEC at least); participant enrollment offered not required
- Primary employer reimbursement component: EBHRA plus an excepted-benefit Health FSA
- Ordinary medical reimbursement from the first dollar?: Can be, if the components are general-purpose
- HSA-compatible?: Not if general-purpose reimbursement is available; may be preserved with limited-purpose or post-deductible restrictions

#### CHOICE/ICHRA pathway
<!-- record_id: product.commonfunds.explaining.vector-store.common-implementation-examples.choice-ichra-pathway; record_type: table-row -->
- Context: CommonFunds — Common implementation examples
- Example: CHOICE/ICHRA pathway
- Underlying coverage: Employee enrolls in qualifying individual coverage or is FSA-only CommonFunds
- Primary employer reimbursement component: ICHRA, optionally accompanied or fronted by an excepted-benefit Health FSA
- Ordinary medical reimbursement from the first dollar?: May be, if the ICHRA/FSA documents permit ordinary medical reimbursement
- HSA-compatible?: Depends on the individual coverage and on every HRA/FSA layer being HSA-compatible


<!-- record_id: product.commonfunds.explaining.vector-store.example-a-group-insurance-with-an-integrated-hra -->
### Example A: Group insurance with an integrated HRA
> Retrieval context: CommonFunds — Common implementation examples > Example A: Group insurance with an integrated HRA

An employer with favorable group insurance rates may retain its group policy, increase the carrier deductible or other participant cost sharing, and use an integrated HRA to cover that exposure. The employee remains enrolled in the underlying group plan; the HRA supplies the employer-funded reimbursement layer.

This can create a first-dollar CommonFunds experience when the employer chooses it. For example, the group policy may have a \$10,000 deductible while the integrated HRA reimburses the first \$10,000 of eligible participant expense—creating a \$0 participant-facing deductible while self-funding only the \$0-\$10,000 risk range. The employer could instead begin reimbursement later, restrict the reimbursable expense categories, or offer different compatible elections. See [CommonFunded](../common-funded/human-readable.md) for risk/reward analysis. The insurance deductible remains \$10,000. The HRA changes who economically bears part of the participant cost sharing; it does not amend the insurance contract.

> Transactions in this risk range are easy to model for risk since they are fully contained. It depends on the insurer premium response to increased deductibles, but normally the math favors this arrangement significantly, since insurers need to equalize premiums across significant bills. That means claimants in this range are doing the subsidizing. This is capitalizing on an idiosyncratic structure of ACA-era health insurance.

An integrated HRA is not an EBHRA and is not subject to the EBHRA annual limit. It is also not an ICHRA and does not depend on enrollment in individual insurance. It follows the integration rules applicable to an HRA paired with non-HRA group coverage, including actual enrollment in the coverage required by the selected integration method, appropriate eligibility for covered family members, and the required opportunity to opt out and waive future reimbursement.

The employer chooses the HSA result through the reimbursement design. If the integrated HRA or adjacent Health FSA makes ordinary medical reimbursement available before the statutory HDHP deductible is satisfied, the participant is generally ineligible to contribute to an HSA. If every available component is limited-purpose, post-deductible, suspended, or otherwise HSA-compatible, the integrated structure may preserve HSA eligibility. First-dollar reimbursement and HSA preservation are alternatives the employer can intentionally offer where the governing rules permit them.

<!-- record_id: product.commonfunds.explaining.vector-store.example-b-group-hdhp-with-hsa-compatible-commonfunds -->
### Example B: Group HDHP with HSA-compatible CommonFunds
> Retrieval context: CommonFunds — Common implementation examples > Example B: Group HDHP with HSA-compatible CommonFunds

An employer may instead prioritize HSA eligibility. The participant enrolls in an HSA-qualified HDHP and may receive employer or employee cafeteria-plan contributions to an HSA. Any adjacent HRA or Health FSA must then be limited-purpose, post-deductible, suspended, or otherwise HSA-compatible.

One participant experience can still combine several layers:

1. Before the statutory HDHP deductible is satisfied, CommonFunds displays HSA dollars and any permitted dental, vision, or preventive-care reimbursement available through a limited-purpose component.
2. After the applicable deductible is satisfied, a post-deductible HRA or Health FSA may reimburse eligible ordinary medical expenses incurred after that point.
3. The underlying HDHP continues to adjudicate claims under its own deductible, coinsurance, and maximum-out-of-pocket terms.

This arrangement does not provide general first-dollar medical reimbursement. The economic value instead comes from tax-advantaged HSA funding, participant ownership of HSA assets, and employer reimbursement that begins only when the HSA rules permit it.

<!-- record_id: product.commonfunds.explaining.vector-store.example-c-excepted-only-commonfunds -->
### Example C: Excepted Only CommonFunds
> Retrieval context: CommonFunds — Common implementation examples > Example C: Excepted Only CommonFunds

An employer may use the excepted pathway when it makes the required non-excepted group coverage available and structures CommonFunds through an EBHRA and an excepted-benefit Health FSA. See our [self-funded MEC](../self-funded-mec/human-readable.md) product for the simplest pathway to doing this.

The EBHRA and Health FSA qualify under separate provisions. [45 C.F.R. § 146.145(b)(3)(viii)](https://www.law.cornell.edu/cfr/text/45/146.145) governs the EBHRA, including the indexed contribution limit and availability of nonexcepted, non-HRA group coverage. Paragraph `(b)(3)(v)` governs the excepted-benefit Health FSA, including its separate other-coverage and maximum-benefit tests. For plan years beginning in 2026, the EBHRA may make no more than \$2,200 newly available. When each component independently satisfies its rule, the arrangement can offer first-dollar medical reimbursement, HSA-compatible limited-purpose or post-deductible reimbursement, or both elections where permitted.

This can support employees enrolled in the employer plan, a spouse's group plan, or qualifying independent coverage contexts described elsewhere in this document. It can also preserve Marketplace PTC access when the employee declines the employer MEC and all separate PTC requirements are satisfied.

For this excepted EBHRA/Health FSA pathway, employees do not have to enroll in the MEC merely to access the excepted components; the applicable rules require the nonexcepted group plan to be made available. This statement is limited to the excepted pathway. An integrated group-plan HRA applies separate integration rules, including actual enrollment in the coverage required by the selected integration method.

<!-- record_id: product.commonfunds.explaining.vector-store.example-d-ichra-with-different-reimbursement-designs -->
### Example D: ICHRA with different reimbursement designs
> Retrieval context: CommonFunds — Common implementation examples > Example D: ICHRA with different reimbursement designs

An ICHRA participant must maintain qualifying individual coverage. Within that framework, the employer can decide whether the ICHRA reimburses premiums only, premiums plus ordinary § 213(d) expenses, or a more restricted set of expenses. An adjacent excepted-benefit Health FSA can add another account layer when its independent requirements are satisfied.

ICHRA funds are use-it-or-lose-it in the sense that employees must participate in a traditional qualifying plan to access any funds. If more flexibility is desired to meet employee needs and preferences, the CommonFunds arrangement can favor the FSA option, but doing so requires that either:

A. The employee contributes. If `S` is the employee's Health FSA salary reduction, the maximum true employer contribution permitted by this financial test is `max(S, 500)`. In ordinary language, once `S` exceeds \$500, this permits up to a 100% employer match—not a 200% employer contribution. The other excepted-benefit requirements still apply.
B. The employer makes roughly half of their employer contribution a flex credit (cashable). This causes the contribution to be treated as employee-contributed via salary reduction per the IRS' rules on HRA/FSA contributions. This approach is great for flexibility, but the employer must realize that the flex funds can be taken home as taxable wages if the employee elects it and they do not count toward affordability. The affordability concern is normally worth less concern in reality than employers tend pay to it, but it is worth understanding fully.

Like the other examples, this FSA/HRA combination can provide first-dollar reimbursement, or can structure to preserve HSA eligibility only when the ICHRA and every other available reimbursement component are limited-purpose, post-deductible, suspended, or otherwise compatible with § 223.

<!-- record_id: product.commonfunds.explaining.vector-store.the-system-must-preserve-the-legal-component -->
### The system must preserve the legal component
> Retrieval context: CommonFunds — Common implementation examples > The system must preserve the legal component

These examples may look similar in the participant interface, but their rules are not interchangeable:

- Do not apply the EBHRA limit to an integrated group-plan HRA.
- Do not make an integrated HRA available merely because group coverage was offered; apply the actual-enrollment and other integration conditions.
- Do not apply ICHRA premium or qualifying-individual-coverage rules to an integrated group-plan HRA.
- Do not infer HSA compatibility or incompatibility from the account label alone. Evaluate the expenses the HRA or Health FSA can reimburse and when reimbursement becomes available.
- Do not reimburse the same expense from an HRA, Health FSA, and HSA. Apply the governing coordination and substantiation rules.

> [!CAUTION]
> The normalized calculation engine below currently defines `excepted` and `ichra` benefit paths. An integrated group-plan HRA requires its own explicit classification and validation rules before it is represented in production data. It must not be stored as an EBHRA merely to reuse the `excepted` path, or as an ICHRA merely to reuse an HRA balance field.

---
