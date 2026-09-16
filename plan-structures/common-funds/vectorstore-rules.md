
# CommonFunds Canonical Knowledge Base


Each chunk contains: - stable semantic ID - retrieval purpose - original
detailed guidance - preserved examples and reasoning patterns

------------------------------------------------------------------------

# CommonFunds Canonical Knowledge Base

# Topic: Benefit Classification and Funding Source Rules

## Purpose

This document defines how an AI assistant must interpret and explain
CommonFunds.

The assistant must use these definitions as the primary framework when
answering questions about:

-   account balances
-   employee contributions
-   employer contributions
-   claim eligibility
-   tax treatment
-   compliance rules
-   reporting
-   plan administration

The assistant must not rely on the product name "CommonFunds" to
determine regulatory treatment.

CommonFunds is an administrative structure. Regulatory treatment is
determined by the underlying benefit component.

------------------------------------------------------------------------

# CommonFunds Classification Framework

## Definition

CommonFunds is a unified administration system for multiple
account-based health benefit arrangements.

CommonFunds may combine:

-   Excepted Benefit Health Reimbursement Arrangement (EBHRA)
-   Excepted Benefit Health Flexible Spending Arrangement (Health FSA)

into a single participant experience.

CommonFunds itself is not:

-   a separate statutory benefit category
-   a replacement for an HRA
-   a replacement for a Health FSA

The underlying benefit rules continue to apply separately.

------------------------------------------------------------------------

# Primary Classification Rule

## Rule

Every dollar within CommonFunds must be classified according to:

1.  Funding source
2.  Governing plan document
3.  Applicable tax treatment
4.  Applicable benefit regulations

The same employee may have multiple types of funds available through one
CommonFunds account.

The displayed account balance does not determine regulatory
classification.

The rules for which funds belong in each account type are always the
same, as follows:

The default position for a genuinely employer-only, noncashable health
allowance, including a `byCoverage` contribution, is the EBHRA until the
applicable annual EBHRA limit is reached. This is because the EBHRA
provides cleaner and more flexible employer controls over the funds.

An allowance is not classified solely by who initially budgets or pays
it. Cashability and the employee's election determine whether a dollar
is treated as employer-funded or as salary reduction for the relevant
rule.

Amounts an employee could receive as cash or another taxable benefit,
but instead elects into the Health FSA, are treated as employee salary
reduction contributions. Their only CommonFunds account-based component
is the Health FSA, and they consume the applicable Section 125(i) annual
salary reduction limit.

Amounts that can never be received as cash or another taxable benefit
remain employer contributions. After the EBHRA limit is filled, unused
employer-only amounts may be allocated to the Health FSA as employer
contributions, but only to the extent permitted by the Health FSA
excepted-benefit maximum-benefit test and the governing plan documents.

------------------------------------------------------------------------

# Employer Allowance Classification and Allocation Engine

## Purpose

This is the canonical decision flow for classifying an employer
allowance, flex credit, or `byCoverage` contribution within CommonFunds.

The AI must complete classification before calculating account limits.
It must not assume that every dollar described as an "employer
allowance" remains an employer contribution after the employee is given
a cash election.

## Required Inputs

Use annual plan-year amounts unless the question explicitly requires a
monthly illustration.

``` json
{
  "allowance_total": "total general employer allowance",
  "cashable_total": "portion that may be received as cash or another taxable benefit",
  "byCoverage": "dedicated employer contribution that cannot be received as cash",
  "cashable_elected_to_fsa": "cashable amount actually directed to the Health FSA",
  "direct_employee_fsa_election": "additional payroll salary reduction elected to the Health FSA",
  "cashable_used_for_premiums": "cashable amount elected for eligible premiums",
  "cashable_taken_as_wages": "cashable amount paid as taxable compensation",
  "ebhra_limit": "applicable indexed EBHRA limit",
  "existing_ebhra_newly_available": "other amounts newly made available under the EBHRA",
  "existing_fsa_employer_contribution": "other true employer Health FSA contributions"
}
```

The allocation fields for the cashable amount must reconcile:

``` text
cashable_total
= cashable_elected_to_fsa
+ cashable_used_for_premiums
+ cashable_taken_as_wages
+ other permitted cashable allocations
```

Only `cashable_elected_to_fsa` counts toward the Health FSA salary
reduction limit. A cashable amount used for eligible premiums may be a
Section 125 salary reduction amount, but it does not count toward the
separate Section 125(i) Health FSA limit.

## Step 1 — Split the General Allowance by Cashability

``` text
noncashable_allowance = max(allowance_total - cashable_total, 0)
```

Validation:

``` text
0 <= cashable_total <= allowance_total
```

Cashability means the employee can elect to receive the amount as cash
or another taxable benefit. It does not matter whether payroll or the
plan labels the amount an employer credit, allowance, or contribution.

