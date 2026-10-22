---
id: employer-policy.alternative-companion
title: Alternative Companion Employer Neutrality Policy
kind: employer-policy-template
status: template
version: "1.0"
context_schema: ./alternative-companion-context.schema.json
outside_plan: true
---

# Alternative Companion Employer Neutrality Policy

Version: ${extensions.alternativeCompanion.document.version}<br>
Effective Date: ${extensions.alternativeCompanion.document.effectiveDate|dateLong}

# Purpose

${sponsor.legalName} permits Employees to examine and independently purchase private healthcare alternatives through a separate voluntary environment. Those alternatives are not part of the Employer's Plan unless a formal Plan document expressly adopts them.

# Employer-sponsored benefits

The Employer-sponsored Plan consists only of the benefits identified in the governing Plan documents and enrollment materials. Current description: ${extensions.alternativeCompanion.employerSponsoredPlanDescription}

# Required separation

The Employer will not select, negotiate, endorse, recommend, fund, contract for, or administer a private alternative presented through Alternative Companion. It will not answer product-specific sales questions, handle membership or payment disputes, receive product compensation, or condition employment or compensation on enrollment.

${extensions.alternativeCompanion.marketplaceOperator} operates the separate marketplace and applies its disclosed analytical process independently. Product contact: ${extensions.alternativeCompanion.marketplaceContact}.

Each independent option must be labeled: **Not employer sponsored. Not part of the Employer's group health plan. Voluntary individual purchase paid with post-tax funds.**

# Payroll and compensation

Post-tax payroll remittance availability: ${extensions.alternativeCompanion.postTaxPayrollAvailable|yesNo}. When used, payroll records must identify the payment as the Employee's post-tax deduction, show zero Employer plan contribution, and remit the amount to the Employee-selected provider without Employer discretion over the product.

The Employer's monthly unrestricted taxable allowance is ${extensions.alternativeCompanion.monthlyUnrestrictedTaxableAllowance|currencyUSD}. It is paid as wages whether or not the Employee purchases a private option. It may not require proof of purchase or be forfeited for declining the option.

# Records

The Employer will retain the neutrality policy, Plan boundary, payroll authorization, post-tax classification, participant acknowledgment, and evidence that product agreements and disputes remain between the Employee and provider.
