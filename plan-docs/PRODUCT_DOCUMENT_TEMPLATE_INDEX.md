# Product document template index

Each product structure has the document form appropriate to what the product actually does. A document marked **outside the Plan** must not be listed in Appendix B or inserted into an SPD as a Plan benefit.

| Product structure | Governing or adoption template | Participant-facing template | Legal role |
|---|---|---|---|
| Alternative Companion | `plan-structures/alternative-companion/plan-docs/employer-neutrality-policy.md` | `participant-disclosure.md` | Employer policy and voluntary-product disclosure; outside the Plan |
| CHOICE ICHRA | `plan-structures/choice-ichra/plan-docs/ichra-benefit-appendix.md` | `ichra-spd-section.md` | Benefit Appendix and SPD section |
| CommonFunded | `plan-structures/common-funded/plan-docs/common-funded-adoption-schedule.md` | `common-funded-spd-section.md` | Short overlay coordinating Major Medical Coverage, CommonFunds, and the incorporated Enrollment Schedule |
| CommonFunds | `plan-structures/common-funds/plan-docs/common-funds-administration-appendix.md`, `common-funds-health-fsa-component.md`, and conditional `common-funds-ebhra-component.md` | `common-funds-spd-section.md` | One coordinated benefit with separately governed Health FSA and pathway-dependent HRA components |
| DPC Companion | `plan-structures/dpc-companion/plan-docs/dpc-companion-benefit-appendix.md` | `dpc-companion-spd-section.md` | Independent DPC coverage election; allowance and employee contributions retain their classification under the applicable adopted benefits |
| Premium Tax Credit Plan | `plan-structures/ptc-plan/plan-docs/ptc-strategy-adoption-schedule.md` | `ptc-participant-notice.md` | Employer strategy and participant notice; Marketplace policy remains outside the Plan |
| Non-Health Benefits | `plan-structures/non-health-benefits/plan-docs/non-health-benefits-appendix.md` | `non-health-benefits-spd-section.md` | Insured life, AD&D, disability, and identified non-health welfare wrap; actual contracts incorporated |
| DCAP (standalone) | `plan-structures/dcap/plan-docs/dcap-benefit-appendix.md` | `dcap-participant-summary.md` | Independently adopted Section 129 program; no CommonFunds coverage required |
| CommonFunds DCAP (optional) | `plan-structures/common-funds/plan-docs/common-funds-dcap-rider.md` | `common-funds-dcap-spd-section.md` | Separate Section 129 program and clearly identified non-ERISA participant summary alongside CommonFunds |
| Self-Funded Dental | `plan-structures/self-funded-dental/plan-docs/dental-benefit-appendix.md` | `dental-spd-section.md` | Benefit Appendix and SPD section |
| Self-Funded Vision | `plan-structures/self-funded-vision/plan-docs/vision-benefit-appendix.md` | `vision-spd-section.md` | Benefit Appendix and SPD section |
| Self-Funded Basic MEC | `plan-structures/self-funded-mec/basic-mec/plan-docs/mec-benefit-appendix.md` | `mec-spd-section.md` | Benefit Appendix and SPD section |

Every folder also contains a registered extension schema and a composed product context schema. All templates consume the same base `PlanDocumentContext` and add only their product-specific extension.

## Shared governing documents

The `welfare-plan` governing set includes the Core Plan Document and required Appendices A–E. Appendix A states employer-specific rehire and leave rules; the core supplies statutory leave protections and fiduciary duties. Appendix E supplies HIPAA privacy and security plan-administration provisions where applicable. It is a shared administrative appendix, not a benefit to list in Appendix B. The base SPD summarizes these rules; it does not incorporate the full HIPAA appendix as a benefit section.

## SPD assembly

Pass only adopted Plan benefit or package SPD sections to `scripts/generate-spd.mjs`. Do not pass Alternative Companion disclosures or PTC Marketplace notices as benefit sections.

```sh
node scripts/generate-spd.mjs \
  --template plan-docs/spd-template.md \
  --values plan-docs/sample-plan-variables.json \
  --benefit-template plan-structures/self-funded-mec/basic-mec/plan-docs/mec-spd-section.md \
  --benefit-template plan-structures/self-funded-dental/plan-docs/dental-spd-section.md \
  --output generated/summary-plan-description.md
```

## Template-set grouping

| Set key | Governing implementation (`plan-document`) | Participant implementation (`spd`) |
|---|---|---|
| `welfare-plan` | Core and required Appendices A–E | Base SPD |
| `choice-ichra` | ICHRA Benefit Appendix | ICHRA SPD section |
| `common-funded` | CommonFunded coordination overlay | CommonFunded SPD section |
| `common-funds` | Shared administration and applicable Health FSA / EBHRA components | CommonFunds SPD section |
| `dpc-companion` | DPC Benefit Appendix | DPC SPD section |
| `self-funded-dental` | Dental Benefit Appendix | Dental SPD section |
| `self-funded-vision` | Vision Benefit Appendix | Vision SPD section |
| `self-funded-basic-mec` | Basic MEC Benefit Appendix | Basic MEC SPD section |

Each product's governing and SPD sources share the set key but participate only in the corresponding output implementation. Selecting a product requires its unambiguous member for that output. `requires` names member keys within an implementation of the same set, not another concept set. Combine applicable product sets with `welfare-plan`; CommonFunded's underlying major medical and CommonFunds documents remain separately adopted and must also be selected as applicable.

Alternative Companion policies/disclosures and PTC strategy/notices remain outside Plan/SPD template sets. They are separate employer or participant documents, not missing benefit summaries. Do not register their participant notices as SPD sections or add them to Plan benefit assembly.

Publish and sync the changed source templates before relying on these groups in CommonCare. Saved plan documents retain their existing content until explicitly regenerated.

`non-health-benefits` has a required governing appendix and separate required SPD summary. CommonFunds additionally exposes optional `dcap` and `dcap-summary` slots. Explicitly select the governing rider when adopted and furnish its corresponding summary; output-specific metadata cannot infer adoption in the other output. Existing CommonFunds defaults do not change. DCAP is not an ERISA benefit merely because its participant summary is included in a combined document. Non-health contract versions and substantive terms must be supplied and retained; the wrap alone is not a complete insurance policy.

The standalone `dcap` set has required governing and participant-summary members, using `extensions.dcap`. The CommonFunds rider remains an alternative. Select one DCAP governing package per actual program, not both; separate document labels do not create additional household exclusions.
