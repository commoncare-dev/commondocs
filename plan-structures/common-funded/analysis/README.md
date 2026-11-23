# CommonFunded analysis toolkit

Compare two ways of financing the same care. The result is the premium reduction required to cover the additional cost sharing, the savings at the price offered and the share of modeled years that cost less. Start with the runnable example. Substitute quotes, enrollment or claims as they become available. [Buyer-facing output guide](../AI-instructions.md#quote-output-guide) · [REST and MCP calls](explorer-context.md)

## Run a comparison

Clone the [public repository](https://github.com/commoncare-dev/commondocs), enter `plan-structures/common-funded/analysis`, and use Node.js. The scripts have no additional dependencies.

| Available input | Command | Result |
|---|---|---|
| None | `node run-analysis.mjs example-analysis.json` | Hypothetical rates and 100 simulated years for 50 single enrollees averaging age 40 |
| Plan terms and rates, plus a real or mock census | `node run-analysis.mjs input.json` | Both plans priced on the same simulated member-years |
| Historical bills and both designs | `node run-comparison.mjs input.json` | Both plans priced on each supplied year. See the input shape in [example-comparison.json](example-comparison.json), which uses two hypothetical scenarios. |
| A census to generate reusable bills | `node run-simulation.mjs census-input.json` | Use the returned `scenarios` with `run-comparison.mjs` to test additional plans on identical bills. |

## Build the request

**Prices and benefits.** Begin with [example-analysis.json](example-analysis.json). For each plan supply `id`, `annualFixed`, `deductible`, `coinsurance`, `moop`, `hraThreshold` and `hraCap`. `annualFixed` is the annual coverage price **per enrolled single household**. Multiply monthly rates by 12. For a family, add `family: {annualFixed, deductible, deductibleType, moop, hraThreshold, hraCap}`, with `deductibleType` of `embedded` or `aggregate`. There is one combined family rate per plan. Identify any approximation if quotes vary across spouse, child and family tiers.

Use `accountAnalysis.baselinePlanId` to identify the current plan. With only its rate and both benefit designs, set the proposed rate equal to the current rate for each tier. Report the required reduction and break-even proposed rate. With both prices, report savings or loss at the offer. The toolkit takes the upper-layer price as supplied. If that price includes expected retained claims, its actual variation is outside the comparison. `incrementalAdministration` defaults to zero. Enter only a separately identified annual incremental group expense.

**Simulated bills.** Supply either `census: [{id, age, householdId, risk}]` or `mockCensus: {employeeCount, averageAge}`. The mock accepts `minAge`, `maxAge`, `familyFraction`, `dependentsPerFamily` and `seed`. It treats the first dependent as an adult and additional dependents as children. Give every covered member an ID and group dependents by household. [Sample census](sample-census.json)

The account sampler draws annual allowed spend independently for each person-year. In `run-analysis.mjs`, `simulation` accepts `years` (default 100), `seed`, `risk` (default 3), `ageBands: [{maxAge, zeroProbability, annualMean}]` and `concentration: [{top, share}]`. In `run-simulation.mjs` those options sit beside `census` at the top level. An individual risk overrides the default using CommonCare's levels 1–10. Keep seeds fixed when changing prices. The sampler reports actual versus assumed means, zero rates and spending shares. Discrete spending bands, incompatible zero rates and sampling variation can affect deductible hits. Independent draws omit chronic and family correlations. The reported one-percentage-point concentration check measures agreement with targets. Validation requires comparable claims. [Sampler and cap-frequency audit](SAMPLER-NOTES.md)

**Historical bills.** Replace `census` or `mockCensus` with `scenarios: [{id, bills: [{id, householdId, allowed}]}]`. Use the same enrolled members and household assignments in every year, including zero-claim members. Annual `allowed` means deductible-subject allowed dollars. Exclude preventive services covered without cost sharing. Synthetic totals do not separately identify them.

For ordered claims, give each member `events: [{order, allowed, kind}]` in place of `allowed`. Use a unique numeric order across the household and `kind: "standard"` or `"preventive"`. Use `[]` for a member with no events. Flat coinsurance (e.g. `0.2`) applies after the deductible until the out-of-pocket maximum. Each event updates individual and household accumulators before the account threshold and cap apply. Annual member totals use member order as an approximation. The model assumes the same care at the same allowed prices under both designs. Service-specific copays, drug tiers, exclusions, different networks and account eligibility can require additional adjudication.

## Read the result

For each alternative, `accountLayer[].monthlyQuote` expresses the comparison **per enrolled employee per month**. The denominator is twelve times the number of enrolled households. Dependents contribute bills to their household. Mixed-tier results are enrollment-weighted averages.

| Field | Meaning |
|---|---|
| `currentRate`, `proposedRate`, `offeredReduction` | Full coverage prices and their difference |
| `breakEvenReduction`, `breakEvenProposedRate` | Mean additional cost sharing plus specified incremental expense, and the proposed rate that would cover it |
| `expectedSavings` | Offered reduction minus required reduction. Positive favors the proposed design. |
| `currentExpectedTotal`, `proposedExpectedTotal` | Full premium plus all cost sharing, counting every dollar once. The proposed total includes specified incremental expense. |
| `p90BreakEvenReduction` | Nearest-rank 90th percentile of required reductions across years. A reduction at the threshold covers the difference in at least 90% of those years, including ties. Round up to a cent when quoting a sufficient reduction. |

For win frequency use `accountLayer[].totalCost.scenariosCheaper / scenarioCount`. This counts strictly cheaper years. Use full precision for comparisons. Observed historical counts describe the replayed period. Simulated counts estimate frequency under the chosen assumptions. `totalCost.expectedBaseline`, `expectedProposed`, `expectedSavings` and `breakEvenAnnualFixedReduction` are annual dollars for the entire group.

**Account exposure.** In each plan’s `results[].accountCapUse`, `householdYearsAtCap / householdYearsWithCap` is the fraction of funded household-years using the full account benefit. A zero denominator means there is no funded account. `householdYearsAtCap / scenarioCount` is the mean number reaching the cap per year. `maxHouseholdsAtCapInOneYear` is the observed peak. Use the applicable single or family account cap, which may differ from the deductible.

**Funding questions.** Released contribution is the difference in upper-layer prices. Account-layer gain subtracts additional account reimbursements and specified incremental expense. The optional `annualAccountBudget` is a group planning reserve. Promised reimbursements can exceed it. Expected unused budget averages only positive balances and can coexist with overruns in other years. Participant residual is cost sharing remaining after reimbursement. Total savings also captures the change in this residual, so moving a bill into the account creates no saving by itself. The legacy `expectedEmployer` adds full coverage price to reimbursements. The engine receives no payroll allocation.

**Precision.** Actual premiums establish the price difference for the quoted period. A real census establishes who is covered. Claims replay establishes what the observed bills would cost under the modeled rules. To call the historical baseline exact, match eligibility, prices and all applicable rules and reconcile to actual payments. The alternative is a counterfactual on those same bills. Renewal prices and changes in how people use care require separate assumptions.

## Implementations and checks

CommonCare’s REST and MCP account modes use the TypeScript from which these scripts are generated. Request `get_data` from the explorer for the full plan and engine guides, detailed example output and GPS input. The optional GPS mode uses the established shop spending generator and accepts simulated bills or historical annual member totals through [example-gps-analysis.json](example-gps-analysis.json). Standard annual cost sharing uses the shared core. Per-event shop coverage and payout-cap rules follow separate shop logic. Read GPS comparisons under `accountComparison` when `comparison` was supplied. Ordered claim replay uses account mode.

Run `node --test comparison.test.mjs` here to verify the public calculation checks. From a CommonCare server checkout, `node scripts/sync-commonfunded-analysis.mjs /path/to/commondocs` regenerates the scripts. Append `--check` to compare them with the maintained source.
