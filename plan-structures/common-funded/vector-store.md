---
id: product.commonfunded.vector-store
title: CommonFunded — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/common-funded/human-readable.md
metadata_document: plan-structures/common-funded/metadata.yaml
source_commit: 4c66b2f8254f45dc7647ec4ba83255eefe58d286
source_sha256: 302b4162b861a071d09406b37d6b143b0bf8c33b11542a5b2161a0d1628fa277
metadata_sha256: 42e9788ba0d45035151c510dea94356264b107da8e44622252f830af5db9aac3
generation_method: deterministic-markdown-conversion
canonical_source: false
source_status: draft
source_version: 1.0
jurisdiction: United States
last_reviewed: 2026-09-15
---

# CommonFunded — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/common-funded/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

<!-- record_id: product.commonfunded.commonfunded -->
## CommonFunded
> Retrieval context: CommonFunded — CommonFunded

> **CommonFunded pairs [CommonFunds](https://commoncare.org/products/common-funds) with major medical insurance or an alternative coverage arrangement to reduce sunk premium costs, preserve participant choice, and turn predictable healthcare spending into a bounded employer-funded benefit.**

CommonFunded is CommonCare’s core plan structure. It combines:

1. **CommonFunds** for routine and lower-cost healthcare expenses;
2. **Major medical insurance or another coverage vehicle** for larger and less predictable expenses; and
3. **Integrated enrollment and administration** that presents the components as one coherent benefit.

The result preserves a familiar participant choice structure while reducing reliance on insurance for expenses that are comparatively routine, priceable, and financially containable.

<!-- record_id: product.commonfunded.at-a-glance -->
## At a glance
> Retrieval context: CommonFunded — At a glance

#### Routine healthcare
<!-- record_id: product.commonfunded.at-a-glance.routine-healthcare; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Routine healthcare
- CommonFunded approach: Reimbursed through CommonFunds

#### Large and unpredictable claims
<!-- record_id: product.commonfunded.at-a-glance.large-and-unpredictable-claims; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Large and unpredictable claims
- CommonFunded approach: Managed through major medical insurance or another selected coverage vehicle

#### Employer risk
<!-- record_id: product.commonfunded.at-a-glance.employer-risk; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Employer risk
- CommonFunded approach: Capped by the CommonFunds benefit made available, subject to limited Health FSA uniform-coverage timing risk

#### Participant choice
<!-- record_id: product.commonfunded.at-a-glance.participant-choice; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Participant choice
- CommonFunded approach: Coverage and funding combinations can be evaluated participant by participant

#### Savings mechanism
<!-- record_id: product.commonfunded.at-a-glance.savings-mechanism; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Savings mechanism
- CommonFunded approach: Replace a portion of premium with a bounded reimbursement benefit

#### Experience gains
<!-- record_id: product.commonfunded.at-a-glance.experience-gains; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Experience gains
- CommonFunded approach: Unused notional balances remain employer assets and may cease to be liabilities according to the plan terms

#### Administration
<!-- record_id: product.commonfunded.at-a-glance.administration; record_type: table-row -->
- Context: CommonFunded — At a glance
- Product function: Administration
- CommonFunded approach: Coverage, CommonFunds, enrollment, payroll, and participant-facing cost sharing are presented together


> [!NOTE]
> **How is CommonFunded different from CommonFunds?**
>
> The underlying CommonFunds product is the same. CommonFunded pairs it with a selected set of coverage options and wraps compliance, enrollment, administration, and participant communication into a turnkey plan structure.

<!-- record_id: product.commonfunded.navigate-this-document -->
## Navigate this document
> Retrieval context: CommonFunded — Navigate this document

- [The design thesis](#the-design-thesis)
- [How to understand the concept versus reality](#how-to-understand-the-concept-versus-reality)
- [Bounded partial self-funding](#bounded-partial-self-funding)
- [The participant experience](#the-participant-experience)
- [Where the savings come from](#where-the-savings-come-from)
- [How CommonCare identifies the optimal plan](#how-commoncare-identifies-the-optimal-plan)
- [Why cash-pay routine care matters](#why-cash-pay-routine-care-matters)
- [What CommonFunded learns from HSAs](#what-commonfunded-learns-from-hsas)
- [Coverage vehicles](#pluggable-coverages)
- [Important implementation rules](#important-implementation-rules)

---

<!-- record_id: product.commonfunded.the-design-thesis -->
## The design thesis
> Retrieval context: CommonFunded — The design thesis

“CommonFunded” is partial self-funding. The structure captures many of self-funding’s advantages without asking the employer to accept catastrophic claims risk, build a claims operation, or purchase the entire healthcare benefit directly.

CommonCare’s coverage-ranking process simulates economic outcomes. It does not factor advertised "richness" of the plan, it ranks plans based on actuarial efficiency in realistic outcomes. A plan performs better when its projected total economic result is better.

That analysis repeatedly favors separating two different jobs:

#### Routine, lower-cost, high-frequency expenses
<!-- record_id: product.commonfunded.the-design-thesis.routine-lower-cost-high-frequency-expenses; record_type: table-row -->
- Context: CommonFunded — The design thesis
- Healthcare need: Routine, lower-cost, high-frequency expenses
- Best-suited funding mechanism: A bounded account-based benefit with direct price sensitivity

#### Large, concentrated, financially disruptive expenses
<!-- record_id: product.commonfunded.the-design-thesis.large-concentrated-financially-disruptive-expenses; record_type: table-row -->
- Context: CommonFunded — The design thesis
- Healthcare need: Large, concentrated, financially disruptive expenses
- Best-suited funding mechanism: Insurance or another risk-sharing vehicle


Insurance adds overhead and reduces price sensitivity when applied to low-dollar, high-volume transactions. Its strongest economic purpose is protection against expensive events capable of producing serious financial harm.

Healthcare spending is also highly concentrated. In 2022, the highest-spending 5% of people accounted for 49.7% of healthcare expenditures, while the bottom 50% accounted for only 2.8%. [AHRQ Medical Expenditure Panel Survey](https://www.meps.ahrq.gov/data_files/publications/st560/stat560.shtml)

In essence, this means that the majority of insurance benefit is not in the \\$0-\\$10,000 range where deductibles apply and premiums exceed claims. The majority of the benefit is for larger transactions where participants are likely to reach their max out of pocket on any plan.

This means much of insurance’s value is delivered through a relatively small number of high-cost periods. For many participants, differences in premium and maximum out-of-pocket exposure are more economically significant than the deductible alone.

> [!IMPORTANT]
> Individual circumstances still matter. CommonFunded uses the generally efficient structure as its default, then evaluates available options participant by participant. A predictable high-cost claimant may spend less overall with a lower-deductible plan; another participant may spend substantially less with lower premium, higher cost sharing, and CommonFunds.

---

<!-- record_id: product.commonfunded.how-to-understand-the-concept-versus-reality -->
## How to understand the concept versus reality
> Retrieval context: CommonFunded — How to understand the concept versus reality

The CommonFunded quote illustrates an economic proposition: routine and moderately predictable claims are often funded more efficiently outside the insurance premium, while insurance or another risk-sharing arrangement addresses less predictable and potentially catastrophic risk. The quote applies simulated claims to a simplified benefit design so an employer can compare fixed cost, expected claims, participant responsibility, and possible experience gains.

That illustration is not a requirement that every participant receive the exact arrangement depicted in the quote. It demonstrates the amount and location of potential value. The employer can then decide how much of that value to place in restricted coverage, flexible qualified benefits, participant-directed elections, or taxable compensation. CommonCare can support those choices through components such as an EBHRA, integrated HRA, CHOICE/ICHRA, Health FSA, HSA contribution, group health plan, or payroll flex arrangement.

Different components retain their own rules, but the employer is not required to choose one component or one participant experience for every available dollar. The implementation may combine components, offer elections, or use different compatible structures for different participants or permitted classes.

The quote answers:

> How much economic value may be created by moving an efficiently modeled layer of routine claims away from fixed insurance premium?

The adopted plan must separately answer:

> Which combination of coverage, account components, and participant elections best delivers that value for this employer and its employees?

<!-- record_id: product.commonfunded.example-1-small-employer-preserving-marketplace-choice-and-ptc-access -->
### Example 1: Small employer preserving Marketplace choice and PTC access
> Retrieval context: CommonFunded — How to understand the concept versus reality > Example 1: Small employer preserving Marketplace choice and PTC access

A small employer may make CommonCare's self-funded MEC available so it can sponsor preventive care and support an excepted CommonFunds structure without requiring every employee to use one employer-selected major-medical option. Employees may decline the MEC and bring qualifying coverage from the Marketplace, a spouse's plan, or another source. When the separate PTC rules are satisfied, a Marketplace participant may preserve the premium tax credit while receiving eligible CommonFunds benefits.

The employer can decide how the CommonFunds opportunity is presented. It may make ordinary medical reimbursement available from the first dollar, begin reimbursement only after a selected threshold, limit reimbursement to particular expense categories, offer an HSA-compatible option, support employee Health FSA elections, provide employer-funded EBHRA value, or use a permitted combination. It can also leave employees free to select a health share, CrowdHealth membership, or another private alternative using unrestricted post-tax compensation.

The employer sponsors its MEC offer and the adopted CommonFunds components. It does not thereby sponsor every independently selected coverage or alternative. The [Premium Tax Credit Plan](../ptc-plan/human-readable.md) governs the PTC pathway, and [Private Alternatives Alongside an Employer Plan](../alternative-companion/human-readable.md) governs neutrality, nonsponsorship, and post-tax treatment for private alternatives.

<!-- record_id: product.commonfunded.example-2-ichra-with-adjacent-flexible-benefits -->
### Example 2: ICHRA with adjacent flexible benefits
> Retrieval context: CommonFunded — How to understand the concept versus reality > Example 2: ICHRA with adjacent flexible benefits

An employer using CHOICE/ICHRA does not have to place its entire health-benefit budget inside the ICHRA. It can determine the amount assigned to the ICHRA under the permitted class and contribution rules, then design adjacent Health FSA, HSA, health-flex, and cashable-flex opportunities according to their own rules.

This permits a range of outcomes. An employee who enrolls in qualifying individual coverage may use the ICHRA for premiums and, when the document permits, other eligible expenses. An employee who does not establish ICHRA eligibility may still receive value available through a separately valid Health FSA election, another qualified benefit, or taxable compensation. The employer can therefore avoid making every flexible dollar forfeitable solely because an employee did not elect the coverage recognized by the ICHRA.

The same architecture can offer first-dollar reimbursement for some participants while preserving an HSA-compatible option for participants whose available HRA and FSA components are limited-purpose, post-deductible, suspended, or otherwise compatible. Cafeteria-plan funding can also be directed to an HSA for an otherwise eligible participant. Compatibility turns on what reimbursement is available and when—not merely whether the component is called an HRA, FSA, or general-purpose benefit.

There are design tradeoffs rather than one required allocation. ICHRA contributions follow the ICHRA's class and equality rules. Health FSA and cafeteria-plan contributions follow their separate limits and nondiscrimination rules. Health-only and cashable flex credits may receive different affordability treatment. CommonCare can model those consequences while allowing the employer to choose whether its priority is affordability credit, qualified-benefit flexibility, taxable flexibility, HSA access, or some combination.

<!-- record_id: product.commonfunded.example-3-group-insurance-with-a-higher-deductible-and-flexible-employer -->
### Example 3: Group insurance with a higher deductible and flexible employer funding
> Retrieval context: CommonFunded — How to understand the concept versus reality > Example 3: Group insurance with a higher deductible and flexible employer funding

An employer—often a larger employer with favorable group rates—may retain group major-medical insurance, push the carrier deductible or other participant cost sharing to an efficient level, and self-fund the contained layer of routine claims. The carrier continues to adjudicate the group policy while an integrated HRA, Health FSA, HSA contribution, or other adopted CommonFunds component changes how the participant's share is funded.

The employer can closely reproduce the quote by restricting the employer-funded layer to preconfigured coverage and reimbursements. It can instead expose some of the modeled savings as participant choice. For example, if \$150 per month is needed for the employer's coverage or affordability strategy and another \$150 is available, the additional amount might be directed—under the applicable plan and election rules—to CommonFunds, an HSA for an eligible participant, another qualified benefit, or taxable wages.

That flexibility can serve an employee enrolled in the group plan, an employee covered through a spouse, or an employee who independently prefers a health share or another way to address major-medical risk. Taxable, unrestricted compensation can be used toward a private alternative without turning that alternative into employer-sponsored coverage. An employee may also retain access to eligible CommonFunds reimbursement for out-of-pocket expenses under the components actually offered to that employee.

<!-- record_id: product.commonfunded.restriction-and-flexibility-change-the-expected-result -->
### Restriction and flexibility change the expected result
> Retrieval context: CommonFunded — How to understand the concept versus reality > Restriction and flexibility change the expected result

The employer ultimately chooses where the design sits on a spectrum:

#### More of the modeled value is committed to specified coverage and reimbursement components
<!-- record_id: product.commonfunded.how-to-understand-the-concept-versus-reality-restriction-and-flexibility.more-of-the-modeled-value-is-committed-to-specified-coverage-and-reimbur; record_type: table-row -->
- Context: CommonFunded — How to understand the concept versus reality > Restriction and flexibility change the expected result
- More restricted implementation: More of the modeled value is committed to specified coverage and reimbursement components
- More flexible implementation: More of the modeled value may be directed among qualified benefits and, where offered, taxable compensation

#### Unused or ineligible amounts are more likely to remain with the employer or be forfeited under the applicable component
<!-- record_id: product.commonfunded.how-to-understand-the-concept-versus-reality-restriction-and-flexibility.unused-or-ineligible-amounts-are-more-likely-to-remain-with-the-employer; record_type: table-row -->
- Context: CommonFunded — How to understand the concept versus reality > Restriction and flexibility change the expected result
- More restricted implementation: Unused or ineligible amounts are more likely to remain with the employer or be forfeited under the applicable component
- More flexible implementation: Fewer dollars may be forfeited because participants can direct value toward a personally useful option

#### Actual experience may track the quote's illustrated allocation more closely
<!-- record_id: product.commonfunded.how-to-understand-the-concept-versus-reality-restriction-and-flexibility.actual-experience-may-track-the-quote-s-illustrated-allocation-more-clos; record_type: table-row -->
- Context: CommonFunded — How to understand the concept versus reality > Restriction and flexibility change the expected result
- More restricted implementation: Actual experience may track the quote's illustrated allocation more closely
- More flexible implementation: Elections may depart from the allocation while improving an individual participant's net economics

#### The employer exercises more control over the coverage configuration
<!-- record_id: product.commonfunded.how-to-understand-the-concept-versus-reality-restriction-and-flexibility.the-employer-exercises-more-control-over-the-coverage-configuration; record_type: table-row -->
- Context: CommonFunded — How to understand the concept versus reality > Restriction and flexibility change the expected result
- More restricted implementation: The employer exercises more control over the coverage configuration
- More flexible implementation: Participants have more opportunity to preserve HSA, PTC, spouse-plan, or other favorable positions


Neither side of the spectrum is the required CommonFunded design. Greater flexibility does not invalidate the quote; it changes what the quote should be understood to predict. A controlled design may track the illustrated claims allocation closely. A flexible design may produce fewer forfeitures while also producing greater experience gains when participants select coverage that lowers their net out-of-pocket exposure. CommonCare's role is to identify the economic opportunity, model the available choices, implement the employer's selected election architecture, and guide participants among the options actually adopted.

> [!IMPORTANT]
> The quote demonstrates claims economics; it does not merge benefit components or override their rules. Final outcomes depend on employee elections, actual claims, the employer's adopted plan documents, and the legal requirements applicable to each component.

---

<!-- record_id: product.commonfunded.bounded-partial-self-funding -->
## Bounded partial self-funding
> Retrieval context: CommonFunded — Bounded partial self-funding

CommonFunded creates a contained layer of self-funded medical expense without exposing the employer to the open-ended risk of a self-funded major medical plan.

The employer defines the CommonFunds benefit made available to each participant. That amount establishes the employer’s maximum reimbursement exposure under the account-based component.

When the applicable participant benefit has been exhausted, CommonFunds does not create additional reimbursement liability. Larger expenses remain the job of the selected insurance or alternative coverage arrangement.

<!-- record_id: product.commonfunded.why-excepted-benefit-status-matters -->
### Why excepted-benefit status matters
> Retrieval context: CommonFunded — Bounded partial self-funding > Why excepted-benefit status matters

CommonFunds combines EBHRA and Health FSA components designed to qualify as excepted benefits. The components therefore operate under their own account limits and plan terms rather than assuming the comprehensive coverage obligations imposed on non-excepted ACA group health plans.

For the component structure, classifications, annual limits, and availability rules, see the [CommonFunds product documentation](https://commoncare.org/products/common-funds).

---

<!-- record_id: product.commonfunded.the-participant-experience -->
## The participant experience
> Retrieval context: CommonFunded — The participant experience

CommonFunded presents the selected coverage and CommonFunds together. A participant should not have to translate a \$10,000 insurance deductible and a separate reimbursement account into their real financial exposure.

Instead, CommonCare can display:

#### Normalized plan choices such as A, B, and C
<!-- record_id: product.commonfunded.the-participant-experience.normalized-plan-choices-such-as-a-b-and-c; record_type: table-row -->
- Context: CommonFunded — The participant experience
- Participant sees: Normalized plan choices such as A, B, and C
- System administers: The underlying insurance or alternative coverage options

#### Effective deductible after CommonFunds
<!-- record_id: product.commonfunded.the-participant-experience.effective-deductible-after-commonfunds; record_type: table-row -->
- Context: CommonFunded — The participant experience
- Participant sees: Effective deductible after CommonFunds
- System administers: The contractual deductible plus available reimbursement

#### Effective maximum exposure
<!-- record_id: product.commonfunded.the-participant-experience.effective-maximum-exposure; record_type: table-row -->
- Context: CommonFunded — The participant experience
- Participant sees: Effective maximum exposure
- System administers: Premium, cost sharing, and available benefit

#### One enrollment process
<!-- record_id: product.commonfunded.the-participant-experience.one-enrollment-process; record_type: table-row -->
- Context: CommonFunded — The participant experience
- Participant sees: One enrollment process
- System administers: Coverage enrollment, CommonFunds elections, and payroll instructions

#### One place to understand costs
<!-- record_id: product.commonfunded.the-participant-experience.one-place-to-understand-costs; record_type: table-row -->
- Context: CommonFunded — The participant experience
- Participant sees: One place to understand costs
- System administers: Separate legal and accounting components maintained behind the interface


The participant sees the terms that matter economically without having to perform the reconciliation personally.

---

<!-- record_id: product.commonfunded.where-the-savings-come-from -->
## Where the savings come from
> Retrieval context: CommonFunded — Where the savings come from

CommonFunded replaces a portion of fixed insurance premium with a capped reimbursement promise.

Suppose a participant chooses coverage with a \$9,200 deductible. CommonFunds can reduce the participant’s effective exposure to \$0—or another employer-selected amount—even though the insurance contract still has a \$9,200 deductible.

The economic difference appears when the participant incurs less than \$9,200 of eligible expense:

- **Insurance buy-down:** The additional premium paid for a lower deductible is permanently spent, whether or not the participant uses the benefit.
- **CommonFunds buy-down:** Only valid claims consume the employer-funded benefit. Unused notional availability remains employer property and may expire under the plan.

<!-- record_id: product.commonfunded.sources-of-value -->
### Sources of value
> Retrieval context: CommonFunded — Where the savings come from > Sources of value

- Many participants do not reach their annual deductible.
- Insured preventive services are generally covered without participant cost sharing, reducing the draw on CommonFunds.
- Participants with predictable high claims can select a different available option when its total economics are better.
- Higher-deductible options frequently produce substantial premium reductions.
- Routine claims remain individually visible rather than disappearing into a shared premium pool.
- Unused reimbursement availability can produce employer experience gains.

<!-- record_id: product.commonfunded.illustrative-2026-comparison -->
### Illustrative 2026 comparison
> Retrieval context: CommonFunded — Where the savings come from > Illustrative 2026 comparison

The following CommonCare quote comparison involved a 40-year-old man in Nashville:

#### Higher deductible
<!-- record_id: product.commonfunded.where-the-savings-come-from-illustrative-2026-comparison.higher-deductible; record_type: table-row -->
- Context: CommonFunded — Where the savings come from > Illustrative 2026 comparison
- Plan variant: Higher deductible
- Annual premium: \$15,350
- Deductible: \$10,600
- Maximum out of pocket: \$10,600

#### Lower deductible
<!-- record_id: product.commonfunded.where-the-savings-come-from-illustrative-2026-comparison.lower-deductible; record_type: table-row -->
- Context: CommonFunded — Where the savings come from > Illustrative 2026 comparison
- Plan variant: Lower deductible
- Annual premium: \$22,116
- Deductible: \$5,900
- Maximum out of pocket: \$6,900

#### Difference
<!-- record_id: product.commonfunded.where-the-savings-come-from-illustrative-2026-comparison.difference; record_type: table-row -->
- Context: CommonFunded — Where the savings come from > Illustrative 2026 comparison
- Plan variant: **Difference**
- Annual premium: **+\$6,766**
- Deductible: **−\$4,700**
- Maximum out of pocket: **−\$3,700**


The lower-deductible option required \$6,766 of additional premium to reduce maximum out-of-pocket exposure by \$3,700. Within those quoted terms, the additional premium exceeded even the maximum possible reduction in cost sharing.

> [!TIP]
> The model does not assume that every higher-deductible plan wins. It uses dominance before probability. A lower deductible has no economic value when the additional premium costs more than the largest reduction in out-of-pocket expense the plan can produce. If the lower-premium plan has a lower total cost at \$0 of claims, throughout the cost-sharing curve, and at premium plus MOOP, it wins at every possible claim level. Claim probability matters only when the plans’ total-cost curves cross.

---

<!-- record_id: product.commonfunded.how-commoncare-identifies-the-optimal-plan -->
## How CommonCare identifies the optimal plan
> Retrieval context: CommonFunded — How CommonCare identifies the optimal plan

CommonCare evaluates health plans using multiyear simulations populated with realistic medical expenses for each member of a household. A long simulation is more stable than pretending to predict one specific person’s next twelve months.

The general ranking identifies the option expected to perform most efficiently across many possible years. Known needs can then be layered onto that analysis.

Designing the plan to perform optimally in the majority of cases is the right recipe for success. However, CommonFunds really shines in adapting to specific needs.

<!-- record_id: product.commonfunded.known-high-cost-needs-often-simplify-the-decision -->
### Known high-cost needs often simplify the decision
> Retrieval context: CommonFunded — How CommonCare identifies the optimal plan > Known high-cost needs often simplify the decision

Unknown claims require probability modeling. A known treatment need can be priced against each available plan directly.

That means CommonFunded does not need to design the entire employer plan around a few expensive participants. Each participant can select among the available options using their own expected premium, claims, deductible, coinsurance, and maximum exposure (or we can auto-select the optimal plan based on their inputs).

> 🔑 For participants who have significant needs, the math for the optimal plan actually tends to get simpler. Most often entire plans optimize to solve a few significant problems - as if they were unknown. CommonFunded allows just that one employee to modify the cost-sharing structure to optimize for their needs - underlying insurance options allowing; see the section on [insurance options](#pluggable-coverages) for details.

<!-- record_id: product.commonfunded.when-is-additional-premium-worthwhile -->
### When is additional premium worthwhile?
> Retrieval context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile?

For a simplified plan with one deductible and a uniform coinsurance rate:

```text
Annual cost = P + min(M, min(x, D) + r × max(0, x − D))
```

Where:

#### P
<!-- record_id: product.commonfunded.how-commoncare-identifies-the-optimal-plan-when-is-additional-premium-wo.p; record_type: table-row -->
- Context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile?
- Variable: `P`
- Meaning: Total annual premium

#### x
<!-- record_id: product.commonfunded.how-commoncare-identifies-the-optimal-plan-when-is-additional-premium-wo.x; record_type: table-row -->
- Context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile?
- Variable: `x`
- Meaning: Annual covered medical bills at the insurer’s allowed prices

#### D
<!-- record_id: product.commonfunded.how-commoncare-identifies-the-optimal-plan-when-is-additional-premium-wo.d; record_type: table-row -->
- Context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile?
- Variable: `D`
- Meaning: Annual deductible

#### r
<!-- record_id: product.commonfunded.how-commoncare-identifies-the-optimal-plan-when-is-additional-premium-wo.r; record_type: table-row -->
- Context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile?
- Variable: `r`
- Meaning: Participant coinsurance after the deductible, expressed as a decimal

#### M
<!-- record_id: product.commonfunded.how-commoncare-identifies-the-optimal-plan-when-is-additional-premium-wo.m; record_type: table-row -->
- Context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile?
- Variable: `M`
- Meaning: Annual maximum out-of-pocket limit, excluding premium


The formula adds annual premium to participant medical expense: deductible spending first, then coinsurance, capped at the maximum out-of-pocket limit.

<!-- record_id: product.commonfunded.decision-rule -->
#### Decision rule
> Retrieval context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile? > Decision rule

Additional premium is worthwhile when the reduction in expected out-of-pocket expense exceeds the additional annual premium:

```text
Premium B − Premium A
< Out-of-pocket cost A(x) − Out-of-pocket cost B(x)
```

Here, `A` is the lower-premium plan and `B` is the higher-premium plan. Equality is the break-even point. At any assumed annual bill amount `x`, the option with the lowest total annual cost is the least expensive choice.

<!-- record_id: product.commonfunded.dominance-rule -->
#### Dominance rule
> Retrieval context: CommonFunded — How CommonCare identifies the optimal plan > When is additional premium worthwhile? > Dominance rule

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
Higher-deductible option: \$15,350 + \$10,600 = \$25,950
Lower-deductible option:  \$22,116 +  \$6,900 = \$29,016
```

The higher-deductible option costs **\$3,066 less even when both participants reach their MOOP**. A \$100,000 covered claim does not make the lower-deductible option perform better; it simply causes both options to reach maximum cost sharing.

> [!NOTE]
> This simplified equation assumes covered, in-network care subject to one deductible and one coinsurance rate, with deductible spending counting toward the maximum out-of-pocket limit. Copays, embedded family deductibles, service-specific rules, prescriptions, separate limits, balance bills, and noncovered expenses require additional modeling.

---

<!-- record_id: product.commonfunded.why-cash-pay-routine-care-matters -->
## Why cash-pay routine care matters
> Retrieval context: CommonFunded — Why cash-pay routine care matters

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
> If you feel that's an absurd priority tree, and you'd rather escalate any possible emergency to the maximally defensive treatment, that's ok; the CommonFunded model still works well if you end up spending more of your deductible. Some people will prefer to escalate their care. Most will avoid it.

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

These are not arguments against HSAs. CommonCare considers the HSA model superb and has created plan structures intended to produce HSA eligibility with the lowest practical sunk cost, including the [self-funded MEC plan](https://commoncare.org/products/mec). HSA-driven options can be offered alongside CommonFunded and other CommonCare structures.

<!-- record_id: product.commonfunded.2026-hsa-hdhp-ebhra-and-health-fsa-reference-amounts -->
### 2026 HSA, HDHP, EBHRA, and Health FSA reference amounts
> Retrieval context: CommonFunded — Why cash-pay routine care matters > 2026 HSA, HDHP, EBHRA, and Health FSA reference amounts

For calendar year 2026, the HSA contribution limit is \$4,400 for self-only coverage and \$8,750 for family coverage. The general HDHP minimum deductible is \$1,700 self-only and \$3,400 family, and the HDHP out-of-pocket ceiling is \$8,500 self-only and \$17,000 family. Eligible Exchange bronze and catastrophic plans receive separate statutory HSA treatment beginning in 2026.

For plan years beginning in 2026, the EBHRA limit is \$2,200 and the Health FSA salary-reduction limit is \$3,400. A Health FSA that adopts a carryover may permit up to \$680 to carry from the prior year without reducing the \$3,400 salary-reduction limit. These indexed amounts are reference values for 2026, not permanent product limits.

<!-- record_id: product.commonfunded.how-commonfunded-improves-the-implementation -->
### How CommonFunded improves the implementation
> Retrieval context: CommonFunded — Why cash-pay routine care matters > How CommonFunded improves the implementation

1. **The funding is integrated with the coverage.** CommonFunded presents the major medical option and CommonFunds as one plan experience. The participant does not receive a high deductible followed by a vague promise that a separate account makes it better; the effective cost-sharing position is calculated and displayed directly.
2. **Experience gains remain with the employer.** CommonFunds availability is a reimbursement promise, not a portable employee-owned asset. Amounts not paid as valid claims remain employer property, and unused availability may expire according to the plan terms.
3. **The benefit is not tied to HDHP enrollment.** A participant does not have to enroll in an HSA-qualified plan to use CommonFunds. The employer must make the other coverage required for excepted-benefit status available, but participant enrollment in one prescribed major medical option is not the source of CommonFunds eligibility. For example, an employer can use our [self-funded MEC plan](https://commoncare.org/products/mec) to satisfy this requirement and pair with CommonFunds.
4. **Carryover does not create portability.** If the employer elects rollover, unused availability can accumulate for the participant while employed without becoming an asset the participant takes at termination.
5. **No individual custodial account is required.** The employer can establish and operate CommonFunds without waiting for every employee to open, fund, or manage a separate account.
6. **The employer captures the funding efficiency.** CommonFunded replaces the employee profit opportunity created by portable HSA assets with an employer experience-gain opportunity, while still paying valid participant claims tax-free.

> [!IMPORTANT]
> CommonCare still loves HSAs. CommonFunded solves a different ownership and implementation problem. An HSA makes unused healthcare dollars the employee’s permanent asset; CommonFunded keeps unused reimbursement dollars with the employer. CommonCare can use either structure—or both—when the economics support it.

---

<!-- record_id: product.commonfunded.pluggable-coverages -->
## Pluggable Coverages
> Retrieval context: CommonFunded — Pluggable Coverages

CommonFunded can operate with multiple underlying coverage structures because CommonFunds is administered as an excepted-benefit companion rather than as the participant’s comprehensive major medical coverage.

<!-- record_id: product.commonfunded.choice-formerly-ichra -->
### CHOICE — formerly ICHRA
> Retrieval context: CommonFunded — Pluggable Coverages > CHOICE — formerly ICHRA

CHOICE allows employees to select the optimal private individual coverage option. This option creates the maximum flexibility for meeting individual needs and takes the employer completely out of the risk-management process for major medical coverage. CommonCare can fully administer a CHOICE arrangement as the CommonFunded coverage option. See our [CHOICE documentation](https://commoncare.org/products/choice) for more details.

CommonCare via the CommonFunded plan structure is able to wrap a CHOICE offering to normalize the premiums and deductible amounts so that employees see a simplified "A, B, C" plan offering with fixed premiums and deductibles (or age-banded if desired). This structure also avoids putting any excess funds in the actual CHOICE HRA to avoid trapping funds to be used or lost on insurance premiums. How much goes into the HRA depends on a few factors:

<!-- record_id: product.commonfunded.rule-how-much-funding-goes-into-the-hra -->
#### Rule: How much funding goes into the HRA?
> Retrieval context: CommonFunded — Pluggable Coverages > CHOICE — formerly ICHRA > Rule: How much funding goes into the HRA?

CHOICE cannot legally be paired with the EBHRA portion of CommonFunds - rather, it replaces it. There are pros and cons to this replacement. The pros are: the limits on the HRA disappear completely. The main con is that the funds are only accessible to an employee enrolled in qualifying coverage (even if not through the ICHRA).

- **Rule 1:** Utilize the maximum FSA portion of CommonFunds first. This is the easiest and least restrictive option. CommonFunds FSA is the bulk of the CommonFunds cap already.
- **Rule 2:** Confirm whether a participant is enrolled in qualifying coverage. A simple affidavit is enough (CommonCare provides this workflow). If they are, the portion of allowance not used for qualifying premiums is available for CommonFunds.

<!-- record_id: product.commonfunded.paying-unreimbursed-premiums-tax-free -->
#### Paying unreimbursed premiums tax-free
> Retrieval context: CommonFunded — Pluggable Coverages > CHOICE — formerly ICHRA > Paying unreimbursed premiums tax-free

Create a section 125 plan for paying unreimbursed CHOICE premiums tax-free (CommonCare return off-exchange options only for this). This arrangement keeps more dollars free for the CommonFunds portion of the plan instead of the more restrictive CHOICE HRA portion.

> Federal law does not permit Section 125 salary reduction to pay premiums for a qualified health plan purchased through an Exchange. [IRS final ICHRA rules](https://www.irs.gov/pub/irs-irbs/irb19-42.pdf)

See the [CHOICE documentation](https://commoncare.org/products/choice) for further details on compliance and affordability of this implementation.

<!-- record_id: product.commonfunded.group-insurance-contracts -->
### Group insurance contracts
> Retrieval context: CommonFunded — Pluggable Coverages > Group insurance contracts

Group insurance may outperform individual coverage when the employer receives favorable rates based on its population or when group contracts offer stronger local networks.

CommonFunded can pair the highest-value group options with CommonFunds and normalize the participant-facing presentation of:

Like with the CHOICE option, it is simple to wrap the insurance options in the CommonFunded structure to normalize employee-facing cost-sharing (deductible, MOOP, etc.) and premiums. No displaying \$10,000 deductibles + some nebulous savings account.

The selection should be driven by the quoted economics, not a presumption that the group or individual market always wins.

<!-- record_id: product.commonfunded.individually-selected-non-employer-sponsored-options -->
### Individually selected, non-employer-sponsored options
> Retrieval context: CommonFunded — Pluggable Coverages > Individually selected, non-employer-sponsored options

Employees may independently choose arrangements that the employer does not sponsor. An employer may facilitate voluntary, employee-paid access—including payroll deduction—when the arrangement is structured to preserve employer neutrality and comply with applicable wage-deduction law.

<!-- record_id: product.commonfunded.what-happens-if-i-let-employees-choose-an-alternative-coverage-option -->
#### What happens if I let employees choose an alternative coverage option?
> Retrieval context: CommonFunded — Pluggable Coverages > Individually selected, non-employer-sponsored options > What happens if I let employees choose an alternative coverage option?

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

<!-- record_id: product.commonfunded.medical-cost-sharing-and-other-alternatives -->
#### Medical cost sharing and other alternatives
> Retrieval context: CommonFunded — Pluggable Coverages > Individually selected, non-employer-sponsored options > Medical cost sharing and other alternatives

Medical cost-sharing programs can offer a substantially lower-cost approach to large medical expenses for participants who understand and accept their limitations. These people need to:

- Be mostly without serious or ongoing pre-existing conditions (health shares will exclude them, it's a big part of how they keep costs down, start with a healthier risk-pool, which should be interesting to a healthy person trying to pay less premiums)
- Consider the federal and state regulations on insurance to be unimportant enough to pick something not regulated as insurance.

Those differences are part of the savings mechanism, not a footnote to it. For participants who affirmatively prefer the model, established cost-sharing organizations may provide a compelling alternative at materially lower monthly cost. They can be approached with care, but there are several good actors doing great work in this space. They publish their financial data and have a user experience that vastly outshines insurance reviews.

CommonCare does not receive a financial advantage from steering participants toward these arrangements. These arrangements don't really want broad population samples being "pushed" into their membership base. CommonCare's role is to present the economics and limitations clearly and support the participant’s election - and make administration a breeze.

See the [Alternatives documentation](https://commoncare.org/products/alternatives).

<!-- record_id: product.commonfunded.marketplace-coverage-with-premium-tax-credits -->
### Marketplace coverage with premium tax credits
> Retrieval context: CommonFunded — Pluggable Coverages > Marketplace coverage with premium tax credits

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

<!-- record_id: product.commonfunded.important-implementation-rules -->
## Important implementation rules
> Retrieval context: CommonFunded — Important implementation rules

The flexibility of CommonFunded comes from coordinating distinct components, not ignoring their boundaries.

#### CommonFunds classification
<!-- record_id: product.commonfunded.important-implementation-rules.commonfunds-classification; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: CommonFunds classification
- Operating rule: Maintain the EBHRA and Health FSA classifications, limits, funding sources, and claims rules separately

#### Individual optimization
<!-- record_id: product.commonfunded.important-implementation-rules.individual-optimization; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: Individual optimization
- Operating rule: Recommend and enroll participants among valid available options; do not alter plan terms arbitrarily for an individual

#### EBHRA availability
<!-- record_id: product.commonfunded.important-implementation-rules.ebhra-availability; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: EBHRA availability
- Operating rule: Apply the same terms to similarly situated individuals, regardless of health factor

#### Health FSA risk
<!-- record_id: product.commonfunded.important-implementation-rules.health-fsa-risk; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: Health FSA risk
- Operating rule: Apply uniform coverage and the governing forfeiture, carryover, and runout provisions

#### Participant-facing normalization
<!-- record_id: product.commonfunded.important-implementation-rules.participant-facing-normalization; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: Participant-facing normalization
- Operating rule: Show effective economics without replacing or contradicting the underlying coverage documents

#### Premium tax credits
<!-- record_id: product.commonfunded.important-implementation-rules.premium-tax-credits; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: Premium tax credits
- Operating rule: Evaluate affordability, minimum value, ICHRA rules, household eligibility, and the actual employer offer

#### Independent alternatives
<!-- record_id: product.commonfunded.important-implementation-rules.independent-alternatives; record_type: table-row -->
- Context: CommonFunded — Important implementation rules
- Design issue: Independent alternatives
- Operating rule: Preserve voluntariness and employer neutrality when the option is not employer sponsored


<!-- record_id: product.commonfunded.core-principle -->
## Core principle
> Retrieval context: CommonFunded — Core principle

> **Use insurance for the risk that needs insurance. Fund routine care directly, cap the employer’s exposure, and optimize the combination for the participant standing in front of you.**

<!-- record_id: product.commonfunded.implementation-and-pricing-nuances -->
## Implementation and pricing nuances
> Retrieval context: CommonFunded — Implementation and pricing nuances

CommonCare provides turn-key tooling for pricing, implementing, and administering this plan structure. There are some critical decisions made in modeling costs in our model worth considering:

<!-- record_id: product.commonfunded.employee-deductible-network-elections -->
### Employee deductible/network elections
> Retrieval context: CommonFunded — Implementation and pricing nuances > Employee deductible/network elections

CommonFunded is designed to work with the existing insurance product landscape. It is not a carrier-designed level-funded arrangement in which a single carrier controls the insurance product, funding account, and participant incentives. Instead, CommonFunded accepts the incentives and cost-sharing rules of the underlying insurance products and applies a consistent funding layer across them.

An important implementation nuance arises when an employee selects an underlying insurance plan that differs from the benchmark plan used to price the CommonFunded arrangement. This is a standard use case in CHOICE and ICHRA programs, but it can also occur when employees live in different geographic markets, require access to different provider networks, or are offered multiple insurance options.

The benchmark price assumes a particular underlying deductible and expected CommonFunds liability. Selecting a plan with a different deductible changes that expected liability:

- A higher underlying deductible creates additional potential exposure and supports a lower deductible-adjusted insurance premium.
- A lower underlying deductible reduces potential exposure and produces a higher deductible-adjusted insurance premium.

This adjustment is separate from any difference in the carriers’ raw premiums. Raw premium differences may reflect network breadth, negotiated provider rates, plan design, carrier administration, geography, or other factors. The deductible adjustment only estimates the expected value associated with the change in deductible exposure.

<!-- record_id: product.commonfunded.deductible-cost-ratios -->
#### Deductible cost ratios
> Retrieval context: CommonFunded — Implementation and pricing nuances > Employee deductible/network elections > Deductible cost ratios

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

<!-- record_id: product.commonfunded.applying-the-adjustment -->
#### Applying the adjustment
> Retrieval context: CommonFunded — Implementation and pricing nuances > Employee deductible/network elections > Applying the adjustment

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

<!-- record_id: product.commonfunded.cost-sharing-nuances -->
### Cost sharing nuances
> Retrieval context: CommonFunded — Implementation and pricing nuances > Cost sharing nuances

The cost-sharing differences between insurance and CommonFunds are too nuanced to model accurately. Things such as:

- Preventive care being insurance-covered with no cost-sharing
- The complexities of insurance coinsurance and co-pays in and out of network
- Drug tiers

Are practically impossible to price into cost simulations in great detail if using genuine claims data and not manufactured data.

Because of this, CommonCare simply assumes the conservative approach for each of these. We exclude no preventive care costs as being "insurance-paid," assume global high coinsurance rates, and assume no special tiers for specialty care or drugs. It is assumed that all of the bills simulated fall through fully to the CommonFunds cost sharing layer.
