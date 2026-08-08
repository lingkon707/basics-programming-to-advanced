// 06__shipment_tracking.js
var shipments = [
  { id: "SH101", destination: "New York", status: "In Transit", eta: 3 },
  { id: "SH102", destination: "Los Angeles", status: "Delivered", eta: 0 },
  { id: "SH103", destination: "Chicago", status: "Pending", eta: 5 }
];

function getActiveShipments() {
  var active = [];
  for (var i = 0; i < shipments.length; i++) {
    if (shipments[i].status !== "Delivered") {
      active.push(shipments[i].id + " to " + shipments[i].destination);
    }
  }
  return active;
}

console.log("Active shipments:", getActiveShipments());