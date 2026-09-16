---
id: product.commonfunds.explaining.vector-store
title: CommonFunds — Explanation and Design Rationale
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/common-funds/human-readable.md
source_commit: 8fc7e4008f0c686d96361a2028456ce9c5bcd3db
source_sha256: 1fde57cbac07e379e04f59defc70c054b5c72a1b611ae0275b8db058278556f9
generation_method: deterministic-commonfunds-split-conversion
canonical_source: false
scope: explanation-and-design-rationale
last_reviewed: unknown
---

# CommonFunds — Explanation and Design Rationale

> Retrieval context: This generated document is the explanation-and-design-rationale retrieval view of `plan-structures/common-funds/human-readable.md`. The human-readable source remains canonical. Substantive edits belong in that source and must be regenerated here.

<!-- record_id: product.commonfunds.explaining.vector-store.commonfunds -->
# CommonFunds
> Retrieval context: CommonFunds — CommonFunds

> A unified way to administer multiple account-based health benefits—without confusing the participant experience with the legal structure underneath it.

CommonFunds can combine multiple account-based benefits in one participant experience. Its primary employer-funded layer is either:

- An **Excepted Benefit Health Reimbursement Arrangement (EBHRA)** for an eligible excepted-benefit design; or
- A **CHOICE/ICHRA** for an employee offered and participating in qualifying individual coverage.

An **excepted-benefit Health Flexible Spending Arrangement (Health FSA)** may provide an additional layer under either pathway when its separate requirements are satisfied.

CommonFunds is an administrative structure. It is not a separate statutory benefit category, a replacement for an HRA, or a replacement for a Health FSA. Every dollar retains the rules of its underlying benefit component.

<!-- record_id: product.commonfunds.explaining.vector-store.foreword-commonfunds-origin-and-purpose -->
## Foreword: CommonFunds origin and purpose
> Retrieval context: CommonFunds — CommonFunds > Foreword: CommonFunds origin and purpose

<!-- record_id: product.commonfunds.explaining.vector-store.how-it-started-because-of-how-commoncare-scores-health-coverages -->
### How it started: because of how CommonCare scores health coverages
> Retrieval context: CommonFunds — CommonFunds > Foreword: CommonFunds origin and purpose > How it started: because of how CommonCare scores health coverages
CommonCare's process for ranking health plan options dismisses sentiment and behavioral economics entirely and instead looks at the actuarial efficiency of plans. The actuarial efficiency means: how much you pay for each dollar the plan is expected to pay.

To look at plan value, CommonCare takes realistic medical bills for a given household and simulates many years of randomized bills against the benefits of all plans in question. This produces realistic results, and CommonCare displays overall results as well as which plans perform well in specific scenarios such as high-claim years.

This process produces very different results than the typical "how many expenses do you expect this year?" approach. That question is nearly useless for an insurance discussion.

Of the useful information this process reveals, one of the clearest is that selecting the lowest premium you can manage is almost always best. Lower premiums are largely a function of higher deductibles.

This makes sense for the obvious actuarial reason that most insured don't reach their deductible at all in most years—yet their premium costs are sunk. There hidden reasons for being especially true though:

- Selection bias: the people most likely to select a high deductible feel they are unlikely to use the insurance. This means the risk pool is more optimal—a huge factor.
- Cost distribution: the odds that you don't meet your deductible may be high, but when expensive medical events do arise, the odds the bill greatly exceeds your deductible are also fairly high. Furthermore, across a lifetime, most people's total medical expenses will be disproportionately allocated to the most expensive years. In these years there is a high likelihood the max out of pocket (MOOP) will be reached on any plan. This means the premium savings for a plan with a higher deductible are direct savings. There is some nuance to this since MOOP isn't standard, but it is broadly much more uniform than deductibles.
- Behavioral changes: participants with more cost responsibility are more price- and service-sensitive.
- Preventive care is still covered: a significant volume of total transactions are preventive services, which are covered without regard to deductibles

These facts aside, there is widespread sentiment for desiring plans with lower deductibles. This is complex material to understand, the stakes are high, and trust in new information is low.

