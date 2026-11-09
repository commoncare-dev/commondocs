---
class: coverage
template_set: {"key":"common-funds","name":"CommonFunds","implementations":{"plan-document":{"key":"health-fsa","role":"component","order":20,"required":true,"requires":["administration"],"description":"Governing Health FSA provisions, required only when the optional Health FSA component is enabled.","includeWhen":{"path":"extensions.commonFunds.healthFsa.componentEnabled","equals":true}}}}
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

The Employer establishes this Health Flexible Spending Arrangement (**Health FSA**) component under the Section 125 arrangement established in Appendix D of the Core Plan Document. This component receives Participant salary reduction and any true Employer contribution validly allocated to it.

# 2. Contributions and limits

Participant salary reductions, including cashable credits elected into the Health FSA, are limited to the maximum permitted under Code section 125 for the applicable Plan Year. ${extensions.commonFunds.healthFsa.salaryReductionLimitDescription}

Participant elections and any Employer contributions are calculated and recorded through the Plan's contribution settings and enrollment. Employer contributions remain subject to applicable benefit limits. This document does not establish a separate Participant election or fixed Employer contribution.

# 3. Salary-reduction classification

A cashable credit elected into this Health FSA is treated as salary reduction even if the Employer originated or labeled the credit. It counts with direct Participant salary reduction for the applicable Health FSA salary-reduction limit and excepted-benefit maximum-benefit calculation.

The annual maximum benefit may not exceed the amount supported by the governing Health FSA limits and the Plan's adopted true Employer contribution. An excess election or allocation will be rejected or corrected before reimbursement.

# 4. Uniform coverage

The maximum annual benefit is available throughout the Participant's coverage period, reduced by prior reimbursements. Availability is not limited to payroll deductions or monthly contributions collected as of the claim date.

Uniform coverage allocates risk in both directions. The Plan bears the risk that reimbursements may exceed salary reductions collected before participation ends. The Participant bears the risk that unused amounts may be forfeited under the rule below.

# 5. Deductible restriction

Deductible amounts, accumulation periods, and applicable exceptions follow the coverage settings and are communicated through coverage and enrollment.

Unless expressly excluded by an applicable Appendix or the terms of coordinated coverage, all expenses for medical care described in Code section 213(d) are credited toward the applicable CommonFunds deductible upon proper billing evidence.

Crediting an expense toward a deductible does not establish a right to reimbursement. An expense incurred before an applicable deductible is satisfied does not become reimbursable solely because the deductible is later satisfied.

Pre-deductible reimbursements are limited to preventive care expressly enabled by the applicable coverage settings and permitted by law.

A Health FSA may operate on a post-deductible basis where provided by the coverage settings. Where HSA compatibility is intended, applicable statutory restrictions continue to apply. Uniform coverage determines the available annual Health FSA benefit; it does not waive an applicable deductible.

For HSA-compatible post-deductible benefits, only expenses covered by the coordinated HDHP count toward satisfaction of its required deductible.

# 6. Claims and forfeiture

The Health FSA reimburses only eligible medical expenses incurred during the applicable coverage period, properly substantiated, and not reimbursed from another source. The CommonFunds routing procedure prevents duplicate reimbursement.

After timely eligible claims, year-end disposition follows the coverage settings and applicable component rules. If no different treatment is selected, the Employer retains unused funds and has discretion over the legally permitted use of experience gains. A displayed individual balance does not establish a right to a cash distribution.

${extensions.commonFunds.endingBalance.rule|optional}
