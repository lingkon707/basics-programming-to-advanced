// 30__production_efficiency.js
var productionStats = [
  { line: "Line 1", target: 500, actual: 480, downtime: 2 },
  { line: "Line 2", target: 400, actual: 410, downtime: 1 },
  { line: "Line 3", target: 350, actual: 300, downtime: 4 }
];

function calculateOEE(line) {
  for (var i = 0; i < productionStats.length; i++) {
    var ps = productionStats[i];
    if (ps.line === line) {
      var efficiency = (ps.actual / ps.target * 100).toFixed(1);
      var availability = ((8 - ps.downtime) / 8 * 100).toFixed(1);
      return "Efficiency: " + efficiency + "%, Availability: " + availability + "%";
    }
  }
  return "Line not found";
}

console.log("Line 1 OEE:", calculateOEE("Line 1"));