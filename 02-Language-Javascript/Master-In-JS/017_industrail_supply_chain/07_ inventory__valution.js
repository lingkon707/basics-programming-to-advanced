// 07__inventory_valuation.js
var stockItems = [
  { sku: "A100", qty: 150, cost: 10.00 },
  { sku: "B200", qty: 80, cost: 25.50 },
  { sku: "C300", qty: 45, cost: 5.75 }
];

function calculateTotalInventoryValue() {
  var totalValue = 0;
  for (var i = 0; i < stockItems.length; i++) {
    totalValue += stockItems[i].qty * stockItems[i].cost;
  }
  return "$" + totalValue.toFixed(2);
}

console.log("Total inventory value:", calculateTotalInventoryValue());