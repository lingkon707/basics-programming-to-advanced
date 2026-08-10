// 11__stock_movement.js
var movements = [
  { sku: "A100", from: "WH1", to: "WH2", qty: 50 },
  { sku: "B200", from: "WH1", to: "Production", qty: 30 },
  { sku: "A100", from: "WH2", to: "Shipping", qty: 20 }
];

function getTotalMoved(sku) {
  var total = 0;
  for (var i = 0; i < movements.length; i++) {
    if (movements[i].sku === sku) {
      total += movements[i].qty;
    }
  }
  return total;
}

console.log("Total A100 moved:", getTotalMoved("A100"));