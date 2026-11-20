import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {compare} from './run-comparison.mjs';
import {readFileSync} from 'node:fs';

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
