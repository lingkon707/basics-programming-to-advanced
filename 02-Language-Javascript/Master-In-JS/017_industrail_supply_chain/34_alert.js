// 34__replenishment_alerts.js
var reorderRules = [
  { sku: "A100", minStock: 50, maxStock: 200, currentStock: 45 },
  { sku: "B200", minStock: 30, maxStock: 150, currentStock: 120 },
  { sku: "C300", minStock: 40, maxStock: 180, currentStock: 35 }
];

function getReplenishmentNeeds() {
  var alerts = [];
  for (var i = 0; i < reorderRules.length; i++) {
    var rr = reorderRules[i];
    if (rr.currentStock < rr.minStock) {
      alerts.push(rr.sku + " needs " + (rr.maxStock - rr.currentStock) + " units");
    }
  }
  return alerts;
}

console.log("Replenishment alerts:", getReplenishmentNeeds());