// 28__inventory_aging.js
var inventoryAging = [
  { sku: "A100", qty: 150, daysInStock: 10 },
  { sku: "B200", qty: 80, daysInStock: 45 },
  { sku: "C300", qty: 45, daysInStock: 90 },
  { sku: "D400", qty: 20, daysInStock: 120 }
];

function getAgedInventory(thresholdDays) {
  var aged = [];
  for (var i = 0; i < inventoryAging.length; i++) {
    if (inventoryAging[i].daysInStock > thresholdDays) {
      aged.push(inventoryAging[i].sku + " (" + inventoryAging[i].daysInStock + " days)");
    }
  }
  return aged;
}

console.log("Aged inventory (>60 days):", getAgedInventory(60));