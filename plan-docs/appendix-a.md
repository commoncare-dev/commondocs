---
id: plan-document.core-appendix-a
title: Employer and Plan Information
kind: plan-document-template
context_schema: ./schemas/plan-document-context.schema.json
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
| Original effective date | ${plan.originalEffectiveDate} |
| Current effective date | ${plan.effectiveDate} |
| Plan Year | ${plan.year.startDate} through ${plan.year.endDate} |
| Plan Administrator | ${administration.planAdministrator.name} |
| Plan Administrator address | ${administration.planAdministrator.address.formatted} |
| Plan Administrator telephone/email | ${administration.planAdministrator.contact.formatted} |
| Agent for service of legal process | ${administration.agentForServiceOfProcess.name}, ${administration.agentForServiceOfProcess.address.formatted} |
| Named fiduciary, if different | ${administration.namedFiduciary.name} |
| General eligibility class | ${eligibility.defaultClass.description} |
| General waiting period | ${eligibility.defaultWaitingPeriod.description} |

Benefit-specific eligibility, contributions, and other terms stated in an adopted Benefit Appendix control for that benefit.
