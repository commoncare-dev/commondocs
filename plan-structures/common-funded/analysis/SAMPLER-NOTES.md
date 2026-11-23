# Medical-spending models: audit notes

The CommonCare in-memory GPS path and this open-source toolkit use different generators. Both produce annual allowed-spend totals for each covered household member, not dated medical claims. Both default to 100 simulated years per household; neither establishes a validated forecast of a particular group's claims.

## CommonCare shop generator

The GPS path uses the existing `cost-sim` shop generator. For each person-year it selects an age-band base, multiplies it by the selected risk factor, draws a multiplier from probability bands, multiplies by 0.85, and clamps the result to the configured minimum and maximum. For major medical the range is $0–$200,000. Risk defaults to 3 unless supplied or otherwise determined by the shop workflow. The base is an input to this process; it is not a guarantee of the resulting average.

The same household-year bills are evaluated across the supplied coverages. Standard annual plans use the shared deductible, coinsurance and MOOP core; annual member totals are processed in member order rather than actual service order. Per-event coverage and payout-cap rules follow separate shop logic. The in-memory GPS path can instead accept observed annual totals for every member and year; those amounts bypass the synthetic spending cap. It does not reconstruct service-level claims from annual totals.

The prior shop logic could convert small generated bills to zero: it compared percentage-valued `zeroOdds` directly with `Math.random()` rather than dividing by 100, so a positive setting always passed when the other conditions were met. Banking could also leave amounts unapplied. The current shop generator retains small generated bills; it does not apply the configured `zeroOdds` or the `bySpend` concentration targets. It therefore has no explicit zero-claim probability. This is a modeling limitation, not evidence that every enrolled person incurs claims each year.

## Standalone CommonDocs generator

`run-simulation.mjs` independently draws each person-year using the supplied or default age-band mean, risk multiplier, zero probability and spending-share targets. It returns the assumed inputs and reports sampled means, zero rates, spending concentration and their differences from targets. It does not force the sample to match those targets. When a zero rate is incompatible with the target curve, it clips and renormalizes that curve. Its piecewise distribution assigns the same value to all draws in a given spending band. The standalone generator does not apply the shop's $200,000 synthetic cap.

The two generators share some input values but have different mechanics and should not be treated as interchangeable. Neither models persistent conditions, correlated family health, claim timing, changes in care or prices, or separately identifies preventive services in synthetic totals. Matching assumed concentration targets does not validate a generator against actual claims.

## How unusual are 20 full accounts?

In the published 100-year run, 572 of 5,000 single-enrollee years reached the $12,000 account cap (11.44%). A typical year's count is better described by the observed mean of 5.72 and maximum of 13 than by the constructed example of 20. No year in the run reached 20. For this first-dollar design with a $12,000 deductible and out-of-pocket maximum, reaching $12,000 of eligible bills also exhausts the account.

The sampler permits a separate probability check. For the seed-17 census at risk 3, sum the probability widths of the spending bands at or above $12,000 for each age. That gives 43 enrollees a 10% chance and seven a 15% chance of reaching the cap. Under independent draws the expected count is 43 × 0.10 + 7 × 0.15 = 5.35. The chance of at least 20 is about 0.0000069%, found by summing the coefficients for powers 20 through 50 of `(0.90 + 0.10z)^43 (0.85 + 0.15z)^7`. These odds apply to this synthetic census and distribution. For a group that reports 20 actual cap hits, use its observed claims.

Even a cap count does not decide the quote. Suppose exactly 20 people each have $12,000 of eligible bills and 30 have zero. Each of the 20 incurs $4,400 under the current design and $12,000 under the proposed design. Across all 50 employees that adds **$253.33 per employee per month** (20 × $7,600 ÷ 50 ÷ 12). A $250 monthly premium cut would lose $3.33 on those bills. The example’s $356.25 cut saves $102.92. Other spending among the 50 would change that result.

## What changed at risk 4?

