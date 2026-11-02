---
template_set: {"key":"welfare-plan","name":"Welfare Benefit Plan","implementations":{"plan-document":{"key":"appendix-b","role":"appendix","order":20,"required":true,"requires":["base"],"description":"Schedule identifying the benefit appendices adopted by the core welfare plan."}}}
id: plan-document.core-appendix-b
title: Adopted Benefit Appendices
kind: plan-document-template
context_schema: ./plan-document-context.schema.json
---

# Appendix B — Adopted Benefit Appendices

This Appendix B forms part of the CommonCare Welfare Benefit Plan Core Plan Document and identifies the Benefit Appendices currently adopted by the Employer.

| Benefit Appendix | Stable ID | Version | Effective date | Termination date | Status |
|---|---|---:|---|---|---|
${#each benefits as benefit}
| ${benefit.name} | `${benefit.documentId}` | ${benefit.version} | ${benefit.effectiveDate|dateLong} | ${benefit.terminationDate|dateLongOrDash} | ${benefit.status|titleCase} |
${/each}

An appendix not listed here is not adopted as part of the Plan unless another written adoption instrument clearly provides otherwise.
