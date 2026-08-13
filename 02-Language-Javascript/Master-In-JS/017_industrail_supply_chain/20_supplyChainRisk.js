// 20__supply_chain_risk.js
var riskFactors = [
  { supplierId: 1, region: "Asia", riskScore: 70 },
  { supplierId: 2, region: "Europe", riskScore: 30 },
  { supplierId: 3, region: "Asia", riskScore: 85 }
];

function identifyHighRiskSuppliers(threshold) {
  var highRisk = [];
  for (var i = 0; i < riskFactors.length; i++) {
    if (riskFactors[i].riskScore > threshold) {
      highRisk.push("Supplier " + riskFactors[i].supplierId + " (" + riskFactors[i].region + ")");
    }
  }
  return highRisk;
}

console.log("High risk suppliers:", identifyHighRiskSuppliers(60));