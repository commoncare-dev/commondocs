---
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

Version: ${extensions.commonFunds.document.version}<br>
Appendix Number: ${extensions.commonFunds.document.appendixNumber}<br>
Effective Date: ${extensions.commonFunds.document.effectiveDate|dateLong}

# 1. Adoption and purpose

The Employer adopts CommonFunds as one coordinated account-based medical benefit experience under the Plan. CommonFunds receives elections and Employer allocations, classifies each amount under the governing rules, routes each claim to the component that may lawfully pay it, and presents the resulting availability to the Participant.

CommonFunds does not assume that every dollar has the same source or rules. The classification of an amount determines the applicable contribution limit, availability rule, eligible-expense scope, Employer or Participant control, claim procedure, and year-end treatment.

# 2. Required underlying group coverage

CommonFunds is offered only with the following non-excepted group health plan coverage made available by the Employer:

| Coverage | Governing document | Non-excepted coverage offered |
|---|---|---|
| ${extensions.commonFunds.groupCoverage.description} | ${extensions.commonFunds.groupCoverage.documentId} | ${extensions.commonFunds.groupCoverage.isOffered|yesNo} |

The required group coverage may be narrow MEC when otherwise valid for the adopted pathway. Eligibility to use a particular CommonFunds component remains subject to that component's additional conditions.

# 3. Adopted pathway and component documents

| Term | Adopted value |
|---|---|
| CommonFunds pathway | ${extensions.commonFunds.pathway|titleCase} |
| CommonFunds HRA component enabled | ${extensions.commonFunds.hra.componentEnabled|yesNo} |
| CommonFunds HRA component | ${extensions.commonFunds.hra.componentType|titleCase} |
| Coordinated HRA coverage | ${extensions.commonFunds.hra.coordinatedCoverageType|titleCase} |
| Coordinated HRA governing document | ${extensions.commonFunds.hra.documentId} |
| Health FSA governing document | ${extensions.commonFunds.healthFsa.documentId} |

On the excepted pathway, the CommonFunds HRA component must satisfy the EBHRA component document. On an ICHRA pathway, the CommonFunds HRA component is `none`: no EBHRA is offered, the separately adopted ICHRA document governs the ICHRA, and CommonFunds operates through its Health FSA component only. On an integrated-group pathway, the integrated HRA document governs any HRA component.

# 4. Classification of contributions

CommonFunds classifies an amount when the election or allocation becomes binding, before applying a component limit or paying a claim.

| Source or election | Treatment |
|---|---|
| Genuinely Employer-only and unavailable as cash | HRA funding when the adopted HRA pathway permits it; otherwise another expressly adopted Employer benefit |
| Cashable credit elected into the Health FSA | Participant salary reduction for Health FSA limit and availability purposes |
| Direct Participant payroll election into the Health FSA | Participant salary reduction |
| True Employer Health FSA contribution | Employer Health FSA funding, limited by the applicable maximum-benefit test and governing documents |
| Cashable amount elected as wages | Taxable compensation; not an account-based Plan balance |

An amount does not become Employer-only merely because the Employer initially described it as an allowance or credit. If the Participant could receive the amount as cash or another taxable benefit and elects it into the Health FSA, it is salary reduction in substance.

# 5. Adopted contribution inputs and allocation order

| Input | Adopted amount or rule |
|---|---|
| Monthly Employer-only amount | ${extensions.commonFunds.allocation.monthlyEmployerOnlyAmount|currencyUSD} |
| Monthly health-only flex credit | ${extensions.commonFunds.allocation.monthlyHealthOnlyFlexCredit|currencyUSD} |
| Monthly cashable flex credit | ${extensions.commonFunds.allocation.monthlyCashableFlexCredit|currencyUSD} |
| Annual direct Participant Health FSA election | ${extensions.commonFunds.allocation.annualDirectEmployeeFsaElection|currencyUSD} |
| Priority rule | ${extensions.commonFunds.allocation.priorityRule} |

The administrator will reject, redirect, or return an amount that cannot lawfully fit within the selected component and election. It may not leave the amount in a unified balance without a valid classification.

