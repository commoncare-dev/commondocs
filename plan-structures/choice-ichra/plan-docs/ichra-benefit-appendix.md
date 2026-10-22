---
id: plan-document.benefit-appendix.choice-ichra
title: CHOICE Individual Coverage HRA Benefit Appendix
kind: benefit-appendix
status: template
version: "1.0"
parent_document: CommonCare Welfare Benefit Plan — Core Plan Document
context_schema: ./choice-ichra-plan-document-context.schema.json
---

# CHOICE Individual Coverage HRA Benefit Appendix

Version: ${extensions.choiceIchra.document.version}<br>
Appendix Number: ${extensions.choiceIchra.document.appendixNumber}<br>
Effective Date: ${extensions.choiceIchra.document.effectiveDate|dateLong}

# Adoption and purpose

The Employer adopts this Appendix to establish an individual coverage health reimbursement arrangement (**ICHRA**) under the Plan. The ICHRA reimburses eligible expenses from Employer-provided amounts after the Participant satisfies the coverage and substantiation conditions below.

CHOICE may provide analysis and navigation concerning available individual coverage. A recommendation does not change the Participant's responsibility to select and enroll in coverage or change the terms of the policy selected.

# Employer elections

| Term | Election |
|---|---|
| Eligible class | ${extensions.choiceIchra.eligibleClass} |
| Waiting period | ${eligibility.defaultWaitingPeriod.description} |
| Monthly Employer contribution | ${extensions.choiceIchra.monthlyEmployerContribution|currencyUSD} |
| Permitted contribution variation | ${extensions.choiceIchra.contributionVariation} |
| Reimbursable expenses | ${extensions.choiceIchra.permittedExpenses} |
| Claims runout after participation ends | ${extensions.choiceIchra.claimsRunoutDays} days |

# Eligibility and class treatment

An Employee may participate only while included in the eligible class and otherwise satisfying the Plan's requirements. Class definitions and contribution variations must be administered uniformly according to the adopted schedule and applicable ICHRA class rules. If the Employer offers a traditional group health plan to another class, the class structure and any minimum-class-size requirement must be satisfied before the Plan Year begins.

# Individual coverage requirement

For each month of reimbursement, the Participant and each family member whose expense is reimbursed must be enrolled in individual health insurance coverage or Medicare that qualifies for ICHRA integration. Short-term limited-duration insurance, health care sharing, and another arrangement that is not qualifying individual coverage do not satisfy this condition.

The Plan will use reasonable procedures to verify coverage before participation and require an attestation or other permitted substantiation with each reimbursement request. A reimbursement made for a month without required coverage is not payable under this Appendix and may be corrected or recovered under the Core Plan Document.

# Opt-out and waiver

An eligible Employee may decline or opt out of the ICHRA at least annually and when otherwise required. The election must be made before reimbursement for the affected period. The Employer does not guarantee eligibility for a premium tax credit; that determination depends on the ICHRA offer, affordability, household facts, Marketplace enrollment, and applicable law.

# Reimbursements

The ICHRA reimburses only expenses within the scope elected above, incurred during participation, properly substantiated, and not reimbursed from another source. Insurance-premium reimbursement is made after proof of the expense and required individual coverage. The Participant may not receive cash instead of an unused ICHRA amount.

Reimbursements are limited to the Participant's available balance. Unused amounts remain Employer assets unless the adopted schedule expressly provides lawful carryover. The arrangement is unfunded and paid from Employer general assets unless a schedule identifies another funding method.

# Individual policy and Section 125 boundary

The individual policy is issued to the individual, not to the Employer or Plan. The insurer controls policy enrollment, coverage, premium billing, and policy claims. The Plan controls only ICHRA eligibility and reimbursement.

Salary reduction under Section 125 may not be used to pay an individual-market premium offered through an Exchange. Any permitted pre-tax payroll payment for off-Exchange individual coverage must be separately authorized and administered consistently with applicable law.

# Claims and appeals

Submit reimbursement claims to ${administration.serviceContacts.claims.formatted}. Submit appeals to ${administration.serviceContacts.appeals.formatted}. The incorporated ICHRA claims procedure states substantiation requirements, deadlines, adverse determination content, and appeal rights.

# Incorporated schedules

| Schedule | Version and effective date | Location or custodian |
|---|---|---|
${#each extensions.choiceIchra.operationalSchedules as schedule}
| ${schedule.name} | ${schedule.version}; effective ${schedule.effectiveDate|dateLong} | ${schedule.location} |
${/each}
