---
id: product.choice.vector-store
title: CHOICE — Vector Store Source
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/choice-ichra/human-readable.md
source_commit: fed8062947b6045779a0fea1438b9e1ffcdc6f5f
source_sha256: 1ed9660c30ebf965c9cc361f2e5c7a233ed2f27e0942fd7457b25242d08f8f34
generation_method: deterministic-markdown-conversion
canonical_source: false
last_reviewed: 2026-09-15
---

# CHOICE — Vector Store Source

> Retrieval context: This generated document restructures `plan-structures/choice-ichra/human-readable.md` for semantic retrieval. The human-readable source remains canonical. Substantive edits belong in the source and must be regenerated here.

<!-- record_id: product.choice.choice -->
## CHOICE
> Retrieval context: CHOICE — CHOICE

> **CHOICE is CommonCare’s implementation of an Individual Coverage Health Reimbursement Arrangement (ICHRA): an employer-sponsored structure that lets employees select individual major medical coverage instead of forcing an entire workforce into one insurance contract.**

CHOICE combines:

1. An ICHRA that establishes the employer-sponsored individual-coverage arrangement;
2. CommonCare’s analysis and enrollment experience for comparing individual plans;
3. An optional Section 125 arrangement for paying unreimbursed **off-Exchange** premiums pre-tax; and
4. A flexible employer allowance that can remain available for other qualified health needs instead of being trapped in insurance premium.

The result is genuine participant choice without abandoning employer sponsorship, administration, or tax efficiency.

<!-- record_id: product.choice.at-a-glance -->
## At a glance
> Retrieval context: CHOICE — At a glance

#### Who selects the insurance plan?
<!-- record_id: product.choice.at-a-glance.who-selects-the-insurance-plan; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: Who selects the insurance plan?
- CHOICE approach: The participant, from eligible individual-market options

#### How are plans compared?
<!-- record_id: product.choice.at-a-glance.how-are-plans-compared; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: How are plans compared?
- CHOICE approach: CommonCare ranks total economic performance using realistic multiyear simulations

#### Can personal needs override the ranking?
<!-- record_id: product.choice.at-a-glance.can-personal-needs-override-the-ranking; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: Can personal needs override the ranking?
- CHOICE approach: Yes; the ranking supplies data, not a command

#### How much goes into the ICHRA?
<!-- record_id: product.choice.at-a-glance.how-much-goes-into-the-ichra; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: How much goes into the ICHRA?
- CHOICE approach: Only the amount needed to accomplish the employer’s ICHRA objective—which may be de minimis when affordability treatment is not required

#### Where does the rest of the employer allowance go?
<!-- record_id: product.choice.at-a-glance.where-does-the-rest-of-the-employer-allowance-go; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: Where does the rest of the employer allowance go?
- CHOICE approach: A flex or health-flex structure that preserves broader qualified uses

#### How are unreimbursed premiums paid pre-tax?
<!-- record_id: product.choice.at-a-glance.how-are-unreimbursed-premiums-paid-pre-tax; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: How are unreimbursed premiums paid pre-tax?
- CHOICE approach: Through Section 125 salary reduction for eligible off-Exchange coverage

#### Can Marketplace coverage be used?
<!-- record_id: product.choice.at-a-glance.can-marketplace-coverage-be-used; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: Can Marketplace coverage be used?
- CHOICE approach: An ICHRA can integrate with on- or off-Exchange individual coverage, but Section 125 cannot pay Exchange premiums

#### What happens to premium-tax-credit eligibility?
<!-- record_id: product.choice.at-a-glance.what-happens-to-premium-tax-credit-eligibility; record_type: table-row -->
- Context: CHOICE — At a glance
- Product question: What happens to premium-tax-credit eligibility?
- CHOICE approach: It depends on ICHRA affordability, acceptance, and a valid opt-out


<!-- record_id: product.choice.navigate-this-document -->
## Navigate this document
> Retrieval context: CHOICE — Navigate this document

