---
class: core
template_set: {"key":"welfare-plan","name":"Welfare Benefit Plan","implementations":{"plan-document":{"key":"appendix-b","role":"appendix","order":20,"required":true,"requires":["base"],"description":"Schedule identifying the benefit appendices adopted by the core welfare plan."}}}
id: plan-document.core-appendix-b
title: Adopted Benefit Appendices
kind: plan-document-template
context_schema: ./plan-document-context.schema.json
---

# Appendix B — Adopted Benefit Appendices

This Appendix B forms part of the CommonCare Welfare Benefit Plan Core Plan Document and identifies the Benefit Appendices currently adopted by the Employer.

| Employer-sponsored benefit |
|---|
${#each benefits as benefit}
| ${benefit.name} |
${/each}

This list reflects the employer-sponsored benefits included in the Plan. Individual marketplace options and other arrangements outside group sponsorship are excluded. The Plan and applicable benefit provisions govern; contribution settings and enrollment records identify the terms and coverage periods applicable to each participant.
