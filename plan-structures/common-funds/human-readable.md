## CommonFunds

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

## Find the operating rule

For account administration, jump directly to the relevant rule. The foreword explains the design rationale; the sections below explain how to classify and administer each component.

| Question | Section |
|---|---|
| Which component receives a dollar? | [Classify funding](human-readable.md#1-classify-the-dollar-before-applying-a-limit) |
| How are allowances allocated? | [Priority engine](human-readable.md#allowance-design-the-priority-engine) |
| How is available reimbursement calculated? | [Calculation engine](human-readable.md#2-commonfunds-calculation-engine) |
| When can a participant claim funds? | [Availability](human-readable.md#4-when-funds-become-available) |
| Which annual limit applies? | [Component-specific limits](human-readable.md#5-annual-limits-are-component-specific) |
| Is the displayed balance owned cash? | [Balance meaning](human-readable.md#6-what-a-commonfunds-balance-means) |
| Which component can pay a claim? | [Separate claims rules](human-readable.md#7-one-balance-separate-claims-rules) |
| Does the design preserve HSA eligibility? | [HSA compatibility](human-readable.md#hsa-compatibility-is-a-separate-test) |
| How do common plan structures differ in practice? | [Implementation examples](human-readable.md#common-implementation-examples) |
| How should the benefit be explained? | [Interpretation guide](human-readable.md#8-practical-interpretation-guide) |
| Where are the authorities? | [References](human-readable.md#9-authorities-cited-in-this-document) |

## Foreword: CommonFunds origin and purpose

### How it started: because of how CommonCare scores health coverages
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

## Understanding why the problems CommonFunds solves exist in health insurance

### Economic utility of insurance
- Reduce the drastic effects of the outlying tragic scenarios
- Increase the accuracy of insurable event probability data
- If the insured population is large, and claim events unlikely, costs of reducing severe risk can be small
- Enable stable funding for expensive and specialized transactions

### Economic hazards of insurance
- Decreased consumer price sensitivity due to participant incentives to file claims or waste premiums
- Decreased service provider price sensitivity due to bureaucracy and an impersonal payer creating a "victimless crime" mentality for inflating prices
- Increased costs of services due to insurance profit & overhead
- Increased the likelihood of claim events due to decreased financial penalties for the claimant

These are well-known problems and worthwhile tradeoffs where an insurable risk is salient to an insured, and there is a healthy competitive market of insurers for whom the process of handling these concerns shows through in their final price and process.


### Key confounding differences in health insurance

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

## How CommonFunds creates unique value amid the problems facing group health plans today

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

## The essential idea

Participants see one CommonFunds balance while the system maintains multiple classifications behind it:

| Component | Typical funding source | Core availability rule | Treatment of unused amounts |
|---|---|---|---|
| EBHRA | Employer-only | Available according to the plan document | Defaults to no carryover; a rollover applies only when expressly adopted |
| CHOICE/ICHRA | Employer-only | Available only while the individual satisfies the ICHRA coverage conditions and according to the plan document | Governed by the ICHRA; may reimburse premiums and, if the plan permits, nonpremium §213(d) expenses |
| Health FSA | Employee salary reduction and permitted employer contributions | Maximum annual benefit is generally available throughout the coverage period | Generally forfeited unless the plan provides a permitted carryover or grace period |

> [!IMPORTANT]
> The combined user experience does not merge the legal classifications. Compliance, tax treatment, limits, claims eligibility, and availability are determined component by component.

### Coverage context is separate from benefit pathway

`benefit_path` identifies the employer account structure. `coverage_context` identifies the participant's major-medical situation. They answer different questions:

| `coverage_context` | Common major-medical position | Compatible primary CommonFunds path | Premium rule                                                                                                                                                                       |
|---|---|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `employer_group` | Enrolled in employer group coverage | `excepted`                          | Applicable employer-plan premiums may receive only the treatment permitted by the cafeteria-plan documents and tax rules                                                           |
| `ptc_marketplace` | Enrolled in a Marketplace QHP with or without PTC | `excepted`                          | Marketplace QHP premium is paid with PTC and unrestricted post-tax employee money; never through Section 125                                                                       |
| `outside_group` | Enrolled in a spouse's or other outside group plan | `excepted`                          | Outside-plan premium treatment depends on the applicable plan and tax rules; no ICHRA reimbursement                                                                                |
| `ichra_individual` | Enrolled in qualifying individual coverage under CHOICE/ICHRA | `split ICHRA/excepted FSA`          | Employer choice is primarily between flexibility vs allowance counting toward affordability. FSA funds can be a mix of flex and health flex credits and can be used more flexibly. |

The calculation engine must never infer one value from the other. In particular, `ptc_marketplace` remains an `excepted` account pathway; PTC is not a third type of HRA.

### HSA compatibility is a separate test

PTC compatibility does not establish HSA compatibility. Neither does excepted-benefit status. These are separate legal tests serving different purposes:

| Test | Controlling question |
|---|---|
| Health FSA excepted-benefit test | Does the Health FSA satisfy 45 C.F.R. § 146.145(b)(3)(v), including the other-coverage-availability and maximum-benefit requirements? |
| HSA eligibility test | Does the participant have disqualifying first-dollar health coverage under Internal Revenue Code § 223? |
| PTC eligibility test | Is the participant eligible for the premium tax credit under the separate Marketplace coverage, employer-offer, affordability, minimum-value, and enrollment rules? |

Passing one test does not establish compliance with either of the others. In particular, a Health FSA may be an excepted benefit under 45 C.F.R. § 146.145 and still disqualify a participant from making or receiving HSA contributions if it can reimburse ordinary medical expenses before the statutory HDHP minimum deductible is satisfied.

#### Reimbursement scope and timing determine HSA compatibility

An HRA or Health FSA label does not, by itself, determine HSA compatibility. The controlling question is what reimbursement the component makes available and when. A participant who can receive reimbursement for ordinary § 213(d) medical expenses before satisfying the applicable statutory HDHP deductible ordinarily has disqualifying coverage. A component can instead be drafted and administered as limited-purpose, post-deductible, suspended, or another HSA-compatible design.

When pre-deductible ordinary medical reimbursement is available, the HSA result generally remains the same even when:

- The participant never submits a claim;
- The account has been exhausted during its active coverage period;
- The participant intends to use only dental or vision benefits;
- The participant is covered by the arrangement through a spouse's employer; or
- The arrangement separately qualifies as an excepted benefit.

HSA eligibility depends on the coverage made available under the governing terms, not merely how the participant ultimately uses it.

A narrow statutory exception applies to Health FSA grace-period coverage when the prior-year balance is zero. That exception should be applied only when its conditions are affirmatively verified; it does not make an otherwise pre-deductible reimbursement design HSA-compatible.

#### Permitted HSA-compatible designs

CommonFunds may preserve HSA eligibility when every applicable reimbursement component is designed and administered as one or more of the following:

1. **Limited-purpose Health FSA or HRA.** Before the deductible is satisfied, reimbursement is limited to permitted coverage such as dental, vision, and qualifying preventive care.
2. **Post-deductible Health FSA or HRA or combo.** The arrangement may reimburse qualifying preventive care before the deductible, but it may reimburse other § 213(d) medical expenses only when those expenses are incurred after the applicable statutory minimum HDHP deductible has been satisfied.
3. **Combined limited-purpose/post-deductible design.** Before the deductible is satisfied, the component pays only permitted limited-purpose expenses. After the deductible is satisfied, it may convert prospectively to general-purpose reimbursement for eligible expenses incurred after that point.

The post-deductible threshold does not have to equal the deductible of the participant's particular HDHP. It may be higher. It must never allow nonpreventive, nonpermitted benefits before the applicable minimum annual deductible under § 223(c)(2)(A) has been satisfied.

For calendar year 2026:

| HSA/HDHP measure | Self-only | Family |
|---|---:|---:|
| Maximum HSA contribution | \$4,400 | \$8,750 |
| Minimum HDHP deductible | \$1,700 | \$3,400 |
| Maximum HDHP out-of-pocket amount | \$8,500 | \$17,000 |

These amounts are indexed and must be updated for the applicable year. Beginning in 2026, eligible Exchange bronze and catastrophic plans receive separate statutory HSA treatment; the participant must still have no other disqualifying reimbursement coverage.

> [!WARNING]
> The controlling date is the date the medical expense is **incurred**, not the date the claim is submitted, approved, or paid. An ordinary medical expense incurred before the deductible was satisfied cannot become reimbursable merely because the participant later meets the deductible.

#### Administrative requirements for an HSA-compatible pathway

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

#### Operational example

Assume the applicable statutory minimum HDHP deductible is satisfied on June 18:

| Expense | Incurred | Result under a post-deductible Health FSA |
|---|---:|---|
| Qualifying preventive care | March 10 | May be reimbursed before the deductible, if otherwise eligible |
| Ordinary office visit | June 2 | Not reimbursable; later satisfaction of the deductible does not cure the claim |
| Ordinary office visit | June 20 | May be reimbursed, if otherwise eligible |
| Dental or vision expense | May 5 | May be reimbursed if the arrangement includes a limited-purpose benefit |

This design is recognized in IRS Revenue Ruling 2004-45 and IRS Notice 2008-59. IRS Publications 969 and 15-B provide current plain-language summaries. The governing plan documents and current law control if guidance or indexed thresholds change.

---

## Common implementation examples

CommonFunds is a unified administrative experience, not a single legal account type. The structure underneath it depends on the employer's coverage strategy and on whether participants should have ordinary medical reimbursement before satisfying an HDHP deductible.

The examples below show common architectures. They do not replace the eligibility, integration, nondiscrimination, affordability, claims, or documentation rules applicable to each component.

| Example | Underlying coverage                                                                                          | Primary employer reimbursement component                                   | Ordinary medical reimbursement from the first dollar?                                                                | HSA-compatible?                                                                                                         |
|---|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Group plan with integrated HRA | Employee is enrolled in qualifying non-HRA group coverage or is FSA-only CommonFunds                                         | Integrated HRA, optionally accompanied or even fronted by a Health FSA     | A plan-design choice; reimbursement can begin immediately or after a specified threshold                            | Depends on what the HRA/FSA makes available and when; ordinary pre-deductible reimbursement generally disqualifies, while limited-purpose or post-deductible designs may preserve eligibility |
| Group HDHP preserving HSA eligibility | Employee is enrolled in an HSA-qualified HDHP or is FSA-only CommonFunds                                     | HSA contribution plus limited-purpose or post-deductible HRA/FSA           | No, except permitted coverage and preventive care; ordinary claims wait until the applicable deductible is satisfied | Yes, if every available component satisfies the HSA rules                                                               |
| Excepted CommonFunds pathway | Qualifying non-excepted group coverage available (MEC at least); participant enrollment offered not required | EBHRA plus an excepted-benefit Health FSA                                  | Can be, if the components are general-purpose                                                                        | Not if general-purpose reimbursement is available; may be preserved with limited-purpose or post-deductible restrictions |
| CHOICE/ICHRA pathway | Employee enrolls in qualifying individual coverage or is FSA-only CommonFunds                                | ICHRA, optionally accompanied or fronted by an excepted-benefit Health FSA | May be, if the ICHRA/FSA documents permit ordinary medical reimbursement                                             | Depends on the individual coverage and on every HRA/FSA layer being HSA-compatible                                      |

### Example A: Group insurance with an integrated HRA

An employer with favorable group insurance rates may retain its group policy, increase the carrier deductible or other participant cost sharing, and use an integrated HRA to cover that exposure. The employee remains enrolled in the underlying group plan; the HRA supplies the employer-funded reimbursement layer.

This can create a first-dollar CommonFunds experience when the employer chooses it. For example, the group policy may have a \$10,000 deductible while the integrated HRA reimburses the first \$10,000 of eligible participant expense—creating a \$0 participant-facing deductible while self-funding only the \$0-\$10,000 risk range. The employer could instead begin reimbursement later, restrict the reimbursable expense categories, or offer different compatible elections. See [CommonFunded](../common-funded/human-readable.md) for risk/reward analysis. The insurance deductible remains \$10,000. The HRA changes who economically bears part of the participant cost sharing; it does not amend the insurance contract.

> Transactions in this risk range are easy to model for risk since they are fully contained. It depends on the insurer premium response to increased deductibles, but normally the math favors this arrangement significantly, since insurers need to equalize premiums across significant bills. That means claimants in this range are doing the subsidizing. This is capitalizing on an idiosyncratic structure of ACA-era health insurance.

An integrated HRA is not an EBHRA and is not subject to the EBHRA annual limit. It is also not an ICHRA and does not depend on enrollment in individual insurance. It follows the integration rules applicable to an HRA paired with non-HRA group coverage, including actual enrollment in the coverage required by the selected integration method, appropriate eligibility for covered family members, and the required opportunity to opt out and waive future reimbursement.

The employer chooses the HSA result through the reimbursement design. If the integrated HRA or adjacent Health FSA makes ordinary medical reimbursement available before the statutory HDHP deductible is satisfied, the participant is generally ineligible to contribute to an HSA. If every available component is limited-purpose, post-deductible, suspended, or otherwise HSA-compatible, the integrated structure may preserve HSA eligibility. First-dollar reimbursement and HSA preservation are alternatives the employer can intentionally offer where the governing rules permit them.

### Example B: Group HDHP with HSA-compatible CommonFunds

An employer may instead prioritize HSA eligibility. The participant enrolls in an HSA-qualified HDHP and may receive employer or employee cafeteria-plan contributions to an HSA. Any adjacent HRA or Health FSA must then be limited-purpose, post-deductible, suspended, or otherwise HSA-compatible.

One participant experience can still combine several layers:

1. Before the statutory HDHP deductible is satisfied, CommonFunds displays HSA dollars and any permitted dental, vision, or preventive-care reimbursement available through a limited-purpose component.
2. After the applicable deductible is satisfied, a post-deductible HRA or Health FSA may reimburse eligible ordinary medical expenses incurred after that point.
3. The underlying HDHP continues to adjudicate claims under its own deductible, coinsurance, and maximum-out-of-pocket terms.

This arrangement does not provide general first-dollar medical reimbursement. The economic value instead comes from tax-advantaged HSA funding, participant ownership of HSA assets, and employer reimbursement that begins only when the HSA rules permit it.

### Example C: Excepted Only CommonFunds

An employer may use the excepted pathway when it makes the required non-excepted group coverage available and structures CommonFunds through an EBHRA and an excepted-benefit Health FSA. See our [self-funded MEC](../self-funded-mec/human-readable.md) product for the simplest pathway to doing this.

The EBHRA and Health FSA qualify under separate provisions. [45 C.F.R. § 146.145(b)(3)(viii)](https://www.law.cornell.edu/cfr/text/45/146.145) governs the EBHRA, including the indexed contribution limit and availability of nonexcepted, non-HRA group coverage. Paragraph `(b)(3)(v)` governs the excepted-benefit Health FSA, including its separate other-coverage and maximum-benefit tests. For plan years beginning in 2026, the EBHRA may make no more than \$2,200 newly available. When each component independently satisfies its rule, the arrangement can offer first-dollar medical reimbursement, HSA-compatible limited-purpose or post-deductible reimbursement, or both elections where permitted.

This can support employees enrolled in the employer plan, a spouse's group plan, or qualifying independent coverage contexts described elsewhere in this document. It can also preserve Marketplace PTC access when the employee declines the employer MEC and all separate PTC requirements are satisfied.

For this excepted EBHRA/Health FSA pathway, employees do not have to enroll in the MEC merely to access the excepted components; the applicable rules require the nonexcepted group plan to be made available. This statement is limited to the excepted pathway. An integrated group-plan HRA applies separate integration rules, including actual enrollment in the coverage required by the selected integration method.

### Example D: ICHRA with different reimbursement designs

An ICHRA participant must maintain qualifying individual coverage. Within that framework, the employer can decide whether the ICHRA reimburses premiums only, premiums plus ordinary § 213(d) expenses, or a more restricted set of expenses. An adjacent excepted-benefit Health FSA can add another account layer when its independent requirements are satisfied.

ICHRA funds are use-it-or-lose-it in the sense that employees must participate in a traditional qualifying plan to access any funds. If more flexibility is desired to meet employee needs and preferences, the CommonFunds arrangement can favor the FSA option, but doing so requires that either:

A. The employee contributes. If `S` is the employee's Health FSA salary reduction, the maximum true employer contribution permitted by this financial test is `max(S, 500)`. In ordinary language, once `S` exceeds \$500, this permits up to a 100% employer match—not a 200% employer contribution. The other excepted-benefit requirements still apply.
B. The employer makes roughly half of their employer contribution a flex credit (cashable). This causes the contribution to be treated as employee-contributed via salary reduction per the IRS' rules on HRA/FSA contributions. This approach is great for flexibility, but the employer must realize that the flex funds can be taken home as taxable wages if the employee elects it and they do not count toward affordability. The affordability concern is normally worth less concern in reality than employers tend pay to it, but it is worth understanding fully.

Like the other examples, this FSA/HRA combination can provide first-dollar reimbursement, or can structure to preserve HSA eligibility only when the ICHRA and every other available reimbursement component are limited-purpose, post-deductible, suspended, or otherwise compatible with § 223.

### The system must preserve the legal component

These examples may look similar in the participant interface, but their rules are not interchangeable:

- Do not apply the EBHRA limit to an integrated group-plan HRA.
- Do not make an integrated HRA available merely because group coverage was offered; apply the actual-enrollment and other integration conditions.
- Do not apply ICHRA premium or qualifying-individual-coverage rules to an integrated group-plan HRA.
- Do not infer HSA compatibility or incompatibility from the account label alone. Evaluate the expenses the HRA or Health FSA can reimburse and when reimbursement becomes available.
- Do not reimburse the same expense from an HRA, Health FSA, and HSA. Apply the governing coordination and substantiation rules.

> [!CAUTION]
> The normalized calculation engine below currently defines `excepted` and `ichra` benefit paths. An integrated group-plan HRA requires its own explicit classification and validation rules before it is represented in production data. It must not be stored as an EBHRA merely to reuse the `excepted` path, or as an ICHRA merely to reuse an HRA balance field.

---

## 1. Classify the dollar before applying a limit

Every CommonFunds dollar must be classified according to:

1. Its funding source;
2. The governing plan document;
3. Its applicable tax treatment; and
4. The regulations governing the benefit component.

The product name and displayed balance do not determine classification.

### The classification rule

| Dollar | CommonFunds treatment |
|---|---|
| Genuinely employer-only and unavailable as cash or another taxable benefit on the excepted pathway | Allocate to the EBHRA first, up to the applicable annual EBHRA limit |
| Genuinely employer-only amount established under CHOICE/ICHRA | Keep within the ICHRA; any balance remaining after premium reimbursement may fund eligible nonpremium expenses if the ICHRA document permits them |
| Available as cash or another taxable benefit and elected into the Health FSA | Treat as employee salary reduction; it consumes the Section 125(i) Health FSA limit |
| Direct employee payroll election into the Health FSA | Treat as employee salary reduction |
| Employer-only amount remaining after the EBHRA is filled | May be allocated to the Health FSA as an employer contribution, but only within the excepted-benefit maximum-benefit test and the plan documents |
| Cashable amount elected for premiums that Section 125 permits | May be a Section 125 salary reduction amount, but does not consume the separate Section 125(i) Health FSA limit; **Marketplace Exchange QHP premiums are excluded** |
| Cashable amount elected as wages | Taxable compensation |

The decisive question is not who originally budgeted the money. It is whether the employee can elect cash or another taxable benefit and what the employee actually elects.

An employer credit elected into the Health FSA is treated as salary reduction when the employee could have taken it as cash or another taxable benefit. Calling it an “employer allowance,” “flex credit,” or “contribution” does not change that result.

A choice solely among employer-provided nontaxable health benefits, with no cash or taxable option, is not by itself a Section 125 election.

### Premium-payment boundary

“Eligible premium” is not a universal category. The system must identify the policy and payment authority before assigning any pre-tax or employer dollar:

| Premium | Permitted CommonFunds treatment |
|---|---|
| Employer-sponsored group coverage | May be paid under the employer's cafeteria plan when the plan and tax rules permit |
| Marketplace Exchange QHP on the PTC pathway | PTC plus unrestricted post-tax employee money only; no Section 125 salary reduction, EBHRA reimbursement, or employer payment arrangement |
| Off-Exchange individual coverage under CHOICE/ICHRA | ICHRA reimbursement as provided by the ICHRA; an eligible residual employee premium may be paid through Section 125 when the cafeteria plan permits |
| Individual major-medical premium on the excepted pathway | No EBHRA reimbursement; any employee payment must remain outside CommonFunds and use unrestricted post-tax money unless another independently valid arrangement applies |
| Excepted-benefit premium | May be reimbursable by the EBHRA or payable under the cafeteria plan when the governing component permits |

Section 125(f)(3) prohibits cafeteria-plan payment of a qualified health plan offered through an Exchange. Calling the employee amount “cashable flex,” “salary reduction,” or “post-tax reimbursement” does not change the underlying rule. [IRS ACA tax provisions](https://www.irs.gov/affordable-care-act/affordable-care-act-tax-provisions) · [IRS Notice 2019-45 discussion of Section 125 and Exchange coverage](https://www.irs.gov/irb/2019-42_IRB)

### The primary home for employer-only dollars

On the excepted pathway, the default position for a genuinely employer-only, noncashable health allowance is the EBHRA until the applicable annual limit is reached. This gives the employer cleaner and more flexible control over the funds.

After the EBHRA is filled, employer-only amounts may flow into the Health FSA only to the extent permitted by the Health FSA excepted-benefit rules and governing documents.

On the ICHRA pathway, the EBHRA allocation is zero. The ICHRA amount is established in advance under the governing plan terms. When the employee accepts the ICHRA and maintains qualifying coverage, any amount remaining after premium reimbursement can serve as the CommonFunds primary layer for eligible nonpremium expenses—but only when those expenses are reimbursable under the ICHRA document.

---

## Allowance design: the priority engine

An employer allowance has several competing jobs:

1. Make the benefits feel substantial and useful;
2. Reduce the employee contribution used for affordability testing when the employer wants that result;
3. Avoid forcing employees to buy a narrow category of coverage or lose compensation;
4. Avoid paying unrestricted taxable cash to employees who make no benefit election; and
5. Put as much value as possible into efficient account-based benefits.

The primary target is not simply “maximize affordability” or “maximize cash.” It is:

> **Create the maximum flexible qualified-benefit value, preserve the desired affordability result, and prevent passive access to unrestricted cash.**

The decision tree falls away from that target in two directions:

- Too little health-only flex leaves an affordability gap; or
- Too much freely cashable flex turns the benefit allowance into an automatic wage supplement.

CommonCare divides the allowance into legally distinct tranches so the engine can remain between those two failures.

### The four allowance tranches

| Tranche | May become cash? | Primary job | Affordability treatment | CommonFunds treatment |
|---|---:|---|---|---|
| **Health-only flex credit** | No | Preserve affordability while allowing allocation among qualified employer benefits | Creditable when it satisfies the health-flex rules described below | May pay the applicable employer coverage premium, Health FSA, HSA when permitted, or another qualified medical benefit under the cafeteria terms; it may not pay a Marketplace QHP premium |
| **Primary employer account** | No | Provide employer-controlled health value | Counts only when the governing affordability rule treats that particular contribution as reducing required contribution | EBHRA on the excepted path; ICHRA on the ICHRA path |
| **Conditional cashable flex** | Yes, after the plan's required allocation or election conditions are satisfied | Preserve employee choice without making the entire allowance an automatic bonus | The cashable amount does not reduce required contribution | Defaults by election into the Health FSA or another qualified benefit; may ultimately be taken as taxable wages |
| **True employer Health FSA contribution** | No | Move health-only value into the FSA as capacity is unlocked by salary reduction | Retains affordability value when it is an allocation of a health-only flex credit that was made available to pay MEC; a separate FSA-only contribution does not qualify merely because it pays medical expenses | Added within the excepted-benefit maximum-benefit test |

The tranches may appear as one allowance in the enrollment experience, but the plan documents, payroll records, affordability calculation, and claims engine must preserve their separate classifications.

### The controlling affordability rule

Under 26 CFR §1.36B-2(c)(3)(v)(A)(6), an employer cafeteria-plan amount reduces the employee's required contribution only when all three conditions are met:

1. The employee may not elect the amount as cash or another taxable benefit;
2. The employee may use it to pay for minimum essential coverage; and
3. The employee may use it exclusively for §213(d) medical care.

[26 CFR §1.36B-2(c)(3)(v)(A)(6)](https://www.law.cornell.edu/cfr/text/26/1.36B-2) · [IRS Notice 2015-87, Q&A 8](https://www.irs.gov/irb/2015-52_IRB)

This produces a clean rule:

> **A health-only, noncashable flex dollar that can pay the applicable coverage premium may reduce required contribution. A dollar that can become taxable cash does not.**

Here, “applicable coverage premium” means the employer coverage used in the affordability calculation. It does not mean an employee's Marketplace QHP premium. Exchange coverage cannot be offered through Section 125, and a health-only employer credit cannot be repurposed as PTC-pathway Marketplace-premium funding.

The allowance can contain both kinds of dollars. Making only the amount above a defined health-only threshold cashable does not contaminate the health-only tranche, provided the cafeteria plan and enrollment system establish two genuinely separate rights.

The regulation turns on what the employee **may use** the health-only amount to purchase—not whether every dollar is ultimately spent on premium. A health-only flex credit can therefore remain available for the applicable MEC premium while the employee allocates some of it to the Health FSA or another permitted medical benefit.

### What the Health FSA does—and does not do

A cashable flex credit elected into the Health FSA is treated as employee salary reduction. It consumes the Section 125(i) salary-reduction limit and increases permitted true-employer Health FSA capacity under the excepted-benefit maximum-benefit test.

If the employee directs `\$1` of cashable flex into the Health FSA, that election generally permits up to another `\$1` of true employer Health FSA contribution, after accounting for the `\$500` floor and all other FSA contributions:

```text
maximum_true_employer_fsa_contribution = max(S, 500)
```

where `S` is total Health FSA salary reduction.

The cashable dollar does not itself produce affordability credit. Its value is that the FSA salary-reduction election unlocks another dollar of true employer FSA capacity. CommonCare can then place a dollar of the **health-only flex credit** into that capacity instead of forcing that dollar into the ICHRA or premium.

The health-only flex credit still performs its affordability function because the cafeteria arrangement made it available for MEC and restricted it exclusively to medical care. The employee's actual allocation of part of that credit to the FSA does not retroactively make the credit cashable.

This is the core optimization:

```text
cashable flex elected to FSA
→ creates FSA salary reduction
→ unlocks true employer FSA capacity
→ allows health-only flex to fund flexible FSA benefits
→ while the health-only flex remains affordability-creditable
```

A standalone employer contribution offered only inside the Health FSA is different: it does not satisfy the affordability rule merely because the FSA reimburses §213(d) expenses. The credit must have been made available under the cafeteria plan for MEC premiums.

### Why CommonCare does not default every employer dollar to the ICHRA

An ICHRA dollar requires participation in qualifying individual coverage. That can create a poor incentive: select the coverage category the ICHRA recognizes or forfeit part of the employer's compensation package.

An employer may deliberately accept some §4980H(b) exposure instead of eliminating every theoretical affordability gap. Penalty B is employee-specific and arises only when the other statutory conditions occur, including the employee's receipt of a premium tax credit. An employer offering strong overall benefits may decide that preserving employee flexibility is worth more than closing the final portion of the gap for every employee.

Other employers will prefer certainty. The engine therefore does not make that policy decision silently. It asks the employer how much of the calculated affordability gap to close.

### Sponsor priority settings

| Setting | Meaning | Principal tradeoff |
|---|---|---|
| `balanced` | Preserve the full desired affordability credit, default conditional cashable flex to the FSA, and move health-only dollars into the resulting employer FSA capacity | Default CommonCare target: maximum qualified-benefit flexibility without an affordability loss or passive cash bonus |
| `strict_affordability` | Preserve the full calculated affordability requirement even when doing so requires more premium- or ICHRA-directed funding | Lowest modeled Penalty B exposure; less flexible use when FSA capacity is insufficient |
| `targeted_affordability` | Preserve a stated percentage or dollar amount of the affordability requirement | Employer knowingly accepts the remaining gap to preserve more employee flexibility |
| `cash_access` | Permit more of the allowance to become taxable cash | Maximum employee cash choice; reduced affordability credit and greater automatic-compensation risk |

### Normalized priority-engine inputs

| Input | Meaning |
|---|---|
| `total_employer_allowance` | Total employer budget for the employee or coverage tier |
| `required_contribution_before_flex` | Employee contribution used by the applicable affordability method before cafeteria credits |
| `maximum_affordable_contribution` | Maximum employee contribution permitted under the selected affordability safe harbor or calculation |
| `affordability_target` | `balanced`, `strict_affordability`, `targeted_affordability`, or `cash_access` |
| `affordability_target_percentage` | Portion of the gap the employer elects to close; `1.00` under strict affordability |
| `minimum_health_only_allowance` | Sponsor-selected noncashable health-only floor, if any |
| `benefit_path` | `excepted` or `ichra` |
| `ichra_required_amount` | Amount the ICHRA terms make available, if applicable |
| `cashable_flex_default` | Qualified benefit into which a valid cashable election defaults, ordinarily the Health FSA |
| `cash_unlock_threshold` | Qualified-benefit commitment required before the excess allowance becomes cashable |
| `cash_unlock_scope` | `any_qualified_benefit` or a specified benefit such as `ichra` |
| `outside_coverage_attested` | Whether the employee declares qualifying outside coverage for an administrative path that uses that fact |

### Step 1: calculate the affordability gap

```text
affordability_gap = max(
  required_contribution_before_flex
  - maximum_affordable_contribution,
  0
)
```

### Step 2: calculate the required health-only flex credit

```text
targeted_gap =
  affordability_gap
  × affordability_target_percentage

health_only_flex_credit = min(
  total_employer_allowance,
  max(targeted_gap, minimum_health_only_allowance)
)
```

`health_only_flex_credit` is noncashable. The cafeteria plan must permit it to pay the applicable MEC premium and restrict it exclusively to medical care. It may also be allocated to the Health FSA or another qualified medical benefit. If the arrangement does not satisfy the three affordability conditions, the engine must report it as `noncreditable_health_allowance` rather than reducing required contribution.

### Step 3: calculate the amount eligible to become cashable

```text
allowance_above_floor = max(
  total_employer_allowance - health_only_flex_credit,
  0
)
```

Only `allowance_above_floor` may enter the conditional cashable-flex process. The enrollment system may default a valid election to the CommonFunds Health FSA while allowing the employee to redirect it among permitted cafeteria benefits or taxable wages according to the plan.

Defaulting the election to the Health FSA prevents passive inattention from automatically producing a cash bonus. It also creates Health FSA salary reduction that may unlock true employer FSA capacity. The system must still obtain and retain whatever election the cafeteria plan requires; an administrative default does not erase Section 125 election rules.

#### Apply the cash-unlock condition

The employer may condition access to the excess cashable allowance on the employee first committing a stated amount to qualified benefits.

The condition may be broad:

> The employee must commit at least `\$X` to any qualified health benefit before the excess allowance becomes available through the cashable-flex election.

Or narrow:

> The employee must commit at least `\$X` specifically to CHOICE/ICHRA before the excess allowance becomes available through the cashable-flex election.

```text
if cash_unlock_scope == "any_qualified_benefit":
    qualifying_commitment =
      total_qualified_benefit_elections

if cash_unlock_scope == "ichra":
    qualifying_commitment =
      ichra_qualified_commitment

cashable_flex_unlocked =
  qualifying_commitment >= cash_unlock_threshold
  ? allowance_above_floor
  : 0

cashable_flex_locked =
  allowance_above_floor - cashable_flex_unlocked
```

Before the condition is satisfied, `cashable_flex_locked` is not payable as wages and is not treated as an employee FSA election. It remains employer budget. Once unlocked and validly elected into the Health FSA, that amount is treated as salary reduction and can create matching true-employer FSA capacity.

The broad condition is the CommonCare default because it rewards meaningful benefit participation without forcing the employee into one narrow product. The ICHRA-specific condition is available when the sponsor places greater priority on individual-coverage enrollment.

### Step 4: allocate the employer health-benefit match

After the employee's cashable-flex election is known:

```text
S = total_health_fsa_salary_reduction

remaining_true_employer_fsa_capacity
= max(max(S, 500)
      - existing_true_employer_fsa_contributions,
      0)
```

The engine should fill this capacity first from the health-only flex credit. Doing so moves value away from a narrow premium or ICHRA use and into the more flexible Health FSA without sacrificing affordability treatment:

```text
health_only_flex_to_fsa = min(
  health_only_flex_credit,
  remaining_true_employer_fsa_capacity
)

health_only_flex_remaining_for_premium =
  health_only_flex_credit
  - health_only_flex_to_fsa
```

Both amounts remain parts of the same noncashable health-only credit. The split describes actual benefit allocation; it does not reduce the credit that was made available for affordability purposes.

### Step 5: close the allocation

The priority engine must return each result separately:

| Output | Meaning |
|---|---|
| `affordability_gap` | Gap before the CommonCare allowance design |
| `health_only_flex_credit` | Noncashable health-flex amount preserving the selected affordability result |
| `health_only_flex_to_fsa` | Portion allocated into unlocked true-employer FSA capacity |
| `health_only_flex_for_premium` | Portion remaining available for the qualifying premium or ICHRA-related need |
| `remaining_affordability_gap` | Gap intentionally left open after the selected priority is applied |
| `ichra_allocation` | Employer amount legally assigned to the ICHRA |
| `ebhra_allocation` | Employer amount legally assigned to the EBHRA |
| `cashable_flex_available` | Amount above the noncashable floor that may enter the cashable election process |
| `cashable_flex_unlocked` | Excess allowance made available after the qualified-benefit condition is satisfied |
| `cashable_flex_locked` | Excess allowance remaining employer budget because the condition was not satisfied |
| `cashable_flex_to_fsa` | Employee-elected amount treated as FSA salary reduction |
| `true_employer_fsa_contribution` | Employer-only FSA amount permitted by the maximum-benefit test |
| `cashable_flex_to_wages` | Residual amount validly elected as taxable compensation |
| `unallocated_employer_budget` | Employer budget not legally or administratively assigned |

```text
remaining_affordability_gap = max(
  affordability_gap - health_only_flex_credit,
  0
)
```

### Recommended decision order

1. **Calculate the gap.** Do not guess how much allowance is needed for affordability.
2. **Ask the sponsor how much of the gap to preserve.** The balanced default preserves all of it; choosing less is the first explicit departure from the target.
3. **Establish that amount as health-only and noncashable.** Keep the full credit available for the applicable premium under the cafeteria terms.
4. **Make only the allowance above that amount conditionally cashable.** Default a valid election to the CommonFunds Health FSA rather than wages.
5. **Use the cashable FSA election to calculate true employer FSA capacity.**
6. **Move health-only flex into that unlocked capacity.** This is the preferred use because it increases flexibility without losing affordability.
7. **Assign any health-only remainder to the premium or ICHRA need.** Use no more narrow-purpose funding than the structure requires.
8. **Show the employee the result plainly.** Distinguish health-only dollars, FSA dollars, premium dollars, and amounts that can become taxable wages.

### Outside coverage and the excepted pathway

CommonCare may collect an employee declaration that the employee participates in a spouse's plan or other outside coverage. That declaration can support enrollment administration and explain why the employee is declining the employer's ICHRA. It does not turn spouse-plan enrollment into ICHRA-qualifying individual coverage, and the employee cannot receive ICHRA reimbursement while merely enrolled in a spouse's group plan.

For an employer not using ICHRA, CommonCare can pair a self-funded MEC with the excepted CommonFunds pathway. The employer makes non-excepted group coverage available, while CommonFunds uses the EBHRA and excepted-benefit Health FSA structure for account-based value. This often produces a cleaner home for a generous allowance when individual-coverage participation is not the employer's objective.

### PTC Marketplace coverage and the excepted pathway

The [Premium Tax Credit Plan](../ptc-plan/human-readable.md) is a specific use of the excepted pathway:

1. The employer makes CommonCare's self-funded MEC available as the non-excepted, non-HRA group coverage required for the excepted-benefit Health FSA and EBHRA.
2. The employee seeking PTC **declines the MEC**. The offer of MEC that fails minimum value does not itself block PTC, but enrollment in employer-sponsored MEC does.
3. The employee independently enrolls in a Marketplace QHP and applies any available PTC.
4. The Marketplace premium is paid with PTC and unrestricted post-tax employee money, directly or through neutral payroll remittance.
5. CommonFunds reimburses only expenses permitted by its excepted-benefit components and never the Marketplace major-medical premium.

The enrollment system must treat the MEC waiver as a material tax-credit control. Automatic or accidental MEC enrollment can eliminate the employee's PTC for enrolled months even though the MEC fails minimum value. [26 CFR §1.36B-2(c)(3)](https://www.law.cornell.edu/cfr/text/26/1.36B-2) · [IRS Publication 974](https://www.irs.gov/publications/p974)

For a non-ALE, employee PTC receipt does not create §4980H liability because §4980H applies only to applicable large employers. An ALE may model intentional §4980H(b) exposure, but that is a specialized sponsor decision governed by the PTC Plan—not a default CommonFunds allocation. [IRS ALE determination guidance](https://www.irs.gov/affordable-care-act/employers/determining-if-an-employer-is-an-applicable-large-employer)

### Worked example: preserve affordability while maximizing FSA flexibility

Assume:

| Input | Amount |
|---|---:|
| Total employer allowance | `\$5,000` |
| Required contribution before flex | `\$3,000` |
| Maximum affordable contribution | `\$1,800` |
| Affordability gap | `\$1,200` |
| Sponsor target | Preserve the full affordability result |
| Conditional cashable flex elected to FSA | `\$1,500` |
| Cash-unlock condition | At least `\$1,500` committed to any qualified health benefit |

```text
health_only_flex_credit = 1,200
allowance_above_floor = 5,000 - 1,200 = 3,800

cashable_flex_to_fsa = 1,500
new_true_employer_fsa_capacity = 1,500
cashable_flex_unlocked = 3,800
cashable_flex_remaining_after_fsa = 2,300

health_only_flex_to_fsa = 1,200
health_only_flex_remaining_for_premium = 0
remaining_affordability_gap = 0
```

The `\$1,200` health-only flex credit is noncashable, exclusively medical, and available for the applicable premium. It therefore preserves the selected affordability result. The employee's `\$1,500` cashable-flex election into the Health FSA creates enough true-employer FSA capacity to place the full `\$1,200` health-only credit into the FSA.

The employee's `\$1,500` qualified-benefit commitment satisfies the cash-unlock condition. The result is the desired center: the employer has not lost affordability credit, has not forced the `\$1,200` into the ICHRA, and has not made the allowance freely cashable for an employee who does nothing. The employee receives `\$2,700` of Health FSA value—`\$1,500` of salary reduction plus `\$1,200` of health-only employer flex—and may direct the remaining unlocked flex according to the cafeteria plan.

> [!IMPORTANT]
> For a traditional employer plan, the cafeteria-plan affordability rule expressly describes when a health flex contribution reduces required contribution. ICHRA affordability also has a specific regulatory calculation based on the applicable lowest-cost silver-plan premium and the HRA amount. CommonCare should preserve both calculations in the data model and identify the authority used for the final affordability result rather than silently applying a traditional-plan output to an ICHRA calculation.

---

## 2. CommonFunds calculation engine

The calculation has two separate jobs:

1. **Plan-year allocation:** classify each dollar and assign it to the benefit component that legally governs it.
2. **Runtime availability:** after enrollment, premiums, and claims occur, calculate how much each component can still reimburse.

Do not combine these jobs. The ICHRA amount is established by the plan before claims occur. The portion not used for individual premiums is a remaining ICHRA balance—not a new contribution created later by the calculation.

### The two benefit pathways

Every employee class follows exactly one primary account pathway:

| `benefit_path` | Primary employer account | EBHRA treatment |
|---|---|---|
| `excepted` | EBHRA | EBHRA may be funded within its indexed limit |
| `ichra` | CHOICE/ICHRA | EBHRA capacity is zero for every employee offered the ICHRA, including an employee who opts out |

The Health FSA is calculated separately. An ICHRA may serve as the non-excepted group coverage that must be made available for the Health FSA to qualify as an excepted benefit.

> [!IMPORTANT]
> The pathway is determined by what the employer offers to the employee's class—not by whether one employee accepts the ICHRA. An employee cannot unlock EBHRA funding merely by opting out of the ICHRA.

### Normalized input schema

Use annual plan-year amounts. Every value is an argument supplied to the calculation unless it appears later in the output table.

#### A. Plan structure

| Input | Type | Meaning |
|---|---|---|
| `benefit_path` | `"excepted" \| "ichra"` | Primary account pathway offered to the employee's class |
| `coverage_context` | `"employer_group" \| "ptc_marketplace" \| "outside_group" \| "ichra_individual"` | Participant's major-medical context; controls premium, PTC, MEC-election, and HSA validation without changing the account pathway |
| `ichra_participation` | `"accepted" \| "opted_out" \| "not_applicable"` | Employee's ICHRA election; must be `not_applicable` on the excepted path |
| `ichra_covers_nonpremium_expenses` | Boolean | Whether the ICHRA document permits reimbursement of eligible §213(d) expenses beyond premiums |

#### B. Employer and employee dollars

| Input | Meaning |
|---|---|
| `employer_noncashable_budget` | Total employer-only amount available for allocation; cannot be taken as cash or another taxable benefit |
| `cashable_flex_credit` | Employer flex amount the employee may receive as cash or another taxable benefit |
| `cashable_flex_to_fsa` | Cashable flex credit elected into the Health FSA |
| `cashable_flex_to_premiums` | Cashable flex credit elected for premiums permitted under Section 125; must be zero for `ptc_marketplace` because Exchange QHP premiums cannot be paid through Section 125 |
| `cashable_flex_to_wages` | Cashable flex credit elected as taxable compensation |
| `cashable_flex_to_other` | Cashable flex credit directed to another permitted cashable benefit |
| `direct_employee_fsa_election` | Additional employee salary reduction elected into the Health FSA |

`employer_noncashable_budget` and `cashable_flex_credit` are separate sources. This eliminates the former ambiguity over whether `byCoverage` was inside or outside `allowance_total`.

#### C. Primary account settings

| Input | Applies when | Meaning |
|---|---|---|
| `ebhra_limit` | `excepted` | Indexed maximum newly available under the EBHRA |
| `existing_ebhra_newly_available` | `excepted` | EBHRA amount already made available from another allocation source |
| `ichra_newly_available` | `ichra` | Amount established under the ICHRA for the plan year |

`ichra_newly_available` is an input fixed by the governing ICHRA terms. It is not calculated from unused flex dollars after enrollment.

#### D. Health FSA settings

| Input | Meaning |
|---|---|
| `fsa_salary_reduction_limit` | Applicable Section 125(i) limit |
| `other_fsa_salary_reduction` | Salary reduction already counted for the plan year |
| `existing_fsa_employer_contribution` | True employer Health FSA contributions already assigned from another source |

#### E. Runtime activity

| Input | Applies when | Meaning |
|---|---|---|
| `ichra_premium_reimbursements` | Accepted ICHRA | Premium reimbursements paid or reserved for the measurement period |
| `ichra_nonpremium_reimbursements` | Accepted ICHRA | Other ICHRA reimbursements already paid or approved |
| `ebhra_reimbursements` | Excepted path | EBHRA reimbursements already paid or approved |
| `fsa_reimbursements` | Both paths | Health FSA reimbursements already paid or approved |

Runtime values do not change the legal classification established at plan-year allocation.

### Input validation

#### Cashable credit reconciliation

```text
cashable_flex_credit
= cashable_flex_to_fsa
+ cashable_flex_to_premiums
+ cashable_flex_to_wages
+ cashable_flex_to_other
```

Every amount must be nonnegative. The engine rejects an election that does not reconcile.

#### Path validation

```text
if benefit_path == "excepted":
    ichra_participation must equal "not_applicable"
    ichra_newly_available must equal 0

if benefit_path == "ichra":
    existing_ebhra_newly_available must equal 0

if coverage_context == "ptc_marketplace":
    benefit_path must equal "excepted"
    ichra_participation must equal "not_applicable"
    cashable_flex_to_premiums must equal 0

if coverage_context == "ichra_individual":
    benefit_path must equal "ichra"
```

The PTC Marketplace validation applies only to pre-tax/CommonFunds premium allocation. It does not prevent a separate post-tax payroll-remittance record funded entirely from unrestricted employee wages.

An ICHRA participant may receive nonpremium reimbursements only when:

```text
benefit_path == "ichra"
and ichra_participation == "accepted"
and ichra_covers_nonpremium_expenses == true
```

### Phase 1 — Plan-year allocation

#### Step 1: calculate Health FSA salary reduction

Cashable flex elected into the Health FSA is treated as salary reduction because the employee could have taken a taxable benefit instead.

```text
fsa_salary_reduction_requested
= cashable_flex_to_fsa
+ direct_employee_fsa_election

fsa_salary_reduction_capacity
= max(fsa_salary_reduction_limit
      - other_fsa_salary_reduction, 0)

fsa_salary_reduction
= min(fsa_salary_reduction_requested,
      fsa_salary_reduction_capacity)

fsa_salary_reduction_excess
= max(fsa_salary_reduction_requested
      - fsa_salary_reduction_capacity, 0)
```

The enrollment process should reject the excess before the election becomes effective. It cannot remain in the Health FSA.

#### Step 2: allocate the primary employer account

##### Excepted pathway

```text
ebhra_capacity
= max(ebhra_limit - existing_ebhra_newly_available, 0)

primary_employer_allocation
= min(employer_noncashable_budget, ebhra_capacity)

ebhra_newly_available
= existing_ebhra_newly_available
+ primary_employer_allocation
```

##### ICHRA pathway

```text
ebhra_capacity = 0
primary_employer_allocation = ichra_newly_available
```

Validate that the ICHRA amount does not exceed the employer-only budget being modeled:

```text
0 <= ichra_newly_available <= employer_noncashable_budget
```

The ICHRA remains offered on its governing terms whether the employee accepts or opts out. An opt-out changes participant access, not the amount stated in the plan's offer.

#### Step 3: calculate employer-only budget remaining after the primary account

```text
employer_budget_after_primary
= employer_noncashable_budget
- primary_employer_allocation
```

On the excepted path, this is EBHRA overflow. On the ICHRA path, this is employer budget not assigned to the ICHRA. It is **not** “unused ICHRA.”

#### Step 4: calculate true employer Health FSA capacity

Let `S` equal the total Health FSA salary reduction after applying the Section 125(i) limit:

```text
S = other_fsa_salary_reduction + fsa_salary_reduction

maximum_total_fsa_benefit
= max(2 * S, S + 500)

maximum_true_employer_fsa_contribution
= maximum_total_fsa_benefit - S
= max(S, 500)

remaining_employer_fsa_capacity
= max(maximum_true_employer_fsa_contribution
      - existing_fsa_employer_contribution, 0)

fsa_employer_contribution_from_budget
= min(employer_budget_after_primary,
      remaining_employer_fsa_capacity)

fsa_employer_contribution
= existing_fsa_employer_contribution
+ fsa_employer_contribution_from_budget
```

The financial test is only one requirement. The Health FSA must also satisfy the other conditions for excepted-benefit treatment.

#### Step 5: close the employer-only allocation

```text
unallocated_employer_noncashable_budget
= employer_budget_after_primary
- fsa_employer_contribution_from_budget
```

The amount must reconcile:

```text
employer_noncashable_budget
= primary_employer_allocation
+ fsa_employer_contribution_from_budget
+ unallocated_employer_noncashable_budget
```

Do not convert the unallocated amount into wages automatically. A noncashable benefit does not become cash merely because an account limit or plan allocation has been reached.

### Phase 1 outputs

| Output | Meaning |
|---|---|
| `primary_account_type` | `ebhra` or `ichra` |
| `primary_employer_allocation` | Employer-only amount assigned to the primary account |
| `ebhra_newly_available` | Total EBHRA amount newly available; always zero on the ICHRA path |
| `ichra_offered_amount` | ICHRA amount stated by the plan; always zero on the excepted path |
| `fsa_salary_reduction` | Valid cashable-flex and direct employee salary reduction assigned to the Health FSA |
| `fsa_salary_reduction_excess` | Requested Health FSA salary reduction that must be rejected or redirected |
| `fsa_employer_contribution` | Total true employer contribution assigned to the Health FSA |
| `cashable_flex_to_premiums` | Cashable election assigned to eligible premiums |
| `cashable_flex_to_wages` | Cashable election paid as taxable compensation |
| `cashable_flex_to_other` | Cashable election assigned to another permitted benefit |
| `unallocated_employer_noncashable_budget` | Employer-only budget not assigned to a benefit component |

### Phase 2 — Runtime availability

#### Excepted pathway balance

```text
ebhra_available
= max(ebhra_newly_available - ebhra_reimbursements, 0)
```

Actual availability may be lower when the plan uses monthly accrual or another plan-defined schedule. The balance engine must apply that schedule before approving a claim.

#### ICHRA pathway balance

If the employee opts out:

```text
ichra_available = 0
ichra_nonpremium_available = 0
```

If the employee accepts and maintains qualifying individual coverage:

```text
ichra_remaining
= max(ichra_newly_available
      - ichra_premium_reimbursements
      - ichra_nonpremium_reimbursements, 0)

ichra_nonpremium_available
= ichra_covers_nonpremium_expenses
   ? ichra_remaining
   : 0
```

`ichra_nonpremium_available` is the ICHRA-funded CommonFunds layer. It replaces the EBHRA layer for an employee participating in CHOICE and qualifying individual coverage. Every dollar remains an ICHRA dollar and follows the ICHRA plan document.

#### Health FSA balance

```text
fsa_maximum_benefit
= S + fsa_employer_contribution

fsa_available
= max(fsa_maximum_benefit - fsa_reimbursements, 0)
```

The Health FSA uniform-coverage rule determines when the maximum annual benefit becomes available; payroll collections to date do not cap the participant's valid reimbursement rights.

### Participant-facing CommonFunds output

The unified display is the sum of amounts currently available for the submitted expense—not merely every positive account balance.

```text
if benefit_path == "excepted":
    primary_available = ebhra_available
else:
    primary_available = ichra_nonpremium_available

commonfunds_available_for_claim
= eligible_primary_amount_for_claim
+ eligible_fsa_amount_for_claim
```

The claims engine must evaluate component eligibility and ordering before displaying or paying the combined amount.

### Worked example A — EBHRA pathway

Assume:

| Input | Amount |
|---|---:|
| `benefit_path` | `excepted` |
| Employer noncashable budget | \$3,000 |
| Cashable flex credit | \$2,400 |
| Cashable flex to Health FSA | \$2,000 |
| Cashable flex to wages | \$400 |
| Direct employee FSA election | \$1,000 |
| EBHRA limit | \$2,200 |
| Existing EBHRA amount | \$0 |
| Existing employer FSA contribution | \$0 |
| FSA salary reduction limit | \$3,400 |

```text
fsa_salary_reduction = 2,000 + 1,000 = 3,000

primary_employer_allocation
= min(3,000, 2,200)
= 2,200 to EBHRA

employer_budget_after_primary = 3,000 - 2,200 = 800

maximum_true_employer_fsa_contribution
= max(3,000, 500)
= 3,000

fsa_employer_contribution_from_budget
= min(800, 3,000)
= 800

unallocated_employer_noncashable_budget = 0
```

| Output | Amount |
|---|---:|
| EBHRA newly available | \$2,200 |
| Health FSA salary reduction | \$3,000 |
| Health FSA employer contribution | \$800 |
| Total Health FSA maximum benefit | \$3,800 |
| Taxable wages | \$400 |
| Unallocated employer-only budget | \$0 |

### Worked example B — ICHRA pathway

Assume:

| Input | Amount |
|---|---:|
| `benefit_path` | `ichra` |
| `ichra_participation` | `accepted` |
| ICHRA covers nonpremium expenses | `true` |
| Employer noncashable budget | \$4,800 |
| ICHRA newly available | \$4,800 |
| Premium reimbursements for the year | \$3,600 |
| Other ICHRA reimbursements already paid | \$200 |
| Health FSA salary reduction | \$1,000 |
| Health FSA reimbursements paid | \$250 |

```text
ebhra_newly_available = 0

ichra_remaining
= 4,800 - 3,600 - 200
= 1,000

ichra_nonpremium_available = 1,000

fsa_available
= 1,000 - 250
= 750
```

For an expense eligible under both components, the participant may see up to `\$1,750` of CommonFunds availability, subject to the plan's claims-ordering rule:

| Internal component | Available |
|---|---:|
| ICHRA available for nonpremium §213(d) expenses | \$1,000 |
| Health FSA | \$750 |
| **Unified CommonFunds availability** | **\$1,750** |

The participant has no EBHRA. The `\$1,000` primary balance is simply the unused portion of the predetermined ICHRA after premium and other reimbursements.

---

## 3. The underlying benefit components

### Account-based group health plans

An account-based group health plan reimburses medical expenses through a defined account or allowance structure. HRAs and Health FSAs are common examples. Unlike traditional insurance, these arrangements generally provide a limited dollar amount rather than unlimited payment of covered claims.

Under the ACA market-reform framework, an account-based group health plan generally must:

1. Integrate with other qualifying group health coverage;
2. Qualify as an excepted benefit; or
3. Satisfy another applicable exception.

An arrangement that does not satisfy a valid pathway may violate the ACA market reforms, including the prohibition on annual dollar limits and the preventive-services requirements. CommonFunds is designed so each underlying component independently maintains its own compliance pathway.

### EBHRA

An EBHRA is an HRA or other account-based group health plan that qualifies as an excepted benefit.

Its defining attributes include:

- Employer-only funding;
- Reimbursement of eligible medical expenses;
- Availability and carryover controlled by the plan document;
- Application of nondiscrimination rules to similarly situated eligible employees; and
- An annual limit on the amount newly made available.

An arrangement is not an HRA merely because it is labeled one. Classification follows actual operation.

Amounts attributable to employee salary reduction are not HRA funds. That does not prohibit an employee from contributing to CommonFunds; it means those dollars belong to a different component, normally the Health FSA.

An HRA may operate alongside a cafeteria plan. A choice only among employer-provided nontaxable health benefits does not by itself turn the HRA into a Section 125 election. The concern arises when an employee can increase the reimbursement amount through salary reduction, obtain a larger reimbursement by forgoing a taxable benefit, or otherwise correlate the reimbursement with a salary reduction election.

### Health FSA

A Health FSA may receive:

- Employee salary reduction elections; and
- Employer contributions permitted under the applicable rules.

A cashable employer allowance elected into the Health FSA belongs to the first category. It is treated as salary reduction for both the Section 125(i) limit and the excepted-benefit maximum-benefit calculation.

---

## 4. When funds become available

### Health FSA: uniform coverage

The Health FSA must make the maximum reimbursement amount available throughout the coverage period. Availability is not limited to payroll contributions collected when a claim occurs.

For example, an employee who elects \$2,400 for the year may have the full \$2,400 available in January even though only \$200 has been collected through payroll.

Employer contributions included in the Health FSA benefit follow the same availability rule. A Health FSA containing a \$3,000 employee election and a \$1,000 employer contribution generally makes the full \$4,000 benefit available at the beginning of the coverage period.

### The risk runs both ways

Uniform coverage creates a group risk arrangement, not a one-sided employer loss.

| Scenario | Result |
|---|---|
| Participant incurs \$3,000 in eligible claims early, then terminates after only \$250 has been collected | The plan generally bears the shortfall and cannot require repayment merely because employment ended |
| Participant contributes \$3,000 but submits only \$500 in claims | The unused \$2,500 is generally forfeited unless the plan provides a permitted carryover or grace period |

The employer bears early-utilization risk. Participants bear forfeiture risk. The plan is not required to pay unused Health FSA amounts as cash compensation.

### EBHRA: availability follows the plan

The Health FSA uniform coverage rule does not apply to the EBHRA. The plan may make EBHRA funds available annually, monthly, or under another permitted schedule.

CommonFunds represents accelerated EBHRA availability in plan documents through `advanceMonths`. The application property `commonFundLoanMultiple` is a legacy alias for the same timing input and should be normalized to `advanceMonths` before document generation.

| Monthly allocation | `advanceMonths` | Initial availability | Meaning |
|---:|---:|---:|---|
| \$100 | 1 | \$100 | Funds become available as they accrue monthly |
| \$100 | 6 | \$600 | Up to six months of future allocations are available |
| \$100 | 12 | \$1,200 | The full annual allocation is available immediately |

The default is `advanceMonths: 1`, meaning only the current accumulated monthly amount is available. A larger value determines timing only; it does not make the arrangement a legal loan or create a repayment obligation.

Accelerated access must be applied uniformly according to the plan’s terms. It cannot be selectively granted to particular participants outside those terms.

### Recourse after accelerated EBHRA reimbursement

Availability and recourse are separate design decisions. When a participant is reimbursed more than the EBHRA amount accrued before termination, the plan document determines whether the employer has recourse.

| Plan design | Result |
|---|---|
| Accelerated access with no recourse | Employer accepts the risk of unrecovered advanced reimbursements |
| Accelerated access with recourse | The plan may require repayment according to the applicable agreement |

Never infer repayment from `advanceMonths` or the legacy `commonFundLoanMultiple` alias; review the plan document.

---

## 5. Annual limits are component-specific

There is no single annual limit on the combined CommonFunds balance.

### EBHRA annual limit

The EBHRA limit applies to the amount newly made available for a plan year. It does not apply to Health FSA funds, employee salary reduction, separate account-based benefits, or permitted prior-year carryover.

| Plan year | Annual EBHRA limit | Status in source data |
|---:|---:|---|
| 2025 | \$2,150 | Official |
| 2026 | \$2,200 | Official |
| 2027 | \$2,250 | Official |

### Health FSA salary reduction limit

The Section 125(i) limit restricts employee salary reduction into the Health FSA. It is not a total account limit.

For plan years beginning in 2026, the Health FSA salary-reduction limit is \$3,400. If the plan adopts a carryover, up to \$680 may carry from the prior plan year without reducing the \$3,400 salary-reduction limit.

It includes:

- Direct employee payroll salary reduction; and
- Employer flex credits that the employee could receive as cash or another taxable benefit but elects into the Health FSA.

A genuine noncashable employer contribution does not consume this limit.

### Employer Health FSA contributions

True employer contributions may increase the total Health FSA benefit beyond the employee salary reduction limit. To remain an excepted benefit, the maximum Health FSA benefit cannot exceed the greater of:

1. Two times the participant’s salary reduction election; or
2. The participant’s salary reduction election plus \$500.

If `S` is total Health FSA salary reduction:

```text
maximum total Health FSA benefit = max(2 * S, S + 500)
maximum true employer contribution = max(S, 500)
```

| Salary reduction (`S`) | Maximum total benefit | Maximum employer contribution under this test |
|---:|---:|---:|
| \$3,400 | \$6,800 | \$3,400 |
| \$1,000 | \$2,000 | \$1,000 |
| \$100 | \$600 | \$500 |

This financial test is not the only excepted-benefit requirement. Other non-excepted group health coverage must also be made available for the year to the applicable class.

### Combined-limit example

One participant could have:

| Component | Source | Amount |
|---|---|---:|
| EBHRA | Employer-only | \$2,200 |
| Health FSA | Employee salary reduction | \$3,400 |
| Health FSA | Employer contribution | \$3,400 |
| **Combined availability** |  | **\$9,000** |

The combined balance exceeding an individual component’s limit does not itself create a compliance problem. Each component is tested separately.

---

## 6. What a CommonFunds balance means

A CommonFunds balance is generally a notional reimbursement record—not a participant-owned bank account.

It tracks:

- Allocated benefit amounts;
- Claims incurred;
- Claims approved;
- Reimbursements paid; and
- Remaining reimbursement availability.

When the application displays `\$2,500 available`, it means the participant may receive up to \$2,500 in additional eligible reimbursements under the applicable benefit terms. It does not necessarily mean that:

- Cash is held in the participant’s name;
- The employer deposited that amount into a segregated account;
- The amount is wages owed to the participant; or
- The participant owns the unused balance.

### Funded and unfunded arrangements

The employer may pay approved claims as they arise or reserve funds in advance. The participant’s reimbursement rights follow the plan terms, not the employer’s internal funding method.

### Ownership of unused amounts

| Component | Participant right | Treatment of unused amount |
|---|---|---|
| Health FSA | Reimbursement of eligible expenses up to the available benefit | Defaults to forfeiture after the applicable claims period; a permitted carryover or grace period applies only when expressly adopted |
| EBHRA | Reimbursement according to the EBHRA terms | Defaults to no carryover; a rollover or other treatment applies only when expressly adopted |

Neither component automatically creates employee ownership of unused funds. Under the default CommonFunds design, excess amounts remain or revert to the employer or plan after timely claims are resolved, subject to applicable plan-asset and cafeteria-plan rules.

### Employer accounting views

| Measure | Meaning |
|---|---|
| Maximum exposure | The maximum amount that could be reimbursed; sometimes described as accrued liability |
| Actual claims liability | Claims already approved, scheduled, payable, or paid |
| Expected cost | The actuarially expected cost, which may be lower than maximum exposure because participants may not use every available dollar |

Do not describe unused balances as employer debt unless the plan terms create that obligation.

### Accumulated balance and real-time balance

These values can differ:

- **Accumulated balance** describes the employer-side accrued cash position or liability.
- **Real-time balance** describes what the participant may claim at that moment, including accelerated availability and Health FSA uniform coverage.

Uniform coverage or accelerated access can make the real-time balance exceed the accumulated balance. The accumulated balance may therefore become negative after an early reimbursement without changing the participant’s valid availability under the plan.

---

## 7. One balance, separate claims rules

A participant-facing balance may combine amounts that follow different rules:

```text
CommonFunds available: \$2,500

Internal classification:
  EBHRA employer funds:          \$1,000
  Health FSA salary reduction:   \$1,500
```

The application must determine which component can reimburse an expense. “CommonFunds covers it” is not a complete eligibility rule.

For every claim, determine:

1. Which component applies;
2. Whether that component covers the expense;
3. Whether funds are currently available under that component’s rules; and
4. What the governing plan document requires.

---

## 8. Practical interpretation guide

| Avoid | Use instead |
|---|---|
| “Employees cannot contribute to CommonFunds because EBHRAs cannot accept employee contributions.” | “Employee salary reductions are allocated to the Health FSA component because they are not HRA funds.” |
| “Employer funds are always EBHRA funds.” | “Employer funds may be EBHRA funds or permitted Health FSA employer contributions, depending on cashability, plan design, and applicable limits.” |
| “The employer credit is an employer contribution.” | “If the employee could take the credit as cash or another taxable benefit and elects it into the Health FSA, it is treated as salary reduction for the relevant rules.” |
| “The employee has only contributed \$100, so only \$100 is available.” | “Health FSA availability follows the annual election, not payroll contributions collected to date.” |
| “All CommonFunds dollars are available immediately.” | “The Health FSA follows uniform coverage; the EBHRA follows its plan-defined availability schedule.” |
| “The employer loses money because FSA funds are available immediately.” | “The Health FSA transfers risk in both directions: employers bear early-claim risk and participants bear forfeiture risk.” |
| “`commonFundLoanMultiple` means the participant owes repayment.” | “The property controls availability timing; recourse depends on the plan document.” |
| “You have \$2,000 saved in CommonFunds.” | “You have \$2,000 available for eligible reimbursement.” |
| “Your employer deposited \$2,000 for you.” | “Your employer made \$2,000 available for eligible reimbursement.” |
| “You lose your money if you do not use the EBHRA.” | “Unused EBHRA amounts are handled according to the plan terms.” |
| “The Health FSA limit is the most an employee can have available.” | “The indexed limit applies to salary reduction; permitted employer contributions may increase the total benefit.” |
| “The CommonFunds balance exceeds the EBHRA limit.” | “Apply the EBHRA limit only to the EBHRA component and test the other components separately.” |
| “CommonFunds reimburses this expense.” | “The applicable CommonFunds component determines whether the expense is eligible.” |
| “The employee has Marketplace coverage, so CommonFunds can pay the premium.” | “The PTC pathway uses CommonFunds only for eligible excepted-benefit expenses; the Marketplace premium is paid with PTC and unrestricted post-tax employee money.” |
| “The employee was offered MEC, so the employee cannot receive PTC.” | “An offer of MEC that fails minimum value does not itself block PTC, but enrollment in employer-sponsored MEC does; the PTC claimant must decline the MEC.” |
| “PTC-compatible CommonFunds is automatically HSA-compatible.” | “PTC and HSA eligibility are separate; HSA compatibility depends on what each FSA/HRA component can reimburse and when.” |
| “The Health FSA is an excepted benefit, so it preserves HSA eligibility.” | “Excepted-benefit status and HSA compatibility are separate tests; ordinary pre-deductible reimbursement generally disqualifies, while limited-purpose or properly post-deductible terms may preserve eligibility.” |
| “The deductible was met before the FSA paid the claim.” | “For an ordinary medical expense, the deductible must have been satisfied before the expense was incurred.” |
| “The employee did not use the FSA, so HSA contributions are allowed.” | “HSA eligibility ordinarily turns on the reimbursement coverage made available, not whether the employee submitted a claim.” |

---

## 9. Authorities cited in this document

- [IRS Notice 2002-45](https://www.irs.gov/pub/irs-drop/n-02-45.pdf), Parts I and IV—HRA funding and cafeteria-plan interaction.
- [IRS Notice 2013-54](https://www.irs.gov/irb/2013-40_IRB)—requirements for integrating an HRA with non-HRA group health coverage and the annual opt-out rules.
- [DOL ACA Implementation FAQ Part 37](https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-37)—integration with group coverage sponsored by the employee's or spouse's employer and alignment of covered family members.
- [IRS Notice 2012-40](https://www.irs.gov/pub/irs-drop/n-12-40.pdf)—cashable employer flex credits elected into a Health FSA are treated as salary reduction for Section 125(i).
- [45 C.F.R. § 146.145(b)(3)(v)](https://www.law.cornell.edu/cfr/text/45/146.145)—Health FSA excepted-benefit requirements and treatment of taxable options elected into the FSA.
- [26 C.F.R. § 54.9831-1(c)(3)(v)](https://www.law.cornell.edu/cfr/text/26/54.9831-1)—parallel Treasury excepted-benefit rule.
- [26 C.F.R. § 1.36B-2(c)(3)](https://www.law.cornell.edu/cfr/text/26/1.36B-2)—PTC treatment of employer-coverage offers and enrollment.
- [IRS Publication 974](https://www.irs.gov/publications/p974)—PTC eligibility, employer-sponsored MEC, affordability, and minimum value.
- [IRS ACA tax provisions](https://www.irs.gov/affordable-care-act/affordable-care-act-tax-provisions)—Section 125 prohibition on purchasing Exchange coverage pre-tax.
- [IRS Publication 15-B](https://www.irs.gov/publications/p15b)—HSA eligibility and incompatible FSA/HRA coverage.
- [Internal Revenue Code § 223](https://www.law.cornell.edu/uscode/text/26/223)—HSA eligibility, HDHP requirements, permitted insurance, permitted coverage, and preventive-care rules.
- [IRS Revenue Ruling 2004-45](https://www.irs.gov/pub/irs-drop/rr-04-45.pdf)—limited-purpose and post-deductible FSA/HRA designs that preserve HSA eligibility.
- [IRS Notice 2008-59](https://www.irs.gov/pub/irs-drop/n-08-59.pdf)—definition and administration of post-deductible and limited-purpose Health FSAs and HRAs.
- [IRS Publication 969](https://www.irs.gov/publications/p969)—current plain-language guidance on HSA-compatible employee health plans and Health FSA grace periods.

---

## Core principle

> **CommonFunds unifies accounting and user experience. Compliance remains component-specific.**

Always preserve the distinction between the participant experience, accounting structure, statutory classification, tax treatment, and governing plan document.
