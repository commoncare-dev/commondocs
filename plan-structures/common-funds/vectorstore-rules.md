---
id: product.commonfunds.rules.vector-store
title: CommonFunds — Rules and Calculation Specification
kind: vector-store-source
schema_version: "1.0"
source_document: plan-structures/common-funds/human-readable.md
source_commit: 8fc7e4008f0c686d96361a2028456ce9c5bcd3db
source_sha256: 1fde57cbac07e379e04f59defc70c054b5c72a1b611ae0275b8db058278556f9
generation_method: deterministic-commonfunds-split-conversion
canonical_source: false
scope: rules-and-calculation-specification
last_reviewed: unknown
---

# CommonFunds — Rules and Calculation Specification

> Retrieval context: This generated document is the rules-and-calculation-specification retrieval view of `plan-structures/common-funds/human-readable.md`. The human-readable source remains canonical. Substantive edits belong in that source and must be regenerated here.

<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit -->
## 1. Classify the dollar before applying a limit
> Retrieval context: CommonFunds — 1. Classify the dollar before applying a limit

Every CommonFunds dollar must be classified according to:

1. Its funding source;
2. The governing plan document;
3. Its applicable tax treatment; and
4. The regulations governing the benefit component.

The product name and displayed balance do not determine classification.

<!-- record_id: product.commonfunds.rules.vector-store.the-classification-rule -->
### The classification rule
> Retrieval context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule

#### Genuinely employer-only and unavailable as cash or another taxable benefit on the excepted pathway
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.genuinely-employer-only-and-unavailable-as-cash-or-another-taxable-benef; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Genuinely employer-only and unavailable as cash or another taxable benefit on the excepted pathway
- CommonFunds treatment: Allocate to the EBHRA first, up to the applicable annual EBHRA limit

#### Genuinely employer-only amount established under CHOICE/ICHRA
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.genuinely-employer-only-amount-established-under-choice-ichra; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Genuinely employer-only amount established under CHOICE/ICHRA
- CommonFunds treatment: Keep within the ICHRA; any balance remaining after premium reimbursement may fund eligible nonpremium expenses if the ICHRA document permits them

#### Available as cash or another taxable benefit and elected into the Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.available-as-cash-or-another-taxable-benefit-and-elected-into-the-health; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Available as cash or another taxable benefit and elected into the Health FSA
- CommonFunds treatment: Treat as employee salary reduction; it consumes the Section 125(i) Health FSA limit

#### Direct employee payroll election into the Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.direct-employee-payroll-election-into-the-health-fsa; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Direct employee payroll election into the Health FSA
- CommonFunds treatment: Treat as employee salary reduction

#### Employer-only amount remaining after the EBHRA is filled
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.employer-only-amount-remaining-after-the-ebhra-is-filled; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Employer-only amount remaining after the EBHRA is filled
- CommonFunds treatment: May be allocated to the Health FSA as an employer contribution, but only within the excepted-benefit maximum-benefit test and the plan documents

#### Cashable amount elected for eligible premiums
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.cashable-amount-elected-for-eligible-premiums; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Cashable amount elected for eligible premiums
- CommonFunds treatment: May be a Section 125 salary reduction amount, but does not consume the separate Section 125(i) Health FSA limit

#### Cashable amount elected as wages
<!-- record_id: product.commonfunds.rules.vector-store.1-classify-the-dollar-before-applying-a-limit-the-classification-rule.cashable-amount-elected-as-wages; record_type: table-row -->
- Context: CommonFunds — 1. Classify the dollar before applying a limit > The classification rule
- Dollar: Cashable amount elected as wages
- CommonFunds treatment: Taxable compensation


The decisive question is not who originally budgeted the money. It is whether the employee can elect cash or another taxable benefit and what the employee actually elects.

An employer credit elected into the Health FSA is treated as salary reduction when the employee could have taken it as cash or another taxable benefit. Calling it an “employer allowance,” “flex credit,” or “contribution” does not change that result.

A choice solely among employer-provided nontaxable health benefits, with no cash or taxable option, is not by itself a Section 125 election.

<!-- record_id: product.commonfunds.rules.vector-store.the-primary-home-for-employer-only-dollars -->
### The primary home for employer-only dollars
> Retrieval context: CommonFunds — 1. Classify the dollar before applying a limit > The primary home for employer-only dollars

On the excepted pathway, the default position for a genuinely employer-only, noncashable health allowance is the EBHRA until the applicable annual limit is reached. This gives the employer cleaner and more flexible control over the funds.

After the EBHRA is filled, employer-only amounts may flow into the Health FSA only to the extent permitted by the Health FSA excepted-benefit rules and governing documents.

On the ICHRA pathway, the EBHRA allocation is zero. The ICHRA amount is established in advance under the governing plan terms. When the employee accepts the ICHRA and maintains qualifying coverage, any amount remaining after premium reimbursement can serve as the CommonFunds primary layer for eligible nonpremium expenses—but only when those expenses are reimbursable under the ICHRA document.

---

<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine -->
## 2. CommonFunds calculation engine
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine

The calculation has two separate jobs:

1. **Plan-year allocation:** classify each dollar and assign it to the benefit component that legally governs it.
2. **Runtime availability:** after enrollment, premiums, and claims occur, calculate how much each component can still reimburse.

Do not combine these jobs. The ICHRA amount is established by the plan before claims occur. The portion not used for individual premiums is a remaining ICHRA balance—not a new contribution created later by the calculation.

<!-- record_id: product.commonfunds.rules.vector-store.the-two-benefit-pathways -->
### The two benefit pathways
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > The two benefit pathways