## Step 2 — Build the Employer-Only Pool

``` text
employer_only_pool = noncashable_allowance + byCoverage
```

For this calculation, `byCoverage` is treated the same as a noncashable
allowance because it is a dedicated employer contribution and cannot be
converted to cash or another taxable benefit.

The employer-only pool may be used for the EBHRA because it is not
attributable to employee salary reduction. A choice solely among
employer-provided nontaxable health benefits, with no cash or taxable
option, is not by itself a Section 125 election.

Authority: IRS Notice 2002-45, Parts I and IV.

## Step 3 — Calculate EBHRA Capacity and Credit

``` text
remaining_ebhra_capacity
= max(ebhra_limit - existing_ebhra_newly_available, 0)

ebhra_creditable
= min(employer_only_pool, remaining_ebhra_capacity)

employer_only_overflow
= max(employer_only_pool - ebhra_creditable, 0)
```

Do not include `cashable_total` in `employer_only_pool`. If an employee
can take a dollar as taxable cash and instead elects an account benefit,
that election must be analyzed as salary reduction for the rules below.

## Step 4 — Classify Health FSA Employee Salary Reduction

``` text
fsa_employee_contribution_requested
= cashable_elected_to_fsa + direct_employee_fsa_election

remaining_fsa_salary_reduction_capacity
= max(fsa_salary_reduction_limit
      - other_health_fsa_salary_reduction_for_plan_year, 0)

fsa_employee_contribution
= min(fsa_employee_contribution_requested,
      remaining_fsa_salary_reduction_capacity)

excess_fsa_salary_reduction
= max(fsa_employee_contribution_requested
      - remaining_fsa_salary_reduction_capacity, 0)
```

`cashable_elected_to_fsa` is treated as salary reduction even though the
employer supplied the original allowance. Notice 2012-40 states
explicitly that employer flex credits available as cash or a taxable
benefit are treated as salary reduction contributions for purposes of
Section 125(i).

An excess amount cannot remain in the Health FSA. Subject to the plan's
terms, an otherwise cashable excess is paid as taxable wages or directed
to another permitted non-FSA option. The plan should prevent the excess
election rather than rely on a later correction.

## Step 5 — Calculate Employer Health FSA Capacity

For an excepted-benefit Health FSA, define:

``` text
S = total participant salary reduction election under the Health FSA
```

`S` includes both direct payroll salary reduction and cashable flex
credits elected into the Health FSA.

The maximum total Health FSA benefit is:

``` text
maximum_excepted_fsa_benefit = max(2 * S, S + 500)
```

Therefore, the maximum true employer contribution is:

``` text
maximum_total_employer_fsa_contribution
= maximum_excepted_fsa_benefit - S
= max(S, 500)

remaining_employer_fsa_capacity
= max(maximum_total_employer_fsa_contribution
      - existing_fsa_employer_contribution, 0)

fsa_employer_contribution_from_overflow
= min(employer_only_overflow, remaining_employer_fsa_capacity)
```

This employer contribution does not consume the Section 125(i) salary
reduction limit. It does increase the maximum benefit payable and must
fit within the excepted-benefit formula.

The Health FSA must also satisfy the separate requirement that other
non-excepted group health plan coverage be made available for the year
to the applicable class of participants.

Authority: 45 C.F.R. § 146.145(b)(3)(v) and the parallel Treasury rule,
26 C.F.R. § 54.9831-1(c)(3)(v).

## Step 6 — Reconcile the Result

The AI should produce these separate outputs:

``` json
{
  "ebhra_creditable": "noncashable employer-only amount allocated within EBHRA capacity",
  "fsa_employee_contribution": "direct salary reduction plus cashable credits elected to the FSA, capped under Section 125(i)",
  "fsa_employer_contribution": "employer-only overflow allocated within excepted-benefit FSA capacity",
  "cashable_used_for_premiums": "cashable election used for eligible premiums",
  "taxable_wages": "cash elected as wages plus any cashable amount that cannot be placed in the FSA",
  "unallocated_employer_only_overflow": "noncashable employer amount that fits neither the EBHRA nor the excepted-benefit FSA"
}
```

Do not automatically convert `unallocated_employer_only_overflow` into
taxable wages. A noncashable amount does not become payable as wages
merely because account capacity is exhausted. Its treatment depends on
the written plan and other available employer-provided benefits.

## Canonical Worked Example

Assume for a 2026 plan year:

``` json
{
  "allowance_total": 4800,
  "cashable_total": 2400,
  "byCoverage": 600,
  "cashable_elected_to_fsa": 2000,
  "direct_employee_fsa_election": 1000,
  "cashable_taken_as_wages": 400,
  "ebhra_limit": 2200,
  "existing_ebhra_newly_available": 0,
  "existing_fsa_employer_contribution": 0,
  "fsa_salary_reduction_limit": 3400
}
```

