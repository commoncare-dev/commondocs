---
class: spd
template_set: {"key":"choice-ichra","name":"CHOICE ICHRA","implementations":{"spd":{"key":"summary","role":"summary","order":10,"required":true,"description":"Participant-facing CHOICE ICHRA summary for the base SPD; excludes detailed governing provisions."}}}
id: spd-section.choice-ichra
title: CHOICE ICHRA — SPD Section
kind: spd-section-template
context_schema: ./choice-ichra-plan-document-context.schema.json
source_document: ./ichra-benefit-appendix.md
---

## CHOICE Individual Coverage HRA

The ICHRA provides up to ${extensions.choiceIchra.monthlyEmployerContribution|currencyUSD} per month to reimburse ${extensions.choiceIchra.permittedExpenses}. You must be in the eligible class—${extensions.choiceIchra.eligibleClass}—and maintain qualifying individual health insurance or Medicare for every month reimbursed.

The standard ICHRA amount is $1 per month unless the Employer adopts a different amount. Separate health-flex credits, general flex credits, and salary reductions are not added to the ICHRA amount merely because they appear together in enrollment. Your required ICHRA notice and enrollment records identify your actual maximum.

You may opt out at least annually. An ICHRA offer can affect premium-tax-credit eligibility even if you decline it. CommonCare may help compare coverage, but you select and enroll in your individual policy and the insurer controls that policy.

Submit reimbursement claims to ${administration.serviceContacts.claims.formatted}. Claims must include proof of the expense and required coverage. Unused amounts are not payable as cash. Claims incurred before participation ends may be submitted for ${extensions.choiceIchra.claimsRunoutDays} days afterward.

Appeals contact: ${administration.serviceContacts.appeals.formatted}.
