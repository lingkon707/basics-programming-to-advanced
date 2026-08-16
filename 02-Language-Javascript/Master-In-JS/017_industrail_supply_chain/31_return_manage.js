// 31__return_management.js
var returns = [
  { returnId: "R001", sku: "A100", reason: "Defective", qty: 5 },
  { returnId: "R002", sku: "B200", reason: "Wrong item", qty: 2 },
  { returnId: "R003", sku: "A100", reason: "Damaged", qty: 3 }
];

function getReturnsByReason(reason) {
  var items = [];
  for (var i = 0; i < returns.length; i++) {
    if (returns[i].reason === reason) {
      items.push(returns[i].sku + " x" + returns[i].qty);
    }
  }
  return items;
}

console.log("Returns for defectives:", getReturnsByReason("Defective"));