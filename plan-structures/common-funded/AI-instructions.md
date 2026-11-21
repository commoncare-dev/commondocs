# Working with CommonFunded

CommonFunded separates two jobs that are often bundled into a health plan: paying for routine care and financing large medical claims. It uses CommonFunds (a concept wrapper for all legal account-based health plans) to reimburse eligible expenses in a defined account-funded layer, while insurance or another arrangement addresses claims in the separate upper layer. The aim is to find out whether this division reduces the total cost of coverage and care for a particular population, and by how much.

Explain the actual mechanism: a higher-deductible plan may cost less; the resulting difference can fund reimbursements for the additional participant cost sharing. Premium is paid regardless of claims, while an account reimbursement is paid when an eligible expense occurs. Whether the exchange is favorable depends on the prices, benefits and claims—not on the deductible alone. Unused reimbursement capacity is not automatically a saving or a cash deposit.

The paramount structural distinction where value is created isn't about self-funded vs insurance. It's about when to pool costs, and how to price that, vs when to use cash-based structure. This is a key distinction for determining the actual value of insurance covering large unexpected costs - which is where insurance provides value economically. 

## Analyze the opportunity

1. Gather the plan year, enrolled households and coverage tiers, ages, current and proposed plan costs, deductibles, coinsurance and out-of-pocket maximums. Obtain account thresholds, reimbursement limits and any existing account benefits. Use real quotes when available; label hypothetical inputs clearly.
2. Compare costs for the same population and period. The current annual cost minus the proposed upper-layer cost is the **released contribution**. Treat the upper-layer cost as an input whether it is a premium or an estimate including retained claims. Choosing insurance, level funding, self-funding or stop-loss for that layer is a separate question.
3. Run the same medical-spending scenarios through both designs. Compare released contribution with the additional account reimbursements, including any specifically identified incremental cost. Report the resulting account-layer gain or shortfall, and separately report changes in participant cost. A shift from employer to participant is not a combined saving.
4. Show the result under more than an average bill. Deductibles, coinsurance and out-of-pocket maximums create thresholds, so use the distribution of claims and household accumulators. If one plan is cheaper across the entire relevant range, explain that dominance; a win in sampled scenarios alone does not establish it.
5. Give a clear conclusion supported by the inputs. Identify the benefit or network differences that could change the choice. Show sensitivity where plausible claims or price differences could reverse it. Use the same standard for the current and proposed arrangements.

For example, a $500,000 current plan and a $350,000 proposed upper-layer arrangement release $150,000. If the proposed account pays $100,000 more than the current account, the account-layer gain is $50,000 before any specified incremental costs. The combined saving is also $50,000 only if participant residual costs do not change. If the upper-layer cost includes estimated retained claims, actual combined experience also depends on those claims.

## Run the tools

Use [analysis/README.md](analysis/README.md) for inputs, commands and supported rules, and [analysis/robo-advisor.md](analysis/robo-advisor.md) for the quote workflow. `run-analysis.mjs` generates scenarios from a supplied or mock census and compares plans. `run-comparison.mjs` accepts supplied annual scenarios or ordered standard and preventive events. Keep enrolled people with zero claims in historical inputs. [analysis/SAMPLER-NOTES.md](analysis/SAMPLER-NOTES.md) explains how the standalone generator differs from CommonCare's shop generator.

Actual quotes and census make a result specific to the group; simulated claims remain conditional on the assumed distribution. Historical replay is exact for the supplied data and implemented rules, but may not reproduce a real plan's adjudication when copays, drug tiers, exclusions, prices or other rules are missing. Replaying a proposed design against historical claims also assumes the observed care and prices would have remained the same.

CommonCare can provide individual-market benchmark plans and run an in-memory GPS analysis. Benchmarks are reference prices, not employer group quotes. The open-source scripts can be inspected and run without CommonCare.

## Explain implementation

Read [human-readable.md](human-readable.md) for the design, economics and implementation choices. Distinguish the participant's deductible and out-of-pocket maximum, the account's reimbursement threshold and cap, and any employer stop-loss attachment point. An account cap does not cap a self-funded employer's separate exposure to major-medical claims.

An integrated group-plan HRA and an excepted-benefit HRA are different arrangements with different eligibility and limits. Apply the relevant plan terms and integration rules to the facts; do not assume every employer or participant uses the same structure. Explain how participant elections, network access, reimbursement eligibility and actual plan documents affect the result. Use the substantive guide and cited authorities for those details.

The [CommonDocs repository](../../README.md) is open for independent use and critique. Treat `human-readable.md` as the substantive source; generated vector-store files are retrieval aids. Do not invent quotes, plan terms or claims, and distinguish a proposed design from an employer's adopted arrangement.
