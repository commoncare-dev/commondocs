---
template_set: {"key":"common-funds","name":"CommonFunds","implementations":{"plan-document":{"key":"administration","role":"appendix","order":10,"required":true,"description":"Shared CommonFunds administration. Add only the component documents enabled in the plan."}}}
id: plan-document.benefit-appendix.common-funds
title: CommonFunds Coordinated Benefit Appendix
kind: benefit-appendix
status: template
version: "2.0"
parent_document: CommonCare Welfare Benefit Plan — Core Plan Document
context_schema: ./common-funds-plan-document-context.schema.json
component_documents:
  - ./common-funds-health-fsa-component.md
  - ./common-funds-ebhra-component.md
---

# CommonFunds Coordinated Benefit Appendix

Version: ${extensions.commonFunds.document.version}

Effective Date: ${extensions.commonFunds.document.effectiveDate|dateLong}

# 1. Adoption and purpose

The Employer adopts CommonFunds as one coordinated account-based medical benefit experience under the Plan. CommonFunds receives elections and Employer allocations, classifies each amount under the governing rules, routes each claim to the component that may lawfully pay it, and presents the resulting availability to the Participant.

CommonFunds does not assume that every dollar has the same source or rules. The classification of an amount determines the applicable contribution limit, availability rule, eligible-expense scope, Employer or Participant control, claim procedure, and year-end treatment.

# 2. Coordinated coverage

Any coordinated medical coverage is identified in the Plan's coverage and enrollment records. Each component remains subject to its applicable eligibility and coverage conditions. Where an EBHRA requires an offer of non-excepted group health coverage, the Employer must make that coverage available to eligible Employees.

# 3. Components

The Health FSA and HRA portions are independently offered according to the CommonFunds coverage settings. The component provisions included in this Plan govern the portions offered. A separately offered ICHRA is governed by its own terms; the EBHRA component does not apply when an ICHRA is coordinated.

# 4. Classification of contributions

CommonFunds classifies an amount when the election or allocation becomes binding, before applying a component limit or paying a claim.

| Source or election | Treatment |
|---|---|
| Genuinely Employer-only and unavailable as cash | HRA funding when the adopted HRA component permits it; otherwise another expressly adopted Employer benefit |
| Cashable credit elected into the Health FSA | Participant salary reduction for Health FSA limit and availability purposes |
| Direct Participant payroll election into the Health FSA | Participant salary reduction |
| True Employer Health FSA contribution | Employer Health FSA funding, limited by the applicable maximum-benefit test and governing documents |
| Cashable amount elected as wages | Taxable compensation; not an account-based Plan balance |

An amount does not become Employer-only merely because the Employer initially described it as an allowance or credit. If the Participant could receive the amount as cash or another taxable benefit and elects it into the Health FSA, it is salary reduction in substance.

# 5. Contributions and elections

Employer-only contributions, health-only flex credits, cashable flex credits, and Participant salary reductions retain their respective classifications. Cashable credits elected into the Health FSA count as salary reduction. Amounts, class-specific contribution methods, and Participant elections are determined through the Plan's contribution settings and enrollment; this document does not establish a separate fixed allocation or Participant election.

# 6. Claim routing

## CommonFunds deductible

Deductible amounts, accumulation periods, and applicable exceptions follow the coverage settings and are communicated through coverage and enrollment.

Unless expressly excluded by an applicable Appendix or the terms of coordinated coverage, all expenses for medical care described in Code section 213(d) are credited toward the applicable CommonFunds deductible upon proper billing evidence.

Crediting an expense toward a deductible does not establish a right to reimbursement. An expense incurred before an applicable deductible is satisfied does not become reimbursable solely because the deductible is later satisfied.

Pre-deductible reimbursements are limited to preventive care expressly enabled by the applicable coverage settings and permitted by law.

A Health FSA may operate on a post-deductible basis where provided by the coverage settings. Where HSA compatibility is intended, applicable statutory restrictions continue to apply. Uniform coverage determines the available annual Health FSA benefit; it does not waive an applicable deductible.

For HSA-compatible post-deductible benefits, only expenses covered by the coordinated HDHP count toward satisfaction of its required deductible.

The administrator routes properly documented claims to an eligible component under the coverage settings and prevents duplicate reimbursement. Each component retains its own availability and eligible-expense rules.

# 7. Availability

${#if extensions.commonFunds.healthFsa.componentEnabled}
The Health FSA component follows uniform coverage: its adopted annual maximum reimbursement is available throughout the coverage period, reduced by prior reimbursements, without regard to payroll deductions collected to date.
${/if}

${#if extensions.commonFunds.hra.componentEnabled}
The HRA component follows its governing document. CommonFunds expresses HRA availability through an advance-month value. An advance value of `1` makes only the current accumulated monthly amount available. An advance value of `12` makes twelve monthly allocations available at once, but remains an HRA design choice rather than Health FSA uniform coverage.

Accelerated HRA availability does not by itself create repayment rights. Recourse exists only when stated in the HRA component document and permitted by law.
${/if}

# 8. End-of-year balances and Employer ownership

After timely eligible claims, year-end disposition follows the coverage settings and applicable component rules. If no different treatment is selected, the Employer retains unused funds and has discretion over the legally permitted use of experience gains. A displayed individual balance does not establish a right to a cash distribution.

${extensions.commonFunds.endingBalance.rule|optional}

# 9. Records and reconciliation

The administrator retains the contribution settings, elections, allocations, claims, and component balances necessary to administer the benefit and reconcile its records.

Claims contact: ${administration.serviceContacts.claims.formatted}

Appeals contact: ${administration.serviceContacts.appeals.formatted}
