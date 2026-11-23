# Quote analysis toolkit

This toolkit generates medical-spending scenarios and compares the supplied plans and account terms. Use [the CommonFunded AI instructions](../AI-instructions.md) for the concept and decision workflow; this file describes the inputs, commands, calculations and limits.

The scripts in this directory are public and run locally with Node.js; no CommonCare account or endpoint is required. Clone `https://github.com/commoncare-dev/commondocs`, change to `plan-structures/common-funded/analysis`, and run `node run-analysis.mjs example-analysis.json` for an illustration. The scripts are generated from the maintained CommonCare TypeScript implementation, and their full executable code is available here for inspection and independent use. To regenerate them from a CommonCare server checkout, run `node scripts/sync-commonfunded-analysis.mjs /path/to/commondocs`; add `--check` to detect differences without writing. The CommonCare GPS spending generator is separate from this toolkit's standalone sampler.

The [explorer introduction](explorer-context.md), [account example](example-analysis.json), and [GPS example](example-gps-analysis.json) are also synced to CommonCare AIS for endpoint discovery. The GPS example is an input for CommonCare's GPS analysis path; the standalone scripts run the account example.

CommonCare's standard annual shop cost sharing and GPS CommonFunded mapping use the same cost-sharing core. Per-event coverage and payout-cap rules remain separate. CommonCare also offers an in-memory GPS path using its shop spending generator.

## Start here

Obtain actual prices for the current and proposed plans before making a customer-specific calculation. At minimum, gather enrolled household counts, annual quoted costs by coverage tier, deductible, MOOP and an assumed flat coinsurance rate for each plan, plus the proposed account reimbursement threshold and cap. Annualize monthly premiums. Premiums are inputs; this toolkit does not search for or invent quotes. If exact census data are unavailable, use a mock census and clearly label the result illustrative.

If the proposed price is missing but its benefits are known, run a threshold calculation with the proposed single and family rates set equal to the corresponding baseline rates. Report only the break-even reduction. Equal rates are placeholders for this calculation.

## Definitions and decision boundaries

The decision uses one annual total per plan: full coverage cost plus cost sharing before reimbursement, plus any specified incremental expense. For each alternative to the baseline, read `accountLayer[].totalCost`. All dollar amounts in that object cover the entire enrolled population.

| Field | Interpretation |
|---|---|
| `expectedBaseline`, `expectedProposed` | Average annual totals on the same claims, including supplied incremental administration for the proposal |
| `breakEvenAnnualFixedReduction` | Increase in expected cost sharing before reimbursement plus incremental administration |
| `expectedSavings` | Quoted annual reduction less break-even reduction. Positive favors the proposal and negative favors the baseline |
| `scenariosCheaper` | Divide by `scenarioCount` for the share of modeled years with strictly lower total cost. Ties contribute zero wins. For replayed bills this is a historical count |

Each plan's `results[].accountCapUse` counts household-years in which reimbursements used the entire account cap (`householdYearsAtCap`) out of household-years with a positive account cap (`householdYearsWithCap`). The count includes singles and families, using each household's applicable limit once per year. A zero denominator means there was no funded account limit. The account limit can differ from the deductible.

- **Current cost and upper-layer cost** are full annual costs for the same enrolled population and period. A quoted premium is fixed for its contract period; an upper-layer amount that includes expected self-funded claims is an estimate, and its volatility is outside this model.
- **Released contribution** is current cost minus the proposed upper-layer cost. It is not automatically a deposited account balance or a guaranteed saving.
- **Reimbursement** is the eligible claim paid by the account under the modeled threshold and cap. The current implementation approximates eligibility using aggregate cost sharing, not individual expense categories or dates.
- **Account-layer gain** is released contribution minus incremental reimbursements relative to the current account and any specifically supplied incremental administration. It can be negative. It is distinct from unused account budget and from combined savings.
- **Participant residual** is modeled cost sharing after account reimbursement. Combined cost change includes its difference between designs, so shifting costs between employer and participant is not counted as a saving.
- **Account budget** is a population-level planning reserve. The tool does not limit promised reimbursements to that reserve. Expected unused budget is the average of positive unspent amounts; it does not offset years in which claims exceed the reserve and is not net experience gain.
- **Simulation outcomes** are conditional on supplied or assumed distributions. Percentiles and shortfall frequencies describe the generated scenarios; they are not validated forecasts or guarantees. Observed dominance means only that one design wins in the sampled scenarios, not all possible states.

The quoted premium is a contractual expense that purchases coverage. Account reimbursements depend on claims and the adopted terms. The tool compares their modeled costs; it does not forecast renewal prices, network changes, medical outcomes, or upper-layer claim volatility.

For a one-command demonstration, run `node run-analysis.mjs example-analysis.json` from this directory. Replace its hypothetical prices and plan terms with actual quotes before interpreting the result. The example generates 50 single-coverage employees averaging age 40; `mockCensus` can also specify `minAge`, `maxAge`, `familyFraction`, `dependentsPerFamily`, and `seed`. Alternatively supply `census` directly; [sample-census.json](sample-census.json) shows the format. The synthetic family model assumes the first dependent is an adult and additional dependents are children; it does not infer real enrollment tiers.

`annualFixed` is the full annual coverage cost per enrolled single household. The engine takes no payroll contribution input. The legacy output `expectedEmployer` adds full coverage cost and account reimbursements, so it cannot identify actual employer payments. `family.annualFixed` is a single combined family rate; when quoted tiers have different prices, this simplified runner cannot accurately represent them yet. `coinsurance` is a decimal such as `0.2`, applied after the deductible until the MOOP. When deductible equals MOOP, no post-deductible coinsurance is incurred in this simplified model.

