---
id: plan-document.component.common-funds-health-fsa
title: CommonFunds Health FSA Component
kind: benefit-component-template
status: template
version: "1.0"
parent_document: CommonFunds Coordinated Benefit Appendix
context_schema: ./common-funds-plan-document-context.schema.json
---

# CommonFunds Health FSA Component

# 1. Establishment

The Employer establishes this Health Flexible Spending Arrangement (**Health FSA**) component under the cafeteria plan identified in Appendix A. This component receives Participant salary reduction and any true Employer contribution validly allocated to it.

# 2. Adopted terms

| Term | Adopted value |
|---|---|
| Governing document ID | ${extensions.commonFunds.healthFsa.documentId} |
| Annual direct salary reduction | ${extensions.commonFunds.healthFsa.annualSalaryReduction|currencyUSD} |
| Annual cashable flex elected into Health FSA | ${extensions.commonFunds.healthFsa.annualCashableFlexElected|currencyUSD} |
| Annual true Employer contribution | ${extensions.commonFunds.healthFsa.annualTrueEmployerContribution|currencyUSD} |
| Annual maximum benefit | ${extensions.commonFunds.healthFsa.annualMaximumBenefit|currencyUSD} |
| Eligible expenses | ${extensions.commonFunds.healthFsa.eligibleExpenses} |
| Carryover adopted | ${extensions.commonFunds.healthFsa.carryoverAllowed|yesNo} |
| Grace period adopted | ${extensions.commonFunds.healthFsa.gracePeriodAllowed|yesNo} |

# 3. Salary-reduction classification

A cashable credit elected into this Health FSA is treated as salary reduction even if the Employer originated or labeled the credit. It counts with direct Participant salary reduction for the applicable Health FSA salary-reduction limit and excepted-benefit maximum-benefit calculation.

The annual maximum benefit may not exceed the amount supported by the governing Health FSA limits and the Plan's adopted true Employer contribution. An excess election or allocation will be rejected or corrected before reimbursement.

# 4. Uniform coverage

The maximum annual benefit is available throughout the Participant's coverage period, reduced by prior reimbursements. Availability is not limited to payroll deductions or monthly contributions collected as of the claim date.

Uniform coverage allocates risk in both directions. The Plan bears the risk that reimbursements may exceed salary reductions collected before participation ends. The Participant bears the risk that unused amounts may be forfeited under the rule below.

# 5. Deductible restriction

This Health FSA may be designed as a post-deductible Health FSA. Deductible restriction enabled for this component: ${extensions.commonFunds.deductible.appliesToHealthFsa|yesNo}. The applicable deductible is identified by ${extensions.commonFunds.deductible.enrollmentScheduleReference}.

When the restriction applies, the Health FSA pays an otherwise eligible expense only if the expense is incurred after the deductible has been satisfied, except as stated in the adopted before-deductible benefit rule: ${extensions.commonFunds.deductible.preDeductibleBenefitRule}

Deductible accumulation rule: ${extensions.commonFunds.deductible.accumulationRule}<br>
Credited expenses: ${extensions.commonFunds.deductible.creditedExpenses}<br>
Required evidence: ${extensions.commonFunds.deductible.satisfactionEvidence}

Uniform coverage determines how much of the elected annual maximum benefit is available; it does not eliminate the deductible or make an expense incurred before deductible satisfaction reimbursable. If the Health FSA is intended to preserve HSA eligibility, the post-deductible restriction will be administered consistently with Code section 223 and the applicable minimum HDHP deductible.

# 6. Claims and forfeiture

The Health FSA reimburses only eligible medical expenses incurred during the applicable coverage period, properly substantiated, and not reimbursed from another source. The CommonFunds routing procedure prevents duplicate reimbursement.

Unused-amount rule: ${extensions.commonFunds.healthFsa.unusedAmountRule}

Unless the adopted terms above expressly say otherwise, this component has no carryover and no grace period. After the applicable claim-submission period, unused amounts remain or revert to the Employer or Plan, subject to applicable plan-asset and cafeteria-plan rules, and are not paid to the Participant as cash.
