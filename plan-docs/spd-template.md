---
id: plan-document.spd
title: CommonCare Welfare Benefit Plan — Summary Plan Description
kind: spd-template
status: template
version: "1.0"
context_schema: ./plan-document-context.schema.json
source_documents:
  - ./core-doc-template.md
  - ./appendix-a.md
  - ./appendix-b.md
---

# ${plan.name}
## Summary Plan Description

SPD ID: ${spd.documentId}<br>
Version: ${spd.version}<br>
Issued: ${spd.issueDate|dateLong}<br>
Plan Year: ${plan.year.startDate|dateLong} through ${plan.year.endDate|dateLong}

This Summary Plan Description explains the Plan to ${spd.audience}. ${spd.howToUse}

The governing Plan consists of the Core Plan Document and adopted Benefit Appendices. This SPD summarizes those terms; it does not add a benefit or silently change the governing documents. Contact the Plan Administrator if this SPD and another Plan document appear inconsistent.

# Quick plan information

| Item | Information |
|---|---|
| Plan Sponsor | ${sponsor.legalName} |
| Employer EIN | ${sponsor.ein} |
| ERISA plan number | ${plan.erisaPlanNumber} |
| Original effective date | ${plan.originalEffectiveDate|dateLong} |
| Plan Administrator | ${administration.planAdministrator.name} |
| Plan Administrator contact | ${administration.planAdministrator.contact.formatted} |
| Agent for service of legal process | ${administration.agentForServiceOfProcess.name}, ${administration.agentForServiceOfProcess.address.formatted} |
| Named fiduciary | ${administration.namedFiduciary.name} |

# Benefits included in the Plan

| Benefit | What it provides | How it is funded | Effective date |
|---|---|---|---|
${#each benefits as benefit}
| ${benefit.name} | ${benefit.participantSummary} | ${benefit.fundingDescription} | ${benefit.effectiveDate|dateLong} |
${/each}

The table identifies adopted Plan components. You receive only a benefit for which you satisfy the applicable eligibility and enrollment rules.

# Eligibility, enrollment, and when coverage ends

The Plan's general eligible class is: ${eligibility.defaultClass.description}.

The general waiting period is: ${eligibility.defaultWaitingPeriod.description}.

To enroll: ${eligibility.enrollmentProcedure}

General coverage termination rule: ${eligibility.coverageTermination}

Rehire rule: ${eligibility.rehireRule}

Approved leaves: ${eligibility.leaveRule}

A benefit section below controls if it states a different or more specific rule.

# Elections and contributions

The Plan's election period is: ${cafeteriaPlan.electionPeriod}

To request a permitted midyear change: ${cafeteriaPlan.midyearElectionProcedure}

The applicable benefit section or contribution schedule states the Employer contribution, Participant contribution, and whether payroll deductions are intended to be pre-tax or after-tax. Tax treatment depends on the governing arrangement and applicable law.

# Benefit-specific information

<!-- BENEFIT_SECTIONS -->

# Claims, appeals, and help

Use the benefit-specific instructions above when they identify a different claim or appeal contact.

| Question or request | Contact |
|---|---|
| Eligibility and enrollment | ${administration.serviceContacts.eligibility.formatted} |
| Claims | ${administration.serviceContacts.claims.formatted} |
| Appeals | ${administration.serviceContacts.appeals.formatted} |
| Provider navigation | ${administration.serviceContacts.providerNavigation.formatted} |
| Continuation coverage | ${administration.serviceContacts.continuation.formatted} |
| Privacy | ${administration.serviceContacts.privacy.formatted} |

An adverse benefit determination will explain the material reason, identify the controlling term, state what additional information is needed when applicable, and describe how to request review. The benefit-specific claims procedure controls filing methods and deadlines.

# Administration, records, and corrections

The Plan Administrator interprets Plan terms, determines eligibility and benefit entitlement, establishes reasonable procedures, delegates identified functions, and corrects administrative errors. A Participant must provide complete and accurate information reasonably needed to administer eligibility, elections, claims, coordination, and reporting.

When an error occurs, the Plan Administrator will determine what should have occurred under the governing terms, document the correction, and use a reasonable legally permitted method to correct records, contributions, coverage, or payments. Before materially adverse recovery action, the Plan Administrator will provide the explanation and review opportunity required by the Plan or applicable law.

# Privacy

The Plan uses and discloses personal information only as permitted by the governing documents and applicable law. Where HIPAA applies, the Plan maintains the required privacy and security provisions, limits access to authorized Plan-administration functions, and provides the applicable privacy notice.

# Amendment and termination

The Employer may amend or terminate the Plan or a benefit according to the governing documents and applicable law. Ending one benefit does not automatically end another. The Plan retains prior versions so the Plan Administrator can identify the terms governing an earlier service, event, or claim.

${#if spd.statementOfErisaRightsApplies}
# Statement of ERISA rights

As a Participant in an ERISA-covered benefit, you are entitled to rights and protections under ERISA. You may examine governing Plan documents and required filings without charge at the Plan Administrator's office and obtain copies upon written request; a reasonable copying charge may apply where permitted. You are entitled to receive required summaries of the Plan's annual financial report and to a fair process for benefit claims and appeals.

ERISA also imposes duties on the people responsible for operating the Plan. They must act prudently and in the interest of Plan participants and beneficiaries. No person may fire you or otherwise discriminate against you to prevent you from obtaining a benefit or exercising an ERISA right.

If a claim for an ERISA-covered benefit is denied or ignored, you may be entitled to know why, obtain relevant documents without charge, and appeal within required time limits. After completing any review process required by the Plan, you may have a right to bring a civil action under ERISA section 502(a). If Plan fiduciaries misuse Plan money, or if you are discriminated against for asserting ERISA rights, you may seek assistance from the U.S. Department of Labor or file suit in federal court. A court may decide who pays costs and legal fees.

For questions about the Plan, contact the Plan Administrator. For questions about ERISA rights or assistance obtaining documents, contact the nearest office of the Employee Benefits Security Administration, U.S. Department of Labor, or use the agency's current public contact information.
${/if}
