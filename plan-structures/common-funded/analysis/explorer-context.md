# Continue a CommonFunded exploration

`GET /gps/commonfunded` gives you a calculated illustration in `exampleResult.result`, its input in `accountExample`, and the callable `actions`. Use it for a first exploration. If the user brings data, run their case. Keep the last **input** and the action list. Update the fields the user supplies, send the complete request again and report what changed. The public analysis is stateless. In account mode, keep the same census and simulation seeds for a price-only comparison.

**MCP.** Connect to [CommonCare MCP](https://mcp.commoncare.org/mcp) with a CommonCare account for repeated calls. Start with `get_commonfunded_explorer_context`. Call `analyze_commonfunded_structure` with `{input: request}` and read `structuredContent`. On REST, POST the request object itself. For the full plan manual, input guide, GPS example or detailed example results, use `GET /gps/commonfunded?action=get_data` or the MCP context tool with `{action: 'get_data'}`.

| The user adds | Next call |
|---|---|
| ZIP, optionally age and plan year | `benchmarks` returns local individual-market rate comparisons. Keep the source label if using one as an illustrative price. |
| One or both group rates and benefit terms | `analyze` with annual rates per household and the appropriate single/family terms. The current rate with both designs yields a price to beat. |
| Their census or claims | For simulation, replace `mockCensus` with `census`. For replay, replace either census with `scenarios` containing eligible bills. Include all enrolled members and supply family terms when dependents are covered. Use `get_data` for the input formats. |
| An explicit request for a saved quote | `get_full_quote` returns the authorized GPS quote workflow. |

## Try a second call

In a Node.js 18+ REPL, use the origin where you opened the explorer. This example changes only the proposed single premium, to an illustrative $700 per month. The same function accepts subsequent revisions to the request.

```js
const origin = 'https://api.commoncare.org';
async function json(path, options) {
  const response = await fetch(new URL(path, origin), options);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}
const discovery = await json('/gps/commonfunded');
const request = structuredClone(discovery.accountExample);
const analyze = () => json('/gps/commonfunded-analysis', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(request)
});
request.plans.find(p => p.id === 'proposed').annualFixed = 700 * 12;
const revised = await analyze();
console.log(revised.accountLayer[0].monthlyQuote);
```

For a standalone audit, run `node run-analysis.mjs example-analysis.json` in the public analysis directory. Anyone can inspect the model, change the inputs and reproduce its result locally. [CommonDocs scripts](https://github.com/commoncare-dev/commondocs/tree/main/plan-structures/common-funded/analysis)
