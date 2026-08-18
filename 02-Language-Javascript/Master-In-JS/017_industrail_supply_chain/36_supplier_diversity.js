// 36__supplier_diversity.js

var supplierDiversity = [
  { supplierId: 1, type: "Minority-owned", spend: 250000 },
  { supplierId: 2, type: "Woman-owned", spend: 180000 },
  { supplierId: 3, type: "Minority-owned", spend: 320000 },
  { supplierId: 4, type: "Large corporate", spend: 500000 }
];

function getSpendByType(type) {
  var totalSpend = 0;
  for (var i = 0; i < supplierDiversity.length; i++) {
    if (supplierDiversity[i].type === type) {
      totalSpend += supplierDiversity[i].spend;
    }
  }
  return "$" + totalSpend.toLocaleString();
}

console.log("Minority-owned spend:", getSpendByType("Minority-owned"));