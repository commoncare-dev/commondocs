---
id: spd-section.common-funded
title: CommonFunded — SPD Section
kind: spd-section-template
context_schema: ./common-funded-plan-document-context.schema.json
source_document: ./common-funded-adoption-schedule.md
---

## How CommonFunded works

CommonFunded pairs ${extensions.commonFunded.majorMedicalCoverage.name} with ${extensions.commonFunded.commonFunds.name}. The arrangement is designed to lower your combined exposure to premiums and eligible out-of-pocket costs by pairing major medical protection with a flexible allowance, instead of putting the maximum available benefit dollars into higher premiums for lower-deductible coverage.

Your combined cost is determined by the premium you pay, the allowance that applies to you, your healthcare use, and the cost-sharing terms of your major medical coverage. The coverage and allowance documents give you the information needed to compare that combined cost.

Your major medical coverage is governed by `${extensions.commonFunded.majorMedicalCoverage.documentId}`. That document explains covered services, exclusions, networks, cost sharing, claims, and appeals. CommonFunds is governed by `${extensions.commonFunded.commonFunds.documentId}`. That document explains how funds are classified, when they become available, eligible expenses, reimbursements, claims, and any forfeiture or carryover rule.

Your allowance is shown in ${enrollmentSchedule.name} (`${enrollmentSchedule.documentId}`), based on the eligible class, coverage period, and coverage election that apply to you. ${enrollmentSchedule.deliveryMethod}

${extensions.commonFunded.bandingDescription} The underlying coverage rules control whether and how those adjustments may be used. If an amount in an enrollment display conflicts with this SPD, the applicable Enrollment Schedule controls the amount and the governing benefit document controls how the allowance may be used.
