## CommonFunded

**What does your carrier charge to lower the deductible, and how much care would that extra premium actually pay for?** Insurers price coverage to pay expected claims, cover expenses and earn a margin. With otherwise comparable plans, the difference between two quotes is the price your group can pay to insure that additional care. The quotes alone cannot identify the carrier's profit on the difference. [CMS rate filing instructions, §2.2.3](https://www.cms.gov/files/document/py27-unified-rate-review-instructions.pdf)

CommonFunded keeps coverage for large bills and uses an account for eligible care below a chosen limit. Take a single plan with a $12,000 deductible, out-of-pocket maximum and first-dollar reimbursement cap. One person with $12,000 in eligible annual bills draws $12,000 from the account. One person with $120,000 in bills also draws $12,000. Ten people with $12,000 each draw $120,000. The exposure depends on how much of the layer each person uses.

**Try it with two rate sheets, their benefit summaries and enrollment by tier.** An agent can use a mock census for a first pass or replay the group's claims. It compares the full annual premium reduction with the extra cost sharing on the same care. You get the average dollars saved or lost and the number of modeled years the proposal costs less. Payroll allocation does not enter that calculation. [Run the analysis](analysis/README.md)

### What would make the answer change?

In the runnable 50-person example, the proposed account pays about $152,540 per year. The current plan already leaves $86,120 of those same bills outside the premium. The additional care the group would fund costs **$66,420 per year** on average. That is the break-even premium reduction. Change only the proposed premium and the verdict changes:

| Annual premium reduction for the group | Average annual total saving | Simulated years cheaper |
|---:|---:|---:|
| $150,000 | $83,580 | 100 of 100 |
| $70,000 | $3,580 | 57 of 100 |
| $50,000 | −$16,420 | 20 of 100 |

At the first price, about 44 cents of each premium dollar released covers the additional claims and 56 cents remains as savings. At the last price, keeping the current plan costs less on average. All three rows use the same people, bills and benefits, with zero assumed savings from price shopping. To reproduce them, set the proposed annual single premium to $9,000, $10,600 or $11,000 against the current $12,000. [Runnable example](analysis/example-analysis.json)

## At a glance

| Product function | CommonFunded approach |
|---|---|
| Routine healthcare | Reimbursed through CommonFunds |
| Large and unpredictable claims | Managed through major medical insurance or another selected coverage vehicle |
| Employer account risk | Capped by the CommonFunds benefit made available, subject to limited Health FSA uniform-coverage timing risk; major-medical claim risk depends separately on the insurance, level-funding, self-funding, and stop-loss contracts |
| Participant choice | Coverage and funding combinations can be evaluated participant by participant |
| Savings mechanism | Replace a portion of premium with a bounded reimbursement benefit |
| Experience gains | Unused notional balances remain employer assets and may cease to be liabilities according to the plan terms |
| Administration | Coverage, CommonFunds, enrollment, payroll, and participant-facing cost sharing are presented together |

> [!NOTE]
> **How is CommonFunded different from CommonFunds?**
>
> The underlying CommonFunds product is the same. CommonFunded pairs it with a selected set of coverage options and wraps compliance, enrollment, administration, and participant communication into a turnkey plan structure.

## Navigate this document