Annual bill inputs are assumed deductible-subject allowed expenses; exclude preventive care covered without cost sharing. Ordered historical events may instead identify preventive services explicitly. Synthetic age-band means do not separately identify preventive claims. Special copays, service-specific deductibles, network and pricing differences may alter results; interpret a narrow result accordingly.

No additional administration is assumed: `incrementalAdministration` defaults to zero. Enter a nonzero amount only when a specific incremental cost is known. Existing insurance administrative expense is already reflected in the quoted premium and must not be added again.

The toolkit separates scenario generation from comparison. It requires Node.js and no dependencies. `run-simulation.mjs input.json` emits seeded annual allowed bills for each census member. Input contains `census: [{id, age, householdId, risk}]`, optional `years`, `seed`, default `risk`, `ageBands: [{maxAge, zeroProbability, annualMean}]`, and `concentration: [{top, share}]`. It defaults to 100 years and risk level 3; an individual `risk` overrides the default. Levels 1–10 use CommonCare's multipliers. The output reports target and sampled concentration, age means and zero rates.

### Evidence and precision

| Evidence | What the result means |
|---|---|
| Mock census and simulated claims | A reproducible illustration under stated assumptions |
| Actual quotes and census with simulated claims | An employer-specific structural quote estimate, conditional on the simulated claims distribution |
| Actual historical annual allowed totals | A reproducible replay of those totals under this tool's simplified rules; not necessarily the historical plan's actual adjudication |
| Ordered historical claims with standard or preventive service flags | A replay under the executable's uniform cost-sharing and account rules. Other plan-specific rules require further adjudication. |
| Complete dated claims, actual prices and eligibility, and fully implemented plan and account rules | An exact retrospective calculation can be established by reconciling against actual payments. Full plan-specific adjudication is not yet implemented. |

Replaying a proposed alternative against past claims is a counterfactual, even if every supplied claim is processed exactly. Different networks, prices, coverage, and participant behavior might have produced different care and claims. Historical reconciliation and counterfactual replay do not guarantee future costs.

Each person-year is drawn independently; sample totals are not forced to match population targets. This standalone sampler is not the existing CommonCare shop sampler. It uses a discrete spending-share model and adjusts the concentration curve when an age band's zero rate conflicts with the targets. CommonCare's in-memory GPS path uses the established shop generator instead. These assumptions are not proof of empirical validation; persistent conditions and family correlations are not modeled. Generated values are annual totals, not dated individual claims.

See [SAMPLER-NOTES.md](SAMPLER-NOTES.md) for the established generator's mechanics, the former zero-conversion rule, and a seeded diagnostic of the former and current shop draws alongside the standalone draw. The diagnostic reproduces those draws; it does not call the production shop simulator. Treat the experimental sampler as a sensitivity model until its impact is validated.

`run-comparison.mjs input.json` accepts `scenarios: [{id, bills: [{id, householdId, allowed}]}]` and `plans: [{id, annualFixed, deductible, coinsurance, moop, hraThreshold, hraCap, family}]`. Amounts are annual dollars; coinsurance is a decimal. Each household ID groups covered members; omit it for a single-person household. For multi-person households, every plan needs `family: {annualFixed, deductible, deductibleType, moop, hraThreshold, hraCap}`, with `deductibleType` either `embedded` or `aggregate`. Family premium and HRA cap apply once per household. The individual MOOP applies to each member and the family MOOP to the household. Every scenario must include every enrolled person, including zero claims. Historical scenarios may be supplied directly. Results report population-year averages.

For ordered historical claims, replace each person's `allowed` with `events: [{order, allowed, kind}]`; use `kind: "standard"` or `"preventive"`, and a unique numeric `order` across the household. Every household member must have an events array, including `[]` for no claims. The core accumulates each event in order against individual and family deductible and MOOP limits, then the account threshold and cap. It assumes identical allowed prices across plans and uniform coinsurance. It does not yet model service-specific copays, drug tiers, exclusions, alternative prices, or account-specific eligibility; exact replay of a real contract requires those features when applicable. Family annual totals still use member order as an approximation.

For the central CommonFunded calculation, add `accountAnalysis: {baselinePlanId: "current"}`. Optionally include `annualAccountBudget` as the total population-level planning reserve; it is not a limit on promised reimbursements. Each plan's `annualFixed` is the supplied annual cost per enrolled single household; `family.annualFixed` is the corresponding family amount. These may be fixed premiums or allocated estimates for an upper layer, provided the same population and period are used. Alongside the total-cost comparison, `accountLayer` reports the released contribution, incremental HRA reimbursements, account gain, percentiles, shortfall probability, and participant residual change. `expectedCombinedCostChange` includes that residual change; negative favors the proposed design. If upper-layer costs are estimates, these outputs do not simulate their volatility. A reimbursement cap is a liability limit, not necessarily cash deposited into an account.

Percentiles and shortfall probabilities are conditional on the synthetic distribution, not precise forecasts. Sample concentration can differ from the targets because of randomness, census mix, risk, and incompatible zero rates. The one-percentage-point flag reports a difference, not a failed calibration or actuarial validation. Compare multiple seeds and plausible age means, concentration, and benefit assumptions to see whether the direction is stable.

Run a small worked input with `node run-comparison.mjs example-comparison.json` from this directory. It is a hypothetical two-scenario illustration, not a population forecast. Run the calculation check with `node --test comparison.test.mjs`. For synthetic input, run `node run-simulation.mjs census.json` and copy its `scenarios` array into the comparison input alongside the quoted plans and `accountAnalysis` settings. Use actual annual allowed-claim scenarios directly with `run-comparison.mjs` when available; `run-analysis.mjs` generates scenarios from a census and does not ingest historical scenarios. CommonCare's analysis endpoint can route supplied scenarios to the comparison engine or run its in-memory GPS mode with household annual totals.
