// 29__shipping_consolidation.js
var ordersToShip = [
  { orderId: "S1001", weight: 45, destination: "Zone A" },
  { orderId: "S1002", weight: 30, destination: "Zone A" },
  { orderId: "S1003", weight: 25, destination: "Zone B" },
  { orderId: "S1004", weight: 40, destination: "Zone A" }
];

function consolidateByZone(zone) {
  var totalWeight = 0;
  var orderCount = 0;
  for (var i = 0; i < ordersToShip.length; i++) {
    if (ordersToShip[i].destination === zone) {
      totalWeight += ordersToShip[i].weight;
      orderCount++;
    }
  }
  return "Zone " + zone + ": " + orderCount + " orders, " + totalWeight + " lbs";
}

console.log(consolidateByZone("Zone A"));