- [The design thesis](#the-design-thesis)
- [How to understand the concept versus reality](#how-to-understand-the-concept-versus-reality)
- [Bounded partial self-funding](#bounded-partial-self-funding)
- [Integrated group-plan HRA](#integrated-group-plan-hra-the-large-account-based-layer)
- [The participant experience](#the-participant-experience)
- [How the CommonFunded deductible works](#how-the-commonfunded-deductible-works)
- [Where the savings come from](#where-the-savings-come-from)
- [How CommonCare identifies the optimal plan](#how-commoncare-identifies-the-optimal-plan)
- [Why cash-pay routine care matters](#why-cash-pay-routine-care-matters)
- [What CommonFunded learns from HSAs](#what-commonfunded-learns-from-hsas)
- [Coverage vehicles](#pluggable-coverages)
- [Important implementation rules](#important-implementation-rules)

---

## The design thesis

Price the layer person by person. A single group-average bill spreads medical spending across people who each have a fresh deductible, even if the actual spending belongs to only a few people. In U.S. expenditure data for 2022, the highest-spending 5% accounted for 49.7% of spending. Applying the plan to each person's bills, with the household limits where applicable, preserves the effect of that concentration. [AHRQ Medical Expenditure Panel Survey](https://www.meps.ahrq.gov/data_files/publications/st560/stat560.shtml)

Use the supplied price for the upper layer. A group might retain claims from $12,000 to a $25,000 stop-loss attachment and buy protection above that. In that case its upper-layer price includes expected retained claims and the stop-loss premium. A claim above $12,000 can affect that separate estimate while adding nothing to an exhausted $12,000 account for the year.

---

## How to understand the concept versus reality

The quote prices both arrangements for the same people, on the same care. It shows the expected total cost difference and how much of the new cost sharing the account would reimburse. Supplied rates and replayed claims can establish the difference for an observed year under the modeled rules. Simulated claims estimate it for a hypothetical year.

That illustration is not a requirement that every participant receive the exact arrangement depicted in the quote. It demonstrates the amount and location of potential value. The employer can then decide how much of that value to place in restricted coverage, flexible qualified benefits, participant-directed elections, or taxable compensation. CommonCare can support those choices through components such as an EBHRA, integrated HRA, CHOICE/ICHRA, Health FSA, HSA contribution, group health plan, or payroll flex arrangement.

Different components retain their own rules, but the employer is not required to choose one component or one participant experience for every available dollar. The implementation may combine components, offer elections, or use different compatible structures for different participants or permitted classes.

The quote answers:

> For this population, how much does the coverage price fall, how much additional cost sharing do the same bills incur, and which design costs less in total?

The adopted plan must separately answer:

> Which combination of coverage, account components, and participant elections best delivers that value for this employer and its employees?

### Example 1: Small employer preserving Marketplace choice and PTC access

A small employer may make CommonCare's self-funded MEC available so it can sponsor preventive care and support an excepted CommonFunds structure without requiring every employee to use one employer-selected major-medical option. Employees may decline the MEC and bring qualifying coverage from the Marketplace, a spouse's plan, or another source. When the separate PTC rules are satisfied, a Marketplace participant may preserve the premium tax credit while receiving eligible CommonFunds benefits.

The employer can decide how the CommonFunds opportunity is presented. It may make ordinary medical reimbursement available from the first dollar, begin reimbursement only after a selected threshold, limit reimbursement to particular expense categories, offer an HSA-compatible option, support employee Health FSA elections, provide employer-funded EBHRA value, or use a permitted combination. It can also leave employees free to select a health share, CrowdHealth membership, or another private alternative using unrestricted post-tax compensation.

The employer sponsors its MEC offer and the adopted CommonFunds components. It does not thereby sponsor every independently selected coverage or alternative. The [Premium Tax Credit Plan](../ptc-plan/human-readable.md) governs the PTC pathway, and [Private Alternatives Alongside an Employer Plan](../alternative-companion/human-readable.md) governs neutrality, nonsponsorship, and post-tax treatment for private alternatives.

### Example 2: ICHRA with adjacent flexible benefits

An employer using CHOICE/ICHRA does not have to place its entire health-benefit budget inside the ICHRA. It can determine the amount assigned to the ICHRA under the permitted class and contribution rules, then design adjacent Health FSA, HSA, health-flex, and cashable-flex opportunities according to their own rules.

This permits a range of outcomes. An employee who enrolls in qualifying individual coverage may use the ICHRA for premiums and, when the document permits, other eligible expenses. An employee who does not establish ICHRA eligibility may still receive value available through a separately valid Health FSA election, another qualified benefit, or taxable compensation. The employer can therefore avoid making every flexible dollar forfeitable solely because an employee did not elect the coverage recognized by the ICHRA.

The same architecture can offer first-dollar reimbursement for some participants while preserving an HSA-compatible option for participants whose available HRA and FSA components are limited-purpose, post-deductible, suspended, or otherwise compatible. Cafeteria-plan funding can also be directed to an HSA for an otherwise eligible participant. Compatibility turns on what reimbursement is available and when—not merely whether the component is called an HRA, FSA, or general-purpose benefit.

There are design tradeoffs rather than one required allocation. ICHRA contributions follow the ICHRA's class and equality rules. Health FSA and cafeteria-plan contributions follow their separate limits and nondiscrimination rules. Health-only and cashable flex credits may receive different affordability treatment. CommonCare can model those consequences while allowing the employer to choose whether its priority is affordability credit, qualified-benefit flexibility, taxable flexibility, HSA access, or some combination.

### Example 3: Group insurance with a higher deductible and flexible employer funding

An employer—often a larger employer with favorable group rates—may retain group major-medical insurance, push the carrier deductible or other participant cost sharing to an efficient level, and self-fund the contained layer of routine claims. The carrier continues to adjudicate the group policy while an integrated HRA, Health FSA, HSA contribution, or other adopted CommonFunds component changes how the participant's share is funded.

The employer can closely reproduce the quote by restricting the employer-funded layer to preconfigured coverage and reimbursements. It can instead expose some of the modeled savings as participant choice. For example, if \$150 per month is needed for the employer's coverage or affordability strategy and another \$150 is available, the additional amount might be directed—under the applicable plan and election rules—to CommonFunds, an HSA for an eligible participant, another qualified benefit, or taxable wages.

That flexibility can serve an employee enrolled in the group plan, an employee covered through a spouse, or an employee who independently prefers a health share or another way to address major-medical risk. Taxable, unrestricted compensation can be used toward a private alternative without turning that alternative into employer-sponsored coverage. An employee may also retain access to eligible CommonFunds reimbursement for out-of-pocket expenses under the components actually offered to that employee.

### Restriction and flexibility change the expected result

The employer ultimately chooses where the design sits on a spectrum:

| More restricted implementation | More flexible implementation |
|---|---|
| More of the modeled value is committed to specified coverage and reimbursement components | More of the modeled value may be directed among qualified benefits and, where offered, taxable compensation |
| Unused or ineligible amounts are more likely to remain with the employer or be forfeited under the applicable component | Fewer dollars may be forfeited because participants can direct value toward a personally useful option |
| Actual experience may track the quote's illustrated allocation more closely | Elections may depart from the allocation while improving an individual participant's net economics |
| The employer exercises more control over the coverage configuration | Participants have more opportunity to preserve HSA, PTC, spouse-plan, or other favorable positions |

Neither side of the spectrum is the required CommonFunded design. Greater flexibility does not invalidate the quote; it changes what the quote should be understood to predict. A controlled design may track the illustrated claims allocation closely. A flexible design may produce fewer forfeitures while also producing greater experience gains when participants select coverage that lowers their net out-of-pocket exposure. CommonCare's role is to identify the economic opportunity, model the available choices, implement the employer's selected election architecture, and guide participants among the options actually adopted.

> [!IMPORTANT]
> The quote demonstrates claims economics; it does not merge benefit components or override their rules. Final outcomes depend on employee elections, actual claims, the employer's adopted plan documents, and the legal requirements applicable to each component.

---

## Bounded partial self-funding

CommonFunded creates a contained account-funded layer of medical expense. The employer's exposure to the separate major-medical layer depends on how that layer is financed; CommonFunded does not itself eliminate self-funded major-medical risk.

The employer defines the CommonFunds benefit made available to each participant. That amount establishes the employer’s maximum reimbursement exposure under the account-based component.

When the applicable participant benefit has been exhausted, CommonFunds does not create additional reimbursement liability. Larger expenses remain the job of the selected insurance or alternative coverage arrangement.

### Why excepted-benefit status matters

The excepted CommonFunds pathway combines EBHRA and Health FSA components designed to qualify as excepted benefits. This is often the best fit when CommonFunds must remain available without requiring enrollment in one particular employer major-medical plan. Those components operate under their own limits and plan terms.

Excepted benefits are not the only CommonFunds pathway. When a participant is actually enrolled in qualifying non-HRA group health coverage, CommonFunds can instead use an **integrated group-plan HRA**. An integrated HRA is not an EBHRA, is not an ICHRA, and is not subject to the EBHRA annual limit or the Health FSA salary-reduction limit. Its employer-funded maximum is established by the plan design, subject to the integration and other rules governing the arrangement.

For the component structure, classifications, annual limits, and availability rules, see the [CommonFunds product documentation](https://commoncare.org/products/common-funds).

## Integrated group-plan HRA: the large account-based layer

An employer using fully insured, level-funded, or self-funded group major-medical coverage can pair that coverage with an integrated HRA when the applicable integration conditions are satisfied. The funding label on the underlying group plan does not itself decide HRA integration. The controlling questions include what non-HRA group coverage is offered, who is actually enrolled, what the HRA reimburses, whether the applicable coverage provides minimum value when the broader integration method is used, and whether the required opt-out and forfeiture provisions are present.

This pathway can support a much larger account-based layer than the excepted pathway. For example, in 2027 a compliant non-grandfathered group plan may have cost sharing as high as `\$12,000` for self-only coverage and `\$24,000` for other-than-self-only coverage. An integrated HRA can be designed to reimburse some or all of that participant cost sharing without being constrained by the EBHRA annual limit or Health FSA salary-reduction limit. The HRA remains employer-only, and the plan sets its maximum reimbursement amount. [CMS 2027 cost-sharing parameters](https://www.cms.gov/files/document/2027-papi-parameters-guidance-2026-01-29.pdf) · [IRS Publication 969](https://www.irs.gov/publications/p969)

### Federal integration methods

[IRS Notice 2013-54, Q&A 4](https://www.irs.gov/pub/irs-drop/n-13-54.pdf) describes two group-plan integration methods relevant here:

1. **Minimum value not required.** The employer offers non-HRA group coverage that is not solely excepted benefits; the HRA participant is actually enrolled in non-HRA group coverage; the HRA is available only while that enrollment exists; reimbursements are limited to cost sharing and premiums under that coverage plus medical care that is not an essential health benefit; and the required annual and termination opt-out rights apply.
2. **Minimum value required.** The employer offers a group plan that provides minimum value; the HRA participant is actually enrolled in non-HRA group coverage that provides minimum value; the HRA is available only while that enrollment exists; and the required annual and termination opt-out rights apply. This method permits a broader general-purpose reimbursement design.

Minimum value is therefore sufficient for the broader integration method, but it is not an absolute prerequisite for every integrated HRA. A deductible-only HRA tied to the enrolled group coverage may fit the first method when all its conditions are satisfied.

Integration is person-specific. A family HRA cannot rely on self-only group coverage for family members who are not also enrolled in qualifying non-HRA group coverage. The HRA documents, eligibility records, and claims system must enforce the applicable enrollment and family-coverage conditions. [IRS Notice 2015-87, Q&A 4](https://www.irs.gov/pub/irs-drop/n-15-87.pdf)

> [!IMPORTANT]
> The integrated HRA may reimburse a `\$12,000` self-only deductible or as much as `\$24,000` of aggregate family cost sharing when the underlying plan, HRA terms, enrolled individuals, and applicable integration method support that design. In non-grandfathered coverage, the self-only cost-sharing ceiling applies to each individual even when enrolled in family coverage. Those figures are examples based on the 2027 federal cost-sharing ceilings, not permanent HRA limits or a statement that every group plan may impose those exact deductibles. [DOL embedded self-only cost-sharing guidance](https://www.dol.gov/sites/dolgov/files/EBSA/about-ebsa/our-activities/resource-center/faqs/aca-part-xxvii.pdf)

> [!CAUTION]
> This guide documents the integrated-HRA architecture, but the current reusable plan-document package does not yet include a complete governing integrated-HRA component template. Selecting `integrated-hra` in configuration is not a substitute for adopting compliant HRA terms, notices, enrollment controls, claims rules, and coordination provisions. Treat the implementation as incomplete until those governing materials are present and executed.

### What changes economically

The integrated design separates two financing jobs:

| Layer | Financing role |
|---|---|
| Routine and contained participant cost sharing | Employer-funded HRA; only substantiated claims consume funds |
| Larger covered claims | Fully insured policy, level-funded contract, or self-funded plan with any applicable stop-loss protection |

An unused HRA reimbursement promise is not an insurance premium already paid. The employer can make prices visible, reimburse eligible expenses, and retain amounts not paid under the plan terms. Whether a participant has an incentive to compare prices depends on the account design, the prices available, and the participant's circumstances. Insurance remains responsible for the layer the contract actually insures.

This is materially different from placing the entire expected budget into one premium or carrier claims fund. It can also make the insurance decision easier to evaluate: the account layer is bounded, while the quote should reveal the price charged to transfer the larger-claim layer.

### Three thresholds that must never be confused

An AI analysis and the plan documents must distinguish:

1. **Participant deductible and MOOP.** The deductible is a threshold for specified covered claims; the MOOP limits applicable participant cost sharing. Each follows the underlying plan's rules.
2. **HRA reimbursement threshold and cap.** The portion of participant expense CommonFunds will reimburse and the maximum employer liability under that account component.
3. **Employer stop-loss attachment point.** In a self-funded or level-funded arrangement, the claim level at which the stop-loss carrier begins reimbursing the employer, subject to the contract.

These numbers can look similar but perform different legal and financial functions. An HRA that reimburses a participant's `\$12,000` deductible does **not** by itself cap a self-funded employer's medical claim at `\$12,000`. A `\$25,000` or `\$50,000` specific stop-loss attachment point is also not the participant's deductible. The quote must identify each threshold separately.

### Fully insured, level-funded, and self-funded results differ

| Funding arrangement | Effect of one `\$250,000` covered claim |
|---|---|
| Fully insured | The employer's premium ordinarily does not increase during the contract period merely because the claim occurred. If the integrated HRA reimburses only participant cost sharing, the claim consumes no more than the applicable HRA cap; the insurer bears the insured amount under the policy. |
| Level-funded | The claim may reduce or eliminate a projected experience refund to the extent it is charged to the refundable claims fund. The HRA does not protect that refund unless the level-funded contract, specific stop loss, or another insured term actually removes the claim from employer experience. |
| Self-funded | The employer generally pays plan claims until applicable specific or aggregate stop loss reimburses amounts under its contract. The HRA changes participant cost-sharing reimbursement; it does not substitute for stop loss or convert the underlying plan into fully insured coverage. |

Suppose a level-funded arrangement is projected to return `\$250,000`, and `\$150,000` of the redesign's budget is allocated to the HRA. A `\$250,000` claim may consume up to `\$12,000` of that HRA allocation for an eligible individual, under the stated HRA terms. The remainder affects the separate upper-layer budget according to its own funding terms. It does not consume additional HRA funds merely because the bill is larger. A gain in the HRA bucket is distinct from, and does not guarantee, a gain in the combined plan.

### Quote-driven mathematical model

The purpose of this model is to measure the account-funded layer. Take the cost of the selected upper-layer arrangement as an input, regardless of whether it is fully insured, level-funded, self-funded, or a combination. How that upper-layer cost is constructed and whether its financing is efficient are separate questions.

For a current plan and a proposed design, collect:

| Input | Meaning |
|---|---|
| `P0` | Current annual merged-plan cost, for the same population and coverage period |
| `PX` | Annual cost allocated to the proposed upper layer, supplied by the customer or separate analysis |
| `R0(S)`, `RX(S)` | Current and proposed account reimbursements in medical-event state `S` |
| `C` | Additional administration or transition cost attributable to the redesign |
| `U0(S)`, `UX(S)` | Current and proposed participant cost sharing before account reimbursement |

Compare the two full annual costs first. Then calculate the funding available for account reimbursements.

```text
Released contribution A = P0 − PX
Expected total saving = A − E[UX(S) − U0(S)] − C
Break-even coverage price reduction = E[UX(S) − U0(S)] + C

Incremental account-layer gain(S) = A − (RX(S) − R0(S)) − C
Expected incremental gain = A − E[RX(S) − R0(S)] − C
```

For a new account with no current reimbursements, `R0(S)` is zero. A positive expected gain means the released contribution exceeds expected incremental account reimbursements and costs. Report the distribution of gains, including the probability of a shortfall. If the employer commits only part of `A` to the account, distinguish its actual account budget and unused account budget from the full incremental gain; unused reimbursement capacity is not automatically cash savings.

To reconcile account funding with total savings, subtract the change in unreimbursed cost sharing `(UX − RX) − (U0 − R0)` from the account-layer gain. The reimbursements cancel. The result is the same total saving calculated directly from coverage prices and cost sharing.

If `PX` includes expected retained major-medical claims rather than a fixed premium, label it an estimate. The account-layer result remains meaningful, but it is not a guarantee of combined plan experience in any year. A separate upper-layer analysis may study its variability or the choice of stop-loss; it is not required to calculate account reimbursements against the supplied contribution.

The result is a **dominant account-layer gain** when the released contribution exceeds the maximum possible incremental reimbursement plus incremental costs across the full relevant domain—not merely across sampled scenarios. Participant benefit changes and any uncertain upper-layer costs remain separate considerations.

For an AI-assisted quote analysis, see the [analysis toolkit](analysis/README.md) and its [advisor instructions](analysis/robo-advisor.md).

### What the quoted result measures

For fixed premiums, the price difference is known for the contract year. The uncertainty is how much additional cost sharing the group incurs. A simulation reports how often the quoted reduction exceeds that amount across its draws. A historical replay reports what happened on the supplied bills under the modeled rules. A single replayed year can establish a dollar difference for that year but cannot estimate next year's odds by itself.

The toolkit can replay annual allowed amounts or ordered claims under the supported deductible, coinsurance, out-of-pocket and account rules. Check a contract detail when it could change the dollar verdict. Reconcile with actual payments before describing a replay as exact for the historical plan.

---

## The participant experience

CommonFunded presents the selected coverage and CommonFunds together. A participant should not have to translate a \$10,000 insurance deductible and a separate reimbursement account into their real financial exposure.

Instead, CommonCare can display:

| Participant sees | System administers |
|---|---|
| Normalized plan choices such as A, B, and C | The underlying insurance or alternative coverage options |
| Effective exposure after CommonFunds | The participant-paid threshold plus any cost sharing not reimbursed by CommonFunds |
| Effective maximum exposure | Premium, cost sharing, and available benefit |
| One enrollment process | Coverage enrollment, CommonFunds elections, and payroll instructions |
| One place to understand costs | Separate legal and accounting components maintained behind the interface |

The participant sees the terms that matter economically without having to perform the reconciliation personally.

### How the CommonFunded deductible works

CommonFunded does not change the deductible in the major-medical contract. Instead, it can annex the CommonFunds documents and apply a separate **CommonFunds reimbursement deductible** before the applicable HRA or Health FSA begins paying.

For example, assume the major-medical coverage has a \$9,200 contractual deductible and the Enrollment Schedule gives the participant a \$1,500 CommonFunds deductible. The participant bears eligible expenses through the CommonFunds threshold. After that threshold is satisfied, CommonFunds can reimburse otherwise eligible expenses under its HRA or Health FSA terms, up to the amount available. The carrier continues to apply its own \$9,200 deductible throughout. The participant-facing result may resemble lower-deductible coverage, but the two legal deductibles remain distinct.

The Enrollment Schedule supplies the participant-specific CommonFunds deductible. The annexed CommonFunds documents supply the durable rules:

- Which HRA or Health FSA component is subject to the deductible;
- Which expenses accumulate toward it;
- Whether it is individual, family, embedded, or aggregate;
- What evidence establishes satisfaction;
- Whether preventive care, dental, vision, or another permitted category may be reimbursed before satisfaction; and
- Which component pays once the threshold is met.

The Health FSA point is deliberate. Federal tax guidance expressly recognizes a post-deductible Health FSA, not only a post-deductible HRA. Ordinary medical expenses incurred before the applicable deductible is satisfied do not become reimbursable merely because the participant meets the deductible later. [IRS Revenue Ruling 2004-45](https://www.irs.gov/pub/irs-drop/rr-04-45.pdf) · [IRS Notice 2008-59](https://www.irs.gov/pub/irs-drop/n-08-59.pdf) · [IRS Publication 969](https://www.irs.gov/publications/p969)

When HSA eligibility is intended, every reimbursement component available to the participant must independently satisfy the applicable HSA-compatibility rules. A CommonFunds threshold used only to shape participant cost sharing is a plan-design term; it should not be represented as HSA-compatible unless it also meets the statutory minimum and all related restrictions.

---

## Where the savings come from

When the quoted higher-deductible arrangement costs less, CommonFunded can use the difference to fund a capped reimbursement promise. The structural saving is the price reduction minus the increase in cost sharing on the same care and any specifically identified additional costs.

Suppose a participant chooses coverage with a \$9,200 deductible and the Enrollment Schedule states a \$1,500 CommonFunds deductible. After the participant satisfies that threshold, CommonFunds can reimburse the eligible layer above it—even though the insurance contract still has a \$9,200 deductible. The participant's modeled exposure to deductible-subject expenses can therefore be reduced toward \$1,500, subject to the available CommonFunds amount and governing component terms.

The economic difference appears when the participant incurs less than \$9,200 of eligible expense:

- **Insurance buy-down:** The additional premium paid for a lower deductible is permanently spent, whether or not the participant uses the benefit.
- **CommonFunds buy-down:** Only valid claims consume the employer-funded benefit. Unused notional availability remains employer property and may expire under the plan.

### Illustrative 2026 comparison

The following CommonCare quote comparison involved a 40-year-old man in Nashville:

| Plan variant | Annual premium | Deductible | Maximum out of pocket |
|---|---:|---:|---:|
| Higher deductible | \$15,350 | \$10,600 | \$10,600 |
| Lower deductible | \$22,116 | \$5,900 | \$6,900 |
| **Difference** | **+\$6,766** | **−\$4,700** | **−\$3,700** |

The lower-deductible option required \$6,766 of additional premium to reduce maximum out-of-pocket exposure by \$3,700 and the stated deductible by \$4,700. Under the simplified covered-claims curve, the additional premium exceeded the largest cost-sharing advantage the lower-deductible option could produce. The complete comparison must still adjudicate the actual copays, coinsurance, service rules, and networks rather than infer dominance from the three displayed fields alone.

> [!TIP]
> The model does not assume that every higher-deductible plan wins. It uses dominance before probability. A lower deductible cannot justify its additional premium on total cost when that premium costs more than the largest reduction in claims paid outside insurance that the plan can produce. If the lower-premium plan has a lower total cost at \$0 of claims, throughout the cost-sharing curve, and at premium plus MOOP, it wins at every possible claim level. Claim probability matters only when the plans’ total-cost curves cross.

---

## How CommonCare identifies the optimal plan

CommonCare evaluates health plans as a **total-cost problem**. The economic question is not whether the employer or employee writes a particular check. It is whether buying a richer insurance contract reduces claims paid outside the contract by more than the additional premium and other fixed cost required to buy that contract.

Employer contributions, employee payroll deductions, and CommonFunds reimbursements determine who bears cost and when. They matter enormously to benefit design, affordability, liquidity, and participant experience, but they do not create or eliminate economic cost merely by moving dollars between the employer and participant. Those allocation questions should be evaluated separately from the insurance-efficiency calculation.

CommonCare can compare total cost across simulated years for each household. More simulations reduce sampling noise, but they do not correct inaccurate assumptions. The ranking identifies the lowest expected cost under the model; known needs and material differences in coverage should be incorporated when available.

### The mathematical question

For each plan `j`, define:

```text
Total cost under plan j in medical-event state s
= fixed plan cost j
  + claims paid outside insurance under plan j in state s
  + plan-specific administrative or transaction cost
```

Premium is a fixed plan cost. Deductibles, copays, coinsurance, and the maximum out-of-pocket limit determine which covered claims are paid outside insurance. CommonFunds reimbursement is not an additional total cost when it reimburses one of those same claims; it changes the payer of the claim. Counting both the underlying claim and its reimbursement would count one healthcare expense twice.

Let:

| Variable | Meaning |
|---|---|
| `S` | A possible set of medical events during the period |
| `Pj` | Total premium and other fixed acquisition cost of plan `j` |
| `Uj(S)` | Healthcare cost not paid by insurance under plan `j` in state `S` |
| `Aj(S)` | Administrative or transaction cost not already included elsewhere |
| `Tj(S)` | Total economic cost of plan `j` in state `S` |

Then:

```text
Tj(S) = Pj + Uj(S) + Aj(S)
```

The primary comparison is:

```text
Expected total cost of plan j = E[Tj(S)]
```

The economically efficient plan is the valid plan with the lowest expected total cost, subject to any separately stated constraints on networks, covered services, liquidity, risk tolerance, or participant protection.

### Why average spending is not enough

The model does not substitute average annual spending for the distribution of spending. For a simplified scalar annual spending variable `X` and plan cost function `T`, in general:

```text
E[T(X)] is not equal to T(E[X])
```

Cost sharing is nonlinear. Deductibles create thresholds, coinsurance changes the slope, and MOOP creates a ceiling. A population in which everyone incurs `\$5,000` of allowed claims can have the same average spending as a population in which 95% incur nothing and 5% incur `\$100,000`, while producing very different deductible, coinsurance, and MOOP results.

The relevant input is therefore a distribution of medical-event states, not a single average claim amount. The model must preserve the frequency and concentration of spending across people and periods. It must also apply each plan's own coverage rules, allowed prices, network, formulary, and cost-sharing logic to the same underlying medical needs whenever those features differ materially.

### Spending concentration does not make claim severity the decision variable

Healthcare spending is highly concentrated, but the largest bill is not necessarily the bill that most affects the plan comparison. Insurance converts a medical event into a plan-specific amount paid outside insurance. Once both plans have reached their applicable MOOP, additional covered in-network claim dollars generally do not change the comparison.

For that reason, a `\$100,000` claim is not ten times as important to the deductible decision as a `\$10,000` claim. In a simple design, both may place the participant at the same MOOP. The relevant quantity is the difference between the plans' cost-sharing results in that state, not the gross size of the claim.

### Known high-cost needs often simplify the decision

Unknown claims require probability modeling. A known treatment need can be priced against each available plan directly.

That means CommonFunded does not need to design the entire employer plan around a few expensive participants. Each participant can select among the available options using the total premium, expected medical events, plan-specific cost sharing, and maximum exposure—or CommonCare can rank the valid options using those inputs.

> 🔑 For participants who have significant needs, the math for the optimal plan actually tends to get simpler. Most often entire plans optimize to solve a few significant problems - as if they were unknown. CommonFunded allows just that one employee to modify the cost-sharing structure to optimize for their needs - underlying insurance options allowing; see the section on [insurance options](#pluggable-coverages) for details.

### When is additional premium worthwhile?

For a simplified plan with one deductible and a uniform coinsurance rate:

```text
Total cost = P + min(M, min(x, D) + r × max(0, x − D))
```

Where:

| Variable | Meaning |
|---|---|
| `P` | Total annual premium and fixed plan cost |
| `x` | Annual covered medical bills at the insurer’s allowed prices |
| `D` | Annual deductible |
| `r` | Participant coinsurance after the deductible, expressed as a decimal |
| `M` | Annual maximum out-of-pocket limit, excluding premium |

The formula adds fixed plan cost to claims paid outside insurance: deductible spending first, then coinsurance, capped at the maximum out-of-pocket limit. It is a deliberately simplified total-cost function for covered in-network care.

#### Decision rule

Let `H` be the higher-deductible, lower-premium plan and `L` the lower-deductible, higher-premium plan. Define the premium reduction from choosing `H` as:

```text
R = PL − PH
```

Buying the lower deductible is worthwhile on expected total cost only when the expected reduction in claims paid outside insurance exceeds its additional fixed cost:

```text
PL − PH < E[UH(S) − UL(S)]
```

Equivalently, the higher-deductible plan is more efficient when:

```text
R > E[UH(S) − UL(S)]
```

Equality is the expected-value break-even point. This is different from choosing one assumed annual bill amount `x`: that produces a scenario comparison, not an expectation.

The same rule can be expressed as an expected net value of buying richer insurance:

```text
Value of richer insurance
= E[UH(S) − UL(S)] − (PL − PH)
```

- A positive value favors the lower-deductible plan.
- A negative value favors the higher-deductible plan.
- Zero is the expected-cost break-even point.

#### Dominance rule

Expected value is unnecessary when one plan is cheaper in every possible relevant state. Calculate the difference over the entire medical-event domain:

```text
Cost difference(S) = TL(S) − TH(S)
```

- If the result is always positive, the higher-deductible plan dominates.
- If the result is always negative, the lower-deductible plan dominates.
- If the result changes sign, neither plan dominates and the probability of the states on each side of the break-even boundary becomes relevant.

Dominance is stronger than an expected-value result. It means no probability assumption can make the dominated plan cheaper within the modeled domain.

#### Deductible and MOOP are layers, not independent prices

The deductible and MOOP should not be valued as though every participant receives their full numerical difference. Their value depends on how often medical events reach each affected layer of cost sharing.

In a simple deductible-only layer from `a` to `b`, the expected cost of that layer can be written using the survival function of allowed claims `X`:

```text
Expected claims in layer [a,b]
= integral from a to b of Pr(X > t) dt
```

Each dollar in the layer is weighted by the probability that claims reach it. A dollar immediately above a low deductible may be incurred frequently; a dollar near the MOOP may be incurred rarely. Coinsurance multiplies the applicable portions of those layers, and the MOOP truncates them.

This produces the correct interpretation of a premium reduction:

> A dollar of premium is certain. A dollar of additional deductible or MOOP is contingent. The exchange is worthwhile when the certain premium saved exceeds the probability-weighted additional claims paid outside insurance.

For very large covered claims, the comparison simplifies to:

```text
Catastrophic annual cost = annual premium + MOOP
```

In the Nashville example:

```text
Higher-deductible option: \$15,350 + \$10,600 = \$25,950
Lower-deductible option:  \$22,116 +  \$6,900 = \$29,016
```

The higher-deductible option costs **\$3,066 less even when both participants reach their MOOP**. A \$100,000 covered claim does not make the lower-deductible option perform better; it simply causes both options to reach maximum cost sharing.

More generally, the incremental cost transferred by a higher MOOP is bounded in states where both plans reach their limits:

```text
UH(S) − UL(S) = MH − ML
```

The expected value of that difference depends on how often each plan reaches its MOOP and on the cost difference in states where only one plan reaches it. The total dollars in claims above both MOOP thresholds do not increase this cost-sharing difference.

### What the primary result does and does not answer

The primary result answers whether one insurance-and-direct-funding structure consumes fewer total economic resources than another. It deliberately does not answer:

- How premium and claims should be divided between employer and employee;
- Whether an employee can comfortably finance a claim before reimbursement;
- How much volatility either party should accept;
- Whether a particular allocation is equitable or behaviorally workable; or
- Which legal benefit component should make a payment.

Those are essential design questions, but they are downstream of the efficiency result. They should be reported separately so a transfer between parties is not mistaken for a saving and an economically efficient design is not mistaken for an automatically acceptable benefit design.

### Minimum standard for a defensible comparison

A total-cost result should be reproducible from disclosed inputs. At minimum, the analysis should state:

1. **The comparison unit.** Individual, household, enrollment tier, or population; the coverage period; and any eligibility assumptions.
2. **Fixed costs.** Full premium, fees, taxes, and administrative costs, without excluding a portion merely because a different party pays it.
3. **Medical-event distribution.** The data source, experience period, population adjustments, medical trend, sampling method, and treatment of zero-claim and catastrophic periods.
4. **Plan adjudication.** Covered services, allowed prices, network assumptions, deductible and MOOP accumulators, coinsurance, copays, prescription rules, and exclusions.
5. **Direct-funding rules.** Which underlying claims may be reimbursed, applicable thresholds and caps, and confirmation that reimbursements are not counted again as new healthcare costs.
6. **Approximations.** Every material simplification, its expected direction of bias, and the result under reasonable alternative assumptions.
7. **Results.** Expected total cost, the cost difference between options, the probability each option is cheaper, relevant distribution percentiles, and whether either option dominates.

The probability that a plan is cheaper is not the same as its expected savings. A plan can win in most years but lose by enough in a small number of years to have a higher expected total cost. Conversely, a plan can have the lowest expected cost without winning in a majority of simulated years. Both statistics should be reported, but expected total cost remains the primary efficiency measure unless a different objective is stated in advance.

The analysis should also show the total-cost difference as the principal result:

```text
Expected savings from H versus L
= E[TL(S)] − E[TH(S)]
```

A positive result is the expected economic value of choosing the higher-deductible structure. The result should be accompanied by scenario and sensitivity analysis, not replaced by a claim that one average level of spending represents the population.

### Decision policy: choose the mathematical winner by default

The total-cost analysis is intended to produce a decision, not merely another enrollment data point. Among plans that satisfy the required coverage and access constraints:

1. Eliminate any plan that is mathematically dominated.
2. If the remaining total-cost curves cross, apply the medical-event distribution and select the plan with the lowest expected total cost.
3. State the expected dollar advantage of the winner.
4. Choose a different plan only when a material advantage outside the modeled total-cost result justifies surrendering that dollar advantage.

This is the default rule:

> **Do not pay more premium to reduce cost sharing unless the probability-weighted reduction in cost sharing is worth more than the premium. Do not override the resulting winner for a vague preference. Identify the specific superiority for which the additional total cost is being paid.**

This approach commits to playing the odds. It does not treat a possible high-cost year as though it were certain, and it does not treat a predictable premium as psychologically invisible. Premium is paid in every modeled state. Deductible, coinsurance, and MOOP exposure is paid only in the states that reach those layers.

#### Example: a plan that loses before probability is considered

In the Nashville comparison, the lower-deductible option charges `\$6,766` in additional annual premium. Its deductible is `\$4,700` lower and its MOOP is `\$3,700` lower. Under the simplified covered-claims curve, it cannot recover its additional premium through reduced cost sharing. The higher-deductible option also costs `\$3,066` less in the catastrophic endpoint:

```text
(\$22,116 + \$6,900) − (\$15,350 + \$10,600) = \$3,066
```

Subject to confirmation from the complete plan adjudication, the higher-deductible option is the mathematical choice without needing an assumption about average claims. Selecting the other plan is not a more cautious application of the same cost analysis; it is a decision to purchase some separate plan feature at an additional cost.

#### Example: plans that require probability

Assume the following event-level simulation results:

| Plan | Annual fixed cost | Expected claims paid outside insurance | Expected total cost |
|---|---:|---:|---:|
| Higher deductible | \$10,000 | \$3,200 | \$13,200 |
| Lower deductible | \$13,000 | \$1,800 | \$14,800 |

The lower-deductible plan reduces expected claims outside insurance by `\$1,400` but charges `\$3,000` more in fixed cost:

```text
Expected value of richer insurance
= \$1,400 − \$3,000
= −\$1,600
```

The higher-deductible plan is the mathematical winner by `\$1,600` per year. The existence of years in which the lower-deductible plan wins does not reverse that result; those years are already represented in the expectation.

#### Worked example: 50 people with a concentrated annual bill distribution

Consider a hypothetical population of 50 people, all enrolled in single-only coverage for one year. To isolate the premium-versus-cost-sharing question, assume both plans cover the same services, use the same network and allowed prices, and have no uncounted administrative-cost difference.

The plans are:

| Plan | Annual fixed cost per person | Deductible | Coinsurance | MOOP |
|---|---:|---:|---:|---:|
| Higher deductible `H` | \$8,400 | \$6,000 | 20% | \$8,000 |
| Lower deductible `L` | \$11,400 | \$2,000 | 20% | \$5,000 |

For either plan, claims paid outside insurance are calculated as:

```text
U(x) = min(M, min(x,D) + r × max(0,x−D))
```

The hypothetical annual allowed-bill distribution is deliberately concentrated:

| Annual allowed bills `x` | People | `UH(x)` each | `UL(x)` each | Population `UH` | Population `UL` |
|---:|---:|---:|---:|---:|---:|
| \$0 | 15 | \$0 | \$0 | \$0 | \$0 |
| \$250 | 5 | \$250 | \$250 | \$1,250 | \$1,250 |
| \$500 | 5 | \$500 | \$500 | \$2,500 | \$2,500 |
| \$1,000 | 5 | \$1,000 | \$1,000 | \$5,000 | \$5,000 |
| \$2,000 | 4 | \$2,000 | \$2,000 | \$8,000 | \$8,000 |
| \$3,500 | 4 | \$3,500 | \$2,300 | \$14,000 | \$9,200 |
| \$6,000 | 3 | \$6,000 | \$2,800 | \$18,000 | \$8,400 |
| \$10,000 | 3 | \$6,800 | \$3,600 | \$20,400 | \$10,800 |
| \$20,000 | 2 | \$8,000 | \$5,000 | \$16,000 | \$10,000 |
| \$50,000 | 2 | \$8,000 | \$5,000 | \$16,000 | \$10,000 |
| \$100,000 | 1 | \$8,000 | \$5,000 | \$8,000 | \$5,000 |
| \$250,000 | 1 | \$8,000 | \$5,000 | \$8,000 | \$5,000 |
| **Total** | **50** | — | — | **\$117,150** | **\$75,150** |

Total allowed bills are `\$568,750`, or an average of `\$11,375` per person. The four highest-cost people account for `\$450,000`, or 79.1% of all allowed bills. The distribution therefore captures the central problem with a simple average: most people are far below the average, while a few claims are far above it.

Now calculate total population cost:

| Cost component | Higher deductible `H` | Lower deductible `L` |
|---|---:|---:|
| Fixed cost: 50 × annual premium | \$420,000 | \$570,000 |
| Claims paid outside insurance | \$117,150 | \$75,150 |
| **Total population cost** | **\$537,150** | **\$645,150** |
| **Total cost per person** | **\$10,743** | **\$12,903** |

The lower-deductible plan reduces claims paid outside insurance by `\$42,000`, but charges `\$150,000` in additional premium:

```text
Value of richer insurance
= \$42,000 − \$150,000
= −\$108,000
```

The higher-deductible plan wins by `\$108,000` for the population, or `\$2,160` per person. The lower-deductible plan returns only `\$0.28` in reduced cost sharing for each additional premium dollar:

```text
\$42,000 ÷ \$150,000 = 0.28
```

Applying the same formulas only to average bills produces the wrong decision:

| Calculation at `x = \$11,375` | Higher deductible `H` | Lower deductible `L` |
|---|---:|---:|
| Fixed cost | \$8,400 | \$11,400 |
| Claims paid outside insurance | \$7,075 | \$3,875 |
| Apparent total cost | \$15,475 | \$15,275 |

The average-person shortcut incorrectly favors the lower-deductible plan by `\$200` per person. The actual 50-person distribution favors the higher-deductible plan by `\$2,160` per person. This reversal occurs because cost sharing is nonlinear: the average bill is applied as though all 50 people incurred it, even though 34 people incurred `\$2,000` or less and the largest claims stopped changing either plan's result after the MOOP.

The example demonstrates the complete decision rule:

1. Preserve the distribution rather than collapsing it to average spending.
2. Apply each plan's cost-sharing function to every person-period.
3. Add the fixed premium paid for every person, including those with no claims.
4. Sum total cost across the population.
5. Select the lower total unless an identified superiority outside the model is worth more than the `\$108,000` expected advantage.

#### How qualitative superiority can override the result

Some differences are not reducible to a reliable claims estimate. A network may offer meaningfully better access to a trusted specialist, a plan may provide a materially better care experience, or one design may avoid an unacceptable administrative burden. These can justify choosing the more expensive option, but they should not be blended vaguely into the cost calculation.

The mathematical result supplies the price of the override. In the preceding example, choosing the lower-deductible plan means paying an expected `\$1,600` per year for its unmodeled advantages. The decision becomes:

> Is the specific network, access, service, or other qualitative superiority worth at least `\$1,600` per year?

A modest preference should not override a large expected-cost advantage. A significant override should require significant, identifiable superiority. The larger the mathematical advantage, the stronger the non-mathematical reason must be.

Not every network difference is qualitative. Different negotiated prices, covered providers, balance-billing exposure, drug coverage, and the expected cost of known care can often be modeled and belong inside `Tj(S)`. Only the residual value that cannot be estimated credibly should remain a qualitative override. This prevents a measurable economic difference from being hidden behind the word “network,” while acknowledging that convenience, trust, clinical relationships, and perceived quality may ultimately require informed judgment.

> [!NOTE]
> This simplified equation assumes that both plans apply the same allowed prices to covered, in-network care subject to one deductible and one coinsurance rate, with deductible spending counting toward the MOOP. Copays, embedded family deductibles, service-specific rules, prescriptions, separate limits, network differences, balance bills, utilization management, and noncovered expenses require an event-level plan model rather than a single spending variable.

---

## Why cash-pay routine care matters

An account can change the purchase itself. Suppose two facilities quote $350 and $600 for the same scheduled imaging service. If either bill is fully reimbursable and below the remaining account limit, choosing the first uses $250 less of the account and leaves $250 available for later eligible care. Whether that matters personally depends on whether the participant can use the remaining balance. The year's net saving also depends on later claims against the cap.

Patients have responded to an actual price choice. After CalPERS introduced a reference payment for colonoscopy, patients shifted toward lower-priced facilities and the adjusted price per procedure fell 21%. In a different employer study, moving to a high deductible reduced the quantity of care people used, with no detectable shift toward lower-priced providers. The design matters: people need to see a price, have a practical choice and have a reason to act on it. [CalPERS reference-payment study](https://pubmed.ncbi.nlm.nih.gov/26348851/) · [Employer deductible study](https://doi.org/10.1093/qje/qjx013)

The structural comparison holds care and prices fixed. To test a purchasing change separately, use actual prices for identified services and a stated assumption about how often people switch. Apply the revised bills only to the proposed design, carry them through the annual accumulators, and report the change from the same-care result. A lower bill above an exhausted account cap saves that account zero.

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

These are not arguments against HSAs. CommonCare considers the HSA model superb and has created plan structures intended to produce HSA eligibility with the lowest practical sunk cost, including the [self-funded MEC plan](https://commoncare.org/products/mec). HSA-driven options can be offered alongside CommonFunded and other CommonCare structures.

### 2027 HSA, HDHP, EBHRA, and Health FSA reference amounts

For calendar year 2027, the HSA contribution limit is \$4,500 for self-only coverage and \$9,000 for family coverage. The general HDHP minimum deductible is \$1,750 self-only and \$3,500 family, and the HDHP out-of-pocket ceiling is \$8,700 self-only and \$17,400 family. Eligible Exchange bronze and catastrophic plans receive separate statutory HSA treatment beginning in 2026. [IRS Revenue Procedure 2026-24](https://www.irs.gov/irb/2026-25_irb#REV-PROC-2026-24)

For plan years beginning in 2027, the EBHRA limit is \$2,250 and the Health FSA salary-reduction limit is \$3,500. A Health FSA that adopts a carryover may permit up to \$700 to carry from the prior year without reducing the \$3,500 salary-reduction limit. These indexed amounts are reference values for 2027, not permanent product limits. [IRS Revenue Procedure 2026-24](https://www.irs.gov/irb/2026-25_irb#REV-PROC-2026-24) · [IRS Revenue Procedure 2026-35, §3.16](https://www.irs.gov/pub/irs-drop/rp-26-35.pdf)

### How CommonFunded improves the implementation

1. **The funding is integrated with the coverage.** CommonFunded presents the major medical option and CommonFunds as one plan experience. The participant does not receive a high deductible followed by a vague promise that a separate account makes it better; the effective cost-sharing position is calculated and displayed directly.
2. **Experience gains remain with the employer.** CommonFunds availability is a reimbursement promise, not a portable employee-owned asset. Amounts not paid as valid claims remain employer property, and unused availability may expire according to the plan terms.
3. **The benefit is not tied to HDHP enrollment.** A participant does not have to enroll in an HSA-qualified plan to use CommonFunds. The employer must make the other coverage required for excepted-benefit status available, but participant enrollment in one prescribed major medical option is not the source of CommonFunds eligibility. For example, an employer can use our [self-funded MEC plan](https://commoncare.org/products/mec) to satisfy this requirement and pair with CommonFunds.
4. **Carryover does not create portability.** If the employer elects rollover, unused availability can accumulate for the participant while employed without becoming an asset the participant takes at termination.
5. **No individual custodial account is required.** The employer can establish and operate CommonFunds without waiting for every employee to open, fund, or manage a separate account.
6. **The employer captures the funding efficiency.** CommonFunded replaces the employee profit opportunity created by portable HSA assets with an employer experience-gain opportunity, while still paying valid participant claims tax-free.

> [!IMPORTANT]
> CommonCare still loves HSAs. CommonFunded solves a different ownership and implementation problem. An HSA makes unused healthcare dollars the employee’s permanent asset; CommonFunded keeps unused reimbursement dollars with the employer. CommonCare can use either structure—or both—when the economics support it.

---

## Pluggable Coverages

CommonFunded can operate with multiple underlying coverage structures because CommonFunds is administered as an excepted-benefit companion rather than as the participant’s comprehensive major medical coverage.

### CHOICE — formerly ICHRA

CHOICE allows employees to select the optimal private individual coverage option. This option creates the maximum flexibility for meeting individual needs and takes the employer completely out of the risk-management process for major medical coverage. CommonCare can fully administer a CHOICE arrangement as the CommonFunded coverage option. See our [CHOICE documentation](https://commoncare.org/products/choice) for more details.

CommonCare via the CommonFunded plan structure is able to wrap a CHOICE offering to normalize the premiums and deductible amounts so that employees see a simplified "A, B, C" plan offering with fixed premiums and deductibles (or age-banded if desired). This structure also avoids putting any excess funds in the actual CHOICE HRA to avoid trapping funds to be used or lost on insurance premiums. How much goes into the HRA depends on a few factors:

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

CommonFunded can pair the highest-value group options with CommonFunds and normalize the participant-facing presentation of:

Like with the CHOICE option, it is simple to wrap the insurance options in the CommonFunded structure to normalize employee-facing cost-sharing (deductible, MOOP, etc.) and premiums. No displaying \$10,000 deductibles + some nebulous savings account.

The selection should be driven by the quoted economics, not a presumption that the group or individual market always wins.

### Individually selected, non-employer-sponsored options

Employees may independently choose arrangements that the employer does not sponsor. An employer may facilitate voluntary, employee-paid access—including payroll deduction—when the arrangement is structured to preserve employer neutrality and comply with applicable wage-deduction law.

#### What happens if I let employees choose an alternative coverage option?

The employee vacates the employer-sponsored major-medical insurance cost and benefit and independently chooses a non-employer-sponsored way to address major medical expense. From the employer's major-medical plan perspective, this is the same financial result as the employee declining that coverage entirely: the employer no longer pays the insurance premium or promises the insurance benefit for that employee. Any separately offered CommonFunds component, flex credit, or other benefit continues only under its own terms.

The employee may regard the independent option as a significant upgrade. Depending on the option and the employee's needs, it may offer lower fixed costs, clearer prices, a more direct service experience, or a membership population that is a better fit for the participant. It may also provide materially different protections, exclusions, payment obligations, provider access, and dispute rights than insurance. The employer is not deciding which view is correct. It is simply allowing the employee to decline the employer-sponsored major-medical benefit without making the independent option an employer-sponsored promise or recommendation.

The dollars then follow their own classifications:

- **Cashable flex credit or taxable wages.** Once the employee elects the amount as taxable compensation, it is unrestricted wages. The employee may use it toward an alternative's premium or membership cost—or for any other purpose. The payment is not an employer reimbursement of the alternative and does not make the alternative part of CommonFunds.
- **Health-only flex credit.** This amount cannot become cash and cannot be redirected to an independent alternative merely because the alternative relates to health. It may instead remain within the employer's health-benefit architecture: the employer may assign the applicable amount to the EBHRA, or the cafeteria plan may permit allocation to the Health FSA, dental or vision coverage, other qualified benefits, or an HSA contribution for an otherwise HSA-eligible employee. Each destination retains its own governing rules; the EBHRA is not converted into a cafeteria-plan benefit.
- **Health FSA funding.** An employee salary-reduction election—including cashable flex elected into the Health FSA—can fund the FSA and may create additional permitted true-employer FSA contribution capacity. A health-only flex credit can use that capacity when the cafeteria plan and excepted-benefit rules permit it. The [CommonFunds documentation](../common-funds/human-readable.md#what-the-health-fsa-doesand-does-not-do) explains the applicable `max(S, 500)` employer-contribution test.
- **EBHRA funding.** The employee may remain eligible for the EBHRA even after declining the offered employer major-medical plan, provided the EBHRA is offered under the excepted-benefit pathway and satisfies its separate requirements. The EBHRA may reimburse eligible expenses and permitted excepted-benefit premiums under its terms; it may not pay the independent major-medical or alternative membership cost merely because the employee declined employer insurance.
- **HSA funding.** A health-only cafeteria-plan credit may be directed to an HSA when the plan permits and the employee satisfies every HSA eligibility requirement. Any HRA or Health FSA coverage also made available to that employee must be limited-purpose, post-deductible, suspended, or otherwise HSA-compatible when required.

The practical distinction is therefore simple: the employee's alternative election removes the employer-sponsored insurance layer, not necessarily every employer benefit. Unrestricted taxable dollars may follow the employee to the independent option. Qualified-benefit dollars remain inside the EBHRA, Health FSA, HSA, dental, vision, or other component whose rules authorize their use. This is the financial workflow CommonCare must preserve in enrollment, payroll, account allocation, and claims administration.

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

Like the alternative coverages, this option generally cannot be employer-sponsored. Generally, because of an important but realistic exception for some groups:

- If the ages/income mix of employees is a fit, the employer may offer an CHOICE/ICHRA arrangement with minimal allowance. This will mean some employees (those most able to benefit from the PTC) still have access to the PTC due to the coverage not being legally affordable. The employer can still offer an allowance, but it is a flex-allowance and therefore does not count toward affordability.
- These employees opt-out of the CHOICE/ICHRA and CommonCare helps them enroll in individual coverage seamlessly (still payroll-funded, only post-tax, and not employer-sponsored)
- The remaining employees still get the benefit of tax-free premiums through the CHOICE/ICHRA arrangement.

This is an important option for employers with less than 50 full-time-equivalent employees. Often the total optimal arrangement cannot be known until enrollment is already underway, but CommonCare can allow an easy migration to this arrangement where it is optimal. The savings netted make the bother of a small change very worthwhile.

See the [PTC Plan documentation](https://commoncare.org/products/ptc).

> [!WARNING] It is important to note that most plans who offer this option will need to offer a legitimate employer sponsored health plan in order to be able to offered qualified HRA/FSA options as excepted benefits. See [§45 CFR 146.145](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-146/subpart-D/section-146.145).
>
> CommonCare self-funded MEC product is the ideal way to accomplish this. The plan does not meet minimum value and therefore preserves the PTC eligibility for employees. It is self-funded, so there is no premium dollars sent off to a trite insurance product. The utilization and risks for the plan are defined and limited. See [The self-funded MEC docs](https://github.com/commoncare-dev/commondocs/blob/main/plan-structures/self-funded-mec/basic-mec/human-readable.md)


---

## Important implementation rules

The flexibility of CommonFunded comes from coordinating distinct components, not ignoring their boundaries.

| Design issue | Operating rule |
|---|---|
| CommonFunds classification | Maintain EBHRA, integrated-HRA, ICHRA, and Health FSA classifications, limits, funding sources, eligibility, and claims rules separately; never apply the EBHRA cap to an integrated group-plan HRA |
| Group-plan HRA integration | Require actual qualifying group-plan enrollment, apply the selected Notice 2013-54 integration method, enforce family-member coverage and opt-out rules, and document the employer-only HRA maximum |
| Risk thresholds | Store the participant deductible and MOOP, HRA threshold and cap, and specific and aggregate stop-loss attachment points as separate values |
| Individual optimization | Recommend and enroll participants among valid available options; do not alter plan terms arbitrarily for an individual |
| EBHRA availability | Apply the same terms to similarly situated individuals, regardless of health factor |
| Health FSA risk | Apply uniform coverage and the governing forfeiture, carryover, and runout provisions |
| CommonFunds deductible | Source the participant threshold from the Enrollment Schedule; apply the annexed component rules to accumulation, expense-date testing, pre-deductible benefits, substantiation, and payment |
| Participant-facing normalization | Show effective economics without replacing or contradicting the underlying coverage documents |
| Premium tax credits | Evaluate affordability, minimum value, ICHRA rules, household eligibility, and the actual employer offer |
| Independent alternatives | Preserve voluntariness and employer neutrality when the option is not employer sponsored |

## Core principle

> **Use insurance for the risk the contract actually transfers. Fund routine care directly through the appropriate account component, keep every retained layer explicit and bounded, and optimize the combination using total cost and the real claim distribution.**

## Implementation and pricing nuances

CommonCare provides turn-key tooling for pricing, implementing, and administering this plan structure. There are some critical decisions made in modeling costs in our model worth considering:

### Employee deductible/network elections

CommonFunded is designed to work with the existing insurance product landscape. It is not a carrier-designed level-funded arrangement in which a single carrier controls the insurance product, funding account, and participant incentives. Instead, CommonFunded accepts the incentives and cost-sharing rules of the underlying insurance products and applies a consistent funding layer across them.

An important implementation nuance arises when an employee selects an underlying insurance plan that differs from the benchmark plan used to price the CommonFunded arrangement. This is a standard use case in CHOICE and ICHRA programs, but it can also occur when employees live in different geographic markets, require access to different provider networks, or are offered multiple insurance options.

The benchmark price assumes a particular underlying deductible and expected CommonFunds liability. Selecting a plan with a different deductible changes that expected liability:

- A higher underlying deductible creates additional potential exposure and supports a lower deductible-adjusted insurance premium.
- A lower underlying deductible reduces potential exposure and produces a higher deductible-adjusted insurance premium.

This adjustment is separate from any difference in the carriers’ raw premiums. Raw premium differences may reflect network breadth, negotiated provider rates, plan design, carrier administration, geography, or other factors. The deductible adjustment only estimates the expected value associated with the change in deductible exposure.

#### Deductible cost ratios

The model calculates expected CommonFunds claims at \$1,000 deductible intervals. These projections are converted into marginal deductible cost ratios:

```text
Deductible cost ratio
=
(CommonFunds exposure at the current tier
 − CommonFunds exposure at the next tier)
÷ deductible dollars in the tier
```

When the projections contain group totals, the difference is also divided by the number of participating employees.

For example:

```text
Projected CommonFunds claims at \$2,000: \$3,500
Projected CommonFunds claims at \$3,000: \$2,900

Cost ratio for the \$2,000–\$3,000 tier:
(\$3,500 − \$2,900) ÷ \$1,000 = 0.60
```

A ratio of `0.60` means that each additional dollar of deductible in that tier represents approximately `\$0.60` of expected cost.

Because claim frequency generally declines at higher levels of exposure, the ratio can vary by deductible tier. This produces a more accurate adjustment than applying one average ratio to the entire deductible difference.

If an elected deductible exceeds the range supported by the benchmark simulation, the model carries forward the highest stable tier rate for which CommonFunds claim information exists. This prevents the adjustment from incorrectly falling to zero merely because the benchmark plan’s cost-sharing limit has been reached.

#### Applying the adjustment

The applicable tier rates are accumulated between the benchmark deductible and the elected deductible.

```text
Deductible-adjusted premium
=
Benchmark premium + deductible adjustment
```

The direction of the adjustment depends on the election:

```text
Higher elected deductible → negative adjustment
Lower elected deductible  → positive adjustment
```

> **Example**
>
> Assume the benchmark plan has:
>
> - Annual premium: `\$12,000`
> - Deductible: `\$2,000`
>
> An employee selects a plan with a `\$4,500` deductible. The applicable cost ratios are:
>
> | Deductible tier | Cost ratio | Adjustment |
> |---|---:|---:|
> | \$2,000–\$3,000 | 0.60 | \$600 |
> | \$3,000–\$4,000 | 0.50 | \$500 |
> | \$4,000–\$4,500 | 0.40 | \$200 |
>
> The additional `\$2,500` of deductible represents `\$1,300` of expected cost:
>
> ```text
> (\$1,000 × 0.60)
> + (\$1,000 × 0.50)
> + (\$500 × 0.40)
> = \$1,300
> ```
>
> Because the employee selected a higher deductible, the adjustment is negative:
>
> ```text
> \$12,000 − \$1,300 = \$10,700
> ```
>
> The resulting deductible-adjusted annual premium is `\$10,700`, before applying any separate difference between the underlying plans’ raw carrier premiums.

The same method works in reverse. If the employee selects a lower deductible than the benchmark, the accumulated expected cost is added to the benchmark premium rather than subtracted.

### Cost-sharing model and conservative approximations

A complete comparison applies each plan's rules to event-level claims. Relevant rules include:

- Preventive services covered without cost sharing;
- Deductibles, copays, and coinsurance by service category;
- In-network and out-of-network treatment;
- Prescription formularies and drug tiers;
- Embedded and aggregate family accumulators;
- Separate medical and prescription limits; and
- The plan's MOOP accumulation rules.

Historical claims data do not always contain enough information to reconstruct every rule reliably. When an exact plan adjudication is unavailable, the model may use a disclosed conservative approximation. The current simplified implementation does not remove preventive claims as insurance-paid, applies a global high coinsurance assumption, does not assume favorable specialty or drug tiers, and treats simulated bills as reaching the CommonFunds cost-sharing layer.

These assumptions are model limitations, not mathematical necessities. Each production comparison should identify which plan features were modeled directly, which were approximated, the direction in which each approximation is expected to bias the result, and whether reasonable alternative assumptions change the plan ranking.