It's hard to imagine otherwise why HSA adoption would not have been universal. HSA is an unbelievably beneficial tool for improving the total economic offer of health insurance. CommonFunds doesn't offer all of the benefits of HSA to an individual, but it offers significant benefits to a group sponsor (employer) that HSA does not and does not come with the stringent requirements of HDHP + no other first-dollar coverage.

CommonFunds allows the satisfaction of both these concerns: capture the efficiency of pushing insurance to a lower-utilization/higher-risk level while preserving the desirable participant experience of low deductibles.

For all insurance arrangements, it's critical to understand the economic utility of insurance and the downsides.

<!-- record_id: product.commonfunds.explaining.vector-store.understanding-why-the-problems-commonfunds-solves-exist-in-health-insura -->
## Understanding why the problems CommonFunds solves exist in health insurance
> Retrieval context: CommonFunds — CommonFunds > Understanding why the problems CommonFunds solves exist in health insurance

<!-- record_id: product.commonfunds.explaining.vector-store.economic-utility-of-insurance -->
### Economic utility of insurance
> Retrieval context: CommonFunds — CommonFunds > Understanding why the problems CommonFunds solves exist in health insurance > Economic utility of insurance
- Reduce the drastic effects of the outlying tragic scenarios
- Increase the accuracy of insurable event probability data
- If the insured population is large, and claim events unlikely, costs of reducing severe risk can be small
- Enable stable funding for expensive and specialized transactions

<!-- record_id: product.commonfunds.explaining.vector-store.economic-hazards-of-insurance -->
### Economic hazards of insurance
> Retrieval context: CommonFunds — CommonFunds > Understanding why the problems CommonFunds solves exist in health insurance > Economic hazards of insurance
- Decreased consumer price sensitivity due to participant incentives to file claims or waste premiums
- Decreased service provider price sensitivity due to bureaucracy and an impersonal payer creating a "victimless crime" mentality for inflating prices
- Increased costs of services due to insurance profit & overhead
- Increased the likelihood of claim events due to decreased financial penalties for the claimant

These are well-known problems and worthwhile tradeoffs where an insurable risk is salient to an insured, and there is a healthy competitive market of insurers for whom the process of handling these concerns shows through in their final price and process.


<!-- record_id: product.commonfunds.explaining.vector-store.key-confounding-differences-in-health-insurance -->
### Key confounding differences in health insurance
> Retrieval context: CommonFunds — CommonFunds > Understanding why the problems CommonFunds solves exist in health insurance > Key confounding differences in health insurance

Employer health coverage has long operated within the unusual federal framework created by ERISA. The ACA added guaranteed availability, rating restrictions, required benefits, medical-loss-ratio rules, and other reforms that further separated major medical coverage from conventional risk-priced insurance.

**No real underwriting**

Insurable underwriting and rating classes create significant risk curbs and control costs in a manner that aligns the interests in controlling costs for an insured, their risk pool, and the insurer. These cannot substantially exist in ACA era major medical insurance, nor can insurers limit the dollar amount of coverage for the insured. This has important effects:
- Significant concentration of claim costs among the highest-cost participants. A small percentage of claimants consumes a disproportionate share of total spending, while the cost is distributed across a much larger population of lower-risk insureds. **This means the premium represents a favorable risk tradeoff for disproportionately few participants.**
- Creation of ultra-high-cost drugs and procedures due to the alignment of legal and economic pressures that mean otherwise unviably large bills will be paid
- Significant increase in behavioral moral hazards due to removal of penalties for high utilization
- For groups, regulations assign them their own risk pool. This means managing the population health and claims efficiency of employees becomes an employer task, a daunting task for an employer to attempt to succeed at.

The most recent AHRQ analysis reports that in 2022:
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
> Retrieval context: CommonFunds — CommonFunds > How CommonFunds creates unique value amid the problems facing group health plans today

CommonFunds takes these significant challenges and cherry-picks the easiest improvement with the lowest risk. It restores a normal efficient marketplace to the relatively routine and low-cost elements of healthcare, and does it in a tax-free manner to boot.

