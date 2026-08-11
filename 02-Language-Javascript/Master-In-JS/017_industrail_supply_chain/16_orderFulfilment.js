// 16__order_fulfillment.js
var pendingOrders = [
  { orderId: "ORD-1", items: ["A100", "B200"], priority: "High" },
  { orderId: "ORD-2", items: ["C300"], priority: "Low" },
  { orderId: "ORD-3", items: ["A100", "C300"], priority: "Medium" }
];

function getHighPriorityOrders() {
  var high = [];
  for (var i = 0; i < pendingOrders.length; i++) {
    if (pendingOrders[i].priority === "High") {
      high.push(pendingOrders[i].orderId);
    }
  }
  return high;
}

console.log("High priority orders:", getHighPriorityOrders());