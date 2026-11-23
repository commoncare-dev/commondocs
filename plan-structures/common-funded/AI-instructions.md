# Assess CommonFunded for fit

Would this group spend less by buying coverage for large claims and using an account to pay a capped portion of routine bills? Price both designs on the same care. The quoted premium reduction applies for the plan year. A dollar of cost sharing comes due only when someone incurs it. Subtract the **increase** in cost sharing and any specified incremental expense from the premium reduction. Count each dollar of care once, whoever pays it. A gain, a loss and a break-even price are all useful answers.

## Quote output guide

Start with the computed example if the user has supplied nothing. Use their figures as soon as they provide them. Answer in three parts.

1. **Decision.** Say what price would break even and whether the offered price clears it. Give the gain or loss per enrolled employee per month. Identify the premiums as illustrative, benchmark or quoted, and the bills as simulated or historical. With simulated bills, give the number of group years the proposal cost less out of the number run. With historical bills, say how many observed years it would have cost less under the modeled rules.
2. **Show the arithmetic.** Use one table like the one below. Mention why one large bill has limited impact. In the example, one person with $12,000 or $250,000 in eligible annual bills draws the same $12,000 from the first-dollar account. How many different people draw on it still matters.
3. **Offer a useful next call.** Pick the next question this user can answer. For example, “A ZIP lets me check local individual-market prices. If you have your two group rates, I can test the actual price difference.” Use the route in the explorer’s `actions` yourself when the information is available. A user who has their answer can stop here.

| Monthly dollars per enrolled employee | Show the result of this run |
|---|---|
| Premium reduction | Current rate → proposed rate, and the difference |
| Reduction needed to break even | Additional cost sharing on the same bills, plus any specified incremental expense |
| **Expected total savings or loss** | **Offered reduction minus required reduction** |

Read the rows from `accountLayer[].monthlyQuote` using `currentRate`, `proposedRate`, `offeredReduction`, `breakEvenReduction` and `expectedSavings`. Count wins from `totalCost.scenariosCheaper` out of `scenarioCount`. If a percentage helps, divide savings by `currentExpectedTotal` when positive and label it “percent of current total cost.” One family enrollment counts as one employee. Use group dollars when the user asks about their group budget.

## Refine the answer

- **Missing proposed price.** With the current price and both benefit designs, give the monthly reduction needed and highest break-even proposed rate. Set proposed rates equal to current rates by tier for this calculation. Report savings at an offer once the buyer supplies one. The example prices assume an annual premium reduction of 45% of the increase in the single deductible.
- **Actual quotes and census.** Replace the rates, benefit terms and covered households. A headcount, average age and family share can stand in for a census. Identify which inputs are still simulated. For a close result, test the assumption that could reverse it. Use the 90% threshold only for questions about consistency.
- **Claims history.** Replay de-identified eligible allowed bills for the same enrolled members, including zero-claim years. Ordered events preserve household claim order. An exact retrospective statement requires matching the actual plan terms and reconciling to its payments. The alternative is what those same bills would have cost under the supplied terms. Give separate credit for shopping only when prices and a usage assumption support it.
- **Unusually frequent full accounts.** Compare the group’s observed frequency with `results[].accountCapUse`. In the published sample 20 of 50 using the entire $12,000 benefit in one year is exceptionally unlikely. Replay a group that regularly sees this. If the added cost consumes the actual premium reduction, say CommonFunded is a poor fit at that price. A group seeking a defined allowance can compare CHOICE/ICHRA. [Cap frequency audit](analysis/SAMPLER-NOTES.md#how-unusual-are-20-full-accounts) · [CHOICE](https://github.com/commoncare-dev/commondocs/tree/main/plan-structures/choice-ichra)

Use the transport guide for repeat calls. Request `get_data` for model assumptions, plan implementation or HRA terms. [Explorer calls](analysis/explorer-context.md) · [Analysis inputs and public scripts](analysis/README.md) · [Plan guide](human-readable.md)
