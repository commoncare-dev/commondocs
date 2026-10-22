---
id: plan-document.component.common-funds-ebhra
title: CommonFunds Excepted Benefit HRA Component
kind: benefit-component-template
status: template
version: "1.0"
parent_document: CommonFunds Coordinated Benefit Appendix
context_schema: ./common-funds-plan-document-context.schema.json
pathway: excepted-only
---

# CommonFunds Excepted Benefit HRA Component

# 1. Conditional adoption

This component is adopted only when the CommonFunds pathway is **excepted** and the context identifies the HRA component as an **EBHRA**. It does not apply to a Participant offered an ICHRA. On an ICHRA pathway, the ICHRA document governs the HRA amount and this component is omitted from the assembled Plan and SPD.

# 2. Conditions

The Employer makes the non-excepted group health coverage identified in the CommonFunds Appendix available to every Employee eligible for this EBHRA. Enrollment in that underlying coverage is not required solely to use the EBHRA unless another Plan term requires it.

Amounts newly made available will not exceed the indexed EBHRA limit for the applicable Plan Year. The EBHRA will not reimburse individual health insurance, non-COBRA group health plan, or Medicare premiums, except for coverage consisting solely of excepted benefits when permitted. It is offered on uniform terms to similarly situated individuals without regard to a health factor.

# 3. Employer-only funding

| Term | Adopted value |
|---|---|
| Governing document ID | ${extensions.commonFunds.hra.documentId} |
| Annual Employer amount | ${extensions.commonFunds.hra.annualEmployerAmount|currencyUSD} |
| Monthly accrual | ${extensions.commonFunds.hra.monthlyAccrual|currencyUSD} |
| Advance months | ${extensions.commonFunds.hra.advanceMonths} |
| Recourse for unaccrued advance | ${extensions.commonFunds.hra.recourseForUnaccruedAdvance|yesNo} |
| Eligible expenses | ${extensions.commonFunds.hra.eligibleExpenses} |
| Carryover adopted | ${extensions.commonFunds.hra.carryoverAllowed|yesNo} |
| Carryover rule | ${extensions.commonFunds.hra.carryoverRule} |

Only genuinely Employer-only amounts unavailable as cash or another taxable benefit may be credited to this component. Participant salary reduction and a cashable credit elected into medical reimbursement belong in the Health FSA component, not this EBHRA.

# 4. Availability and advances

The available HRA amount equals the monthly accrual multiplied by the adopted advance months, limited by the annual Employer amount and reduced by prior reimbursements. Each later month restores availability only to the extent provided by the adopted schedule and annual limit.

An advance-month value of `1` is the default and makes only the current accumulated amount available. A larger value accelerates access uniformly for similarly situated Participants. It does not convert this component into a Health FSA or cause Health FSA uniform coverage to apply.

If recourse is elected, the Plan may recover reimbursement exceeding accrued allocations after participation ends only under a separately stated, legally permitted recovery method. Payroll withholding requires independent authorization where applicable. If recourse is not elected, the Employer bears the risk of an unrecovered accelerated reimbursement.

# 5. End-of-year treatment

No carryover applies unless the adopted carryover field expressly says yes and the carryover rule states the amount and operation. Without an adopted carryover, unused amounts remain Employer property after the applicable claims period, subject to applicable Plan-asset law.
