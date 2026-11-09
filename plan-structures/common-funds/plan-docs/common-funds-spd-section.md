---
template_set: {"key":"common-funds","name":"CommonFunds","implementations":{"spd":{"key":"summary","role":"summary","order":10,"required":true,"description":"Participant-facing implementation of CommonFunds. Insert into the base SPD; do not insert the detailed governing components into the SPD."}}}
id: spd-section.common-funds
title: CommonFunds — SPD Section
kind: spd-section-template
context_schema: ./common-funds-plan-document-context.schema.json
source_documents:
  - ./common-funds-administration-appendix.md
  - ./common-funds-health-fsa-component.md
  - ./common-funds-ebhra-component.md
---

## CommonFunds

CommonFunds is one coordinated way to receive and use several kinds of health-benefit funding. The administrator classifies each amount before applying a limit or paying a claim. This lets Employer-only funding and Participant-directed funding use the rules appropriate to each without requiring you to navigate separate systems.

Your offered components and any coordinated medical coverage are identified in your coverage and enrollment records.

### Contributions and elections

Employer-only contributions, health-only flex credits, cashable flex credits, and Participant salary reductions retain their respective classifications. Cashable credits elected into the Health FSA count as salary reduction. Amounts, class-specific contribution methods, and Participant elections are determined through the Plan's contribution settings and enrollment; this document does not establish a separate fixed allocation or Participant election.

### Your deductible

Deductible amounts, accumulation periods, and applicable exceptions follow the coverage settings and are communicated through coverage and enrollment.

Unless expressly excluded by an applicable Appendix or the terms of coordinated coverage, all expenses for medical care described in Code section 213(d) are credited toward the applicable CommonFunds deductible upon proper billing evidence.

Crediting an expense toward a deductible does not establish a right to reimbursement. An expense incurred before an applicable deductible is satisfied does not become reimbursable solely because the deductible is later satisfied.

Pre-deductible reimbursements are limited to preventive care expressly enabled by the applicable coverage settings and permitted by law.

A Health FSA may operate on a post-deductible basis where provided by the coverage settings. Where HSA compatibility is intended, applicable statutory restrictions continue to apply. Uniform coverage determines the available annual Health FSA benefit; it does not waive an applicable deductible.

For HSA-compatible post-deductible benefits, only expenses covered by the coordinated HDHP count toward satisfaction of its required deductible.

${#if extensions.commonFunds.healthFsa.componentEnabled}
### Health FSA portion

Your elected annual Health FSA benefit is available during your coverage period, reduced by prior reimbursements, even if payroll deductions collected to date are lower. This is the uniform coverage rule. Participant salary reductions, including cashable credits elected into the Health FSA, may not exceed the applicable IRS maximum. ${extensions.commonFunds.healthFsa.salaryReductionLimitDescription}

${/if}

${#if extensions.commonFunds.hra.componentEnabled}
### HRA portion

Your HRA is funded through Employer-only allocations under the contribution settings and enrollment records. Availability, any advances, and applicable annual limits follow the coverage settings. HRA availability does not follow Health FSA uniform coverage.

${/if}

### Claims and balances

CommonFunds routes each substantiated expense to an eligible component and prevents duplicate reimbursement. A combined displayed balance may include amounts with different availability and year-end rules; it is not cash compensation or a vested account.

After timely eligible claims, year-end disposition follows the coverage settings and applicable component rules. If no different treatment is selected, the Employer retains unused funds and has discretion over the legally permitted use of experience gains. A displayed individual balance does not establish a right to a cash distribution.

${extensions.commonFunds.endingBalance.rule|optional}

Claims contact: ${administration.serviceContacts.claims.formatted}. Appeals contact: ${administration.serviceContacts.appeals.formatted}.