> 🔑 We arrange the legally defined vehicles for account-based health plans and seamlessly combine them (administratively/technologically) to create the maximum legal amount of account-based health plan funding

This allows critical structural changes with the relationship of insurance to group health plans:

- Routine and low-cost needs are fully self-funded. CommonCare does not add a separate charge for these accounts. No insurance profits. No cost of bureaucracy.
- Insurance premiums are significantly reduced due to the ability for the group and/or individual participants to select a much higher deductible.
- CommonFunds for participants who are insured can create a double benefit. When expenses are billed to insurance and accumulate toward the deductible, those expenses can also be paid via CommonFunds. These amounts still accumulate toward the deductible for the insured, reducing the cost of possibly future expenses that exceed the deductible. This is the case because CommonFunds are excepted and do not coordinate with insurance.
- Also, for insured participants, preventive care is covered with no-cost sharing, which reduces the expected CommonFunds claims and reduces the odds of depleting the funds.
- Participant claims track to their individual account—they are not shared among other participants. This restores price sensitivity to the bulk of healthcare transactions by volume and rewards efficient consumption.
- The risk is fully contained to the contribution amount, and funds remain employer property indefinitely unless paid out as claims. This creates a significant opportunity for experience gains (leftover money).

In short, CommonFunds pushes health insurance into a box where it spends more time delivering where insurance offers value. Not entirely, and problems in the marketplace still exist that we wish did not, but it is fantastically effective given the circumstances. Compared with assigning the same dollars to additional insurance premium so the insurer can adjudicate routine expenses, CommonFunds has no meaningful structural downside. Employer exposure is capped, unused amounts may produce experience gains, and the Health FSA’s early-claim risk is counterbalanced by forfeitures.

Furthermore, CommonCare's implementation of this solution enables participant-level cherry-picking in the beneficial sense: each employee can select the available combination that produces the best projected economic result for that employee. A predictable high-cost claimant may belong in the lower-deductible plan, while a lower-utilizing participant may perform better with a high deductible and CommonFunds. The optimization favors the participant’s actual economics; it does not exclude or disadvantage people because they are expensive.

---

<!-- record_id: product.commonfunds.explaining.vector-store.the-essential-idea -->
## The essential idea
> Retrieval context: CommonFunds — CommonFunds > The essential idea

One participant may see one CommonFunds balance while the system maintains multiple classifications behind it:

#### EBHRA
<!-- record_id: product.commonfunds.explaining.vector-store.commonfunds-the-essential-idea.ebhra; record_type: table-row -->
- Context: CommonFunds — CommonFunds > The essential idea
- Component: EBHRA
- Typical funding source: Employer-only
- Core availability rule: Available according to the plan document
- Treatment of unused amounts: Governed by the plan; may carry over or be forfeited

#### CHOICE/ICHRA
<!-- record_id: product.commonfunds.explaining.vector-store.commonfunds-the-essential-idea.choice-ichra; record_type: table-row -->
- Context: CommonFunds — CommonFunds > The essential idea
- Component: CHOICE/ICHRA
- Typical funding source: Employer-only
- Core availability rule: Available only while the individual satisfies the ICHRA coverage conditions and according to the plan document
- Treatment of unused amounts: Governed by the ICHRA; may reimburse premiums and, if the plan permits, nonpremium §213(d) expenses

#### Health FSA
<!-- record_id: product.commonfunds.explaining.vector-store.commonfunds-the-essential-idea.health-fsa; record_type: table-row -->
- Context: CommonFunds — CommonFunds > The essential idea
- Component: Health FSA
- Typical funding source: Employee salary reduction and permitted employer contributions
- Core availability rule: Maximum annual benefit is generally available throughout the coverage period
- Treatment of unused amounts: Generally forfeited unless the plan provides a permitted carryover or grace period


> [!IMPORTANT]
> The combined user experience does not merge the legal classifications. Compliance, tax treatment, limits, claims eligibility, and availability are determined component by component.

---
