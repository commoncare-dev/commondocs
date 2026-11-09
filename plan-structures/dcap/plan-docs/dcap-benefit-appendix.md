---
class: coverage
template_set: {"key":"dcap","name":"Dependent Care Assistance","implementations":{"plan-document":{"key":"administration","role":"appendix","order":10,"required":true,"description":"Standalone Section 129 dependent care program; no CommonFunds component required."}}}
id: plan-document.benefit-appendix.dcap
title: Dependent Care Assistance Program Appendix
kind: benefit-appendix
status: template
version: "1.0"
context_schema: ./dcap-plan-document-context.schema.json
---

# Dependent Care Assistance Program

Effective Date: ${extensions.dcap.effectiveDate|dateLong}

# Separate program and adoption

The Employer establishes this identifiable, separate written dependent care assistance program (**DCAP**) under Code Section 129. This program is adopted independently of CommonFunds and may be funded through the Section 125 arrangement in Appendix D. It is not a Health FSA, HRA, or medical reimbursement benefit. This Appendix must be expressly selected and adopted, and its participant summary furnished. No CommonFunds component is required. The Employer must adopt the applicable Core and Appendix D terms referenced here; this program is separately identifiable even when those shared documents are used.

The program reimburses eligible care chosen by the Employee from Employer general assets and does not establish or sponsor a particular day care center or trust. It is intended to fall outside ERISA Title I under the reimbursement-program principles in DOL Advisory Opinion 88-10A. Shared administration or inclusion in a combined document does not itself extend ERISA, COBRA, HIPAA health-plan, or Health FSA rules to the DCAP. If the actual design changes that classification, the Employer must adopt the additional governing and disclosure terms before implementation. General administrative, amendment, correction, and recordkeeping provisions of the Core apply only to the extent consistent with this separate program and its tax rules.

# Eligibility and elections

Employees in the eligible class under Appendix A may elect DCAP after its waiting period, subject to eligibility for the Section 125 arrangement and this Appendix. Ineligible cafeteria-plan owners may not make pre-tax elections. The Employee must expect to incur qualifying employment-related care expenses. Coverage begins under the valid enrollment election and ends on loss of eligibility or the adopted coverage termination date. Dependent eligibility is determined under Sections 21 and 129, not the medical plan's dependent definition.

Appendix D governs prospective salary reductions, permitted Employer flex credits, and election timing. DCAP elections are generally irrevocable for the coverage period except for applicable permitted changes under Treasury Regulation Section 1.125-4, including qualifying dependent-care cost or provider changes where permitted. Changes must satisfy consistency and prospective-election rules; a provider-cost change involving a relative does not create a change right where the regulation excludes it. No money may transfer between the DCAP and a Health FSA or HRA, and no medical-only Employer credit may fund DCAP. Elections and disclosures retain the applicable Employer contributions and Employee salary reductions without duplicating those amounts in this document.

# Limits and funding availability

The adopted annual Plan limit for total DCAP benefits is ${extensions.dcap.annualPlanLimit|currencyUSD}, subject to lower applicable tax, earned-income, and nondiscrimination limits. Employer contributions and Employee salary reductions together count toward DCAP limits. The Health FSA salary-reduction limit is irrelevant to this account.

For services provided in taxable years beginning after December 31, 2025, the federal exclusion is limited to $7,500, or $3,750 for married filing separately, unless law changes. For earlier applicable years the statutory limit then in effect applies. For a joint return, the $7,500 limit applies to the spouses' combined benefits across all employers and programs. For separate returns, each spouse's exclusion is limited to $3,750, subject to applicable marital-status rules. Separate employers or accounts do not create additional exclusions. The exclusion also cannot exceed the Employee's earned income or, when married, the spouse's earned income, applying the statutory deemed-income rules for a student spouse or spouse incapable of self-care and applicable marital-status exceptions. For noncalendar Plan Years, the administrator tracks the tax-year limits separately. State tax conformity is determined separately.

