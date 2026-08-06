// 01__supplier_management.js

var suppliers = [
  { id: 1, name: "ABC Corp", leadTime: 5, rating: 4.5 },
  { id: 2, name: "XYZ Ltd", leadTime: 3, rating: 4.8 }
];

function getTopSuppliers(minRating) {
  var result = [];
  for (var i = 0; i < suppliers.length; i++) {
    if (suppliers[i].rating >= minRating) {
      result.push(suppliers[i].name);
    }
  }
  return result;
}

console.log("Top suppliers (rating >= 4.5):", getTopSuppliers(4.5));