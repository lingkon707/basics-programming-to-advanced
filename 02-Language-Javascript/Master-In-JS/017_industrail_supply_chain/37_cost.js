// 37__freight_cost_optimization.js


var freightOptions = [
  { mode: "Air", costPerLb: 2.50, transitDays: 2 },
  { mode: "Truck", costPerLb: 0.75, transitDays: 5 },
  { mode: "Rail", costPerLb: 0.40, transitDays: 10 },
  { mode: "Sea", costPerLb: 0.25, transitDays: 20 }
];

function getBestMode(weight, maxDays) {
  var best = null;
  for (var i = 0; i < freightOptions.length; i++) {
    var fo = freightOptions[i];
    if (fo.transitDays <= maxDays) {
      var cost = weight * fo.costPerLb;
      if (best === null || cost < best.cost) {
        best = { mode: fo.mode, cost: cost };
      }
    }
  }
  return best;
}

var result = getBestMode(1000, 7);
console.log("Best freight mode for 1000 lbs, max 7 days:", result);