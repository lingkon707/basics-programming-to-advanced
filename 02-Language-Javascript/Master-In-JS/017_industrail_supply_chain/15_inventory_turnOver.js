// 15__inventory_turnover.js
var inventoryData = [
  { sku: "A100", avgInventory: 500, cogs: 25000 },
  { sku: "B200", avgInventory: 300, cogs: 18000 },
  { sku: "C300", avgInventory: 400, cogs: 22000 }
];

function calculateTurnover(sku) {
  for (var i = 0; i < inventoryData.length; i++) {
    var item = inventoryData[i];
    if (item.sku === sku) {
      return (item.cogs / item.avgInventory).toFixed(2);
    }
  }
  return "SKU not found";
}

console.log("Turnover for A100:", calculateTurnover("A100"));