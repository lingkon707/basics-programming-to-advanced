// 38__cycle_counting.js
var cycleCounts = [
  { sku: "A100", counted: 148, system: 150, variance: -2 },
  { sku: "B200", counted: 82, system: 80, variance: 2 },
  { sku: "C300", counted: 45, system: 45, variance: 0 },
  { sku: "D400", counted: 23, system: 25, variance: -2 }
];

function getVarianceReport() {
  var report = [];
  for (var i = 0; i < cycleCounts.length; i++) {
    var cc = cycleCounts[i];
    if (cc.variance !== 0) {
      report.push(cc.sku + ": " + cc.variance + " units off");
    }
  }
  return report;
}

console.log("Cycle count variances:", getVarianceReport());