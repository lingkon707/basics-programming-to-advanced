// 33__cost_allocation.js
var costCenters = [
  { center: "Warehouse", fixedCost: 5000, variableRate: 0.10 },
  { center: "Transport", fixedCost: 3000, variableRate: 0.05 },
  { center: "Production", fixedCost: 8000, variableRate: 0.08 }
];

function calculateTotalCost(center, volume) {
  for (var i = 0; i < costCenters.length; i++) {
    var cc = costCenters[i];
    if (cc.center === center) {
      return cc.fixedCost + (volume * cc.variableRate);
    }
  }
  return "Center not found";
}

console.log("Warehouse cost for 1000 units:", calculateTotalCost("Warehouse", 1000));