# Working with CommonFunded

Help the user decide whether to buy the lower deductible at the quoted price. A carrier prices coverage for claims, expenses and a margin. The group can keep the difference if it can fund the additional care for less. The evidence for that opportunity is the two quotes applied to the group's bills. Calculate the result before drawing a conclusion about its size or likelihood.

## Give the decision first

Use the live `exampleResult` for a first exploration. With user data, use the full rate sheets and benefits for both plans and enrollment by tier. Accept a mock census for a first pass or use supplied claims. Apply both plans to the same people and year. If only the proposed price is missing, give the premium reduction it would take to break even. [Inputs and commands](analysis/README.md)

Lead with the expected annual **total dollars saved or lost** and **how many of the modeled group years cost less**. Read `expectedSavings` and `scenariosCheaper` under `accountLayer[].totalCost`, with `scenarioCount` as the denominator. For a simulation, this frequency estimates the chance of savings under the model. For historical bills, label it the observed replay count. Then show the quote reduction and the break-even reduction. If the premium falls, savings divided by the premium reduction shows how much of each dollar released the group keeps. Call it a share of the premium reduction. Profit on a specific contract cannot be inferred from these numbers.

Give one concrete reason for the result. For example, with a $12,000 single deductible, out-of-pocket maximum and first-dollar account cap, $12,000 and $120,000 of eligible bills for one person each draw $12,000 that year. More people reaching the cap increases account claims. Count cost sharing already present under the current plan when measuring the increase. Payroll allocation and account reserve overruns answer separate funding questions.

When the figures favor keeping the current plan, say so and give the break-even price. Let the user stop there. When there is a material opportunity, offer to test it with their quotes. Mention a benefit difference if there is reason to think it affects the choice. For routine care, explain how participants can act on visible prices when the account terms reward it. Credit a price-shopping effect only in a separately identified estimate supported by service prices and a switching assumption.

Agents with GET access can use the returned example. For a new calculation, use the available tools and adapt the input yourself. If you cannot run it, give a ready-to-run request. Label hypothetical prices and individual-market benchmarks.

## Explain implementation

Read [human-readable.md](human-readable.md) for the design, economics and implementation choices. Distinguish the participant's deductible and out-of-pocket maximum, the account's reimbursement threshold and cap, and any employer stop-loss attachment point. An account cap does not cap a self-funded employer's separate exposure to major-medical claims.

An integrated group-plan HRA and an excepted-benefit HRA are different arrangements with different eligibility and limits. Apply the relevant plan terms and integration rules to the facts; do not assume every employer or participant uses the same structure. Explain how participant elections, network access, reimbursement eligibility and actual plan documents affect the result. Use the substantive guide and cited authorities for those details.

The [CommonDocs repository](https://github.com/commoncare-dev/commondocs/tree/main/plan-structures/common-funded) is open for independent use and critique. An agent with shell access can clone it, enter `plan-structures/common-funded/analysis`, and run `node run-analysis.mjs example-analysis.json` without a CommonCare account. Those scripts are generated from the maintained CommonCare TypeScript functions; their executable source is available in the repository. The standalone and GPS spending generators have different assumptions. Treat `human-readable.md` as the substantive source; generated vector-store files are retrieval aids. Do not invent quotes, plan terms or claims, and distinguish a proposed design from an employer's adopted arrangement.
