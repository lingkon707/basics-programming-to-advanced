// 04__purchase_order.js

function createPurchaseOrder(supplierId, items) {
  var order = {
    poNumber: "PO-" + Date.now(),
    supplierId: supplierId,
    items: items,
    status: "Pending",
    totalValue: 0
  };
  for (var i = 0; i < items.length; i++) {
    order.totalValue += items[i].qty * items[i].unitPrice;
  }
  return order;
}

var order = createPurchaseOrder(1, [
  { sku: "A100", qty: 50, unitPrice: 12.5 },
  { sku: "B200", qty: 30, unitPrice: 8.75 }
]);
console.log("Purchase order created:", order);