Every employee class follows exactly one primary account pathway:

#### excepted
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-the-two-benefit-pathways.excepted; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > The two benefit pathways
- `benefit_path`: `excepted`
- Primary employer account: EBHRA
- EBHRA treatment: EBHRA may be funded within its indexed limit

#### ichra
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-the-two-benefit-pathways.ichra; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > The two benefit pathways
- `benefit_path`: `ichra`
- Primary employer account: CHOICE/ICHRA
- EBHRA treatment: EBHRA capacity is zero for every employee offered the ICHRA, including an employee who opts out


The Health FSA is calculated separately. An ICHRA may serve as the non-excepted group coverage that must be made available for the Health FSA to qualify as an excepted benefit.

> [!IMPORTANT]
> The pathway is determined by what the employer offers to the employee's class—not by whether one employee accepts the ICHRA. An employee cannot unlock EBHRA funding merely by opting out of the ICHRA.

<!-- record_id: product.commonfunds.rules.vector-store.normalized-input-schema -->
### Normalized input schema
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema

Use annual plan-year amounts. Every value is an argument supplied to the calculation unless it appears later in the output table.

<!-- record_id: product.commonfunds.rules.vector-store.a-plan-structure -->
#### A. Plan structure
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > A. Plan structure

#### benefitpath
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-a-plan-structur.benefitpath; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > A. Plan structure
- Input: `benefit_path`
- Type: `"excepted"
- Meaning: "ichra"`

#### ichraparticipation
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-a-plan-structur.ichraparticipation; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > A. Plan structure
- Input: `ichra_participation`
- Type: `"accepted"
- Meaning: "opted_out"

#### ichracoversnonpremiumexpenses
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-a-plan-structur.ichracoversnonpremiumexpenses; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > A. Plan structure
- Input: `ichra_covers_nonpremium_expenses`
- Type: Boolean
- Meaning: Whether the ICHRA document permits reimbursement of eligible §213(d) expenses beyond premiums


<!-- record_id: product.commonfunds.rules.vector-store.b-employer-and-employee-dollars -->
#### B. Employer and employee dollars
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars

#### employernoncashablebudget
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.employernoncashablebudget; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `employer_noncashable_budget`
- Meaning: Total employer-only amount available for allocation; cannot be taken as cash or another taxable benefit

#### cashableflexcredit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.cashableflexcredit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `cashable_flex_credit`
- Meaning: Employer flex amount the employee may receive as cash or another taxable benefit

#### cashableflextofsa
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.cashableflextofsa; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `cashable_flex_to_fsa`
- Meaning: Cashable flex credit elected into the Health FSA

#### cashableflextopremiums
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.cashableflextopremiums; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `cashable_flex_to_premiums`
- Meaning: Cashable flex credit elected for premiums permitted under Section 125

#### cashableflextowages
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.cashableflextowages; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `cashable_flex_to_wages`
- Meaning: Cashable flex credit elected as taxable compensation

#### cashableflextoother
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.cashableflextoother; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `cashable_flex_to_other`
- Meaning: Cashable flex credit directed to another permitted cashable benefit

#### directemployeefsaelection
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-b-employer-and-.directemployeefsaelection; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > B. Employer and employee dollars
- Input: `direct_employee_fsa_election`
- Meaning: Additional employee salary reduction elected into the Health FSA


`employer_noncashable_budget` and `cashable_flex_credit` are separate sources. This eliminates the former ambiguity over whether `byCoverage` was inside or outside `allowance_total`.

<!-- record_id: product.commonfunds.rules.vector-store.c-primary-account-settings -->
#### C. Primary account settings
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > C. Primary account settings

#### ebhralimit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-c-primary-accou.ebhralimit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > C. Primary account settings
- Input: `ebhra_limit`
- Applies when: `excepted`
- Meaning: Indexed maximum newly available under the EBHRA

#### existingebhranewlyavailable
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-c-primary-accou.existingebhranewlyavailable; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > C. Primary account settings
- Input: `existing_ebhra_newly_available`
- Applies when: `excepted`
- Meaning: EBHRA amount already made available from another allocation source

#### ichranewlyavailable
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-c-primary-accou.ichranewlyavailable; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > C. Primary account settings
- Input: `ichra_newly_available`
- Applies when: `ichra`
- Meaning: Amount established under the ICHRA for the plan year


`ichra_newly_available` is an input fixed by the governing ICHRA terms. It is not calculated from unused flex dollars after enrollment.

<!-- record_id: product.commonfunds.rules.vector-store.d-health-fsa-settings -->
#### D. Health FSA settings
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > D. Health FSA settings

#### fsasalaryreductionlimit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-d-health-fsa-se.fsasalaryreductionlimit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > D. Health FSA settings
- Input: `fsa_salary_reduction_limit`
- Meaning: Applicable Section 125(i) limit

#### otherfsasalaryreduction
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-d-health-fsa-se.otherfsasalaryreduction; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > D. Health FSA settings
- Input: `other_fsa_salary_reduction`
- Meaning: Salary reduction already counted for the plan year

#### existingfsaemployercontribution
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-d-health-fsa-se.existingfsaemployercontribution; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > D. Health FSA settings
- Input: `existing_fsa_employer_contribution`
- Meaning: True employer Health FSA contributions already assigned from another source


<!-- record_id: product.commonfunds.rules.vector-store.e-runtime-activity -->
#### E. Runtime activity
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > E. Runtime activity

#### ichrapremiumreimbursements
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-e-runtime-activ.ichrapremiumreimbursements; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > E. Runtime activity
- Input: `ichra_premium_reimbursements`
- Applies when: Accepted ICHRA
- Meaning: Premium reimbursements paid or reserved for the measurement period

#### ichranonpremiumreimbursements
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-e-runtime-activ.ichranonpremiumreimbursements; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > E. Runtime activity
- Input: `ichra_nonpremium_reimbursements`
- Applies when: Accepted ICHRA
- Meaning: Other ICHRA reimbursements already paid or approved

#### ebhrareimbursements
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-e-runtime-activ.ebhrareimbursements; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > E. Runtime activity
- Input: `ebhra_reimbursements`
- Applies when: Excepted path
- Meaning: EBHRA reimbursements already paid or approved

#### fsareimbursements
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-normalized-input-schema-e-runtime-activ.fsareimbursements; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Normalized input schema > E. Runtime activity
- Input: `fsa_reimbursements`
- Applies when: Both paths
- Meaning: Health FSA reimbursements already paid or approved


Runtime values do not change the legal classification established at plan-year allocation.

<!-- record_id: product.commonfunds.rules.vector-store.input-validation -->
### Input validation
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Input validation

<!-- record_id: product.commonfunds.rules.vector-store.cashable-credit-reconciliation -->
#### Cashable credit reconciliation
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Input validation > Cashable credit reconciliation

```text
cashable_flex_credit
= cashable_flex_to_fsa
+ cashable_flex_to_premiums
+ cashable_flex_to_wages
+ cashable_flex_to_other
```

Every amount must be nonnegative. The engine rejects an election that does not reconcile.

<!-- record_id: product.commonfunds.rules.vector-store.path-validation -->
#### Path validation
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Input validation > Path validation

```text
if benefit_path == "excepted":
    ichra_participation must equal "not_applicable"
    ichra_newly_available must equal 0

