import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import {adjudicateHousehold} from './cost-sharing-core.mjs';

const mean = xs => xs.reduce((a,b)=>a+b,0)/xs.length;
const quantile = (xs,p) => { const a=[...xs].sort((a,b)=>a-b); return a[Math.ceil(p*a.length)-1]; };
const num = (x,name) => { if (!Number.isFinite(x) || x < 0) throw Error(`${name} must be a nonnegative number`); return x; };
export function compare({ scenarios, plans, accountAnalysis }) {
  if (!Array.isArray(scenarios) || !scenarios.length || !Array.isArray(plans) || plans.length < 2) throw Error('Provide scenarios and at least two plans');
  const ids = new Set();
  for (const p of plans) {
    if (!p.id || ids.has(p.id)) throw Error('Plan IDs must be unique'); ids.add(p.id);
    for (const k of ['annualFixed','deductible','coinsurance','moop','hraThreshold','hraCap']) num(p[k],k);
    if (p.coinsurance > 1 || p.moop < p.deductible) throw Error('Coinsurance must be 0–1 and MOOP at least deductible');
    if (p.family) {
      for (const k of ['annualFixed','deductible','moop','hraThreshold','hraCap']) num(p.family[k],`family.${k}`);
      if (!['embedded','aggregate'].includes(p.family.deductibleType) || p.family.moop < p.moop) throw Error('Family deductibleType must be embedded or aggregate; family MOOP must cover individual MOOP');
    }
  }
  let populationSignature;
  const rows = scenarios.map(s => {
    if (!Array.isArray(s.bills) || !s.bills.length) throw Error('Each scenario needs bills including zero-claim enrollees');
    const members = new Set();
    for (const b of s.bills) { if (!b.id || members.has(b.id)) throw Error('Each scenario needs unique person IDs'); members.add(b.id); if(b.events===undefined) num(b.allowed,'allowed'); }
    const signature=JSON.stringify(s.bills.map(b=>[b.id,b.householdId||b.id]).sort((a,b)=>a[0].localeCompare(b[0])));
    if(populationSignature && signature!==populationSignature) throw Error('Every scenario must contain the same people and household assignments, including zero-claim members');
    populationSignature=signature;
    return plans.map(p => {
      let oop=0, hra=0;
      let fixed=0;
      const households = new Map();
      for (const b of s.bills) { const key=b.householdId || b.id; if (!households.has(key)) households.set(key,[]); households.get(key).push(b); }
      for (const members of households.values()) {
        const family=members.length>1;
        if (family && !p.family) throw Error('Family plan terms required for multi-person households');
        const f=family ? p.family : null;
        fixed+=family ? f.annualFixed : p.annualFixed;
        const result=adjudicateHousehold(members,p);
        oop+=result.oop;
        hra+=result.reimbursement;
      }
      return { plan:p.id, fixed, oop, hra, participant:oop-hra, total:fixed+oop, employer:fixed+hra };
    });
  });
  const results=plans.map((p,i)=>{ const a=rows.map(r=>r[i]); return { plan:p.id, expectedTotalBeforeIncrementalAdministration:mean(a.map(x=>x.total)), expectedEmployer:mean(a.map(x=>x.employer)), expectedParticipant:mean(a.map(x=>x.participant)), expectedHra:mean(a.map(x=>x.hra)), totalP95:quantile(a.map(x=>x.total),.95) }; }).sort((a,b)=>a.expectedTotalBeforeIncrementalAdministration-b.expectedTotalBeforeIncrementalAdministration);
  const winner=results[0].plan, wi=plans.findIndex(p=>p.id===winner);
  const comparisons=plans.filter(p=>p.id!==winner).map(p=>{ const i=plans.findIndex(x=>x.id===p.id), differences=rows.map(r=>r[i].total-r[wi].total); return { plan:p.id, expectedSavingsBeforeIncrementalAdministration:mean(differences), winnerProbability:differences.filter(x=>x>0).length/differences.length, tieProbability:differences.filter(x=>x===0).length/differences.length, observedDominance:differences.every(x=>x>=0) }; });
  let accountLayer;
  if (accountAnalysis) {
    const base=plans.findIndex(p=>p.id===accountAnalysis.baselinePlanId);
    if(base<0) throw Error('accountAnalysis.baselinePlanId must identify a plan');
    const admin=num(accountAnalysis.incrementalAdministration ?? 0,'incrementalAdministration');
    const budget=accountAnalysis.annualAccountBudget === undefined ? null : num(accountAnalysis.annualAccountBudget,'annualAccountBudget');
    accountLayer=plans.filter((_,i)=>i!==base).map(p=>{
      const i=plans.findIndex(x=>x.id===p.id);
      const release=rows.map(r=>r[base].fixed-r[i].fixed);
      const incrementalHra=rows.map(r=>r[i].hra-r[base].hra);
      const gains=rows.map((_,n)=>release[n]-incrementalHra[n]-admin);
      const residual=rows.map(r=>r[i].participant-r[base].participant);
      const accountClaims=rows.map(r=>r[i].hra);
      return {plan:p.id,baseline:plans[base].id,expectedReleasedContribution:mean(release),expectedIncrementalReimbursement:mean(incrementalHra),incrementalAdministration:admin,expectedAccountLayerGain:mean(gains),accountGainP05:quantile(gains,.05),accountGainP95:quantile(gains,.95),probabilityOfAccountShortfall:gains.filter(x=>x<0).length/gains.length,annualAccountBudget:budget,expectedUnusedAccountBudget:budget===null?null:mean(accountClaims.map(x=>Math.max(0,budget-x))),expectedClaimsAboveAccountBudget:budget===null?null:mean(accountClaims.map(x=>Math.max(0,x-budget))),expectedNetAccountBudget:budget===null?null:budget-mean(accountClaims),probabilityAccountClaimsExceedBudget:budget===null?null:accountClaims.filter(x=>x>budget).length/accountClaims.length,expectedParticipantResidualChange:mean(residual),expectedCombinedCostChange:mean(residual)-mean(gains)};
    });
  }
  return { assumptions:'Supplied annual plan and upper-layer costs; identical allowed claims across plans; uniform deductible and coinsurance capped at MOOP; account reimburses eligible cost sharing above the household threshold. Explicit preventive events have no cost sharing. Annual totals are processed in member order and do not establish actual claim chronology.', scenarioCount:rows.length, accountLayer, results, winnerBeforeIncrementalAdministration:winner, comparisons, warning:'Results are exact only for the specified simplified rules and supplied events. Copays, drugs, exclusions, different prices, and account-specific eligibility require additional modeling. Synthetic inputs do not identify preventive services. Account-layer gain is not a guarantee of total-plan results when upper-layer cost is estimated.' };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { console.log(JSON.stringify(compare(JSON.parse(readFileSync(process.argv[2], 'utf8'))), null, 2)); } catch(e) { console.error(e.message); process.exitCode=1; }
}
