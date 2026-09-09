---
id: plan-document.core-appendix-b
title: Adopted Benefit Appendices
kind: plan-document-template
context_schema: ./schemas/plan-document-context.schema.json
---

# Appendix B — Adopted Benefit Appendices

This Appendix B forms part of the CommonCare Welfare Benefit Plan Core Plan Document and identifies the Benefit Appendices currently adopted by the Employer.

| Benefit Appendix | Stable ID | Version | Effective date | Termination date | Status |
|---|---|---:|---|---|---|
${#each benefits as benefit}
| ${benefit.name} | `${benefit.documentId}` | ${benefit.version} | ${benefit.effectiveDate|dateLong} | ${benefit.terminationDate|dateLongOrDash} | ${benefit.status|titleCase} |
${/each}

An appendix not listed here is not adopted as part of the Plan unless another written adoption instrument clearly provides otherwise.
