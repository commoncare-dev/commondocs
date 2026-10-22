---
id: spd-section.self-funded-basic-mec
title: Self-Funded Basic MEC — SPD Section
kind: spd-section-template
context_schema: ./self-funded-mec-plan-document-context.schema.json
source_document: ./mec-benefit-appendix.md
---

## Self-Funded Basic MEC

This is employee-only, self-funded coverage intended to provide minimum essential coverage through required preventive services and any optional benefits expressly adopted for the Plan Year. It is not comprehensive major medical coverage and does not provide minimum value unless the governing Benefit Appendix expressly says otherwise.

| Term | Description |
|---|---|
| Effective date | ${extensions.selfFundedMec.document.effectiveDate|dateLong} |
| Eligible class | ${eligibility.defaultClass.description} |
| Waiting period | ${eligibility.defaultWaitingPeriod.description} |
| Enrollment tier | ${extensions.selfFundedMec.enrollmentTier|titleCase} |
| Intended MEC status | ${extensions.selfFundedMec.isMec|yesNo} |
| Intended minimum-value status | ${extensions.selfFundedMec.isMv|yesNo} |
| Intended HDHP status | ${extensions.selfFundedMec.isHdhp|yesNo} |

### What is covered

The benefit covers preventive items and services required for the applicable Plan Year when furnished through the Plan's approved-provider process. This includes applicable evidence-based preventive services, routine immunizations, and HRSA-supported preventive services for children, adolescents, and women. Required preventive services are covered without a deductible, copayment, coinsurance, or other Participant payment when obtained according to the Plan's procedures.

No other service is covered unless it is expressly adopted as an optional benefit. Inpatient and outpatient treatment, emergency services, diagnostic or illness care, nonpreventive prescriptions, maternity and delivery care, surgery, dental care, vision treatment, and other nonpreventive care are generally excluded unless an adopted optional benefit states otherwise.

### How to obtain a covered service

Contact provider navigation at ${administration.serviceContacts.providerNavigation.formatted}. Provider navigation will identify or approve a qualified provider, confirm practical availability, document the approved price and included services, and provide usable instructions. If no accessible approved provider can furnish a required preventive service, the Plan will arrange or cover an available qualified provider without cost sharing.

### Claims and appeals

Submit claims through ${administration.serviceContacts.claims.formatted}. Submit appeals through ${administration.serviceContacts.appeals.formatted}. A provider-navigation request that actually seeks a benefit determination or challenges a denial will be classified according to its substance.

### Important limits

MEC status does not mean this benefit is comprehensive coverage or provides minimum value. Intended HDHP status does not guarantee that an individual is eligible to contribute to an HSA; eligibility also depends on the individual's other coverage and circumstances.