if benefit_path == "ichra":
    existing_ebhra_newly_available must equal 0
```

An ICHRA participant may receive nonpremium reimbursements only when:

```text
benefit_path == "ichra"
and ichra_participation == "accepted"
and ichra_covers_nonpremium_expenses == true
```

<!-- record_id: product.commonfunds.rules.vector-store.phase-1-plan-year-allocation -->
### Phase 1 — Plan-year allocation
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation

<!-- record_id: product.commonfunds.rules.vector-store.step-1-calculate-health-fsa-salary-reduction -->
#### Step 1: calculate Health FSA salary reduction
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 1: calculate Health FSA salary reduction

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

<!-- record_id: product.commonfunds.rules.vector-store.step-2-allocate-the-primary-employer-account -->
#### Step 2: allocate the primary employer account
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 2: allocate the primary employer account

<!-- record_id: product.commonfunds.rules.vector-store.excepted-pathway -->
##### Excepted pathway
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 2: allocate the primary employer account > Excepted pathway

```text
ebhra_capacity
= max(ebhra_limit - existing_ebhra_newly_available, 0)

primary_employer_allocation
= min(employer_noncashable_budget, ebhra_capacity)

ebhra_newly_available
= existing_ebhra_newly_available
+ primary_employer_allocation
```

<!-- record_id: product.commonfunds.rules.vector-store.ichra-pathway -->
##### ICHRA pathway
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 2: allocate the primary employer account > ICHRA pathway

```text
ebhra_capacity = 0
primary_employer_allocation = ichra_newly_available
```

Validate that the ICHRA amount does not exceed the employer-only budget being modeled:

```text
0 <= ichra_newly_available <= employer_noncashable_budget
```

The ICHRA remains offered on its governing terms whether the employee accepts or opts out. An opt-out changes participant access, not the amount stated in the plan's offer.

<!-- record_id: product.commonfunds.rules.vector-store.step-3-calculate-employer-only-budget-remaining-after-the-primary-accoun -->
#### Step 3: calculate employer-only budget remaining after the primary account
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 3: calculate employer-only budget remaining after the primary account

```text
employer_budget_after_primary
= employer_noncashable_budget
- primary_employer_allocation
```

On the excepted path, this is EBHRA overflow. On the ICHRA path, this is employer budget not assigned to the ICHRA. It is **not** “unused ICHRA.”

<!-- record_id: product.commonfunds.rules.vector-store.step-4-calculate-true-employer-health-fsa-capacity -->
#### Step 4: calculate true employer Health FSA capacity
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 4: calculate true employer Health FSA capacity

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

<!-- record_id: product.commonfunds.rules.vector-store.step-5-close-the-employer-only-allocation -->
#### Step 5: close the employer-only allocation
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 — Plan-year allocation > Step 5: close the employer-only allocation

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

<!-- record_id: product.commonfunds.rules.vector-store.phase-1-outputs -->
### Phase 1 outputs
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs

#### primaryaccounttype
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.primaryaccounttype; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `primary_account_type`
- Meaning: `ebhra` or `ichra`

#### primaryemployerallocation
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.primaryemployerallocation; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `primary_employer_allocation`
- Meaning: Employer-only amount assigned to the primary account

#### ebhranewlyavailable
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.ebhranewlyavailable; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `ebhra_newly_available`
- Meaning: Total EBHRA amount newly available; always zero on the ICHRA path

#### ichraofferedamount
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.ichraofferedamount; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `ichra_offered_amount`
- Meaning: ICHRA amount stated by the plan; always zero on the excepted path

#### fsasalaryreduction
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.fsasalaryreduction; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `fsa_salary_reduction`
- Meaning: Valid cashable-flex and direct employee salary reduction assigned to the Health FSA

#### fsasalaryreductionexcess
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.fsasalaryreductionexcess; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `fsa_salary_reduction_excess`
- Meaning: Requested Health FSA salary reduction that must be rejected or redirected

#### fsaemployercontribution
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.fsaemployercontribution; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `fsa_employer_contribution`
- Meaning: Total true employer contribution assigned to the Health FSA

#### cashableflextopremiums
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.cashableflextopremiums; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `cashable_flex_to_premiums`
- Meaning: Cashable election assigned to eligible premiums

#### cashableflextowages
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.cashableflextowages; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `cashable_flex_to_wages`
- Meaning: Cashable election paid as taxable compensation

#### cashableflextoother
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.cashableflextoother; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `cashable_flex_to_other`
- Meaning: Cashable election assigned to another permitted benefit

#### unallocatedemployernoncashablebudget
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-phase-1-outputs.unallocatedemployernoncashablebudget; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Phase 1 outputs
- Output: `unallocated_employer_noncashable_budget`
- Meaning: Employer-only budget not assigned to a benefit component


<!-- record_id: product.commonfunds.rules.vector-store.phase-2-runtime-availability -->
### Phase 2 — Runtime availability
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 2 — Runtime availability

<!-- record_id: product.commonfunds.rules.vector-store.excepted-pathway-balance -->
#### Excepted pathway balance
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 2 — Runtime availability > Excepted pathway balance

```text
ebhra_available
= max(ebhra_newly_available - ebhra_reimbursements, 0)
```

Actual availability may be lower when the plan uses monthly accrual or another plan-defined schedule. The balance engine must apply that schedule before approving a claim.

<!-- record_id: product.commonfunds.rules.vector-store.ichra-pathway-balance -->
#### ICHRA pathway balance
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 2 — Runtime availability > ICHRA pathway balance

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

<!-- record_id: product.commonfunds.rules.vector-store.health-fsa-balance -->
#### Health FSA balance
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Phase 2 — Runtime availability > Health FSA balance

```text
fsa_maximum_benefit
= S + fsa_employer_contribution

