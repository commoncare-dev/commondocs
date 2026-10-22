# Product document template index

Each product structure has the document form appropriate to what the product actually does. A document marked **outside the Plan** must not be listed in Appendix B or inserted into an SPD as a Plan benefit.

| Product structure | Governing or adoption template | Participant-facing template | Legal role |
|---|---|---|---|
| Alternative Companion | `plan-structures/alternative-companion/plan-docs/employer-neutrality-policy.md` | `participant-disclosure.md` | Employer policy and voluntary-product disclosure; outside the Plan |
| CHOICE ICHRA | `plan-structures/choice-ichra/plan-docs/ichra-benefit-appendix.md` | `ichra-spd-section.md` | Benefit Appendix and SPD section |
| CommonFunded | `plan-structures/common-funded/plan-docs/common-funded-adoption-schedule.md` | `common-funded-spd-section.md` | Short overlay coordinating Major Medical Coverage, CommonFunds, and the incorporated Enrollment Schedule |
| CommonFunds | `plan-structures/common-funds/plan-docs/common-funds-administration-appendix.md`, `common-funds-health-fsa-component.md`, and conditional `common-funds-ebhra-component.md` | `common-funds-spd-section.md` | One coordinated benefit with separately governed Health FSA and pathway-dependent HRA components |
| Premium Tax Credit Plan | `plan-structures/ptc-plan/plan-docs/ptc-strategy-adoption-schedule.md` | `ptc-participant-notice.md` | Employer strategy and participant notice; Marketplace policy remains outside the Plan |
| Self-Funded Dental | `plan-structures/self-funded-dental/plan-docs/dental-benefit-appendix.md` | `dental-spd-section.md` | Benefit Appendix and SPD section |
| Self-Funded Basic MEC | `plan-structures/self-funded-mec/basic-mec/plan-docs/mec-benefit-appendix.md` | `mec-spd-section.md` | Benefit Appendix and SPD section |

Every folder also contains a registered extension schema and a composed product context schema. All templates consume the same base `PlanDocumentContext` and add only their product-specific extension.

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
