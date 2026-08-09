// 10__supplier_performance.js
var supplierPerformance = [
  { supplierId: 1, onTimeDeliveries: 45, totalDeliveries: 50 },
  { supplierId: 2, onTimeDeliveries: 38, totalDeliveries: 40 },
  { supplierId: 3, onTimeDeliveries: 20, totalDeliveries: 30 }
];

function calculateOTD(supplierId) {
  for (var i = 0; i < supplierPerformance.length; i++) {
    var sp = supplierPerformance[i];
    if (sp.supplierId === supplierId) {
      return (sp.onTimeDeliveries / sp.totalDeliveries * 100) + "%";
    }
  }
  return "Supplier not found";
}

console.log("OTD for supplier 2:", calculateOTD(2));