fsa_available
= max(fsa_maximum_benefit - fsa_reimbursements, 0)
```

The Health FSA uniform-coverage rule determines when the maximum annual benefit becomes available; payroll collections to date do not cap the participant's valid reimbursement rights.

<!-- record_id: product.commonfunds.rules.vector-store.participant-facing-commonfunds-output -->
### Participant-facing CommonFunds output
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Participant-facing CommonFunds output

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

<!-- record_id: product.commonfunds.rules.vector-store.worked-example-a-ebhra-pathway -->
### Worked example A — EBHRA pathway
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway

Assume:

#### benefitpath
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.benefitpath; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: `benefit_path`
- Amount: `excepted`

#### Employer noncashable budget
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.employer-noncashable-budget; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Employer noncashable budget
- Amount: $3,000

#### Cashable flex credit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.cashable-flex-credit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Cashable flex credit
- Amount: $2,400

#### Cashable flex to Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.cashable-flex-to-health-fsa; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Cashable flex to Health FSA
- Amount: $2,000

#### Cashable flex to wages
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.cashable-flex-to-wages; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Cashable flex to wages
- Amount: $400

#### Direct employee FSA election
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.direct-employee-fsa-election; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Direct employee FSA election
- Amount: $1,000

#### EBHRA limit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.ebhra-limit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: EBHRA limit
- Amount: $2,200

#### Existing EBHRA amount
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.existing-ebhra-amount; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Existing EBHRA amount
- Amount: $0

#### Existing employer FSA contribution
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.existing-employer-fsa-contribution; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: Existing employer FSA contribution
- Amount: $0

#### FSA salary reduction limit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.fsa-salary-reduction-limit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Input: FSA salary reduction limit
- Amount: $3,400


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

#### EBHRA newly available
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.ebhra-newly-available; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Output: EBHRA newly available
- Amount: $2,200

#### Health FSA salary reduction
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.health-fsa-salary-reduction; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Output: Health FSA salary reduction
- Amount: $3,000

#### Health FSA employer contribution
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.health-fsa-employer-contribution; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Output: Health FSA employer contribution
- Amount: $800

#### Total Health FSA maximum benefit
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.total-health-fsa-maximum-benefit; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Output: Total Health FSA maximum benefit
- Amount: $3,800

#### Taxable wages
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.taxable-wages; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Output: Taxable wages
- Amount: $400

#### Unallocated employer-only budget
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-a-ebhra-pathway.unallocated-employer-only-budget; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example A — EBHRA pathway
- Output: Unallocated employer-only budget
- Amount: $0


<!-- record_id: product.commonfunds.rules.vector-store.worked-example-b-ichra-pathway -->
### Worked example B — ICHRA pathway
> Retrieval context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway

Assume:

#### benefitpath
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.benefitpath; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: `benefit_path`
- Amount: `ichra`

#### ichraparticipation
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.ichraparticipation; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: `ichra_participation`
- Amount: `accepted`

#### ICHRA covers nonpremium expenses
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.ichra-covers-nonpremium-expenses; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: ICHRA covers nonpremium expenses
- Amount: `true`

#### Employer noncashable budget
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.employer-noncashable-budget; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: Employer noncashable budget
- Amount: $4,800

#### ICHRA newly available
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.ichra-newly-available; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: ICHRA newly available
- Amount: $4,800

#### Premium reimbursements for the year
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.premium-reimbursements-for-the-year; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: Premium reimbursements for the year
- Amount: $3,600

#### Other ICHRA reimbursements already paid
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.other-ichra-reimbursements-already-paid; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: Other ICHRA reimbursements already paid
- Amount: $200

#### Health FSA salary reduction
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.health-fsa-salary-reduction; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: Health FSA salary reduction
- Amount: $1,000

#### Health FSA reimbursements paid
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.health-fsa-reimbursements-paid; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Input: Health FSA reimbursements paid
- Amount: $250


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

For an expense eligible under both components, the participant may see up to `$1,750` of CommonFunds availability, subject to the plan's claims-ordering rule:

#### ICHRA available for nonpremium §213(d) expenses
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.ichra-available-for-nonpremium-213-d-expenses; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Internal component: ICHRA available for nonpremium §213(d) expenses
- Available: $1,000

#### Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.health-fsa; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Internal component: Health FSA
- Available: $750

#### Unified CommonFunds availability
<!-- record_id: product.commonfunds.rules.vector-store.2-commonfunds-calculation-engine-worked-example-b-ichra-pathway.unified-commonfunds-availability; record_type: table-row -->
- Context: CommonFunds — 2. CommonFunds calculation engine > Worked example B — ICHRA pathway
- Internal component: **Unified CommonFunds availability**
- Available: **$1,750**


The participant has no EBHRA. The `$1,000` primary balance is simply the unused portion of the predetermined ICHRA after premium and other reimbursements.

---

<!-- record_id: product.commonfunds.rules.vector-store.3-the-underlying-benefit-components -->
## 3. The underlying benefit components
> Retrieval context: CommonFunds — 3. The underlying benefit components

<!-- record_id: product.commonfunds.rules.vector-store.account-based-group-health-plans -->
### Account-based group health plans
> Retrieval context: CommonFunds — 3. The underlying benefit components > Account-based group health plans

An account-based group health plan reimburses medical expenses through a defined account or allowance structure. HRAs and Health FSAs are common examples. Unlike traditional insurance, these arrangements generally provide a limited dollar amount rather than unlimited payment of covered claims.

Under the ACA market-reform framework, an account-based group health plan generally must:

1. Integrate with other qualifying group health coverage;
2. Qualify as an excepted benefit; or
3. Satisfy another applicable exception.

An arrangement that does not satisfy a valid pathway may violate the ACA market reforms, including the prohibition on annual dollar limits and the preventive-services requirements. CommonFunds is designed so each underlying component independently maintains its own compliance pathway.

<!-- record_id: product.commonfunds.rules.vector-store.ebhra -->
### EBHRA
> Retrieval context: CommonFunds — 3. The underlying benefit components > EBHRA

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

<!-- record_id: product.commonfunds.rules.vector-store.health-fsa -->
### Health FSA
> Retrieval context: CommonFunds — 3. The underlying benefit components > Health FSA

A Health FSA may receive:

- Employee salary reduction elections; and
- Employer contributions permitted under the applicable rules.

A cashable employer allowance elected into the Health FSA belongs to the first category. It is treated as salary reduction for both the Section 125(i) limit and the excepted-benefit maximum-benefit calculation.

---

<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available -->
## 4. When funds become available
> Retrieval context: CommonFunds — 4. When funds become available

<!-- record_id: product.commonfunds.rules.vector-store.health-fsa-uniform-coverage -->
### Health FSA: uniform coverage
> Retrieval context: CommonFunds — 4. When funds become available > Health FSA: uniform coverage

The Health FSA must make the maximum reimbursement amount available throughout the coverage period. Availability is not limited to payroll contributions collected when a claim occurs.

For example, an employee who elects $2,400 for the year may have the full $2,400 available in January even though only $200 has been collected through payroll.

Employer contributions included in the Health FSA benefit follow the same availability rule. A Health FSA containing a $3,000 employee election and a $1,000 employer contribution generally makes the full $4,000 benefit available at the beginning of the coverage period.

<!-- record_id: product.commonfunds.rules.vector-store.the-risk-runs-both-ways -->
### The risk runs both ways
> Retrieval context: CommonFunds — 4. When funds become available > The risk runs both ways

Uniform coverage creates a group risk arrangement, not a one-sided employer loss.

#### Participant incurs $3,000 in eligible claims early, then terminates after only $250 has been collected
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-the-risk-runs-both-ways.participant-incurs-3-000-in-eligible-claims-early-then-terminates-after-; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > The risk runs both ways
- Scenario: Participant incurs $3,000 in eligible claims early, then terminates after only $250 has been collected
- Result: The plan generally bears the shortfall and cannot require repayment merely because employment ended

#### Participant contributes $3,000 but submits only $500 in claims
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-the-risk-runs-both-ways.participant-contributes-3-000-but-submits-only-500-in-claims; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > The risk runs both ways
- Scenario: Participant contributes $3,000 but submits only $500 in claims
- Result: The unused $2,500 is generally forfeited unless the plan provides a permitted carryover or grace period


The employer bears early-utilization risk. Participants bear forfeiture risk. The plan is not required to pay unused Health FSA amounts as cash compensation.

<!-- record_id: product.commonfunds.rules.vector-store.ebhra-availability-follows-the-plan -->
### EBHRA: availability follows the plan
> Retrieval context: CommonFunds — 4. When funds become available > EBHRA: availability follows the plan

The Health FSA uniform coverage rule does not apply to the EBHRA. The plan may make EBHRA funds available annually, monthly, or under another permitted schedule.

CommonFunds represents accelerated EBHRA availability through `commonFundLoanMultiple`.

#### $100
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-ebhra-availability-follows-the-plan.100; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > EBHRA: availability follows the plan
- Monthly allocation: $100
- `commonFundLoanMultiple`: 1
- Initial availability: $100
- Meaning: Funds become available as they accrue monthly

#### $100
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-ebhra-availability-follows-the-plan.100-2; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > EBHRA: availability follows the plan
- Monthly allocation: $100
- `commonFundLoanMultiple`: 6
- Initial availability: $600
- Meaning: Up to six months of future allocations are available

#### $100
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-ebhra-availability-follows-the-plan.100-3; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > EBHRA: availability follows the plan
- Monthly allocation: $100
- `commonFundLoanMultiple`: 12
- Initial availability: $1,200
- Meaning: The full annual allocation is available immediately


The property determines timing only. Despite its name, it does not automatically make the arrangement a legal loan or create a repayment obligation.

Accelerated access must be applied uniformly according to the plan’s terms. It cannot be selectively granted to particular participants outside those terms.

<!-- record_id: product.commonfunds.rules.vector-store.recourse-after-accelerated-ebhra-reimbursement -->
### Recourse after accelerated EBHRA reimbursement
> Retrieval context: CommonFunds — 4. When funds become available > Recourse after accelerated EBHRA reimbursement

Availability and recourse are separate design decisions. When a participant is reimbursed more than the EBHRA amount accrued before termination, the plan document determines whether the employer has recourse.

#### Accelerated access with no recourse
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-recourse-after-accelerated-ebhra-reimburse.accelerated-access-with-no-recourse; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > Recourse after accelerated EBHRA reimbursement
- Plan design: Accelerated access with no recourse
- Result: Employer accepts the risk of unrecovered advanced reimbursements

#### Accelerated access with recourse
<!-- record_id: product.commonfunds.rules.vector-store.4-when-funds-become-available-recourse-after-accelerated-ebhra-reimburse.accelerated-access-with-recourse; record_type: table-row -->
- Context: CommonFunds — 4. When funds become available > Recourse after accelerated EBHRA reimbursement
- Plan design: Accelerated access with recourse
- Result: The plan may require repayment according to the applicable agreement


Never infer repayment from `commonFundLoanMultiple`; review the plan document.

---

<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific -->
## 5. Annual limits are component-specific
> Retrieval context: CommonFunds — 5. Annual limits are component-specific

There is no single annual limit on the combined CommonFunds balance.

<!-- record_id: product.commonfunds.rules.vector-store.ebhra-annual-limit -->
### EBHRA annual limit
> Retrieval context: CommonFunds — 5. Annual limits are component-specific > EBHRA annual limit

The EBHRA limit applies to the amount newly made available for a plan year. It does not apply to Health FSA funds, employee salary reduction, separate account-based benefits, or permitted prior-year carryover.

#### 2025
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-ebhra-annual-limit.2025; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > EBHRA annual limit
- Plan year: 2025
- Annual EBHRA limit: $2,150
- Status in source data: Official

#### 2026
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-ebhra-annual-limit.2026; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > EBHRA annual limit
- Plan year: 2026
- Annual EBHRA limit: $2,200
- Status in source data: Official

#### 2027
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-ebhra-annual-limit.2027; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > EBHRA annual limit
- Plan year: 2027
- Annual EBHRA limit: Not stated
- Status in source data: Not released when the source was prepared


<!-- record_id: product.commonfunds.rules.vector-store.health-fsa-salary-reduction-limit -->
### Health FSA salary reduction limit
> Retrieval context: CommonFunds — 5. Annual limits are component-specific > Health FSA salary reduction limit

The Section 125(i) limit restricts employee salary reduction into the Health FSA. It is not a total account limit.

It includes:

- Direct employee payroll salary reduction; and
- Employer flex credits that the employee could receive as cash or another taxable benefit but elects into the Health FSA.

A genuine noncashable employer contribution does not consume this limit.

<!-- record_id: product.commonfunds.rules.vector-store.employer-health-fsa-contributions -->
### Employer Health FSA contributions
> Retrieval context: CommonFunds — 5. Annual limits are component-specific > Employer Health FSA contributions

True employer contributions may increase the total Health FSA benefit beyond the employee salary reduction limit. To remain an excepted benefit, the maximum Health FSA benefit cannot exceed the greater of:

1. Two times the participant’s salary reduction election; or
2. The participant’s salary reduction election plus $500.

If `S` is total Health FSA salary reduction:

```text
maximum total Health FSA benefit = max(2 * S, S + 500)
maximum true employer contribution = max(S, 500)
```

#### $3,400
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-employer-health-fsa-contributions.3-400; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Employer Health FSA contributions
- Salary reduction (`S`): $3,400
- Maximum total benefit: $6,800
- Maximum employer contribution under this test: $3,400

#### $1,000
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-employer-health-fsa-contributions.1-000; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Employer Health FSA contributions
- Salary reduction (`S`): $1,000
- Maximum total benefit: $2,000
- Maximum employer contribution under this test: $1,000

#### $100
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-employer-health-fsa-contributions.100; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Employer Health FSA contributions
- Salary reduction (`S`): $100
- Maximum total benefit: $600
- Maximum employer contribution under this test: $500


This financial test is not the only excepted-benefit requirement. Other non-excepted group health coverage must also be made available for the year to the applicable class.

<!-- record_id: product.commonfunds.rules.vector-store.combined-limit-example -->
### Combined-limit example
> Retrieval context: CommonFunds — 5. Annual limits are component-specific > Combined-limit example

One participant could have:

#### EBHRA
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-combined-limit-example.ebhra; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Combined-limit example
- Component: EBHRA
- Source: Employer-only
- Amount: $2,200

#### Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-combined-limit-example.health-fsa; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Combined-limit example
- Component: Health FSA
- Source: Employee salary reduction
- Amount: $3,400

#### Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-combined-limit-example.health-fsa-2; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Combined-limit example
- Component: Health FSA
- Source: Employer contribution
- Amount: $3,400

#### Combined availability
<!-- record_id: product.commonfunds.rules.vector-store.5-annual-limits-are-component-specific-combined-limit-example.combined-availability; record_type: table-row -->
- Context: CommonFunds — 5. Annual limits are component-specific > Combined-limit example
- Component: **Combined availability**
- Source:
- Amount: **$9,000**


The combined balance exceeding an individual component’s limit does not itself create a compliance problem. Each component is tested separately.

---

<!-- record_id: product.commonfunds.rules.vector-store.6-what-a-commonfunds-balance-means -->
## 6. What a CommonFunds balance means
> Retrieval context: CommonFunds — 6. What a CommonFunds balance means

A CommonFunds balance is generally a notional reimbursement record—not a participant-owned bank account.

It tracks:

- Allocated benefit amounts;
- Claims incurred;
- Claims approved;
- Reimbursements paid; and
- Remaining reimbursement availability.

When the application displays `$2,500 available`, it means the participant may receive up to $2,500 in additional eligible reimbursements under the applicable benefit terms. It does not necessarily mean that:

- Cash is held in the participant’s name;
- The employer deposited that amount into a segregated account;
- The amount is wages owed to the participant; or
- The participant owns the unused balance.

<!-- record_id: product.commonfunds.rules.vector-store.funded-and-unfunded-arrangements -->
### Funded and unfunded arrangements
> Retrieval context: CommonFunds — 6. What a CommonFunds balance means > Funded and unfunded arrangements

The employer may pay approved claims as they arise or reserve funds in advance. The participant’s reimbursement rights follow the plan terms, not the employer’s internal funding method.

<!-- record_id: product.commonfunds.rules.vector-store.ownership-of-unused-amounts -->
### Ownership of unused amounts
> Retrieval context: CommonFunds — 6. What a CommonFunds balance means > Ownership of unused amounts

#### Health FSA
<!-- record_id: product.commonfunds.rules.vector-store.6-what-a-commonfunds-balance-means-ownership-of-unused-amounts.health-fsa; record_type: table-row -->
- Context: CommonFunds — 6. What a CommonFunds balance means > Ownership of unused amounts
- Component: Health FSA
- Participant right: Reimbursement of eligible expenses up to the available benefit
- Treatment of unused amount: Generally forfeited unless a permitted carryover or grace period applies

#### EBHRA
<!-- record_id: product.commonfunds.rules.vector-store.6-what-a-commonfunds-balance-means-ownership-of-unused-amounts.ebhra; record_type: table-row -->
- Context: CommonFunds — 6. What a CommonFunds balance means > Ownership of unused amounts
- Component: EBHRA
- Participant right: Reimbursement according to the EBHRA terms
- Treatment of unused amount: Forfeiture, carryover, or another permitted treatment under the plan


Neither component automatically creates employee ownership of unused funds.

<!-- record_id: product.commonfunds.rules.vector-store.employer-accounting-views -->
### Employer accounting views
> Retrieval context: CommonFunds — 6. What a CommonFunds balance means > Employer accounting views

#### Maximum exposure
<!-- record_id: product.commonfunds.rules.vector-store.6-what-a-commonfunds-balance-means-employer-accounting-views.maximum-exposure; record_type: table-row -->
- Context: CommonFunds — 6. What a CommonFunds balance means > Employer accounting views
- Measure: Maximum exposure
- Meaning: The maximum amount that could be reimbursed; sometimes described as accrued liability

#### Actual claims liability
<!-- record_id: product.commonfunds.rules.vector-store.6-what-a-commonfunds-balance-means-employer-accounting-views.actual-claims-liability; record_type: table-row -->
- Context: CommonFunds — 6. What a CommonFunds balance means > Employer accounting views
- Measure: Actual claims liability
- Meaning: Claims already approved, scheduled, payable, or paid

#### Expected cost
<!-- record_id: product.commonfunds.rules.vector-store.6-what-a-commonfunds-balance-means-employer-accounting-views.expected-cost; record_type: table-row -->
- Context: CommonFunds — 6. What a CommonFunds balance means > Employer accounting views
- Measure: Expected cost
- Meaning: The actuarially expected cost, which may be lower than maximum exposure because participants may not use every available dollar


Do not describe unused balances as employer debt unless the plan terms create that obligation.

<!-- record_id: product.commonfunds.rules.vector-store.accumulated-balance-and-real-time-balance -->
### Accumulated balance and real-time balance
> Retrieval context: CommonFunds — 6. What a CommonFunds balance means > Accumulated balance and real-time balance

These values can differ:

- **Accumulated balance** describes the employer-side accrued cash position or liability.
- **Real-time balance** describes what the participant may claim at that moment, including accelerated availability and Health FSA uniform coverage.

Uniform coverage or accelerated access can make the real-time balance exceed the accumulated balance. The accumulated balance may therefore become negative after an early reimbursement without changing the participant’s valid availability under the plan.

---

<!-- record_id: product.commonfunds.rules.vector-store.7-one-balance-separate-claims-rules -->
## 7. One balance, separate claims rules
> Retrieval context: CommonFunds — 7. One balance, separate claims rules

A participant-facing balance may combine amounts that follow different rules:

```text
CommonFunds available: $2,500