Calculation:

``` text
noncashable_allowance = 4,800 - 2,400 = 2,400
employer_only_pool = 2,400 + 600 = 3,000
ebhra_creditable = min(3,000, 2,200) = 2,200
employer_only_overflow = 3,000 - 2,200 = 800

fsa_employee_contribution = 2,000 + 1,000 = 3,000
maximum_excepted_fsa_benefit = max(6,000, 3,500) = 6,000
maximum_employer_fsa_contribution = 6,000 - 3,000 = 3,000
fsa_employer_contribution_from_overflow = min(800, 3,000) = 800

total_health_fsa_benefit = 3,000 + 800 = 3,800
taxable_wages from allowance = 400
unallocated_employer_only_overflow = 0
```

Classification result:

``` json
{
  "EBHRA": {
    "employer_contribution": 2200
  },
  "Health_FSA": {
    "employee_salary_reduction": 3000,
    "employer_contribution": 800,
    "total_maximum_benefit": 3800,
    "excepted_benefit_financial_test": "satisfied"
  },
  "taxable_wages": 400
}
```

## Critical Classification Rules

1. Employer origin does not conclusively mean employer contribution.
2. Cashable and elected into the Health FSA means salary reduction.
3. Noncashable and restricted to employer-provided nontaxable health
   benefits means employer contribution.
4. `byCoverage` is employer-only unless its actual terms create a cash
   or taxable-benefit election.
5. Cashable amounts elected for premiums do not consume the Health FSA
   salary reduction limit.
6. The EBHRA limit and the Health FSA rules apply independently.
7. Filling the EBHRA does not automatically authorize all remaining
   employer dollars as Health FSA contributions; the excepted-benefit
   formula must be applied.
8. An amount's classification can be rule-specific. Always state which
   legal test is being applied.

------------------------------------------------------------------------

# Account-Based Group Health Plan Concept

## Definition

An account-based group health plan provides reimbursement of medical
expenses through a defined account or allowance structure.

Examples include:

-   Health Reimbursement Arrangements
-   Health Flexible Spending Arrangements
-   Other employer reimbursement arrangements

Account-based health plans differ from traditional insurance because
they generally provide a limited dollar amount rather than unlimited
payment of covered claims.

------------------------------------------------------------------------

# ACA Market Reform Framework

## Rule

After implementation of ACA market reforms, an account-based group
health plan generally must either:

1.  integrate with other qualifying group health coverage; or
2.  qualify as an excepted benefit; or
3.  satisfy another applicable exception

A limited account-based arrangement that fails to satisfy one of these
frameworks may violate ACA market reform requirements.

CommonFunds is designed so that each underlying component independently
maintains a valid compliance pathway.

Excepted benefit structures mean the plan does not have to meet the ACA
market reforms, specifically the PHS act 2711 and 2713 statutes
requiring all plans to cover preventive services with no employee
out-of-pocket cost and the prohibition of limiting benefit amounts -
which an account-based plan inherently does.

It's critical that these accounts follow the limitations that enable
them to be considered excepted under the ACA reforms.

------------------------------------------------------------------------

# HRA Classification

## Definition

An HRA is an employer reimbursement arrangement for medical care
expenses.

Important attributes:

-   employer makes reimbursement amounts available
-   benefits reimburse eligible medical expenses
-   unused amounts may carry forward if permitted by plan terms
-   reimbursement occurs according to plan rules
-   non-discrimination rules apply - the same benefits must be offered
    to all eligible employees that are similarly situated
-   employer funds alone can be contributed

An arrangement is not an HRA simply because it is labeled as one.

Classification depends on operation.

------------------------------------------------------------------------

# HRA Funding Source Principle

## Rule

Amounts attributable to employee salary reduction are not treated as HRA
funds.

This does not mean:

"Employee money creates a prohibited HRA."

The correct interpretation is:

"Amounts funded through employee salary reduction are not classified
under HRA rules."

This means they don't recieve the regulatory protection from being an
illegal benefit structure under the ACA.

When employee salary reduction exists, those amounts must be analyzed
under the applicable rules governing that arrangement, typically Section
125 and Health FSA rules.

## HRA and Cafeteria-Plan Interaction

An HRA may be offered alongside a cafeteria plan. That fact alone does
not cause the HRA to fail.

A choice solely between employer-provided nontaxable health benefits,
such as HRA coverage and HMO coverage, is not a Section 125 election when
no cash or other taxable benefit is available.

However, an arrangement is not treated as an HRA when its interaction
with a cafeteria plan permits salary reduction to fund the reimbursement
arrangement directly or indirectly. Relevant indicators include:

- the employee can increase the reimbursement amount by increasing a
  salary reduction election;
- the employee receives a larger reimbursement amount by forgoing a
  taxable benefit; or
