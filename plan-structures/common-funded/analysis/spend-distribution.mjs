/** Sample an independent person-year using age mean, zero rate, and spending-share assumptions. */
export function sampleAnnualSpend(mean,zeroPercent,bySpend,random=Math.random) {
  if(!Number.isFinite(mean)||mean<0||!Number.isFinite(zeroPercent)||zeroPercent<0||zeroPercent>=100) {
    if(mean===0 && zeroPercent===100) return 0;
    throw Error('Invalid spend mean or zero-claim percentage');
  }
  if(mean===0 || random()<zeroPercent/100) return 0;
  const positive=1-zeroPercent/100;
  const targets=Object.entries(bySpend).map(([percent,share])=>({top:Number(percent)/100,share})).sort((a,b)=>a.top-b.top);
  if(!targets.length||targets.some((t,i)=>!Number.isFinite(t.top)||!Number.isFinite(t.share)||t.top<=0||t.top>=1||t.share<=0||t.share>=1||(i>0&&(t.top<=targets[i-1].top||t.share<=targets[i-1].share)))) throw Error('Invalid spending concentration targets');
  const points=[{top:0,share:0},...targets,{top:1,share:1}];
  let boundary=points.findIndex(p=>p.top>=positive);if(boundary<1) boundary=1;
  const before=points[boundary-1],after=points[boundary];
  const boundaryShare=before.share+(after.share-before.share)*(positive-before.top)/(after.top-before.top);
  const clipped=points.filter(p=>p.top<positive).concat([{top:positive,share:boundaryShare}]);
  const rank=random()*positive;let index=clipped.findIndex(p=>p.top>=rank);if(index<1) index=1;
  const lo=clipped[index-1],hi=clipped[index];
  return mean*(hi.share-lo.share)/(hi.top-lo.top)/boundaryShare;
}
