// 18__warehouse_utilization.js
var warehouseData = [
  { name: "WH-North", totalSpace: 50000, occupied: 35000 },
  { name: "WH-South", totalSpace: 40000, occupied: 38000 },
  { name: "WH-East", totalSpace: 30000, occupied: 12000 }
];

function getUtilizationRate(warehouseName) {
  for (var i = 0; i < warehouseData.length; i++) {
    var wh = warehouseData[i];
    if (wh.name === warehouseName) {
      return (wh.occupied / wh.totalSpace * 100).toFixed(1) + "%";
    }
  }
  return "Warehouse not found";
}

console.log("WH-North utilization:", getUtilizationRate("WH-North"));