Using `example-analysis.json`, retain census seed 17, spending seed 23, and all benefits. Set `simulation.years` to 1,000 for this audit. Run `simulation.risk` at 3 and 4. The age-band mean multiplier changes from 0.65 to 0.80. With the same draws, positive bills grow by 23.1% and zero bills stay zero. The example’s monthly premium reduction is $356.25 per enrolled employee ($9,500 of additional deductible × 45% ÷ 12). A separate near-break-even test uses a proposed annual single premium of $10,600, a monthly reduction of $116.67 rounded.

| 1,000 simulated years, 50 singles | Risk 3 | Risk 4 |
|---|---:|---:|
| Reach $2,500 of allowed bills | 19.42 people | 19.42 people |
| Reach $12,000 of allowed bills and exhaust the account | 5.45 people | 7.04 people |
| Annual group account reimbursements | $150,564 | $166,471 |
| Annual group cost sharing on the current plan | $85,519 | $92,461 |
| Annual group break-even premium reduction | $65,045 | $74,010 |
| Savings per employee per month at the $356.25 cut | $247.84 | $232.90 |
| Savings per employee per month at the near-break-even price | $8.26 | −$6.68 |

Pairing the same person-years across runs explains the $8,965 increase in break-even. People below $12,000 in both runs add $10,060 to the annual difference. Those newly at the cap reduce the difference by $323, and those already capped reduce it by $772. Cost sharing on the current plan continues to accrue at 20% up to $20,000 of allowed bills. For an individual at $12,000, cost sharing is $4,400 under the current plan and $12,000 under the proposal. At $120,000 it is $6,000 and $12,000. The largest difference for these two designs is $7,600 per person, at $12,000 of eligible spending.

There are just 29 distinct annual spending amounts among the 50,000 draws at each setting. Moving the multiplier can push whole bands across a deductible. More draws refine the estimate for those assumptions. To judge their fit, compare the frequencies and dollars inside the layer against comparable claims covering all enrolled people, including those with zero claims. For perspective, risk 3 produces a $5,723 mean and $1,910 median. The 2021 MarketScan sample in a Department of Labor study had a similar mean ($5,637) and a much lower median ($883). Its 90th and 95th percentiles of annual spending were $10,928 and $22,430. These are all-service expenditures in a different population and year. Validating a $12,000 deductible hit rate requires comparable deductible-subject spending. [MarketScan sample distribution, Table 4](https://www.dol.gov/sites/dolgov/files/ebsa/researchers/analysis/health-and-welfare/employer-sponsored-insurance-actuarial-values-and-sensitivity-analysis-technical-appendix.pdf)

## Reproducible diagnostic

In a CommonCare server checkout, run `npm run compile` and then `node scripts/compare-spend-models.mjs`. The script independently reproduces the former shop draw, the current shop draw and the standalone draw using fixed seeds; it does not call the production shop simulator. For 200,000 draws at age 40 and risk 3, one run produced:

| Reproduced model | Mean | Zero rate | Top 1% share | Top 5% share | Maximum |
|---|---:|---:|---:|---:|---:|
| Former shop, including zero conversion | $6,000 | 22.9% | 26.7% | 52.2% | $200,000 |
| Current shop, retaining small bills | $6,037 | 0% | 26.8% | 52.2% | $200,000 |
| Experimental standalone | $6,387 | 35.0% | 27.1% | 52.6% | $173,202 |

The standalone top band in this scenario gives every draw in that band the same $173,202 amount. These numbers describe this diagnostic, not a full quote or historical population; results can differ with age, risk, census mix and benefit design. The shop generator uses `Math.random()` in production, so the diagnostic seed does not make a production run reproducible.

A useful next check is to compare generated bills and resulting account costs with reference distributions and, when available, de-identified claims. Assess zero-claim years and the synthetic cap using concrete populations and report how changes affect the quote. Preserve the inputs, model version and assumptions when comparing results.
