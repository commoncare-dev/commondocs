/** Apply a uniform deductible/coinsurance design to ordered, covered claims.
 * The caller supplies actual claim order and must identify first-dollar preventive care.
 * This is not a general carrier adjudicator: copays, drug tiers, exclusions and
 * plan-specific accumulator rules require a more detailed implementation.
 */
export function adjudicateHousehold(members, plan) {
  if (!Array.isArray(members) || !members.length) throw Error('Household must contain members');
  const family=members.length>1, f=family?plan.family:null;
  if(family && !f) throw Error('Family plan terms required for multi-person households');
  const deductibleType=f?.deductibleType || 'embedded';
  const states=new Map(members.map(m=>[m.id,{deductible:0,oop:0,insurance:0,reimbursement:0}]));
  if(states.size!==members.length) throw Error('Member IDs must be unique');
  const hasEvents=members.some(m=>m.events!==undefined);
  if(hasEvents && members.some(m=>!Array.isArray(m.events))) throw Error('All household members must provide event arrays when using events');
  const claims=[];
  for(const [index,m] of members.entries()) {
    if(hasEvents) for(const e of m.events) {
      if(!Number.isFinite(e.order)||!Number.isFinite(e.allowed)||e.allowed<0||!['standard','preventive'].includes(e.kind)) throw Error('Events require numeric order, nonnegative allowed and kind standard or preventive');
      claims.push({...e,memberId:m.id});
    }
    else {
      if(!Number.isFinite(m.allowed)||m.allowed<0) throw Error('Annual allowed claims must be nonnegative');
      claims.push({order:index,allowed:m.allowed,kind:'standard',memberId:m.id});
    }
  }
  claims.sort((a,b)=>a.order-b.order);
  if(hasEvents && claims.some((e,i)=>i>0&&e.order===claims[i-1].order)) throw Error('Event order must be unique within each household');
  let familyDeductible=0, familyOop=0, reimbursement=0;
  const hraThreshold=f?f.hraThreshold:plan.hraThreshold, hraCap=f?f.hraCap:plan.hraCap;
  for(const claim of claims) {
    const member=states.get(claim.memberId);
    if(claim.kind==='preventive') {member.insurance+=claim.allowed;continue;}
    const individualRemaining=family&&deductibleType==='aggregate'?Infinity:Math.max(0,plan.deductible-member.deductible);
    const familyRemaining=family?Math.max(0,f.deductible-familyDeductible):Infinity;
    const individualMoopRemaining=Math.max(0,plan.moop-member.oop);
    const familyMoopRemaining=family?Math.max(0,f.moop-familyOop):Infinity;
    const limit=Math.min(individualMoopRemaining,familyMoopRemaining);
    const deductible=Math.min(claim.allowed,individualRemaining,familyRemaining,limit);
    const oop=Math.min(limit,deductible+plan.coinsurance*(claim.allowed-deductible));
    const previousOop=familyOop;
    member.deductible+=deductible;familyDeductible+=deductible;member.oop+=oop;familyOop+=oop;
    member.insurance+=claim.allowed-oop;
    const eligible=Math.max(0,familyOop-hraThreshold)-Math.max(0,previousOop-hraThreshold);
    const paid=Math.min(eligible,Math.max(0,hraCap-reimbursement));
    reimbursement+=paid;member.reimbursement+=paid;
  }
  return {oop:familyOop,reimbursement,insurance:[...states.values()].reduce((n,s)=>n+s.insurance,0),members:Object.fromEntries(states),claimCount:claims.length,mode:hasEvents?'ordered-events':'annual-member-totals'};
}
