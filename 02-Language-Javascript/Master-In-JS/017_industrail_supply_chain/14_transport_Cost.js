// 14__transportation_costs.js
var shippingCosts = [
  { carrier: "FedEx", ratePerLb: 0.50, minCost: 10 },
  { carrier: "UPS", ratePerLb: 0.45, minCost: 12 },
  { carrier: "DHL", ratePerLb: 0.60, minCost: 8 }
];

function calculateShippingCost(carrier, weight) {
  for (var i = 0; i < shippingCosts.length; i++) {
    var sc = shippingCosts[i];
    if (sc.carrier === carrier) {
      var cost = weight * sc.ratePerLb;
      return cost > sc.minCost ? cost : sc.minCost;
    }
  }
  return "Carrier not found";
}

console.log("FedEx cost for 25 lbs:", calculateShippingCost("FedEx", 25));