- [The product concept](#the-product-concept)
- [How CommonCare ranks plans](#how-commoncare-ranks-plans)
- [What the ranking does—and does not—decide](#what-the-ranking-doesand-does-notdecide)
- [The CHOICE funding architecture](#the-choice-funding-architecture)
- [Why CommonCare generally minimizes the ICHRA amount](#why-commoncare-generally-minimizes-the-ichra-amount)
- [Flex credits and health-flex credits](#flex-credits-and-health-flex-credits)
- [A thoughtful word about paternalism](#a-thoughtful-word-about-paternalism)
- [The participant experience](#the-participant-experience)
- [Compliance structure](#compliance-structure)

---

<!-- record_id: product.choice.the-product-concept -->
## The product concept
> Retrieval context: CHOICE — The product concept

Traditional group insurance asks an employer to select a small number of contracts for a population of people with different ages, families, doctors, prescriptions, financial priorities, and expected healthcare needs.

CHOICE changes the employer’s job. Instead of attempting to choose the correct insurance contract for everyone, the employer establishes a compliant individual-coverage benefit and gives each participant the tools and funding structure needed to select personally suitable coverage.

This is not merely a larger insurance menu. CommonCare unifies:

- Individual-market plan data;
- Employer funding;
- Participant premium responsibility;
- CommonFunds or other companion benefits;
- Section 125 elections when available;
- Enrollment;
- Coverage substantiation; and
- Ongoing administration.

The complexity remains in the system instead of becoming the participant’s homework.

---

<!-- record_id: product.choice.how-commoncare-ranks-plans -->
## How CommonCare ranks plans
> Retrieval context: CHOICE — How CommonCare ranks plans

CommonCare does not rank plans by deductible, metal label, carrier familiarity, or how much healthcare spending is routed through insurance.

It simulates economic outcomes.

<!-- record_id: product.choice.economic-analysis -->
### Economic analysis
> Retrieval context: CHOICE — How CommonCare ranks plans > Economic analysis

For each available plan, CommonCare evaluates factors such as:

- Annual premium;
- Deductible and service-specific cost sharing;
- Coinsurance;
- Maximum out-of-pocket exposure;
- Household structure;
- Negotiated or expected claims costs;
- Prescription coverage;
- Network consequences;
- Known healthcare needs; and
- Performance across many possible claim years.

The basic economic question is:

> **Across realistic outcomes, how much does this plan cause the participant and employer to spend?**

CommonCare first identifies plans that are economically dominated—plans that cost more across the relevant claims curve without producing a corresponding economic advantage. Probability analysis is useful only when the plans exchange the lead at different levels or types of healthcare use.

<!-- record_id: product.choice.why-multiyear-simulation-matters -->
### Why multiyear simulation matters
> Retrieval context: CHOICE — How CommonCare ranks plans > Why multiyear simulation matters

Trying to predict one person’s next twelve months encourages defensive decisions around whatever event is easiest to imagine. Multiyear simulation asks a more stable question: across a realistic range of healthcare years, which option repeatedly produces the best result?

The ranking can therefore identify when:

- Additional premium costs more than the largest reduction in cost sharing it can purchase;
- A lower-deductible plan never becomes less expensive, even at the maximum out-of-pocket limit;
- A specific prescription or network changes the result;
- A known high-cost treatment makes a different plan optimal; or
- Two plans are close enough that subjective preference should control.

---

<!-- record_id: product.choice.what-the-ranking-does-and-does-not-decide -->
## What the ranking does—and does not—decide
> Retrieval context: CHOICE — What the ranking does—and does not—decide

The ranking does not tell a participant what to think about subjective issues. Its value is that it prevents subjective decisions from being built on bad math.

#### Scrupulous cost analysis
<!-- record_id: product.choice.what-the-ranking-does-and-does-not-decide.scrupulous-cost-analysis; record_type: table-row -->
- Context: CHOICE — What the ranking does—and does not—decide
- CommonCare supplies: Scrupulous cost analysis
- The participant decides: How much they value a particular doctor or hospital

#### Expected and worst-case economic outcomes
<!-- record_id: product.choice.what-the-ranking-does-and-does-not-decide.expected-and-worst-case-economic-outcomes; record_type: table-row -->
- Context: CHOICE — What the ranking does—and does not—decide
- CommonCare supplies: Expected and worst-case economic outcomes
- The participant decides: Whether a narrow network feels workable

#### Break-even points
<!-- record_id: product.choice.what-the-ranking-does-and-does-not-decide.break-even-points; record_type: table-row -->
- Context: CHOICE — What the ranking does—and does not—decide
- CommonCare supplies: Break-even points
- The participant decides: How much uncertainty they are comfortable accepting

#### Prescription and provider compatibility
<!-- record_id: product.choice.what-the-ranking-does-and-does-not-decide.prescription-and-provider-compatibility; record_type: table-row -->
- Context: CHOICE — What the ranking does—and does not—decide
- CommonCare supplies: Prescription and provider compatibility
- The participant decides: Whether convenience justifies a measurable additional cost

#### Identification of dominated plans
<!-- record_id: product.choice.what-the-ranking-does-and-does-not-decide.identification-of-dominated-plans; record_type: table-row -->
- Context: CHOICE — What the ranking does—and does not—decide
- CommonCare supplies: Identification of dominated plans
- The participant decides: Whether a personal preference is worth overriding the ranking


A participant may override the recommendation. The interface should make the consequence legible:

> “This option is projected to cost \$2,400 more per year, but it includes the provider network you selected.”

That is an informed subjective decision. CommonCare’s job is not to erase preference; it is to give preference an honest price.

<!-- record_id: product.choice.known-needs-can-appropriately-change-the-result -->
### Known needs can appropriately change the result
> Retrieval context: CHOICE — What the ranking does—and does not—decide > Known needs can appropriately change the result

The general ranking is not a demand that every employee choose the same design. A participant with a known specialty drug, scheduled procedure, established specialist, or predictable high-cost treatment may rationally select an option that ranks poorly for the general population.

Known problems are often easier to model than unknown ones. CHOICE lets the participant solve the known problem without forcing the employer to build the entire workforce’s insurance around it.

---

<!-- record_id: product.choice.the-choice-funding-architecture -->
## The CHOICE funding architecture
> Retrieval context: CHOICE — The CHOICE funding architecture

CHOICE separates four functions that are often collapsed into one employer contribution:

#### ICHRA amount
<!-- record_id: product.choice.the-choice-funding-architecture.ichra-amount; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture
- Funding component: ICHRA amount
- Purpose: Establish the employer-sponsored individual-coverage reimbursement and, when intended, support formal ICHRA affordability

#### Health-flex credit
<!-- record_id: product.choice.the-choice-funding-architecture.health-flex-credit; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture
- Funding component: Health-flex credit
- Purpose: Restrict employer dollars to permitted medical care and qualified health options while preserving broader healthcare uses

#### General flex credit
<!-- record_id: product.choice.the-choice-funding-architecture.general-flex-credit; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture
- Funding component: General flex credit
- Purpose: Preserve additional participant choice, including any permitted cash or taxable options under the employer’s design

#### Employee Section 125 election
<!-- record_id: product.choice.the-choice-funding-architecture.employee-section-125-election; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture
- Funding component: Employee Section 125 election
- Purpose: Pay the participant’s remaining eligible off-Exchange premium pre-tax


These components can appear together in one enrollment and payroll experience while retaining their separate legal classifications.

<!-- record_id: product.choice.a-simple-illustration -->
### A simple illustration
> Retrieval context: CHOICE — The CHOICE funding architecture > A simple illustration

Assume the employer makes \$600 per month available for total health compensation and the participant selects an off-Exchange individual plan costing \$475.

One possible CHOICE design is:

#### ICHRA
<!-- record_id: product.choice.the-choice-funding-architecture-a-simple-illustration.ichra; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture > A simple illustration
- Component: ICHRA
- Monthly amount: \$25
- Treatment: Employer reimbursement conditioned on qualifying individual coverage

#### Flex allowance
<!-- record_id: product.choice.the-choice-funding-architecture-a-simple-illustration.flex-allowance; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture > A simple illustration
- Component: Flex allowance
- Monthly amount: \$575
- Treatment: Available under the applicable cafeteria-plan terms, including any cashable election

#### Premium remaining after ICHRA
<!-- record_id: product.choice.the-choice-funding-architecture-a-simple-illustration.premium-remaining-after-ichra; record_type: table-row -->
- Context: CHOICE — The CHOICE funding architecture > A simple illustration
- Component: Premium remaining after ICHRA
- Monthly amount: \$450
- Treatment: Paid through the Section 125 arrangement because the participant is covered by the ICHRA and the policy is off-Exchange


The employer has not forced \$600 into an account useful only to someone buying individual insurance. The participant can use the broader allowance according to its actual terms.

---

<!-- record_id: product.choice.why-commoncare-generally-minimizes-the-ichra-amount -->
## Why CommonCare generally minimizes the ICHRA amount
> Retrieval context: CHOICE — Why CommonCare generally minimizes the ICHRA amount

Putting money into an ICHRA creates a specific incentive:

> **Enroll in qualifying individual coverage or lose access to the ICHRA reimbursement.**

That incentive is sometimes useful. It should not be treated as automatically useful.

If an employee has access to a spouse’s plan, Medicare, another employer plan, a medical cost-sharing arrangement, or another personally preferred solution, a large ICHRA contribution can force an artificial choice: buy an individual ACA policy or forfeit a meaningful portion of employer-provided compensation.

That does not necessarily serve the employer. It may:

- Push employees toward insurance they would not otherwise choose;
- Trap employer dollars in premium rather than healthcare;
- Penalize employees who already have suitable coverage elsewhere;
- Reduce the usefulness of the employer’s compensation package; and
- Create resentment without improving health or financial security.

For those reasons, the default CommonCare design places only the amount needed for the intended ICHRA function inside the ICHRA. The remaining employer allowance stays in the most flexible compliant category available.

<!-- record_id: product.choice.when-more-money-belongs-in-the-ichra -->
### When more money belongs in the ICHRA
> Retrieval context: CHOICE — Why CommonCare generally minimizes the ICHRA amount > When more money belongs in the ICHRA

A larger ICHRA amount is appropriate when the employer specifically intends to:

- Make individual coverage affordable under the ICHRA affordability formula;
- Satisfy the employer’s applicable Section 4980H strategy;
- Guarantee that a defined amount is available only after the participant substantiates individual coverage; or
- Reimburse individual insurance premium as the employer’s central benefit promise.

Formal ICHRA affordability begins with the applicable lowest-cost silver premium minus the monthly self-only ICHRA amount. A qualifying employer health-flex contribution may then reduce the employee's required contribution under the generally applicable cafeteria-plan rule discussed below. [IRS ICHRA affordability rule](https://www.irs.gov/irb/2022-45_IRB)

The design question is not “How much can we put in the ICHRA?” It is “What outcome requires this dollar to be in the ICHRA?”

---

<!-- record_id: product.choice.flex-credits-and-health-flex-credits -->
## Flex credits and health-flex credits
> Retrieval context: CHOICE — Flex credits and health-flex credits

Keeping funds outside the ICHRA does not require making them unrestricted cash.

<!-- record_id: product.choice.health-flex-credit -->
### Health-flex credit
> Retrieval context: CHOICE — Flex credits and health-flex credits > Health-flex credit

A health-flex contribution is an employer contribution made available under a Section 125 cafeteria plan that:

1. Cannot be received as cash or another taxable benefit;
2. May be used to purchase minimum essential coverage; and
3. May be used only for medical care under Section 213.

This is not employee salary reduction. It is employer money that the employee cannot redirect to taxable compensation or a nonmedical benefit. The cafeteria plan may separately allow the employee to use salary reduction for any eligible premium remaining after employer contributions.

<!-- record_id: product.choice.the-operative-affordability-rule -->
#### The operative affordability rule
> Retrieval context: CHOICE — Flex credits and health-flex credits > Health-flex credit > The operative affordability rule

Treasury Regulation §1.36B-2(c)(3)(v)(A)(6) expressly provides:

> **Employer contributions to cafeteria plans.** Amounts made available for the current plan year under a cafeteria plan, within the meaning of section 125, reduce an employee's or a related individual's required contribution if—
>
> 1. The employee may not opt to receive the amount as a taxable benefit;
> 2. The employee may use the amount to pay for minimum essential coverage; and
> 3. The employee may use the amount exclusively to pay for medical care, within the meaning of section 213.

[26 CFR §1.36B-2(c)(3)(v)(A)(6), current CFR](https://www.govinfo.gov/content/pkg/CFR-2025-title26-vol1/pdf/CFR-2025-title26-vol1.pdf)

IRS Notice 2015-87 calls an amount meeting these conditions a **health flex contribution**. The IRS explains that it reduces the employee's required contribution because the employee cannot gain another economic benefit by declining to apply it toward health coverage. For Section 4980H(b) and Form 1095-C reporting, the contribution is treated as made ratably over the period to which it relates. [IRS Notice 2015-87, Q&A 8](https://www.irs.gov/irb/2015-52_IRB)

<!-- record_id: product.choice.how-this-works-with-the-ichra-calculation -->
#### How this works with the ICHRA calculation
> Retrieval context: CHOICE — Flex credits and health-flex credits > Health-flex credit > How this works with the ICHRA calculation

The later ICHRA rules add a specific first-stage calculation. Under §1.36B-2(c)(5), the employee's **required HRA contribution** begins as:

```text
Applicable lowest-cost silver self-only premium
− monthly self-only ICHRA amount
= required HRA contribution
```

The ICHRA provisions determine the benchmark plan, applicable premium, monthly ICHRA amount, treatment of carryovers, and affordability threshold. They do not expressly repeal the cafeteria-plan rule, create an ICHRA exception to it, or direct plans to disregard qualifying health-flex contributions.

The provisions therefore operate together:

```text
Applicable lowest-cost silver self-only premium
− monthly self-only ICHRA amount
= required HRA contribution under §1.36B-2(c)(5)

Required HRA contribution
− monthly qualifying health-flex contribution
= employee required contribution after §1.36B-2(c)(3)(v)(A)(6)
```

The final amount cannot be less than zero.

This treatment also matches the permitted payment structure. The final ICHRA rules expressly allow an employee covered by an ICHRA to pay the balance of an **off-Exchange** individual premium through the employer's cafeteria plan, subject to the applicable Section 125 rules. [2019 final ICHRA rules, salary-reduction arrangements](https://www.irs.gov/irb/2019-28_IRB)

<!-- record_id: product.choice.what-later-guidance-does-and-does-not-say -->
#### What later guidance does—and does not—say
> Retrieval context: CHOICE — Flex credits and health-flex credits > Health-flex credit > What later guidance does—and does not—say

The current Form 1095-C instructions recognize that cafeteria-plan contributions can affect the Employee Required Contribution and direct employers to §1.36B-2(c)(3)(v)(A). They then explain the special LCSP-minus-ICHRA calculation for an individual coverage HRA.

The instructions do **not** say that:

- Section 1.36B-2(c)(3)(v)(A)(6) does not apply to an ICHRA;
- A qualifying health-flex contribution must be disregarded;
- The required HRA contribution may never receive another expressly applicable adjustment; or
- Only dollars formally contributed to the ICHRA can reduce the employee's required contribution.

[IRS Instructions for Forms 1094-C and 1095-C](https://www.irs.gov/instructions/i109495c)

> [!NOTE]
> The IRS has not published an example expressly applying a health-flex contribution to an ICHRA affordability calculation. It has likewise published no rule expressly excluding ICHRAs from the existing health-flex provision. CommonCare applies the two operative provisions together: §1.36B-2(c)(5) establishes the required HRA contribution, and §1.36B-2(c)(3)(v)(A)(6) reduces the employee's required contribution by a qualifying health-flex contribution.

<!-- record_id: product.choice.conditions-for-commoncare-treatment -->
#### Conditions for CommonCare treatment
> Retrieval context: CHOICE — Flex credits and health-flex credits > Health-flex credit > Conditions for CommonCare treatment

CommonCare treats an employer allowance as reducing the employee's required contribution only when the governing documents and administration establish that:

- The amount is an employer contribution made available under a written Section 125 cafeteria plan;
- The employee cannot receive it as cash or another taxable benefit;
- It may be used to purchase minimum essential coverage;
- It may be used exclusively for Section 213 medical care;
- The employee can apply it to the unreimbursed premium for eligible off-Exchange coverage;
- The contribution is allocated to the months for which it is available.

A credit fails this treatment if it is cashable or can be used for a nonmedical benefit such as dependent care, group-term life insurance, or another benefit outside Section 213.

This lets an employer insist that the contribution remain health-related without requiring every dollar to be spent on one individual insurance premium.

Depending on the governing benefit structure, the participant may be able to use the funding for:

- Eligible employer-sponsored health options;
- Premiums expressly permitted under the governing arrangement;
- CommonFunds;
- Qualified out-of-pocket medical expenses; or
- Another employer-provided qualified health option.

The ICHRA and health-flex credit remain legally distinct even when both reduce the employee's required contribution. The ICHRA creates the individual-coverage arrangement; the health-flex credit supplies an additional employer contribution through the cafeteria plan. Their plan documents, substantiation, payroll treatment, eligible uses, and reporting must follow their respective rules.

<!-- record_id: product.choice.general-flex-credit -->
### General flex credit
> Retrieval context: CHOICE — Flex credits and health-flex credits > General flex credit

A general flex credit can provide still broader choice, potentially including taxable or non-health options. When an employee can take a dollar as cash or another taxable benefit and instead elects it into a Health FSA, that amount is treated as employee salary reduction for the relevant Section 125 and Health FSA rules.

CommonCare classifies each dollar before applying account limits or tax treatment. The participant interface may be unified; the underlying classifications are not.

---

<!-- record_id: product.choice.a-thoughtful-word-about-paternalism -->
## A thoughtful word about paternalism
> Retrieval context: CHOICE — A thoughtful word about paternalism

An employer may reasonably want health-benefit dollars used for healthcare. The impulse can come from care, fiduciary seriousness, recruiting goals, workforce stability, ACA obligations, tax efficiency, or employee expectations.

But the reflex deserves examination because “spend more on health insurance” and “improve employee health” are not synonymous.

An employee might improve health more by:

- Sleeping consistently;
- Buying healthier food;
- Exercising;
- Reducing financial stress;
- Repairing unsafe housing;
- Paying for transportation to work or care;
- Taking unpaid time to recover; or
- Choosing direct care that insurance does not handle efficiently.

Employers rarely create equally forceful incentives around those decisions. Health insurance sits at a uniquely loaded crossroads of legal mandates, tax preference, employee expectations, risk aversion, recruiting, and the employer’s desire to increase compensation without increasing taxable wages.

None of that makes a health-only contribution wrong. It makes clarity important.

Before restricting a large allowance, the employer should be able to say what it wants the restriction to accomplish:

#### Ensure access to major medical coverage
<!-- record_id: product.choice.a-thoughtful-word-about-paternalism.ensure-access-to-major-medical-coverage; record_type: table-row -->
- Context: CHOICE — A thoughtful word about paternalism
- Intended outcome: Ensure access to major medical coverage
- Question to scrutinize: Does the incentive actually increase suitable enrollment, or merely punish employees with other coverage?

#### Improve employee health
<!-- record_id: product.choice.a-thoughtful-word-about-paternalism.improve-employee-health; record_type: table-row -->
- Context: CHOICE — A thoughtful word about paternalism
- Intended outcome: Improve employee health
- Question to scrutinize: Is buying additional insurance the intervention most likely to produce that result?

#### Protect employees from large bills
<!-- record_id: product.choice.a-thoughtful-word-about-paternalism.protect-employees-from-large-bills; record_type: table-row -->
- Context: CHOICE — A thoughtful word about paternalism
- Intended outcome: Protect employees from large bills
- Question to scrutinize: Does the selected coverage meaningfully reduce maximum exposure and provider risk?

#### Satisfy ACA affordability
<!-- record_id: product.choice.a-thoughtful-word-about-paternalism.satisfy-aca-affordability; record_type: table-row -->
- Context: CHOICE — A thoughtful word about paternalism
- Intended outcome: Satisfy ACA affordability
- Question to scrutinize: Is the amount placed in the vehicle that receives credit under the applicable affordability rule?

#### Deliver tax-efficient compensation
<!-- record_id: product.choice.a-thoughtful-word-about-paternalism.deliver-tax-efficient-compensation; record_type: table-row -->
- Context: CHOICE — A thoughtful word about paternalism
- Intended outcome: Deliver tax-efficient compensation
- Question to scrutinize: Does the restriction preserve enough utility to make the tax advantage worthwhile?

#### Meet employee expectations
<!-- record_id: product.choice.a-thoughtful-word-about-paternalism.meet-employee-expectations; record_type: table-row -->
- Context: CHOICE — A thoughtful word about paternalism
- Intended outcome: Meet employee expectations
- Question to scrutinize: Are those expectations informed by total economics or by deductible-focused insurance marketing?


When healthcare, compensation, taxes, and legal complexity are intertwined, vague good intentions are expensive. State the desired result clearly, then test whether the funding restriction actually delivers it.

---

<!-- record_id: product.choice.the-participant-experience -->
## The participant experience
> Retrieval context: CHOICE — The participant experience

CHOICE should feel like selecting among understandable employer plan options—not shopping alone through an unfiltered insurance marketplace.

<!-- record_id: product.choice.what-the-participant-sees -->
### What the participant sees
> Retrieval context: CHOICE — The participant experience > What the participant sees

1. Available individual coverage options;
2. CommonCare’s economic ranking;
3. Known provider and prescription compatibility;
4. Total annual premium and employer funding;
5. Effective deductible and maximum exposure after companion benefits;
6. The cost of overriding the recommendation;
7. The remaining flexible health allowance; and
8. One enrollment and payroll election flow.

<!-- record_id: product.choice.what-commoncare-administers-behind-the-experience -->
### What CommonCare administers behind the experience
> Retrieval context: CHOICE — The participant experience > What CommonCare administers behind the experience

- ICHRA eligibility and class rules;
- Individual-coverage substantiation;
- Employer reimbursement;
- Section 125 elections for eligible off-Exchange premium;
- Flex and health-flex classifications;
- CommonFunds integration;
- Opt-out administration;
- Required notices;
- Affordability analysis when applicable; and
- Employer reporting.

<!-- record_id: product.choice.a-recommendation-should-be-explainable -->
### A recommendation should be explainable
> Retrieval context: CHOICE — The participant experience > A recommendation should be explainable

A useful recommendation is not “Plan A is best.” It is:

> “Plan A is projected to cost the least across the modeled claims range. Plan B costs \$1,800 more annually but includes your current specialist. Plan C is economically dominated by Plan A under the modeled contract terms.”

The participant retains the decision. CommonCare makes the tradeoff visible.

---

<!-- record_id: product.choice.compliance-structure -->
## Compliance structure
> Retrieval context: CHOICE — Compliance structure

This product document explains the CHOICE design. The separate ICHRA compliance module governs detailed implementation.

<!-- record_id: product.choice.core-ichra-requirements -->
### Core ICHRA requirements
> Retrieval context: CHOICE — Compliance structure > Core ICHRA requirements

#### Individual coverage
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.individual-coverage; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Individual coverage
- CHOICE implementation: The participant must substantiate qualifying individual coverage or Medicare for each covered period

#### Employer funding
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.employer-funding; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Employer funding
- CHOICE implementation: The ICHRA is employer-funded; employee salary reduction cannot fund the ICHRA itself

#### Same-class plan choice
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.same-class-plan-choice; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Same-class plan choice
- CHOICE implementation: An employer generally cannot offer both a traditional group plan and an ICHRA to the same employee class

#### Class design
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.class-design; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Class design
- CHOICE implementation: Use permitted employee classes and applicable minimum-class-size rules

#### Same terms
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.same-terms; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Same terms
- CHOICE implementation: Offer the ICHRA on the same terms within a class, subject to permitted age and family-size variation

#### Written documents
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.written-documents; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Written documents
- CHOICE implementation: Maintain the governing plan document and required participant materials

#### Notice
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.notice; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Notice
- CHOICE implementation: Provide the required ICHRA notice generally 90 days before the plan year or when a newly eligible employee can timely act

#### Opt-out
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.opt-out; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Opt-out
- CHOICE implementation: Permit the required annual and termination opt-outs

#### Claims
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.claims; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Claims
- CHOICE implementation: Substantiate coverage and reimbursable expenses before payment

#### Reporting
<!-- record_id: product.choice.compliance-structure-core-ichra-requirements.reporting; record_type: table-row -->
- Context: CHOICE — Compliance structure > Core ICHRA requirements
- Requirement: Reporting
- CHOICE implementation: Complete applicable Forms 1094-C and 1095-C and other required reporting


<!-- record_id: product.choice.section-125-boundary -->
### Section 125 boundary
> Retrieval context: CHOICE — Compliance structure > Section 125 boundary

An employee may use Section 125 salary reduction to pay the portion of an **off-Exchange** individual premium not reimbursed by the ICHRA. Section 125 cannot pay premiums for a qualified health plan purchased through an Exchange. [DOL HRA FAQs, Q9](https://www.dol.gov/sites/default/files/ebsa/about-ebsa/our-activities/resource-center/faqs/health-reimbursement-arrangements.pdf)

That is why CommonCare’s integrated CHOICE enrollment generally presents off-Exchange coverage when pre-tax payment of the participant remainder is part of the design.

<!-- record_id: product.choice.premium-tax-credits -->
### Premium tax credits
> Retrieval context: CHOICE — Compliance structure > Premium tax credits

#### Affordable
<!-- record_id: product.choice.compliance-structure-premium-tax-credits.affordable; record_type: table-row -->
- Context: CHOICE — Compliance structure > Premium tax credits
- ICHRA offer: Affordable
- Participant action: Accepts or opts out
- Potential PTC result: No premium tax credit

#### Unaffordable
<!-- record_id: product.choice.compliance-structure-premium-tax-credits.unaffordable; record_type: table-row -->
- Context: CHOICE — Compliance structure > Premium tax credits
- ICHRA offer: Unaffordable
- Participant action: Accepts ICHRA
- Potential PTC result: No premium tax credit

#### Unaffordable
<!-- record_id: product.choice.compliance-structure-premium-tax-credits.unaffordable-2; record_type: table-row -->
- Context: CHOICE — Compliance structure > Premium tax credits
- ICHRA offer: Unaffordable
- Participant action: Opts out and otherwise qualifies
- Potential PTC result: May receive premium tax credit


An ICHRA offer therefore affects more than reimbursement. The allowance, affordability calculation, notice, and opt-out process must be coordinated. [IRS premium-tax-credit guidance](https://www.irs.gov/affordable-care-act/individuals-and-families/questions-and-answers-on-the-premium-tax-credit)

<!-- record_id: product.choice.ale-affordability -->
### ALE affordability
> Retrieval context: CHOICE — Compliance structure > ALE affordability

For an applicable large employer, ICHRA affordability is generally evaluated using:

```text
Applicable lowest-cost silver self-only premium
− monthly self-only ICHRA amount
= required HRA contribution

Required HRA contribution
− qualifying monthly health-flex contribution
= employee required contribution
```

The resulting employee contribution is tested against the applicable affordability percentage and permitted employer safe harbor. For Section 4980H(b) and Form 1095-C purposes, IRS Notice 2015-87 treats a qualifying health-flex contribution as made ratably for each month of the period to which it relates.

An affordable ICHRA is treated as providing minimum value for Section 4980H purposes. A separate allowance affects affordability only to the extent it satisfies every condition for a health-flex contribution. A cashable or nonmedical flex credit does not reduce the employee's required contribution.

---

<!-- record_id: product.choice.core-principle -->
## Core principle
> Retrieval context: CHOICE — Core principle

> **CHOICE separates analysis from preference and employer sponsorship from unnecessary restriction. Put each dollar in the vehicle that accomplishes its actual purpose, show participants the real economics, and let informed individual needs control the final selection.**