# 6. Claim routing

## CommonFunds deductible

| Term | Adopted rule |
|---|---|
| Deductible enabled | ${extensions.commonFunds.deductible.enabled|yesNo} |
| Applies to Health FSA | ${extensions.commonFunds.deductible.appliesToHealthFsa|yesNo} |
| Applies to HRA | ${extensions.commonFunds.deductible.appliesToHra|yesNo} |
| Amount source | ${extensions.commonFunds.deductible.enrollmentScheduleReference} |
| Accumulation | ${extensions.commonFunds.deductible.accumulationRule} |
| Expenses credited | ${extensions.commonFunds.deductible.creditedExpenses} |
| Before-deductible benefits | ${extensions.commonFunds.deductible.preDeductibleBenefitRule} |
| Evidence of satisfaction | ${extensions.commonFunds.deductible.satisfactionEvidence} |

When enabled for a component, CommonFunds does not reimburse an expense incurred before the applicable deductible is satisfied unless the expense falls within the adopted before-deductible benefit rule. An expense does not become reimbursable later merely because the Participant subsequently satisfies the deductible. The Plan Administrator must determine deductible status as of the date the expense was incurred and retain the evidence used.

For a Health FSA intended to preserve HSA eligibility, the restriction is administered as a post-deductible Health FSA: before the applicable statutory minimum deductible is satisfied, it may reimburse only preventive care or another category permitted without destroying HSA eligibility. The Enrollment Schedule may use a higher deductible, but not a lower one, when HSA compatibility depends on the post-deductible design.

The administrator applies the following sequence to every reimbursement request:

1. Determine the expense, service date, claimant, and substantiation.
2. Determine which adopted components could reimburse that expense.
3. Determine whether the CommonFunds deductible applied to that component was satisfied on the expense date.
4. Apply any HSA-compatible limited-purpose or post-deductible restriction.
5. Apply the component priority stated in the operational schedule.
6. Confirm the component's available amount under its own availability rule.
7. Pay from that component and retain the source, deductible determination, rule, and remaining component balance.

The same expense may not be reimbursed twice. A Participant-facing combined balance is a display of component availability, not a new source of benefits.

# 7. Availability

The Health FSA component follows uniform coverage: its adopted annual maximum reimbursement is available throughout the coverage period, reduced by prior reimbursements, without regard to payroll deductions collected to date.

${#if extensions.commonFunds.hra.componentEnabled}
The HRA component follows its governing document. CommonFunds expresses HRA availability through an advance-month value. An advance value of `1` makes only the current accumulated monthly amount available. An advance value of `12` makes twelve monthly allocations available at once, but remains an HRA design choice rather than Health FSA uniform coverage.

Accelerated HRA availability does not by itself create repayment rights. Recourse exists only when stated in the HRA component document and permitted by law.
${/if}

# 8. End-of-year balances and Employer ownership

The default rule is: ${extensions.commonFunds.endingBalance.defaultRule}

No carryover, rollover, or grace period applies unless the applicable component document expressly adopts it. After payment of timely eligible claims and expiration of any expressly adopted runout, unused amounts remain or revert to the Employer or Plan, subject to applicable plan-asset and cafeteria-plan rules. A displayed balance is not vested compensation and is not payable as cash merely because it was visible to the Participant.

# 9. Records and reconciliation

The administrator will maintain a component ledger capable of reconstructing each amount from source through election, allocation, availability, claim payment, forfeiture, carryover, correction, and final accounting. Payroll, elections, claims, and displayed balances must be reconciled at the frequency stated in the operational schedule.

Claims contact: ${administration.serviceContacts.claims.formatted}<br>
Appeals contact: ${administration.serviceContacts.appeals.formatted}

# 10. Incorporated schedules

| Schedule | Version and effective date | Location or custodian |
|---|---|---|
${#each extensions.commonFunds.operationalSchedules as schedule}
| ${schedule.name} | ${schedule.version}; effective ${schedule.effectiveDate|dateLong} | ${schedule.location} |
${/each}
