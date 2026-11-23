import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {compare} from './run-comparison.mjs';
import {readFileSync} from 'node:fs';
import {mockCensus} from './mock-census.mjs';
import {adjudicateHousehold} from './cost-sharing-core.mjs';
import {simulate} from './run-simulation.mjs';

test('account gain uses incremental reimbursements and separates participant cost', () => {
  const input=JSON.parse(readFileSync(new URL('./example-comparison.json',import.meta.url)));
  const result=compare(input).accountLayer[0];
  assert.equal(result.expectedReleasedContribution,6000);
  assert.equal(result.expectedIncrementalReimbursement,7000);
  assert.equal(result.expectedAccountLayerGain,-1100);
  assert.equal(result.probabilityOfAccountShortfall,.5);
  assert.equal(result.expectedParticipantResidualChange,-4700);
  assert.equal(result.expectedCombinedCostChange,-3600);
});

test('total-cost break-even depends on cost sharing and added expense, independent of account allocation', () => {
  const input=JSON.parse(readFileSync(new URL('./example-comparison.json',import.meta.url)));
  const decision=()=>compare(input).accountLayer[0].totalCost;
  const expected={expectedBaseline:28700,expectedProposed:25100,expectedSavings:3600,breakEvenAnnualFixedReduction:2400,scenariosCheaper:2};
  assert.deepEqual(decision(),expected);
  input.plans[0].hraCap=5000;
  input.plans[1].hraCap=0;
  input.accountAnalysis.annualAccountBudget=0;
  assert.deepEqual(decision(),expected);
  // Two enrolled singles: a $1,200 reduction each exactly meets group break-even.
  input.plans[1].annualFixed=10800;
  assert.equal(decision().expectedSavings,0);
  assert.equal(decision().scenariosCheaper,1);
  input.plans[1].annualFixed+=1;
  assert.equal(decision().expectedSavings,-2);
});

test('a large claim exhausts its own annual account only once', () => {
  const {plans}=JSON.parse(readFileSync(new URL('./example-analysis.json',import.meta.url)));
  const adjudicate=(amounts)=>adjudicateHousehold([{id:'one',events:amounts.map((allowed,order)=>({allowed,order,kind:'standard'}))}],plans[1]);
  for (const [bills,account,upper] of [
    [[12000],12000,0],
    [[120000],12000,108000],
    [[4000,8000,108000],12000,108000]
  ]) {
    const result=adjudicate(bills);
    assert.equal(result.reimbursement,account);
    assert.equal(result.insurance,upper);
  }
});

test('mock census matches requested employee mean and family count', () => {
  const r=mockCensus({employeeCount:50,averageAge:40,familyFraction:.2,seed:12});
  assert.equal(r.summary.averageEmployeeAge,40);
  assert.equal(r.summary.familyHouseholds,10);
  assert.equal(r.census.length,60);
  assert.deepEqual(r,mockCensus({employeeCount:50,averageAge:40,familyFraction:.2,seed:12}));
});

test('population omissions are rejected and deductible equal to MOOP has no coinsurance layer', () => {
  const input=JSON.parse(readFileSync(new URL('./example-comparison.json',import.meta.url)));
  input.scenarios[1].bills.pop();
  assert.throws(()=>compare(input),/same people/);
  input.scenarios=[{bills:[{id:'a',allowed:50000}]}];
  input.plans[1].deductible=8000;
  assert.equal(compare(input).results.find(x=>x.plan==='proposed').expectedHra,8000);
});

test('unused budget does not hide years above budget', () => {
  const input=JSON.parse(readFileSync(new URL('./example-comparison.json',import.meta.url)));
  input.accountAnalysis.annualAccountBudget=6000;
  const r=compare(input).accountLayer[0];
  assert.equal(r.expectedUnusedAccountBudget,1500);
  assert.equal(r.expectedClaimsAboveAccountBudget,2500);
  assert.equal(r.expectedNetAccountBudget,-1000);
});

test('ordered family claims accumulate deductible and MOOP with preventive claims excluded', () => {
  const plan={deductible:1000,coinsurance:.2,moop:2000,hraThreshold:0,hraCap:0,family:{deductible:2000,deductibleType:'embedded',moop:3000,hraThreshold:0,hraCap:3000}};
  const result=adjudicateHousehold([
    {id:'a',events:[{order:1,allowed:500,kind:'standard'},{order:3,allowed:10000,kind:'standard'}]},
    {id:'b',events:[{order:0,allowed:100,kind:'preventive'},{order:2,allowed:1000,kind:'standard'}]}
  ],plan);
  assert.equal(result.members.a.oop,2000);
  assert.equal(result.members.b.oop,1000);
  assert.equal(result.oop,3000);
  assert.equal(result.reimbursement,3000);
  assert.equal(result.insurance,8600);
  assert.throws(()=>adjudicateHousehold([{id:'a',events:[{order:1,allowed:100,kind:'standard'}]},{id:'b',events:[{order:1,allowed:100,kind:'standard'}]}],plan),/order must be unique/);
});

test('simulation uses independently drawn years and risk inputs', () => {
  const args={census:[{id:'a',age:40,risk:5}],years:1000,seed:12};
  const a=simulate(args),b=simulate(args);
  assert.deepEqual(a,b);
  assert.equal(a.source,'synthetic-independent');
  assert.ok(new Set(a.scenarios.map(s=>s.bills[0].allowed)).size>2);
  assert.equal(a.calibration.targetTotal,9800*1000);
});
