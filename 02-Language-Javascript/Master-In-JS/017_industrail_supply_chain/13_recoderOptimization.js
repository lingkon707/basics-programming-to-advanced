// 13__reorder_optimization.js
var itemDemand = [
  { sku: "A100", dailyDemand: 25, leadTime: 5 },
  { sku: "B200", dailyDemand: 10, leadTime: 3 },
  { sku: "C300", dailyDemand: 40, leadTime: 7 }
];

function calculateReorderPoint(sku) {
  for (var i = 0; i < itemDemand.length; i++) {
    if (itemDemand[i].sku === sku) {
      return itemDemand[i].dailyDemand * itemDemand[i].leadTime;
    }
  }
  return 0;
}

console.log("Reorder point for A100:", calculateReorderPoint("A100"));