Internal classification:
  EBHRA employer funds:          $1,000
  Health FSA salary reduction:   $1,500
```

The application must determine which component can reimburse an expense. “CommonFunds covers it” is not a complete eligibility rule.

For every claim, determine:

1. Which component applies;
2. Whether that component covers the expense;
3. Whether funds are currently available under that component’s rules; and
4. What the governing plan document requires.

---

<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide -->
## 8. Practical interpretation guide
> Retrieval context: CommonFunds — 8. Practical interpretation guide

#### “Employees cannot contribute to CommonFunds because EBHRAs cannot accept employee contributions.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.employees-cannot-contribute-to-commonfunds-because-ebhras-cannot-accept-; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “Employees cannot contribute to CommonFunds because EBHRAs cannot accept employee contributions.”
- Use instead: “Employee salary reductions are allocated to the Health FSA component because they are not HRA funds.”

#### “Employer funds are always EBHRA funds.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.employer-funds-are-always-ebhra-funds; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “Employer funds are always EBHRA funds.”
- Use instead: “Employer funds may be EBHRA funds or permitted Health FSA employer contributions, depending on cashability, plan design, and applicable limits.”

#### “The employer credit is an employer contribution.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.the-employer-credit-is-an-employer-contribution; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “The employer credit is an employer contribution.”
- Use instead: “If the employee could take the credit as cash or another taxable benefit and elects it into the Health FSA, it is treated as salary reduction for the relevant rules.”

#### “The employee has only contributed $100, so only $100 is available.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.the-employee-has-only-contributed-100-so-only-100-is-available; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “The employee has only contributed $100, so only $100 is available.”
- Use instead: “Health FSA availability follows the annual election, not payroll contributions collected to date.”

#### “All CommonFunds dollars are available immediately.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.all-commonfunds-dollars-are-available-immediately; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “All CommonFunds dollars are available immediately.”
- Use instead: “The Health FSA follows uniform coverage; the EBHRA follows its plan-defined availability schedule.”

#### “The employer loses money because FSA funds are available immediately.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.the-employer-loses-money-because-fsa-funds-are-available-immediately; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “The employer loses money because FSA funds are available immediately.”
- Use instead: “The Health FSA transfers risk in both directions: employers bear early-claim risk and participants bear forfeiture risk.”

#### “commonFundLoanMultiple means the participant owes repayment.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.commonfundloanmultiple-means-the-participant-owes-repayment; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “`commonFundLoanMultiple` means the participant owes repayment.”
- Use instead: “The property controls availability timing; recourse depends on the plan document.”

#### “You have $2,000 saved in CommonFunds.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.you-have-2-000-saved-in-commonfunds; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “You have $2,000 saved in CommonFunds.”
- Use instead: “You have $2,000 available for eligible reimbursement.”

#### “Your employer deposited $2,000 for you.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.your-employer-deposited-2-000-for-you; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “Your employer deposited $2,000 for you.”
- Use instead: “Your employer made $2,000 available for eligible reimbursement.”

#### “You lose your money if you do not use the EBHRA.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.you-lose-your-money-if-you-do-not-use-the-ebhra; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “You lose your money if you do not use the EBHRA.”
- Use instead: “Unused EBHRA amounts are handled according to the plan terms.”

#### “The Health FSA limit is the most an employee can have available.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.the-health-fsa-limit-is-the-most-an-employee-can-have-available; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “The Health FSA limit is the most an employee can have available.”
- Use instead: “The indexed limit applies to salary reduction; permitted employer contributions may increase the total benefit.”

#### “The CommonFunds balance exceeds the EBHRA limit.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.the-commonfunds-balance-exceeds-the-ebhra-limit; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “The CommonFunds balance exceeds the EBHRA limit.”
- Use instead: “Apply the EBHRA limit only to the EBHRA component and test the other components separately.”

#### “CommonFunds reimburses this expense.”
<!-- record_id: product.commonfunds.rules.vector-store.8-practical-interpretation-guide.commonfunds-reimburses-this-expense; record_type: table-row -->
- Context: CommonFunds — 8. Practical interpretation guide
- Avoid: “CommonFunds reimburses this expense.”
- Use instead: “The applicable CommonFunds component determines whether the expense is eligible.”


---

<!-- record_id: product.commonfunds.rules.vector-store.9-authorities-cited-in-this-document -->
## 9. Authorities cited in this document
> Retrieval context: CommonFunds — 9. Authorities cited in this document

- [IRS Notice 2002-45](https://www.irs.gov/pub/irs-drop/n-02-45.pdf), Parts I and IV—HRA funding and cafeteria-plan interaction.
- [IRS Notice 2012-40](https://www.irs.gov/pub/irs-drop/n-12-40.pdf)—cashable employer flex credits elected into a Health FSA are treated as salary reduction for Section 125(i).
- [45 C.F.R. § 146.145(b)(3)(v)](https://www.law.cornell.edu/cfr/text/45/146.145)—Health FSA excepted-benefit requirements and treatment of taxable options elected into the FSA.
- [26 C.F.R. § 54.9831-1(c)(3)(v)](https://www.law.cornell.edu/cfr/text/26/54.9831-1)—parallel Treasury excepted-benefit rule.

---

<!-- record_id: product.commonfunds.rules.vector-store.core-principle -->
## Core principle
> Retrieval context: CommonFunds — Core principle

> **CommonFunds unifies accounting and user experience. Compliance remains component-specific.**

Always preserve the distinction between the participant experience, accounting structure, statutory classification, tax treatment, and governing plan document.
