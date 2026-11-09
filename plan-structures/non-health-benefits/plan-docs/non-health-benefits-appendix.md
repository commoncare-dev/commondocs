---
class: coverage
template_set: {"key":"non-health-benefits","name":"Non-Health Benefits","implementations":{"plan-document":{"key":"administration","role":"appendix","order":10,"required":true}}}
id: plan-document.benefit-appendix.non-health-benefits
title: Non-Health Welfare Benefits Appendix
kind: benefit-appendix
status: template
version: "1.0"
context_schema: ./non-health-benefits-plan-document-context.schema.json
---

# Non-Health Welfare Benefits Appendix

Effective Date: ${extensions.nonHealthBenefits.effectiveDate|dateLong}

# Adoption and scope

The Employer adopts this Appendix under the Core Plan Document to wrap only the insured non-health welfare benefits identified below. These may include group life, accidental death and dismemberment, short-term disability, long-term disability, or another expressly identified non-health welfare benefit. An arrangement is included only if it is actually employer-sponsored and adopted; voluntary individual products satisfying an ERISA safe harbor, payroll practices outside ERISA, retirement benefits, and legally mandated programs are not incorporated merely because the Employer facilitates them.

This Appendix does not establish medical coverage, an HRA, or an FSA. A self-funded benefit requires its own substantive benefit provisions and claims funding terms; this insured wrapper alone does not create one.

# Adopted coverage and incorporated contracts

${#each extensions.nonHealthBenefits.benefits as benefit}
## ${benefit.name}

| Term | Adopted provision |
|---|---|
| Benefit type | ${benefit.benefitType|titleCase} |
| Insurer | ${benefit.insurer} |
| Policy/group number | ${benefit.policyNumber} |
| Coverage effective date | ${benefit.effectiveDate|dateLong} |
| Incorporated documents and versions | ${benefit.incorporatedDocuments} |
| Eligible persons and coverage conditions | ${benefit.eligibility} |
| Benefit, limits, exclusions, and reductions | ${benefit.benefitDescription} |
| Contributions and tax treatment election | ${benefit.contributions} |
| Claims contact | ${benefit.claimsContact} |
| Appeals contact | ${benefit.appealsContact} |
| Conversion, portability, waiver, and continuation | ${benefit.continuationRights} |

${/each}

The identified policies, certificates, benefit schedules, and endorsements are expressly incorporated as governing benefit terms for the identified coverage. The Employer must retain the identified versions and furnish them with the corresponding SPD summary. A marketing brochure or an unidentified policy is insufficient. Incorporated terms must describe benefit amounts or formulas, definitions, exclusions, reductions, eligibility and termination conditions, evidence-of-insurability requirements, beneficiary rights, claim filing, and any conversion or portability rights. This Appendix and those incorporated materials together define the benefit; a short enrollment description does not replace them.

Applicable law controls. The Core governs shared administration and fiduciary duties. The incorporated policy controls the insurer's promised benefit, coverage conditions, and policy-specific determinations, subject to applicable law and the mandatory review protections below. Coverage settings and enrollment records apply those adopted terms; they cannot expand an insurer's liability or silently amend the Plan.

# Enrollment, funding, and tax treatment

General eligibility, election, rehire, and leave rules follow the Core and Appendix A, subject to each adopted policy's lawful active-at-work, dependent, evidence-of-insurability, and effective-date conditions. Submitting an election or a premium does not satisfy an unsatisfied underwriting condition. The Plan Administrator must identify any unresolved condition before confirming coverage. Statutory reinstatement and other mandatory rights control over contrary conditions.

Benefits are paid by the identified insurer under its contract; premiums are paid from Employer general assets and any valid Participant contributions. Administrative assistance does not make the Employer the insurer or eliminate any independent duty imposed on the Employer by law or the governing terms.

Employee contributions follow the adopted funding and tax election. Section 125 treatment applies only to eligible benefits and persons under Appendix D. Group-term life may produce imputed income under Code Section 79, including coverage over the applicable exclusion, and dependent life requires separate tax review. Employer-paid or pre-tax disability premiums generally produce taxable disability benefits; after-tax employee premiums may affect exclusion of benefits under applicable allocation rules. The Plan does not promise tax-free life or disability benefits merely because coverage appears in a benefits menu. Payroll must retain the premium source and tax election.

# Beneficiaries and coverage termination

Participants designate and change beneficiaries through the insurer's prescribed process. The policy governs effective designations, default beneficiaries, assignments, and death-claim proof, subject to applicable law. The Plan Administrator assists with records but does not invent a beneficiary when the contract supplies a controlling rule.

Coverage ends, reduces, or converts under the identified policies and applicable law. Any age reductions, benefit offsets, disability definitions and elimination periods, maximum benefit periods, premium waivers, conversion windows, and portability deadlines must be disclosed in the incorporated materials. Leaving employment does not automatically continue life or disability coverage. COBRA and health-plan special enrollment rights do not apply solely because these non-health benefits share a wrap document with health benefits. Any separate policy or statutory continuation right remains available.

# Claims and review

File with the applicable claims contact above using the incorporated policy's filing instructions and proof requirements. An authorized representative may act for the claimant. There is no filing or appeal fee. The insurer decides policy benefit claims to the extent delegated by its contract; the Plan Administrator decides retained Plan eligibility and administrative issues. A submission received by the wrong Plan contact will be directed promptly to the proper decision-maker without defeating a timely claim.

For ERISA benefits other than disability determinations, the initial decision is due within 90 days, with one extension of up to 90 additional days for special circumstances disclosed before the first period ends. A claimant has at least 60 days after receiving the denial to appeal. A single-level appeal is decided within 60 days, with a permitted special-circumstances extension of up to 60 additional days and timely notice.

When entitlement requires a disability determination by the Plan or its delegate, disability claims rules apply regardless of the benefit label. The initial decision is due within 45 days; up to two extensions of 30 days each are permitted only for matters beyond the Plan's control with required timely notices. A request for additional information affords at least 45 days to respond, with tolling only as law permits. The claimant has at least 180 days after receiving the denial to appeal. A single-level appeal is decided within 45 days, with one permitted extension of up to 45 additional days and timely notice.

Disability adjudicators and experts must be independent and impartial; review gives no deference to the original denial and uses a reviewer who is neither the original decision-maker nor that person's subordinate. Required independent medical consultation applies. Before an appeal denial based on new evidence or a new rationale, the claimant receives it without charge with a reasonable opportunity to respond. Disability denial notices provide the required discussion of treating-professional, vocational, and Social Security disability evidence, applicable internal criteria, and other disclosures required by 29 CFR Section 2560.503-1, including applicable culturally and linguistically appropriate assistance. A disability rescission is handled as an adverse determination where required by that regulation.

All adverse notices explain reasons, governing terms, missing information when applicable, review procedures and deadlines, and applicable ERISA civil-action rights. Claimants may submit evidence and obtain relevant records without charge. Appeal decisions consider the full record. Applicable court-filing limits, including the calendar expiration date in a disability appeal denial where required, must be disclosed. Required exhaustion and deemed-exhaustion rights follow applicable law. More protective policy procedures apply where consistent with law; incorporated materials must supply complete filing instructions and any special procedures. These are non-health claims rules, not the medical-claim timetable.
