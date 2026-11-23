// Generated from CommonCare TypeScript. See README.md for regeneration.
import { mockCensus } from './mock-census.mjs';
import { simulate } from './run-simulation.mjs';
import { compare } from './run-comparison.mjs';
export function analyze(input) {
    if (!input.accountAnalysis?.baselinePlanId)
        throw Error('Provide accountAnalysis.baselinePlanId and actual quoted plan costs');
    const mock = input.mockCensus ? mockCensus(input.mockCensus) : null;
    if (input.census && mock)
        throw Error('Provide census or mockCensus, not both');
    const simulation = simulate({ ...input.simulation, census: mock?.census || input.census });
    const comparison = compare({ scenarios: simulation.scenarios, plans: input.plans, accountAnalysis: input.accountAnalysis });
    return { censusSummary: mock?.summary || { coveredPeople: input.census.length }, ...comparison, censusAssumptions: mock?.assumptions || 'User-supplied census', simulationAssumptions: simulation.assumptions, calibration: simulation.calibration };
}

import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { console.log(JSON.stringify(analyze(JSON.parse(readFileSync(process.argv[2], 'utf8'))), null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
