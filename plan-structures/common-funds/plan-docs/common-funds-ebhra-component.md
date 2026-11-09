---
template_set: {"key":"common-funds","name":"CommonFunds","implementations":{"plan-document":{"key":"ebhra","role":"component","order":30,"required":true,"requires":["administration"],"includeWhen":{"path":"extensions.commonFunds.hra.componentEnabled","equals":true},"description":"Governing EBHRA provisions, applicable only when the CommonFunds HRA component is enabled. The ICHRA itself uses its separate governing document."}}}
id: plan-document.component.common-funds-ebhra
title: CommonFunds Excepted Benefit HRA Component
kind: benefit-component-template
status: template
version: "1.0"
parent_document: CommonFunds Coordinated Benefit Appendix
context_schema: ./common-funds-plan-document-context.schema.json
componentType: ebhra
---

# CommonFunds Excepted Benefit HRA Component

# 1. Conditional adoption

This component is adopted only when the context identifies the offered HRA component as an **EBHRA**. It does not apply to a Participant offered an ICHRA. When an ICHRA is coordinated, the ICHRA document governs the HRA amount and this component is omitted from the assembled Plan and SPD.

# 2. Conditions

The Employer makes the non-excepted group health coverage identified in the CommonFunds Appendix available to every Employee eligible for this EBHRA. Enrollment in that underlying coverage is not required solely to use the EBHRA unless another Plan term requires it.

Amounts newly made available will not exceed the indexed EBHRA limit for the applicable Plan Year. The EBHRA will not reimburse individual health insurance, non-COBRA group health plan, or Medicare premiums, except for coverage consisting solely of excepted benefits when permitted. It is offered on uniform terms to similarly situated individuals without regard to a health factor.

# 3. Employer-only funding

Only genuinely Employer-only amounts unavailable as cash or another taxable benefit may be credited to this component. Participant salary reductions and cashable credits elected into medical reimbursement are treated under the Health FSA provisions.

Contribution methods and amounts are determined through the Plan's contribution settings and enrollment, subject to the indexed EBHRA limit for the applicable Plan Year. This document does not establish separate monthly or annual Employer amounts.

# 4. Availability and advances

Availability, including any acceleration of future allocations, follows the CommonFunds coverage settings and applicable annual limits. HRA advances do not create Health FSA uniform coverage. Any recovery of an unaccrued advance must be authorized by the applicable coverage terms and permitted by law.

# 5. Deductible restriction

Deductible amounts, accumulation periods, and applicable exceptions follow the coverage settings and are communicated through coverage and enrollment.

Unless expressly excluded by an applicable Appendix or the terms of coordinated coverage, all expenses for medical care described in Code section 213(d) are credited toward the applicable CommonFunds deductible upon proper billing evidence.

Crediting an expense toward a deductible does not establish a right to reimbursement. An expense incurred before an applicable deductible is satisfied does not become reimbursable solely because the deductible is later satisfied.

Pre-deductible reimbursements are limited to preventive care expressly enabled by the applicable coverage settings and permitted by law.

A Health FSA may operate on a post-deductible basis where provided by the coverage settings. Where HSA compatibility is intended, applicable statutory restrictions continue to apply. Uniform coverage determines the available annual Health FSA benefit; it does not waive an applicable deductible.

For HSA-compatible post-deductible benefits, only expenses covered by the coordinated HDHP count toward satisfaction of its required deductible.

# 6. End-of-year treatment

After timely eligible claims, year-end disposition follows the coverage settings and applicable component rules. If no different treatment is selected, the Employer retains unused funds and has discretion over the legally permitted use of experience gains. A displayed individual balance does not establish a right to a cash distribution.

${extensions.commonFunds.endingBalance.rule|optional}
