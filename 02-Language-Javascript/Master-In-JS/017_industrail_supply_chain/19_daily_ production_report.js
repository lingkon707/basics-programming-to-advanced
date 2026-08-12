// 19__daily_production_report.js
var productionOutput = [
  { product: "Widgets", target: 500, actual: 480 },
  { product: "Gadgets", target: 300, actual: 310 },
  { product: "Thingies", target: 200, actual: 195 }
];

function generateReport() {
  var report = "Production Report:\n";
  for (var i = 0; i < productionOutput.length; i++) {
    var p = productionOutput[i];
    var variance = p.actual - p.target;
    var status = variance >= 0 ? "✓ On track" : "⚠ Needs attention";
    report += p.product + ": " + p.actual + "/" + p.target + " (" + status + ")\n";
  }
  return report;
}

console.log(generateReport());