Benefits are available only up to credited contributions actually available in the DCAP, less prior payments, and within the remaining election and applicable limits. Health FSA uniform coverage and HRA advance-month availability do not apply. A properly substantiated unpaid portion may remain pending for later contributions during the permitted period; it is not a loan or a promise of the entire annual election at the start of the year. The administrator will identify any approved amount awaiting contributions separately from a denied amount and explain when further payment may become available. A dispute about eligibility, substantiation, or the amount payable remains subject to the review procedure below.

# Qualifying care and persons

Expenses must satisfy Sections 21(b)(2) and 129: care or household services necessary to enable the Employee and, when applicable, spouse to work or actively seek work, subject to earned-income and other statutory conditions. Qualifying persons include an eligible dependent child under age 13 when care is provided, a qualifying spouse incapable of self-care, or another qualifying individual incapable of self-care, with the required residence and dependency conditions and statutory exceptions. Special custodial-parent rules apply to children of divorced or separated parents.

Eligible expenses may include qualifying day care, nursery or preschool, before/after-school care, day camp, and adult dependent care. Care outside the home must meet applicable statutory conditions; a dependent care center must satisfy applicable state and local requirements. Expenses for education at kindergarten level or above, overnight camp, medical care, nonqualifying meals or transportation, and care unrelated to employment are excluded. Incidental items inseparable from qualifying care are considered only as the Code permits.

No reimbursement is permitted for payment to the Employee's spouse, a person the Employee or spouse may claim as a dependent, the Employee's child under age 19 at year-end, or the parent of a qualifying child under age 13 where prohibited by the Code. Services must actually have been provided during participation; prepayment alone is not an incurred expense. Care after coverage ends is not reimbursable under this Appendix. This Appendix does not adopt a post-termination spend-down feature.

# Substantiation, coordination, and claims

Before payment, submit the provider's name, address, and taxpayer identification number or permitted tax-exempt identification; the qualifying person's identity and eligibility; dates care was provided; type of care; itemized amount; and independent provider documentation showing the services and charges. A claimant certifies the work-related purpose, eligibility, household limits and earned-income facts reasonably necessary for administration, and that the expense has not been and will not be reimbursed elsewhere or claimed for an incompatible tax benefit. A lawful exception to obtaining provider identification must be documented; a self-certification alone does not replace required expense substantiation.

Claims are submitted to ${administration.serviceContacts.claims.formatted}. Claims for care incurred during participation must be filed within ${extensions.dcap.claimRunoutDays} days after the earlier of the Plan Year end or the end of participation. No claim may be paid twice. Excluded DCAP amounts reduce expenses available for the dependent-care tax credit as required by law; Employees complete Form 2441 and supply necessary tax information.

The administrator gives a written decision within 30 days after receiving a claim; if more information or time is reasonably needed, it gives an explanation and expected decision date, with one extension of up to 30 days. A denial states the reason, controlling provision, missing evidence if applicable, and review instructions. Request review within 60 days after receiving a denial through ${administration.serviceContacts.appeals.formatted}; the administrator decides within 60 days and provides reasons. These are contractual review procedures, not a representation that ERISA medical-claim or external-review rights apply.

# Year end, testing, and reporting

There is no carryover or grace period under this Appendix. After the stated filing period, unused amounts are forfeited and applied only as permitted by Section 125 and other applicable law. A remaining balance cannot be cashed out, transferred to a medical account, or refunded as the Employee's unused election. This DCAP-specific rule controls over any general account year-end settings.

The Employer provides reasonable notice of program availability and terms and administers Section 129 eligibility and contributions/benefits nondiscrimination tests, the more-than-five-percent owner concentration limit of 25 percent, the 55-percent average-benefits test, and applicable Section 125 tests, using statutory exclusions and calculation rules where available. Lawful prospective corrections and tax treatment apply if tests fail; reducing an election cannot retroactively cure an otherwise taxable benefit contrary to law.

The Employer maintains separate DCAP contributions, substantiation, reimbursements, pending claims, tax-year limits, and forfeiture records. It furnishes the Section 129 statement by January 31 for the preceding calendar year and reports dependent care benefits on Form W-2, including Box 10 and any taxable amount in the applicable wage boxes as required. Medical balances, medical deductibles, Health FSA maximum-benefit testing, EBHRA limits, and HSA eligibility restrictions do not apply to DCAP merely because it shares an interface.
