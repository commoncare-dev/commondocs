## CommonFunding

> **CommonFunding pairs [CommonFunds](https://commoncare.org/products/common-funds) with major medical insurance or an alternative coverage arrangement to reduce sunk premium costs, preserve participant choice, and turn predictable healthcare spending into a bounded employer-funded benefit.**

CommonFunding is CommonCare’s core plan structure. It combines:

1. **CommonFunds** for routine and lower-cost healthcare expenses;
2. **Major medical insurance or another coverage vehicle** for larger and less predictable expenses; and
3. **Integrated enrollment and administration** that presents the components as one coherent benefit.

The result preserves a familiar participant choice structure while reducing reliance on insurance for expenses that are comparatively routine, priceable, and financially containable.

## At a glance

| Product function | CommonFunding approach |
|---|---|
| Routine healthcare | Reimbursed through CommonFunds |
| Large and unpredictable claims | Managed through major medical insurance or another selected coverage vehicle |
| Employer risk | Capped by the CommonFunds benefit made available, subject to limited Health FSA uniform-coverage timing risk |
| Participant choice | Coverage and funding combinations can be evaluated participant by participant |
| Savings mechanism | Replace a portion of premium with a bounded reimbursement benefit |
| Experience gains | Unused notional balances remain employer assets and may cease to be liabilities according to the plan terms |
| Administration | Coverage, CommonFunds, enrollment, payroll, and participant-facing cost sharing are presented together |

> [!NOTE]
> **How is CommonFunding different from CommonFunds?**
>
> The underlying CommonFunds product is the same. CommonFunding pairs it with a selected set of coverage options and wraps compliance, enrollment, administration, and participant communication into a turnkey plan structure.

## Navigate this document

- [The design thesis](#the-design-thesis)
- [Bounded partial self-funding](#bounded-partial-self-funding)
- [The participant experience](#the-participant-experience)
- [Where the savings come from](#where-the-savings-come-from)
- [How CommonCare identifies the optimal plan](#how-commoncare-identifies-the-optimal-plan)
- [Why cash-pay routine care matters](#why-cash-pay-routine-care-matters)
- [What CommonFunding learns from HSAs](#what-commonfunding-learns-from-hsas)
- [Coverage vehicles](#pluggable-coverages)
- [Important implementation rules](#important-implementation-rules)

---

## The design thesis

“CommonFunding” is partial self-funding. The structure captures many of self-funding’s advantages without asking the employer to accept catastrophic claims risk, build a claims operation, or purchase the entire healthcare benefit directly.

CommonCare’s coverage-ranking process simulates economic outcomes. It does not factor advertised "richness" of the plan, it ranks plans based on actuarial efficiency in realistic outcomes. A plan performs better when its projected total economic result is better.

That analysis repeatedly favors separating two different jobs:

| Healthcare need | Best-suited funding mechanism |
|---|---|
| Routine, lower-cost, high-frequency expenses | A bounded account-based benefit with direct price sensitivity |
| Large, concentrated, financially disruptive expenses | Insurance or another risk-sharing vehicle |

Insurance adds overhead and reduces price sensitivity when applied to low-dollar, high-volume transactions. Its strongest economic purpose is protection against expensive events capable of producing serious financial harm.

Healthcare spending is also highly concentrated. In 2022, the highest-spending 5% of people accounted for 49.7% of healthcare expenditures, while the bottom 50% accounted for only 2.8%. [AHRQ Medical Expenditure Panel Survey](https://www.meps.ahrq.gov/data_files/publications/st560/stat560.shtml)

In essence, this means that the majority of insurance benefit is not in the \\$0-\\$10,000 range where deductibles apply and premiums exceed claims. The majority of the benefit is for larger transactions where participants are likely to reach their max out of pocket on any plan.

This means much of insurance’s value is delivered through a relatively small number of high-cost periods. For many participants, differences in premium and maximum out-of-pocket exposure are more economically significant than the deductible alone.

> [!IMPORTANT]
> Individual circumstances still matter. CommonFunding uses the generally efficient structure as its default, then evaluates available options participant by participant. A predictable high-cost claimant may spend less overall with a lower-deductible plan; another participant may spend substantially less with lower premium, higher cost sharing, and CommonFunds.

---

## Bounded partial self-funding

CommonFunding creates a contained layer of self-funded medical expense without exposing the employer to the open-ended risk of a self-funded major medical plan.

The employer defines the CommonFunds benefit made available to each participant. That amount establishes the employer’s maximum reimbursement exposure under the account-based component.

When the applicable participant benefit has been exhausted, CommonFunds does not create additional reimbursement liability. Larger expenses remain the job of the selected insurance or alternative coverage arrangement.

### Why excepted-benefit status matters

CommonFunds combines EBHRA and Health FSA components designed to qualify as excepted benefits. The components therefore operate under their own account limits and plan terms rather than assuming the comprehensive coverage obligations imposed on non-excepted ACA group health plans.

For the component structure, classifications, annual limits, and availability rules, see the [CommonFunds product documentation](https://commoncare.org/products/common-funds).

---

## The participant experience

CommonFunding presents the selected coverage and CommonFunds together. A participant should not have to translate a \$10,000 insurance deductible and a separate reimbursement account into their real financial exposure.

Instead, CommonCare can display:

| Participant sees | System administers |
|---|---|
| Normalized plan choices such as A, B, and C | The underlying insurance or alternative coverage options |
| Effective deductible after CommonFunds | The contractual deductible plus available reimbursement |
| Effective maximum exposure | Premium, cost sharing, and available benefit |
| One enrollment process | Coverage enrollment, CommonFunds elections, and payroll instructions |
| One place to understand costs | Separate legal and accounting components maintained behind the interface |

The participant sees the terms that matter economically without having to perform the reconciliation personally.

---

## Where the savings come from

CommonFunding replaces a portion of fixed insurance premium with a capped reimbursement promise.

Suppose a participant chooses coverage with a \$9,200 deductible. CommonFunds can reduce the participant’s effective exposure to \$0—or another employer-selected amount—even though the insurance contract still has a \$9,200 deductible.

The economic difference appears when the participant incurs less than \$9,200 of eligible expense:

- **Insurance buy-down:** The additional premium paid for a lower deductible is permanently spent, whether or not the participant uses the benefit.
- **CommonFunds buy-down:** Only valid claims consume the employer-funded benefit. Unused notional availability remains employer property and may expire under the plan.

### Sources of value

- Many participants do not reach their annual deductible.
- Insured preventive services are generally covered without participant cost sharing, reducing the draw on CommonFunds.
- Participants with predictable high claims can select a different available option when its total economics are better.
- Higher-deductible options frequently produce substantial premium reductions.
- Routine claims remain individually visible rather than disappearing into a shared premium pool.
- Unused reimbursement availability can produce employer experience gains.

### Illustrative 2026 comparison

The following CommonCare quote comparison involved a 40-year-old man in Nashville:

| Plan variant | Annual premium | Deductible | Maximum out of pocket |
|---|---:|---:|---:|
| Higher deductible | \$15,350 | \$10,600 | \$10,600 |
| Lower deductible | \$22,116 | \$5,900 | \$6,900 |
| **Difference** | **+\$6,766** | **−\$4,700** | **−\$3,700** |

The lower-deductible option required \$6,766 of additional premium to reduce maximum out-of-pocket exposure by \$3,700. Within those quoted terms, the additional premium exceeded even the maximum possible reduction in cost sharing.

> [!TIP]
> The model does not assume that every higher-deductible plan wins. It uses dominance before probability. A lower deductible has no economic value when the additional premium costs more than the largest reduction in out-of-pocket expense the plan can produce. If the lower-premium plan has a lower total cost at $0 of claims, throughout the cost-sharing curve, and at premium plus MOOP, it wins at every possible claim level. Claim probability matters only when the plans’ total-cost curves cross.

---

## How CommonCare identifies the optimal plan

CommonCare evaluates health plans using multiyear simulations populated with realistic medical expenses for each member of a household. A long simulation is more stable than pretending to predict one specific person’s next twelve months.

The general ranking identifies the option expected to perform most efficiently across many possible years. Known needs can then be layered onto that analysis.

Designing the plan to perform optimally in the majority of cases is the right recipe for success. However, CommonFunds really shines in adapting to specific needs.

### Known high-cost needs often simplify the decision

Unknown claims require probability modeling. A known treatment need can be priced against each available plan directly.

That means CommonFunding does not need to design the entire employer plan around a few expensive participants. Each participant can select among the available options using their own expected premium, claims, deductible, coinsurance, and maximum exposure (or we can auto-select the optimal plan based on their inputs).

> 🔑 For participants who have significant needs, the math for the optimal plan actually tends to get simpler. Most often entire plans optimize to solve a few significant problems - as if they were unknown. CommonFunding allows just that one employee to modify the cost-sharing structure to optimize for their needs - underlying insurance options allowing; see the section on [insurance options](#pluggable-coverages) for details.

### When is additional premium worthwhile?

For a simplified plan with one deductible and a uniform coinsurance rate:

```text
Annual cost = P + min(M, min(x, D) + r × max(0, x − D))
```

Where:

| Variable | Meaning |
|---|---|
| `P` | Total annual premium |
| `x` | Annual covered medical bills at the insurer’s allowed prices |
| `D` | Annual deductible |
| `r` | Participant coinsurance after the deductible, expressed as a decimal |
| `M` | Annual maximum out-of-pocket limit, excluding premium |

The formula adds annual premium to participant medical expense: deductible spending first, then coinsurance, capped at the maximum out-of-pocket limit.

#### Decision rule

Additional premium is worthwhile when the reduction in expected out-of-pocket expense exceeds the additional annual premium:

```text
Premium B − Premium A
< Out-of-pocket cost A(x) − Out-of-pocket cost B(x)
```

Here, `A` is the lower-premium plan and `B` is the higher-premium plan. Equality is the break-even point. At any assumed annual bill amount `x`, the option with the lowest total annual cost is the least expensive choice.

#### Dominance rule

Calculate the difference over the entire relevant claims range:

```text
Cost difference(x) = Annual cost B(x) − Annual cost A(x)
```

- If the result is always positive, Plan A dominates Plan B.
- If the result is always negative, Plan B dominates Plan A.
- If the result changes sign, the plans have one or more break-even points and utilization assumptions become relevant.

For very large covered claims, the comparison simplifies to:

```text
Catastrophic annual cost = annual premium + MOOP
```

In the Nashville example:

```text
Higher-deductible option: $15,350 + $10,600 = $25,950
Lower-deductible option:  $22,116 +  $6,900 = $29,016
```

The higher-deductible option costs **$3,066 less even when both participants reach their MOOP**. A $100,000 covered claim does not make the lower-deductible option perform better; it simply causes both options to reach maximum cost sharing.

> [!NOTE]
> This simplified equation assumes covered, in-network care subject to one deductible and one coinsurance rate, with deductible spending counting toward the maximum out-of-pocket limit. Copays, embedded family deductibles, service-specific rules, prescriptions, separate limits, balance bills, and noncovered expenses require additional modeling.

---

## Why cash-pay routine care matters

A small percentage of healthcare transactions accounts for an enormous share of total spending. Those limited, expensive events are where insurance provides its strongest risk-transfer value.

Routine care often works better as a direct transaction:

- Prices can be known before care is delivered;
- Providers can offer straightforward services without designing the encounter around insurer billing rules;
- Participants regain an incentive to compare price and value; and
- Administrative cost does not need to be added to every small claim.

Direct-pay models can also create a less encumbered provider relationship. The provider can focus on meeting the patient’s stated need rather than maximizing reimbursable codes under a third-party contract.

> [!EXAMPLE]
>  Ex: If you crash your mountain bike riding down a hill and break your arm, there's a good chance fixing the bike will cost more than fixing your arm—assuming you don't head straight to the ER and instead go to a private clinic, where the price is better, the company is better, and the expertise is more focused.
>
> If you feel that's an absurd priority tree, and you'd rather escalate any possible emergency to the maximally defensive treatment, that's ok; the CommonFunding model still works well if you end up spending more of your deductible. Some people will prefer to escalate their care. Most will avoid it.

The broader point is not that every participant should make the same care decision. It is that routine healthcare priorities and purchasing decisions do not need to be socialized through insurance before they can be funded effectively.

---

Why “better” has not been enough: learning from HSAs

HSAs have achieved broad adoption and are still badly underused. In the overwhelming majority of computable scenarios, an HSA-qualified design produces a better funding mix than paying additional premium to reduce the deductible—even before accounting for the HSA’s triple-tax advantage, investment growth, portability, and ability to pay for healthcare expenses that insurance handles poorly or not at all.

If the math is so strong, why has adoption and funding remained weaker than it should be?

- **People react defensively to visible cost sharing.** The possibility of paying a claim personally weighs more heavily than premium already disappearing from payroll, even when the lower-deductible plan costs more under every modeled outcome.
- **The HDHP rules are rigid.** Many first-dollar medical benefits make a participant ineligible to contribute to an HSA, even when those benefits would complement the high-deductible structure effectively.
- **The account feels separate from the plan.** Insurance enrollment, HSA setup, payroll funding, claims, and investing are commonly presented as adjacent activities rather than one coherent benefit.
- **The employee must act.** The participant may need to open the account, elect contributions, understand the tax treatment, move money, and decide whether to spend or invest it.
- **The payroll-tax advantage is poorly understood.** Employee HSA contributions made through an employer’s Section 125 arrangement avoid federal income and payroll tax. A participant contributing independently may receive an income-tax deduction, but generally misses the payroll-tax savings.
- **The ownership economics favor the employee, not the employer.** Employer HSA contributions immediately become portable employee assets. That is excellent for the participant, but it gives the employer no experience gain when healthcare use is lower than expected.

These are not arguments against HSAs. CommonCare considers the HSA model superb and has created plan structures intended to produce HSA eligibility with the lowest practical sunk cost, including the [self-funded MEC plan](https://commoncare.org/products/mec). HSA-driven options can be offered alongside CommonFunding and other CommonCare structures.

### How CommonFunding improves the implementation

1. **The funding is integrated with the coverage.** CommonFunding presents the major medical option and CommonFunds as one plan experience. The participant does not receive a high deductible followed by a vague promise that a separate account makes it better; the effective cost-sharing position is calculated and displayed directly.
2. **Experience gains remain with the employer.** CommonFunds availability is a reimbursement promise, not a portable employee-owned asset. Amounts not paid as valid claims remain employer property, and unused availability may expire according to the plan terms.
3. **The benefit is not tied to HDHP enrollment.** A participant does not have to enroll in an HSA-qualified plan to use CommonFunds. The employer must make the other coverage required for excepted-benefit status available, but participant enrollment in one prescribed major medical option is not the source of CommonFunds eligibility. For example, an employer can use our [self-funded MEC plan](https://commoncare.org/products/mec) to satisfy this requirement and pair with CommonFunds.
4. **Carryover does not create portability.** If the employer elects rollover, unused availability can accumulate for the participant while employed without becoming an asset the participant takes at termination.
5. **No individual custodial account is required.** The employer can establish and operate CommonFunds without waiting for every employee to open, fund, or manage a separate account.
6. **The employer captures the funding efficiency.** CommonFunding replaces the employee profit opportunity created by portable HSA assets with an employer experience-gain opportunity, while still paying valid participant claims tax-free.

> [!IMPORTANT]
> CommonCare still loves HSAs. CommonFunding solves a different ownership and implementation problem. An HSA makes unused healthcare dollars the employee’s permanent asset; CommonFunding keeps unused reimbursement dollars with the employer. CommonCare can use either structure—or both—when the economics support it.

---

## Pluggable Coverages

CommonFunding can operate with multiple underlying coverage structures because CommonFunds is administered as an excepted-benefit companion rather than as the participant’s comprehensive major medical coverage.

### CHOICE — formerly ICHRA

CHOICE allows employees to select the optimal private individual coverage option. This option creates the maximum flexibility for meeting individual needs and takes the employer completely out of the risk-management process for major medical coverage. CommonCare can fully administer a CHOICE arrangement as the CommonFunding coverage option. See our [CHOICE documentation](https://commoncare.org/products/choice) for more details.

CommonCare via the CommonFunding plan structure is able to wrap a CHOICE offering to normalize the premiums and deductible amounts so that employees see a simplified "A, B, C" plan offering with fixed premiums and deductibles (or age-banded if desired). This structure also avoids putting any excess funds in the actual CHOICE HRA to avoid trapping funds to be used or lost on insurance premiums. How much goes into the HRA depends on a few factors: 

#### Rule: How much funding goes into the HRA?

CHOICE cannot legally be paired with the EBHRA portion of CommonFunds - rather, it replaces it. There are pros and cons to this replacement. The pros are: the limits on the HRA disappear completely. The main con is that the funds are only accessible to an employee enrolled in qualifying coverage (even if not through the ICHRA). 

- **Rule 1:** Utilize the maximum FSA portion of CommonFunds first. This is the easiest and least restrictive option. CommonFunds FSA is the bulk of the CommonFunds cap already.
- **Rule 2:** Confirm whether a participant is enrolled in qualifying coverage. A simple affidavit is enough (CommonCare provides this workflow). If they are, the portion of allowance not used for qualifying premiums is available for CommonFunds.

#### Paying unreimbursed premiums tax-free

Create a section 125 plan for paying unreimbursed CHOICE premiums tax-free (CommonCare return off-exchange options only for this). This arrangement keeps more dollars free for the CommonFunds portion of the plan instead of the more restrictive CHOICE HRA portion.

> Federal law does not permit Section 125 salary reduction to pay premiums for a qualified health plan purchased through an Exchange. [IRS final ICHRA rules](https://www.irs.gov/pub/irs-irbs/irb19-42.pdf)

See the [CHOICE documentation](https://commoncare.org/products/choice) for further details on compliance and affordability of this implementation.

### Group insurance contracts

Group insurance may outperform individual coverage when the employer receives favorable rates based on its population or when group contracts offer stronger local networks.

CommonFunding can pair the highest-value group options with CommonFunds and normalize the participant-facing presentation of:

Like with the CHOICE option, it is simple to wrap the insurance options in the CommonFunding structure to normalize employee-facing cost-sharing (deductible, MOOP, etc.) and premiums. No displaying $10,000 deductibles + some nebulous savings account.

The selection should be driven by the quoted economics, not a presumption that the group or individual market always wins.

### Individually selected, non-employer-sponsored options

Employees may independently choose arrangements that the employer does not sponsor. An employer may facilitate voluntary, employee-paid access—including payroll deduction—when the arrangement is structured to preserve employer neutrality and comply with applicable wage-deduction law.

The Department of Labor’s voluntary-program safe harbor focuses on the absence of employer contributions, complete voluntariness, no employer consideration, and limited employer involvement without endorsement. Merely allowing a provider to publicize an option or collecting and remitting voluntary payroll deductions does not by itself constitute sponsorship. [DOL discussion of the voluntary-program safe harbor](https://www.dol.gov/agencies/ebsa/employers-and-advisers/guidance/technical-releases/26-02)

CommonCare’s process keeps the employer’s role administrative rather than presenting the independent option as an employer-sponsored promise or promotion.

#### Medical cost sharing and other alternatives

Medical cost-sharing programs can offer a substantially lower-cost approach to large medical expenses for participants who understand and accept their limitations. These people need to:

- Be mostly without serious or ongoing pre-existing conditions (health shares will exclude them, it's a big part of how they keep costs down, start with a healthier risk-pool, which should be interesting to a healthy person trying to pay less premiums)
- Consider the federal and state regulations on insurance to be unimportant enough to pick something not regulated as insurance.

Those differences are part of the savings mechanism, not a footnote to it. For participants who affirmatively prefer the model, established cost-sharing organizations may provide a compelling alternative at materially lower monthly cost. They can be approached with care, but there are several good actors doing great work in this space. They publish their financial data and have a user experience that vastly outshines insurance reviews.

CommonCare does not receive a financial advantage from steering participants toward these arrangements. These arrangements don't really want broad population samples being "pushed" into their membership base. CommonCare's role is to present the economics and limitations clearly and support the participant’s election - and make administration a breeze.

See the [Alternatives documentation](https://commoncare.org/products/alternatives).

### Marketplace coverage with premium tax credits

For employers with fewer than 50 full-time-equivalent employees, Marketplace premium tax credits can be a critical part of the analysis.

An offer of employer major medical coverage generally blocks the premium tax credit only when the offer satisfies the applicable affordability and minimum-value rules. [IRS premium-tax-credit guidance](https://www.irs.gov/affordable-care-act/individuals-and-families/questions-and-answers-on-the-premium-tax-credit)

This option allows employees to benefit from the premium tax credit while the employer offers the same streamlined CommonFunds companion structure for out of pocket costs. CommonCare administers a turn-key plan structure for achieving this compliantly.

Like the alternative coverages, this option generally cannot be employer-sponsored. Generally because of an important but realistic exception for some groups: 

- If the ages/income mix of employees is a fit, the employer may offer an CHOICE/ICHRA arrangement with minimal allowance. This will mean some employees (those most able to benefit from the PTC) still have access to the PTC due to the coverage not being legally affordable. The employer can still offer an allowance, but it is a flex-allowance and therefore does not count toward affordability.
- These employees opt-out of the CHOICE/ICHRA and CommonCare helps them enroll in individual coverage seamlessly (still payroll-funded, only post-tax, and not employer-sponsored)
- The remaining employees still get the benefit of tax-free premiums through the CHOICE/ICHRA arrangement. 

This is a really potent option for employers with less than 50 full-time-equivalent employees. Often the total optimal arrangement cannot be known until enrollment is already underway, but CommonCare can allow an easy migration to this arrangement where it is optimal. The savings netted make the bother of a small change very worthwhile.

See the [PTC Plan documentation](https://commoncare.org/products/ptc).

---

## Important implementation rules

The flexibility of CommonFunding comes from coordinating distinct components, not ignoring their boundaries.

| Design issue | Operating rule |
|---|---|
| CommonFunds classification | Maintain the EBHRA and Health FSA classifications, limits, funding sources, and claims rules separately |
| Individual optimization | Recommend and enroll participants among valid available options; do not alter plan terms arbitrarily for an individual |
| EBHRA availability | Apply the same terms to similarly situated individuals, regardless of health factor |
| Health FSA risk | Apply uniform coverage and the governing forfeiture, carryover, and runout provisions |
| Participant-facing normalization | Show effective economics without replacing or contradicting the underlying coverage documents |
| Premium tax credits | Evaluate affordability, minimum value, ICHRA rules, household eligibility, and the actual employer offer |
| Independent alternatives | Preserve voluntariness and employer neutrality when the option is not employer sponsored |

## Core principle

> **Use insurance for the risk that needs insurance. Fund routine care directly, cap the employer’s exposure, and optimize the combination for the participant standing in front of you.**
