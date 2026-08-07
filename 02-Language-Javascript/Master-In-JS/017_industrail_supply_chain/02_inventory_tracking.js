// 02__inventory_tracking.js

var inventory = [
  { sku: "A100", qty: 150, reorderPoint: 30 },
  { sku: "B200", qty: 20, reorderPoint: 50 },
  { sku: "C300", qty: 75, reorderPoint: 40 }
];

function checkLowStock() {
  var low = [];
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].qty < inventory[i].reorderPoint) {
      low.push(inventory[i].sku);
    }
  }
  return low;
}

console.log("Low stock items:", checkLowStock());