---
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

Your CommonFunds pathway is **${extensions.commonFunds.pathway|titleCase}**. The Employer makes ${extensions.commonFunds.groupCoverage.description} available under `${extensions.commonFunds.groupCoverage.documentId}`.

### How contributions are classified

| Amount | Treatment |
|---|---|
| Monthly Employer-only amount | ${extensions.commonFunds.allocation.monthlyEmployerOnlyAmount|currencyUSD}; allocated under the adopted HRA or other Employer-benefit rules |
| Monthly health-only flex credit | ${extensions.commonFunds.allocation.monthlyHealthOnlyFlexCredit|currencyUSD}; usable only for adopted qualified medical benefits |
| Monthly cashable flex credit | ${extensions.commonFunds.allocation.monthlyCashableFlexCredit|currencyUSD}; treated as salary reduction if you elect it into the Health FSA, or taxable wages when validly elected as cash |
| Direct annual Health FSA election | ${extensions.commonFunds.allocation.annualDirectEmployeeFsaElection|currencyUSD}; Participant salary reduction |

### Your deductible

CommonFunds pays an otherwise eligible expense only after the applicable deductible has been satisfied when the deductible restriction applies to the paying component. Your deductible is identified by ${extensions.commonFunds.deductible.enrollmentScheduleReference}.

Accumulation rule: ${extensions.commonFunds.deductible.accumulationRule}<br>
Expenses credited toward it: ${extensions.commonFunds.deductible.creditedExpenses}<br>
Benefits available before it is met: ${extensions.commonFunds.deductible.preDeductibleBenefitRule}

Deductible satisfaction is determined on the date an expense is incurred. An expense incurred too early does not become reimbursable merely because you meet the deductible later. Evidence required: ${extensions.commonFunds.deductible.satisfactionEvidence}

### Health FSA portion

Your Health FSA maximum benefit is ${extensions.commonFunds.healthFsa.annualMaximumBenefit|currencyUSD}. The full maximum is available during your coverage period, reduced by prior reimbursements, even if payroll deductions collected to date are lower. This is the uniform coverage rule.

The Health FSA carryover election is ${extensions.commonFunds.healthFsa.carryoverAllowed|yesNo}; the grace-period election is ${extensions.commonFunds.healthFsa.gracePeriodAllowed|yesNo}. Unused-amount rule: ${extensions.commonFunds.healthFsa.unusedAmountRule}

### HRA portion

The CommonFunds HRA component is **${extensions.commonFunds.hra.componentType|titleCase}**. The coordinated HRA coverage is **${extensions.commonFunds.hra.coordinatedCoverageType|titleCase}**, governed by `${extensions.commonFunds.hra.documentId}`. On an ICHRA pathway, the CommonFunds HRA component is `none`; no EBHRA is offered, the ICHRA document controls the ICHRA, and CommonFunds operates through the Health FSA component only.

${#if extensions.commonFunds.hra.componentEnabled}
The HRA accrues at ${extensions.commonFunds.hra.monthlyAccrual|currencyUSD} per month. The Plan makes ${extensions.commonFunds.hra.advanceMonths} month(s) available at a time, subject to the annual amount and prior reimbursements. This is a Plan availability rule, not Health FSA uniform coverage. Recourse for an unaccrued advance: ${extensions.commonFunds.hra.recourseForUnaccruedAdvance|yesNo}.

HRA carryover election: ${extensions.commonFunds.hra.carryoverAllowed|yesNo}. ${extensions.commonFunds.hra.carryoverRule}
${/if}

### Claims and balances

CommonFunds routes each substantiated expense to an eligible component and prevents duplicate reimbursement. A combined displayed balance may include amounts with different availability and year-end rules; it is not cash compensation or a vested account.

Claims contact: ${administration.serviceContacts.claims.formatted}. Appeals contact: ${administration.serviceContacts.appeals.formatted}.
