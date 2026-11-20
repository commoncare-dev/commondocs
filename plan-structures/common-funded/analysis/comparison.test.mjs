import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {compare} from './run-comparison.mjs';
import {readFileSync} from 'node:fs';
import {mockCensus} from './mock-census.mjs';

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
