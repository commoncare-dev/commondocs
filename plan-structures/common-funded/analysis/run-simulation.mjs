import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const defaultAgeBands = [
  {maxAge:18,annualMean:3750,zeroProbability:.55}, {maxAge:34,annualMean:5825,zeroProbability:.45},
  {maxAge:44,annualMean:9800,zeroProbability:.35}, {maxAge:54,annualMean:10122,zeroProbability:.25},
  {maxAge:64,annualMean:12632,zeroProbability:.05}, {maxAge:120,annualMean:13921,zeroProbability:0}
];
export const defaultConcentration = [{top:.01,share:.27},{top:.05,share:.52},{top:.10,share:.68},{top:.15,share:.77},{top:.20,share:.84},{top:.50,share:.99}];

export function simulate({census,years=1000,seed=1,ageBands=defaultAgeBands,concentration=defaultConcentration}) {
  if (!Array.isArray(census) || !census.length || !Number.isInteger(years) || years<1 || !Number.isInteger(seed)) throw Error('Provide a nonempty census, positive integer years and integer seed');
  if (!Array.isArray(ageBands) || !ageBands.length || !Array.isArray(concentration) || !concentration.length) throw Error('Provide age bands and concentration targets');
  const bands=[...ageBands].sort((a,b)=>a.maxAge-b.maxAge);
  for(const b of bands) if(![b.maxAge,b.zeroProbability,b.annualMean].every(Number.isFinite)||b.zeroProbability<0||b.zeroProbability>=1||b.annualMean<0) throw Error('Invalid age band');
  let lastTop=0,lastShare=0;
  for(const t of concentration) {if(!Number.isFinite(t.top)||!Number.isFinite(t.share)||t.top<=lastTop||t.top>=1||t.share<=lastShare||t.share>=1) throw Error('Concentration targets must increase strictly between zero and one'); lastTop=t.top;lastShare=t.share;}
  let state=seed>>>0;
  const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  const ids=new Set();
  const persons=census.map(p=>{const band=bands.findIndex(b=>p.age<=b.maxAge);if(!p.id||ids.has(p.id)||!Number.isFinite(p.age)||p.age<0||band<0) throw Error('Census IDs must be unique and ages covered by ageBands');ids.add(p.id);return {...p,band};});
  const slots=[];
  for(let year=0;year<years;year++) for(const p of persons) slots.push({year,id:p.id,householdId:p.householdId||p.id,band:p.band,score:random(),zeroDraw:random(),allowed:0});
  for(let i=0;i<bands.length;i++) {
    const group=slots.filter(s=>s.band===i).sort((a,b)=>a.zeroDraw-b.zeroDraw), zeros=Math.round(group.length*bands[i].zeroProbability);
    for(let j=zeros;j<group.length;j++) group[j].allowed=Math.max(Number.MIN_VALUE,group[j].score*bands[i].annualMean);
    if(group.length && bands[i].annualMean>0 && zeros===group.length) throw Error('Too few person-years to represent positive spending in an age band');
  }
  const targetTotal=persons.reduce((sum,p)=>sum+bands[p.band].annualMean,0)*years;
  const boundaries=[...concentration,{top:1,share:1}];
  for(let iteration=0;iteration<500 && targetTotal>0;iteration++) {
    slots.sort((a,b)=>b.allowed-a.allowed);
    let start=0,priorShare=0;
    for(const t of boundaries) {
      const end=Math.round(t.top*slots.length),group=slots.slice(start,end),target=(t.share-priorShare)*targetTotal;
      const current=group.reduce((a,s)=>a+s.allowed,0);
      if(current>0) for(const s of group) s.allowed*=Math.pow(target/current,.1);
      start=end;priorShare=t.share;
    }
    for(let i=0;i<bands.length;i++) {
      const group=slots.filter(s=>s.band===i),target=group.length*bands[i].annualMean,current=group.reduce((a,s)=>a+s.allowed,0);
      if(current>0) for(const s of group) s.allowed*=target/current;
    }
  }
  const ranked=[...slots].sort((a,b)=>b.allowed-a.allowed),actualTotal=ranked.reduce((a,s)=>a+s.allowed,0);
  const concentrationReport=concentration.map(t=>{const count=Math.round(t.top*slots.length),actual=actualTotal?ranked.slice(0,count).reduce((a,s)=>a+s.allowed,0)/actualTotal:0;return {...t,count,actual,error:actual-t.share};});
  const ageReport=bands.map((b,i)=>{const group=slots.filter(s=>s.band===i);return {maxAge:b.maxAge,personYears:group.length,targetMean:b.annualMean,actualMean:group.length?group.reduce((a,s)=>a+s.allowed,0)/group.length:null,targetZero:b.zeroProbability,actualZero:group.length?group.filter(s=>s.allowed===0).length/group.length:null};}).filter(x=>x.personYears);
  const order=new Map(persons.map((p,i)=>[p.id,i]));
  const scenarios=Array.from({length:years},(_,i)=>({id:String(i+1),bills:slots.filter(s=>s.year===i).sort((a,b)=>order.get(a.id)-order.get(b.id)).map(s=>({id:s.id,householdId:s.householdId,allowed:s.allowed}))}));
  return {source:'synthetic-calibrated',seed,assumptions:{ageBands:bands,concentration,method:'pooled person-year ranked-band and age-mean iterative calibration',independence:'initial draws independent; calibration introduces dependence',note:'Targets are CommonCare model assumptions, not validation against actual claims; calibration is pooled across person-years, not forced separately each year.'},calibration:{targetTotal,actualTotal,concentration:concentrationReport,ageBands:ageReport,maxAbsoluteShareError:Math.max(...concentrationReport.map(x=>Math.abs(x.error))),warning:'Inspect residuals and sensitivity; small samples and zero rates can make targets infeasible.'},scenarios};
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
  try {console.log(JSON.stringify(simulate(JSON.parse(readFileSync(process.argv[2],'utf8'))),null,2));} catch(e) {console.error(e.message);process.exitCode=1;}
}