- the reimbursement amount otherwise correlates with the employee's
  salary reduction election.

For this rule, salary reduction includes a choice to forgo receipt of a
benefit that would be taxable but for its offering through the Section
125 cafeteria plan.

Authority: [IRS Notice 2002-45, Parts I and
IV](https://www.irs.gov/pub/irs-drop/n-02-45.pdf).

------------------------------------------------------------------------

# EBHRA Component Classification

## Definition

An EBHRA is an HRA or other account-based group health plan that
qualifies as an excepted benefit.

The EBHRA classification applies to funds that satisfy EBHRA
requirements.

CommonFunds EBHRA funds:

``` json
{
  "component": "EBHRA",
  "funding_source": "employer",
  "employee_salary_reduction": false,
  "aca_classification": "excepted benefit account-based group health plan"
  "commonFundLoanMultiple": 12
}
```

------------------------------------------------------------------------

# Employee Salary Reduction Classification

## Rule

Employee pre-tax elections through a cafeteria plan are not allocated to
the EBHRA component.

They are classified according to Section 125 rules.

Typical classification:

``` json
{
  "funding_source": "employee_salary_reduction",
  "component": "Health FSA",
  "section_125_rules_apply": true,
  "hra_rules_apply": false
}
```

The compliance question is not whether the employee may contribute.

The question is:

"What type of benefit arrangement does the contribution create?"

------------------------------------------------------------------------

# Health FSA Component Classification

## Definition

A Health FSA is an account-based health arrangement that may receive
employee salary reduction elections under a cafeteria plan. Health FSA
funds are subject to the uniform coverage rule

CommonFunds Health FSA funds may include:

-   employee salary reduction elections
-   employer contributions permitted under applicable rules

A cashable employer allowance elected into the Health FSA belongs in
the first category, not the second. It is treated as salary reduction
for the Section 125(i) limit and for the excepted-benefit Health FSA
maximum-benefit calculation.

Primary authorities:

- [IRS Notice 2012-40](https://www.irs.gov/pub/irs-drop/n-12-40.pdf),
  treating cashable employer flex credits elected into a Health FSA as
  salary reduction for Section 125(i).
- [45 C.F.R. §
  146.145(b)(3)(v)](https://www.law.cornell.edu/cfr/text/45/146.145),
  expressly treating an amount available as taxable income but elected
  into the Health FSA as salary reduction regardless of whether it is
  labeled salary or a credit.
- [26 C.F.R. §
  54.9831-1(c)(3)(v)](https://www.law.cornell.edu/cfr/text/26/54.9831-1),
  the parallel Treasury excepted-benefit rule.

Example:

``` json
{
  "component": "Health FSA",
  "funding_sources": [
    "employee_salary_reduction",
    "eligible_employer_contribution"
  ],
  "section_125_available": true
}
```

------------------------------------------------------------------------

# Health FSA Uniform Coverage Rule

## Purpose

This section explains the Health FSA uniform coverage requirement and
how it applies within CommonFunds.

The AI must distinguish between:

-   the participant's displayed CommonFunds balance
-   the Health FSA component balance
-   the EBHRA component balance

Uniform coverage applies only where required by the underlying benefit
component.

------------------------------------------------------------------------

# Definition

The uniform coverage rule is a special requirement applicable to Health
Flexible Spending Arrangements.

A Health FSA must make the maximum amount of reimbursement available to
a participant throughout the coverage period.

The available reimbursement amount cannot be limited based only on how
much the employee has contributed through payroll at the time of the
claim.

------------------------------------------------------------------------

# Health FSA Availability Rule

## Rule

For a Health FSA:

Annual election amount is available immediately.

Example:

Employee election:

``` json
{
  "annual_health_fsa_election": 2400,
  "payroll_contribution_schedule": "200_per_month",
  "month": "January",
  "employee_contributions_collected": 200,
  "available_for_reimbursement": 2400
}
```

The employee may submit eligible claims up to the full annual election
even though payroll deductions have not yet been collected.

------------------------------------------------------------------------

# Employer Health FSA Contributions

Employer contributions included in the Health FSA benefit are also
subject to Health FSA availability rules.

Example:

``` json
{
  "health_fsa": {
    "employee_salary_reduction": 3000,
    "employer_contribution": 1000,
    "total_health_fsa_benefit": 4000,
    "available_beginning_of_year": 4000
  }
}
```

------------------------------------------------------------------------

# Health FSA Risk Transfer Concept

The uniform coverage rule creates risk transfer between employer and
employee.

Example:

Employee uses entire election early:

``` json
{
  "annual_election": 3000,
  "claims_paid_in_january": 3000,
  "payroll_contributions_collected": 250
}
```

The plan must reimburse according to the annual election.

# Health FSA Risk Allocation

## Rule

The Health FSA uniform coverage rule creates risk transfer between the
employer and participant.

The rule is not exclusively favorable to either party.

The employer accepts the risk that a participant may receive
reimbursements exceeding payroll contributions collected.

The participant accepts the risk that unused Health FSA amounts may be
forfeited according to applicable plan rules.

------------------------------------------------------------------------

# Employer Loss Scenario

Example:

``` json
{
  "annual_health_fsa_election": 3000,
  "claims_paid": 3000,
  "employee_contributions_collected_before_termination": 250,
  "result": "Plan generally cannot require repayment of the remaining election amount solely because employment ended."
}
```

The employer bears the shortfall created by early claims.

# Employer Gain Scenario

Example:
`json{   "annual_health_fsa_election": 3000,   "employee_contributions_collected": 3000,   "claims_submitted": 500,   "unused_balance": 2500,   "result": "Unused Health FSA funds are generally forfeited unless an applicable carryover or grace period rule applies." }`

The employer is not required to pay unused Health FSA amounts to the
participant as cash compensation.

## AI Interpretation Rule

Incorrect:

"The employer loses money because FSA funds are available immediately."

Correct:

"The uniform coverage rule creates both potential gains and losses. The
employer bears the risk of early utilization, while participants bear
the risk of unused amounts being forfeited."

## Key Point

This distinction is actually important for CommonFunds because employers
will ask things like:

> "Why would I let someone spend \$3,000 on January 1?"

The accurate answer is not "because the law requires you to take a
loss." It is:

> "The Health FSA operates as a group risk arrangement. Early
> overspending and unused forfeitures are both features of the
> structure."

For CommonFunds specifically, later we may also want a section on
**forfeiture allocation**, because the FSA forfeiture side and EBHRA
carryover side are almost opposites. The AI needs to know that "unused
balance" is not a universal concept across the combined account.

------------------------------------------------------------------------

# EBHRA Difference

The Health FSA uniform coverage rule does not apply to the EBHRA
component.

EBHRA availability is determined by the plan document.

An EBHRA may define availability rules such as:

-   entire annual amount available immediately
-   monthly availability
-   other allocation schedules permitted by plan terms

Example:

``` json
{
  "EBHRA": {
    "annual_allocation": 1200,
    "availability_schedule": "monthly",
    "available_month_1": 100
  }
}
```

This differs from Health FSA treatment.

# EBHRA Availability Schedule

## Rule

The Health FSA uniform coverage rule does not apply to the EBHRA
component.

EBHRA funds become available according to the terms defined by the plan
document.

CommonFunds tracks EBHRA accelerated availability using the application
property:

``` json
{
  "property": "commonFundLoanMultiple"
}
```

This value determines how many months of future EBHRA allocations are
made available to the participant before they have accumulated.

------------------------------------------------------------------------

# commonFundLoanMultiple Definition

## Rule

`commonFundLoanMultiple` represents the number of months of EBHRA
availability that may be advanced to the participant.

A larger multiple gives the participant access to more future benefit
amounts earlier in the plan year.

Examples:

``` json
{
  "monthly_ebhra_allocation": 100,
  "commonFundLoanMultiple": 1,
  "available_month_1": 100,
  "description": "Participant accesses EBHRA funds as they accrue monthly."
}
```

``` json
{
  "monthly_ebhra_allocation": 100,
  "commonFundLoanMultiple": 6,
  "available_month_1": 600,
  "description": "Participant may access up to six months of EBHRA funds."
}
```

``` json
{
  "monthly_ebhra_allocation": 100,
  "commonFundLoanMultiple": 12,
  "available_month_1": 1200,
  "description": "Participant has access to the full annual EBHRA allocation immediately."
}
```

------------------------------------------------------------------------

# Uniform Application Requirement

## Rule

The EBHRA availability schedule is a plan design feature.

Employees within the same applicable plan terms must receive the same
availability methodology.

The employer may not selectively accelerate EBHRA access for individual
participants outside the terms of the plan.

------------------------------------------------------------------------

# Advanced EBHRA Availability and Recourse

## Important Distinction

Accelerated availability determines when a participant may access EBHRA
funds.

It does not independently determine whether repayment obligations exist.

The application property name `commonFundLoanMultiple` describes the
ability to access future allocations early.

It does not automatically mean the arrangement is legally treated as a
loan.

------------------------------------------------------------------------

# Recourse Rules

The plan document determines whether the employer has recourse when:

-   a participant receives reimbursement exceeding accrued EBHRA
    allocations; and
-   the participant terminates employment before future allocations are
    earned.

Possible plan designs:

``` json
{
  "accelerated_access": true,
  "recourse": false,
  "result": "Employer assumes risk of unrecovered advanced reimbursements."
}
```

``` json
{
  "accelerated_access": true,
  "recourse": true,
  "result": "Plan terms may require repayment according to the applicable agreement."
}
```

The AI must review the plan document before stating whether repayment is
required.

------------------------------------------------------------------------

# AI Reasoning Rules

Incorrect:

"The EBHRA balance works like an FSA because the employee can access the
full year immediately."

Correct:

"The EBHRA component may provide accelerated access by plan design. This
is separate from the Health FSA uniform coverage rule."

------------------------------------------------------------------------

Incorrect:

"`commonFundLoanMultiple` means the employee owes repayment."

Correct:

"`commonFundLoanMultiple` determines availability timing only. Repayment
rights depend on the plan document."

------------------------------------------------------------------------

# CommonFunds Balance Interpretation

A CommonFunds account may contain both immediately available and
scheduled funds.

Example:

``` json
{
  "CommonFunds": {
    "display_balance": 5000,
    "components": [
      {
        "type": "Health_FSA",
        "annual_election": 3000,
        "uniform_coverage": true,
        "available_now": 3000
      },
      {
        "type": "EBHRA",
        "annual_allocation": 2000,
        "uniform_coverage": false,
        "available_now": 500
      }
    ]
  }
}
```

The AI must calculate availability using the rules for each component.

------------------------------------------------------------------------

# AI Reasoning Rules

Incorrect:

"The employee has only contributed \$100, so only \$100 is available."

Correct:

"For Health FSA funds, availability is based on the annual election, not
collected payroll contributions."

------------------------------------------------------------------------

Incorrect:

"All CommonFunds dollars are available immediately."

Correct:

"The Health FSA component follows uniform coverage rules. Other
components follow their applicable plan rules."

------------------------------------------------------------------------

Incorrect:

"The employee owes back unused payroll deductions after leaving
employment."

Correct:

"Under the Health FSA uniform coverage rule, the plan generally bears
the risk if claims exceed contributions collected before termination."

------------------------------------------------------------------------

# Unified Balance Rule

## Rule

A participant-facing CommonFunds balance may combine multiple regulatory
components.

Example:

Employee view:

``` text
CommonFunds Balance:
$2,500 Available
```

Internal classification:

``` json
{
  "total_available": 2500,
  "components": [
    {
      "type": "EBHRA",
      "amount": 1000,
      "funding_source": "employer"
    },
    {
      "type": "Health FSA",
      "amount": 1500,
      "funding_source": "salary_reduction"
    }
  ]
}
```

The combined user experience does not merge the legal classifications.

------------------------------------------------------------------------

# Account-Based Benefit Annual Limits

## Purpose

This section defines how annual contribution and availability limits
apply to CommonFunds components.

The AI must not apply a single annual limit to the combined CommonFunds
balance.

Each underlying benefit component has its own rules.

------------------------------------------------------------------------

# EBHRA Annual Limit

## Rule

An Excepted Benefit Health Reimbursement Arrangement (EBHRA) has a limit
on the amount newly made available for a plan year.

The limit applies only to the EBHRA component.

The limit does not apply to:

-   Health FSA funds
-   employee salary reduction elections
-   separate account-based benefits
-   permitted carryover amounts from prior years

## Known EBHRA Limits

``` json
{
  "EBHRA_LIMITS": {
    "2025": {
      "annual_limit": 2150,
      "status": "official"
    },
    "2026": {
      "annual_limit": 2200,
      "status": "official"
    },
    "2027": {
      "annual_limit": null,
      "status": "not_released"
    }
  }
}
```

------------------------------------------------------------------------

# Health FSA Employee Salary Reduction Limit

## Rule

The Health FSA salary reduction limit restricts the amount an employee
may elect through a cafeteria plan.

This is not a total Health FSA account limit.

It applies only to salary reduction contributions. For this purpose,
the term includes an employer flex credit that the employee could have
received as cash or another taxable benefit but instead elects into the
Health FSA. The amount's employer origin or "credit" label does not
prevent it from consuming the Section 125(i) limit.

A genuinely noncashable employer contribution does not consume this
limit.

Example:

An employee elects the maximum Health FSA salary reduction.

``` json
{
  "component": "Health FSA",
  "funding_source": "employee_salary_reduction",
  "amount": 3400,
  "plan_year": 2026
}
```

The employee has reached the salary reduction limit.

The employee has not necessarily reached the maximum possible Health FSA
benefit.

------------------------------------------------------------------------

# Employer Health FSA Contributions

## Rule

True employer contributions to a Health FSA are analyzed separately from
employee salary reduction elections. A contribution is a true employer
contribution for this purpose only if the employee cannot elect to
receive it as cash or another taxable benefit.

If the employee can receive the amount as cash but elects the Health
FSA, classify it as salary reduction, not as an employer contribution,
for the Section 125(i) limit and the excepted-benefit maximum-benefit
test.

Employer contributions may increase the total Health FSA benefit beyond
the employee salary reduction limit.

Example:

``` json
{
  "component": "Health FSA",
  "employee_salary_reduction": 3400,
  "employer_contribution": 3400,
  "total_health_fsa_benefit": 6800
}
```

This structure may be permitted if the Health FSA continues to satisfy
applicable rules, including excepted benefit requirements.

------------------------------------------------------------------------

# Health FSA Excepted Benefit Maximum Benefit Test

## Rule

A Health FSA must satisfy the maximum benefit requirement to remain an
excepted benefit.

The maximum benefit payable cannot exceed the greater of:

1.  two times the participant's salary reduction election; or
2.  the participant's salary reduction election plus \$500

This rule determines how much employer contribution can be added while
maintaining excepted benefit status.

For this test, any amount the employee can elect to receive as taxable
income but instead applies to the Health FSA is expressly considered a
salary reduction election, regardless of whether it is characterized as
salary or as a credit.

If `S` is total Health FSA salary reduction, the maximum true employer
contribution permitted by this financial test is:

``` text
max(S, 500)
```

This is derived by subtracting `S` from the permitted maximum total
benefit of `max(2 * S, S + 500)`.

Examples:

Employee election:

``` json
{
  "salary_reduction": 3400,
  "maximum_excepted_health_fsa_benefit": 6800
}
```

Employee election:

``` json
{
  "salary_reduction": 1000,
  "maximum_excepted_health_fsa_benefit": 2000
}
```

Employee election:

``` json
{
  "salary_reduction": 100,
  "maximum_excepted_health_fsa_benefit": 600
}
```

------------------------------------------------------------------------

# CommonFunds Combined Limit Example

A participant may have:

``` json
{
  "CommonFunds": {
    "EBHRA": {
      "employer_amount": 2200
    },
    "Health_FSA": {
      "employee_salary_reduction": 3400,
      "employer_contribution": 3400
    },
    "combined_available_amount": 9000
  }
}
```

The combined amount exceeding any individual component limit does not
automatically create a compliance issue.

Cashable amounts that exceed the Health FSA salary reduction limit
cannot remain in the Health FSA and may be paid as taxable wages or used
for another permitted option under the plan.

Noncashable employer amounts that exceed both EBHRA capacity and
permitted employer Health FSA capacity do not automatically become
wages. They remain subject to the written plan and may be unavailable,
forfeited, or used for another permitted employer-provided benefit.

The AI must evaluate each component separately.

------------------------------------------------------------------------

# CommonFunds Account Balance and Funding Concepts

## Purpose

This section explains the difference between:

-   participant-facing balances
-   available reimbursement amounts
-   employer funding obligations
-   actual assets
-   employee ownership rights

The AI must not assume that a displayed CommonFunds balance represents a
segregated bank account or employee-owned asset.

------------------------------------------------------------------------

# Account-Based Benefit Terminology

## Rule

Account-based health plans often use account terminology, but the
account balance generally represents a reimbursement right rather than
ownership of specific funds.

A participant's CommonFunds balance represents:

-   the maximum amount currently available for eligible reimbursements
-   according to the applicable plan terms
-   from the applicable benefit component

It does not necessarily represent:

-   cash held in the participant's name
-   wages owed to the participant
-   property owned by the participant

------------------------------------------------------------------------

# Notional Account Concept

## Definition

CommonFunds balances are generally notional accounting records.

The application tracks:

-   allocated benefit amounts
-   claims incurred
-   claims approved
-   reimbursements paid
-   remaining availability

Example:

``` json
{
  "participant_display": {
    "commonfunds_available": 2500
  },
  "internal_accounting": {
    "cash_account_owned_by_employee": false,
    "reimbursement_limit_available": 2500
  }
}
```

------------------------------------------------------------------------

# Funded vs Unfunded Arrangements

## Rule

The existence of a CommonFunds balance does not determine whether the
employer has deposited cash into a separate account.

Employer funding method is determined by plan design and administration.

Possible structures include:

``` json
{
  "funding_method": "pay_as_you_go",
  "description": "Employer pays reimbursements when eligible claims are approved."
}
```

``` json
{
  "funding_method": "prefunded",
  "description": "Employer reserves funds in advance for expected reimbursements."
}
```

The participant reimbursement right is determined by the plan terms, not
the employer's internal funding method.

------------------------------------------------------------------------

# Employee Ownership Rule

## Health FSA Component

A Health FSA election creates a right to reimbursement of eligible
expenses.

It does not create ownership of unused funds.

Example:

``` json
{
  "employee_salary_reduction": 3000,
  "claims_submitted": 1000,
  "remaining_unused": 2000,
  "cash_payment_to_employee": false
}
```

Unused Health FSA balances may be forfeited unless a permitted carryover
or grace period applies. These too are optional allowances given by
regulators and whether they are offered is governed by the plan
document.

------------------------------------------------------------------------

# EBHRA Component

An EBHRA allocation creates a reimbursement benefit.

It does not create an employee-owned account.

Example:

``` json
{
  "employer_ebhra_allocation": 2200,
  "employee_medical_claims": 500,
  "unused_amount": 1700,
  "employee_cash_right": false
}
```

Unused EBHRA amounts follow plan terms.

Possible treatment:

-   forfeiture
-   carryover
-   other permitted plan rules

------------------------------------------------------------------------

# Employer Accounting Perspective

Employers may see multiple balance concepts.

## Maximum Exposure

The maximum amount that could be reimbursed. This can be referred to an
"accrued" and is a liability the employer needs to fund.

Example:

``` json
{
  "participants": 100,
  "average_available_balance": 2000,
  "maximum_exposure": 200000
}
```

------------------------------------------------------------------------

## Actual Claims Liability

Amounts already approved or payable. This is either scheduled
(approved/authorized) or paid claims.

Example:

``` json
{
  "approved_claims": 35000,
  "current_payment_obligation": 35000
}
```

------------------------------------------------------------------------

## Expected Cost

The employer's expected financial cost may be lower than maximum
exposure because not all participants use all available benefits.

The AI should not describe unused balances as employer debt unless plan
terms create an obligation.

------------------------------------------------------------------------

# CommonFunds Balance Calculation

The application may calculate:

``` json
{
  "scheduled_annual_benefit": 5000,
  "claims_paid": 1200,
  "accumulated_balance": 3800,
  "real_time_balance": 3800
}
```

This means:

"The participant may receive up to \$3,800 of additional eligible
reimbursements."

It does not mean:

"The participant owns \$3,800."

The real_time_balance may differ from the accumulated_balance.
"Accumulated" is an employer-perspective and represents the real cash
position/liability of the benefit account to the employer. The
real_time_balance reflects uniform coverage rules as well as benefit
design to describe the real_time liability - or what a participant may
claim at a moment in time, even if it causes the accumulated_balance to
go negative.

------------------------------------------------------------------------

# AI Reasoning Rules

Incorrect:

"You have \$2,000 saved in your CommonFunds account."

Correct:

"You have \$2,000 available for eligible reimbursements under your
CommonFunds plan."

------------------------------------------------------------------------

Incorrect:

"Your employer deposited \$2,000 for you."

Correct:

"Your employer made \$2,000 available for eligible reimbursements."

------------------------------------------------------------------------

Incorrect:

"You lose your money if you do not use your EBHRA."

Correct:

"Unused EBHRA amounts are handled according to your employer's plan
terms."

------------------------------------------------------------------------

# Core Principle

CommonFunds tracks reimbursement availability.

Availability does not automatically mean:

-   cash funding occurred
-   assets were transferred
-   employee ownership exists
-   unused funds must be paid out

Always evaluate ownership and availability according to the underlying
benefit component and plan document.

------------------------------------------------------------------------

# AI Reasoning Rules

Incorrect:

"The indexed Health FSA limit is the most an employee can have
available."

Correct:

"The indexed Section 125(i) limit applies to Health FSA salary reduction
elections, including cashable credits elected into the FSA. True
employer Health FSA contributions may increase the total available
benefit subject to the Health FSA excepted-benefit rules."

------------------------------------------------------------------------

Incorrect:

"The CommonFunds balance exceeds the EBHRA limit."

Correct:

"The EBHRA limit applies only to the EBHRA component. Other properly
classified components must be analyzed separately."

# AI Reasoning Instructions

When answering a CommonFunds question:

NEVER start with:

"What does CommonFunds allow?"

ALWAYS determine:

1.  Which component applies?
2.  What is the funding source?
3.  Which regulatory framework governs the funds?
4.  What does the plan document allow?

------------------------------------------------------------------------

# Incorrect Reasoning Patterns

Incorrect:

"EBHRAs cannot accept employee contributions, therefore employees cannot
contribute to CommonFunds."

Correct:

"Employee salary reductions are allocated to the Health FSA component of
CommonFunds because salary reduction amounts are not treated as HRA
funds."

------------------------------------------------------------------------

Incorrect:

"CommonFunds reimburses this expense."

Correct:

"The applicable CommonFunds component determines whether this expense is
eligible."

------------------------------------------------------------------------

Incorrect:

"Employer funds are always EBHRA funds."

Correct:

"Employer funds may be structured as EBHRA funds or Health FSA employer
contributions depending on plan design."

------------------------------------------------------------------------

# Core Principle

CommonFunds is a unified accounting and user experience layer.

Compliance exists at the component level.

The AI must preserve the distinction between:

-   user experience
-   accounting structure
-   statutory classification
-   tax treatment

------------------------------------------------------------------------
