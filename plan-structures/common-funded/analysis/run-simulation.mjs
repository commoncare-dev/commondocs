// Generated from CommonCare TypeScript. See README.md for regeneration.
import { sampleAnnualSpend } from './spend-distribution.mjs';
export const defaultAgeBands = [
    { maxAge: 18, annualMean: 3750, zeroProbability: .55 }, { maxAge: 34, annualMean: 5825, zeroProbability: .45 },
    { maxAge: 44, annualMean: 9800, zeroProbability: .35 }, { maxAge: 54, annualMean: 10122, zeroProbability: .25 },
    { maxAge: 64, annualMean: 12632, zeroProbability: .05 }, { maxAge: 120, annualMean: 13921, zeroProbability: 0 }
];
export const defaultConcentration = [{ top: .01, share: .27 }, { top: .05, share: .52 }, { top: .10, share: .68 }, { top: .15, share: .77 }, { top: .20, share: .84 }, { top: .50, share: .99 }];
export function simulate({ census, years = 100, seed = 1, ageBands = defaultAgeBands, concentration = defaultConcentration, risk = 3 }) {
    if (!Array.isArray(census) || !census.length || !Number.isInteger(years) || years < 1 || !Number.isInteger(seed))
        throw Error('Provide a nonempty census, positive integer years and integer seed');
    if (!Array.isArray(ageBands) || !ageBands.length || !Array.isArray(concentration) || !concentration.length)
        throw Error('Provide age bands and concentration targets');
    const bands = [...ageBands].sort((a, b) => a.maxAge - b.maxAge);
    for (const b of bands)
        if (![b.maxAge, b.zeroProbability, b.annualMean].every(Number.isFinite) || b.zeroProbability < 0 || b.zeroProbability >= 1 || b.annualMean < 0)
            throw Error('Invalid age band');
    let lastTop = 0, lastShare = 0;
    for (const t of concentration) {
        if (!Number.isFinite(t.top) || !Number.isFinite(t.share) || t.top <= lastTop || t.top >= 1 || t.share <= lastShare || t.share >= 1)
            throw Error('Concentration targets must increase strictly between zero and one');
        lastTop = t.top;
        lastShare = t.share;
    }
    let state = seed >>> 0;
    const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
    const ids = new Set();
    const riskMultipliers = { 1: .1, 2: .25, 3: .65, 4: .8, 5: 1, 6: 1.2, 7: 1.6, 8: 2.5, 9: 6, 10: 12 };
    const persons = census.map(p => { const band = bands.findIndex(b => p.age <= b.maxAge), personRisk = p.risk ?? risk; if (!p.id || ids.has(p.id) || !Number.isFinite(p.age) || p.age < 0 || band < 0 || !riskMultipliers[personRisk])
        throw Error('Census IDs must be unique, ages covered, and risk between 1 and 10'); ids.add(p.id); return { ...p, band, personRisk }; });
    const bySpend = Object.fromEntries(concentration.map(t => [String(t.top * 100), t.share]));
    const slots = [];
    for (let year = 0; year < years; year++)
        for (const p of persons)
            slots.push({ year, id: p.id, householdId: p.householdId || p.id, band: p.band, allowed: sampleAnnualSpend(bands[p.band].annualMean * riskMultipliers[p.personRisk], bands[p.band].zeroProbability * 100, bySpend, random) });
    const targetTotal = persons.reduce((sum, p) => sum + bands[p.band].annualMean * riskMultipliers[p.personRisk], 0) * years;
    const ranked = [...slots].sort((a, b) => b.allowed - a.allowed), actualTotal = ranked.reduce((a, s) => a + s.allowed, 0);
    const concentrationReport = concentration.map(t => { const count = Math.round(t.top * slots.length), actual = actualTotal ? ranked.slice(0, count).reduce((a, s) => a + s.allowed, 0) / actualTotal : 0; return { ...t, count, actual, error: actual - t.share }; });
    const ageReport = bands.map((b, i) => { const group = slots.filter(s => s.band === i), people = persons.filter(p => p.band === i); return { maxAge: b.maxAge, personYears: group.length, targetMean: people.length ? people.reduce((n, p) => n + b.annualMean * riskMultipliers[p.personRisk], 0) / people.length : null, actualMean: group.length ? group.reduce((a, s) => a + s.allowed, 0) / group.length : null, targetZero: b.zeroProbability, actualZero: group.length ? group.filter(s => s.allowed === 0).length / group.length : null }; }).filter(x => x.personYears);
    const order = new Map(persons.map((p, i) => [p.id, i]));
    const scenarios = Array.from({ length: years }, (_, i) => ({ id: String(i + 1), bills: slots.filter(s => s.year === i).sort((a, b) => order.get(a.id) - order.get(b.id)).map(s => ({ id: s.id, householdId: s.householdId, allowed: s.allowed })) }));
    const maxAbsoluteShareError = Math.max(...concentrationReport.map(x => Math.abs(x.error)));
    return { source: 'synthetic-independent', seed, assumptions: { ageBands: bands, concentration, risk, riskMultipliers, method: 'independent person-year draws from the CommonCare spending sampler', note: 'Annual totals are not dated claim events; zero rates may make the population concentration targets incompatible. Results are not validated against actual claims.' }, calibration: { targetTotal, actualTotal, concentration: concentrationReport, ageBands: ageReport, maxAbsoluteShareError, shareTargetsWithinOnePercentagePoint: maxAbsoluteShareError <= .01, warning: 'Observed sampling variation and incompatible zero rates can produce different concentration; a good fit does not validate annual group risk.' }, scenarios };
}

import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { console.log(JSON.stringify(simulate(JSON.parse(readFileSync(process.argv[2], 'utf8'))), null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
