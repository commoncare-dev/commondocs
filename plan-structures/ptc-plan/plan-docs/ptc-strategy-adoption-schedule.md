---
id: plan-document.strategy-adoption.ptc-plan
title: Premium Tax Credit Plan Strategy Adoption Schedule
kind: strategy-adoption-schedule
status: template
version: "1.0"
context_schema: ./ptc-plan-document-context.schema.json
---

# Premium Tax Credit Plan Strategy Adoption Schedule

Version: ${extensions.ptcPlan.document.version}<br>
Effective Date: ${extensions.ptcPlan.document.effectiveDate|dateLong}

# Purpose and boundary

The Employer adopts this administrative strategy to coordinate its formal benefits with Employees who independently enroll in Marketplace coverage and may qualify for a premium tax credit (**PTC**). This schedule does not establish, endorse, or reimburse an individual Marketplace policy.

# Employer configuration

| Term | Election |
|---|---|
| Employer ALE status | ${extensions.ptcPlan.employerAleStatus|titleCase} |
| MEC offer governing document | ${extensions.ptcPlan.mecOfferDocumentId} |
| PTC claimant must decline MEC enrollment | ${extensions.ptcPlan.ptcParticipantsMustDeclineMec|yesNo} |
| Employer-sponsored benefits remaining available | ${extensions.ptcPlan.employerSponsoredBenefits} |
| Monthly unrestricted taxable allowance | ${extensions.ptcPlan.monthlyUnrestrictedTaxableAllowance|currencyUSD} |
| Post-tax payroll remittance available | ${extensions.ptcPlan.payrollRemittanceAvailable|yesNo} |
| Participant acknowledgment deadline | ${extensions.ptcPlan.acknowledgmentDeadline} |

# Operating rules

The administrator must distinguish an offer of employer coverage, enrollment in that coverage, affordability, minimum value, and PTC eligibility. The Participant is responsible for reporting the Employer offer and household facts to the Marketplace accurately.

An Employee using the PTC strategy must make separate elections for each employer-sponsored benefit and the independently selected Marketplace policy. A Participant claiming a PTC may not be enrolled in the Employer MEC identified above when enrollment would disqualify the credit.

The Employer may provide dental, vision, HSA contributions, excepted benefits, and other separately governed benefits only to the extent those arrangements are compatible with the Participant's coverage and applicable law. Each remains controlled by its own document.

The unrestricted taxable allowance is paid as wages whether or not the Employee purchases health coverage. It may not require proof of a Marketplace premium, be forfeited for declining coverage, or be described as reimbursement. Any payroll remittance for an individual policy uses the Employee's post-tax money and must remain voluntary and separate from the Employer plan.

# Required records

The Employer will retain the MEC offer and waiver, benefit elections, payroll classification, participant acknowledgment, Marketplace notices received, and records supporting the Employer's ALE analysis. CommonCare decision support does not determine the Participant's final tax-credit eligibility.
