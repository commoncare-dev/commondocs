---
id: plan-document.package-adoption.common-funded
title: CommonFunded Coverage Overlay
kind: package-adoption-schedule
status: template
version: "2.0"
parent_document: CommonCare Welfare Benefit Plan — Core Plan Document
context_schema: ./common-funded-plan-document-context.schema.json
---

# CommonFunded Coverage Overlay

Version: ${extensions.commonFunded.document.version}<br>
Effective Date: ${extensions.commonFunded.document.effectiveDate|dateLong}

## 1. Adoption and purpose

The Employer adopts CommonFunded as a coordination structure between the Major Medical Coverage and CommonFunds identified below. CommonFunded is designed to use Employer benefit dollars efficiently: the Employer may spend less on insurance premiums than it would spend for richer first-dollar coverage and may direct the resulting allowance to CommonFunds, where the amount can reduce a Participant's net exposure to eligible out-of-pocket costs with greater flexibility.

The adopted allocation objective is: ${extensions.commonFunded.allocationObjective}

The Plan Administrator will evaluate and administer this structure using the adopted allowance, the cost and terms of the underlying coverage, and the eligible out-of-pocket expenses payable through CommonFunds.

## 2. Incorporated coverage documents

| Function | Adopted benefit | Governing document |
|---|---|---|
| Major medical coverage (${extensions.commonFunded.majorMedicalCoverage.coverageType|titleCase}) | ${extensions.commonFunded.majorMedicalCoverage.name} | `${extensions.commonFunded.majorMedicalCoverage.documentId}` |
| Flexible expense funding | ${extensions.commonFunded.commonFunds.name} | `${extensions.commonFunded.commonFunds.documentId}` |
| Participant-specific allowance | ${enrollmentSchedule.name} | `${enrollmentSchedule.documentId}` |

The Major Medical Coverage document controls eligibility, enrollment, covered services, exclusions, networks, cost sharing, claims, appeals, and continuation for that coverage. The CommonFunds document controls the legal character, allocation, availability, eligible expenses, forfeiture, reimbursement, and claims rules for CommonFunds. This overlay does not restate or enlarge either benefit.

## 3. CommonFunded allowance

The allowance applicable to a Participant is stated in the Enrollment Schedule for that Participant's eligible class, coverage period, and coverage election. The Enrollment Schedule is incorporated by reference but the amount is not restated in this document. ${extensions.commonFunded.bandingDescription}

Age or location adjustments must be administered consistently for similarly situated Participants and only to the extent permitted by the law and rules governing the underlying coverage. The Plan Administrator will retain the applicable age, location, class, formula, and effective-date inputs for each allowance determination.

## 4. Coordination and controlling terms

Enrollment in, eligibility for, or payment under one underlying benefit does not itself establish entitlement under the other. Each claim or payment must be assigned to the component legally responsible for it. If this overlay conflicts with an underlying coverage document, that underlying document controls the benefit it governs; the applicable Enrollment Schedule controls the Participant's allowance amount.
