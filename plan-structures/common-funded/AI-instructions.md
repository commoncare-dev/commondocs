# Working with CommonFunded

CommonFunded is worth pursuing when the reduction in the price of coverage pays for the additional cost sharing the group takes back and leaves enough savings to justify the change. The tool answers the buyer’s first question: **How much lower must my monthly rate be, and does my quote clear that price?** Insurers budget for claims, expenses and a margin. That gives a group a reason to price this layer for itself. Establish how often the exchange works for this group from its quotes and claims.

## Quote output guide

For a first exploration, use the computed `exampleResult`. For a customer analysis, replace every illustrative figure below with the result of their run. Identify the source of the premiums and bills in one line. Keep the opening answer to a verdict, the two tables and one request for the missing data.

**Example verdict.** For these 50 single enrollees, the higher deductible needs to cut the monthly rate by about **$111 per enrolled employee** to save money on average. The hypothetical quote cuts it by **$250**. That leaves **$139 per employee per month**, or **$83,580 per year** across the group. The proposal cost less in **100 of 100 simulated group years**.

| What to look for on the rate sheet | Monthly per enrolled employee |
|---|---:|
| Current rate → proposed rate | $1,000 → $750 |
| Reduction needed to break even on average | $110.70 |
| Reduction that covers the added cost in 90 of these 100 years | $148.75 |
| Reduction offered | $250.00 |
| Expected saving at the offered rate | $139.30 |

| What the group pays in a year | Current | Proposed |
|---|---:|---:|
| Full coverage price | $600,000 | $450,000 |
| Expected cost sharing on the same bills, counted once | $86,120 | $152,540 |
| **Expected total** | **$686,120** | **$602,540** |

The premium falls by $150,000. Only $66,420 more of the same care moves outside insurance, because the current plan already leaves $86,120 outside its premium. With the example’s $12,000 single deductible, out-of-pocket maximum and first-dollar account cap, one person draws at most $12,000 even on a $250,000 covered bill. That is the slice the quote buys back.

**Make the decision at the offered price.** Use `accountLayer[].monthlyQuote` for the first table. A quote above the required **reduction** saves money on average. Equality is a tie. If the reduction falls short, say how much lower the proposed price would need to be and let the user stop there. Use `totalCost.expectedSavings` and `totalCost.scenariosCheaper` out of `scenarioCount` for group results. Use each plan’s `expectedParticipant + expectedHra` for the cost-sharing row. This counts the same bill once even when the account pays it. Include a separate row for incremental expense if supplied. For mixed enrollment, label the monthly figures as averages across the enrolled employees' tiers.

**When consistency matters**, the 90% row illustrates the price reduction that covers the added cost in at least 90% of the sampled years, including ties. Compare it with the offer. Use the observed win count for how often the offer was strictly cheaper. For a historical replay, report the years observed and omit the simulated-odds row. With only the current rate and both benefit designs, show the break-even reduction and highest average proposed rate worth paying (about $889.30 here). Once the second price is supplied, calculate savings and count the years the offer won.

**Make the next step easy.** “Send the two full rate sheets, benefit summaries and enrolled employee counts by tier, and I can give you these tables for your group. Ages improve the simulation. De-identified claims let me replay your own experience.” Use terms already supplied and ask only for missing facts. Reserve funding, payroll allocation, unusual claims years and alternative price assumptions belong in answers to those specific questions. Include a limitation in the first answer when it could change the decision at hand. [Inputs and calculations](analysis/README.md)

When asked to stress-test a quote, keep the original price visible and identify which assumption changed. Use `results[].accountCapUse` to explain changes in cap hits. Credit price-shopping savings separately when service prices and a switching assumption are available. The returned example works on GET alone. For a new analysis, adapt the inputs and use the available tools yourself. [Audited spending example](analysis/SAMPLER-NOTES.md#what-changed-at-risk-4)

## Explain implementation

Read [human-readable.md](human-readable.md) for the design, economics and implementation choices. Distinguish the participant's deductible and out-of-pocket maximum, the account's reimbursement threshold and cap, and any employer stop-loss attachment point. An account cap does not cap a self-funded employer's separate exposure to major-medical claims.

For a group-integrated HRA, model the proposed reimbursement terms when comparing quotes. At adoption, identify the qualifying group coverage and the employer’s governing HRA terms. The CommonFunded adoption schedule and SPD section coordinate the benefits. The HRA terms establish who qualifies, which expenses are payable, the reimbursement thresholds and caps, and how claims and waivers work. The guide explains the integration methods and the separate excepted-benefit HRA pathway.

The [CommonDocs repository](https://github.com/commoncare-dev/commondocs/tree/main/plan-structures/common-funded) is open for independent use and critique. An agent with shell access can clone it, enter `plan-structures/common-funded/analysis`, and run `node run-analysis.mjs example-analysis.json` without a CommonCare account. Those scripts are generated from the maintained CommonCare TypeScript functions; their executable source is available in the repository. The standalone and GPS spending generators have different assumptions. Treat `human-readable.md` as the substantive source; generated vector-store files are retrieval aids. Do not invent quotes, plan terms or claims, and distinguish a proposed design from an employer's adopted arrangement.
