// 40__supply_chain_dashboard.js
var kpis = [
  { metric: "On-time delivery", current: 94.5, target: 95 },
  { metric: "Inventory turns", current: 6.2, target: 7 },
  { metric: "Supplier quality", current: 98.3, target: 99 },
  { metric: "Order accuracy", current: 97.1, target: 98 }
];

function getKPIStatus() {
  var report = "Supply Chain Dashboard:\n";
  for (var i = 0; i < kpis.length; i++) {
    var kpi = kpis[i];
    var status = kpi.current >= kpi.target ? "✓ On Target" : "⚠ Below Target";
    report += kpi.metric + ": " + kpi.current + "% (" + status + ")\n";
  }
  return report;
}

console.log(getKPIStatus());