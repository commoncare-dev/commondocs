---
template_set: {"key":"welfare-plan","name":"Welfare Benefit Plan","implementations":{"plan-document":{"key":"appendix-a","role":"appendix","order":10,"required":true,"requires":["base"],"description":"Employer, plan, administrator, and eligibility information for the core welfare plan."}}}
id: plan-document.core-appendix-a
title: Employer and Plan Information
kind: plan-document-template
context_schema: ./plan-document-context.schema.json
---

# Appendix A — Employer and Plan Information

This Appendix A forms part of the CommonCare Welfare Benefit Plan Core Plan Document.

| Plan information | Adopted value |
|---|---|
| Employer legal name | ${sponsor.legalName} |
| Employer EIN | ${sponsor.ein} |
| Employer address | ${sponsor.address.formatted} |
| Plan name | ${plan.name} |
| ERISA plan number | ${plan.erisaPlanNumber} |
| Current effective date | ${plan.effectiveDate} |
| Plan Year | ${plan.year.startDate} through ${plan.year.endDate} |
| Plan Administrator | ${administration.planAdministrator.name} |
| Plan Administrator address | ${administration.planAdministrator.address.formatted} |
| Plan Administrator telephone/email | ${administration.planAdministrator.contact.formatted} |
| Agent for service of legal process | ${administration.agentForServiceOfProcess.name}, ${administration.agentForServiceOfProcess.address.formatted} |
| Named fiduciary, if different | ${administration.namedFiduciary.name} |
| General eligibility class | ${eligibility.defaultClass.description} |
| General waiting period | ${eligibility.defaultWaitingPeriod.description} |
| Section 125 elections | Integrated into this Plan and administered through its enrollment workflow. |

## Participating Employers

The following employers have adopted the Plan for their eligible Employees. The Plan Sponsor is not repeated in this table.

| Participating Employer | Employer ID |
|---|---|
${#each sponsor.participatingEmployers as participatingEmployer}
| ${participatingEmployer.legalName} | ${participatingEmployer.id} |
${/each}

The Core Plan Document states the general enrollment, termination, rehire, and leave rules. Benefit-specific eligibility, contributions, and other terms stated in an adopted Benefit Appendix control for that benefit.
