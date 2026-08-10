// 12__lead_time_analysis.js
var orders = [
  { orderId: 1001, orderDate: 1, deliveryDate: 6 },
  { orderId: 1002, orderDate: 3, deliveryDate: 8 },
  { orderId: 1003, orderDate: 5, deliveryDate: 7 }
];

function calculateAverageLeadTime() {
  var totalLeadTime = 0;
  for (var i = 0; i < orders.length; i++) {
    totalLeadTime += orders[i].deliveryDate - orders[i].orderDate;
  }
  return totalLeadTime / orders.length;
}

console.log("Average lead time (days):", calculateAverageLeadTime());