// 24__inventory_reservation.js
var reservations = [
  { orderId: "ORD-1", sku: "A100", qty: 50, reserved: true },
  { orderId: "ORD-2", sku: "B200", qty: 30, reserved: false },
  { orderId: "ORD-3", sku: "A100", qty: 25, reserved: true }
];

function getReservedQuantity(sku) {
  var total = 0;
  for (var i = 0; i < reservations.length; i++) {
    if (reservations[i].sku === sku && reservations[i].reserved) {
      total += reservations[i].qty;
    }
  }
  return total;
}

console.log("Reserved A100:", getReservedQuantity("A100"));