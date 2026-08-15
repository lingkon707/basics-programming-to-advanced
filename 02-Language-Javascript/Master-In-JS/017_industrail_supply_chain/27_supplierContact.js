// 27__supplier_contracts.js
var contracts = [
  { supplierId: 1, item: "A100", unitPrice: 10.50, minQty: 100, validUntil: "2026-12-31" },
  { supplierId: 2, item: "B200", unitPrice: 7.25, minQty: 50, validUntil: "2026-10-15" },
  { supplierId: 1, item: "C300", unitPrice: 15.00, minQty: 200, validUntil: "2027-01-15" }
];

function getContractPrice(supplierId, sku) {
  for (var i = 0; i < contracts.length; i++) {
    var c = contracts[i];
    if (c.supplierId === supplierId && c.item === sku) {
      return c.unitPrice;
    }
  }
  return "No contract found";
}

console.log("Price for supplier 1, A100:", getContractPrice(1, "A100"));