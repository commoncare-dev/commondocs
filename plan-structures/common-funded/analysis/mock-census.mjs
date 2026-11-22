// Generated from CommonCare TypeScript. See README.md for regeneration.
// Generates enrolled households; averageAge refers to employees, not dependents.
export function mockCensus({ employeeCount, averageAge, minAge = 18, maxAge = 64, familyFraction = 0, dependentsPerFamily = 1, seed = 1 }) {
    if (!Number.isInteger(employeeCount) || employeeCount < 1 || !Number.isFinite(averageAge) || !Number.isInteger(minAge) || !Number.isInteger(maxAge) || minAge < 18 || maxAge > 120 || minAge > maxAge || averageAge < minAge || averageAge > maxAge || !Number.isFinite(familyFraction) || familyFraction < 0 || familyFraction > 1 || !Number.isInteger(dependentsPerFamily) || dependentsPerFamily < 1 || !Number.isInteger(seed))
        throw Error('Invalid mock census inputs');
    let state = seed >>> 0;
    const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
    const ages = Array.from({ length: employeeCount }, () => Math.round(minAge + random() * (maxAge - minAge)));
    let delta = Math.round(averageAge * employeeCount) - ages.reduce((a, b) => a + b, 0);
    while (delta !== 0) {
        let changed = false;
        for (let i = 0; i < ages.length && delta !== 0; i++) {
            const step = Math.sign(delta);
            if (ages[i] + step >= minAge && ages[i] + step <= maxAge) {
                ages[i] += step;
                delta -= step;
                changed = true;
            }
        }
        if (!changed)
            break;
    }
    const familyCount = Math.round(employeeCount * familyFraction);
    const order = Array.from({ length: employeeCount }, (_, i) => ({ i, key: random() })).sort((a, b) => a.key - b.key);
    const families = new Set(order.slice(0, familyCount).map(x => x.i));
    const census = [];
    ages.forEach((age, i) => { const householdId = `h${i + 1}`; census.push({ id: `e${i + 1}`, householdId, age }); if (families.has(i))
        for (let j = 0; j < dependentsPerFamily; j++)
            census.push({ id: `e${i + 1}-d${j + 1}`, householdId, age: j === 0 ? Math.max(18, Math.min(120, age + Math.round((random() - .5) * 8))) : Math.floor(random() * 18) }); });
    return { census, summary: { employeeCount, averageEmployeeAge: ages.reduce((a, b) => a + b, 0) / employeeCount, familyHouseholds: familyCount, coveredPeople: census.length }, assumptions: 'Synthetic household ages and composition, not a representative census. First dependent is modeled as an adult; additional dependents as children.' };
}

import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { console.log(JSON.stringify(mockCensus(JSON.parse(readFileSync(process.argv[2], 'utf8'))), null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
