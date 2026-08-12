// 17__supplier_negotiation.js
var supplierQuotes = [
  { supplierId: 1, item: "A100", price: 12.0, moq: 100 },
  { supplierId: 2, item: "A100", price: 11.5, moq: 200 },
  { supplierId: 1, item: "B200", price: 8.0, moq: 50 }
];

function findBestPrice(sku) {
  var bestPrice = Infinity;
  for (var i = 0; i < supplierQuotes.length; i++) {
    if (supplierQuotes[i].item === sku && supplierQuotes[i].price < bestPrice) {
      bestPrice = supplierQuotes[i].price;
    }
  }
  return bestPrice === Infinity ? "No quotes" : bestPrice;
}

console.log("Best price for A100:", findBestPrice("A100"));