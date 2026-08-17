// 32__cross_docking.js
var inboundShipments = [
  { shipmentId: "IN-1", sku: "A100", qty: 200, eta: "2026-08-15" },
  { shipmentId: "IN-2", sku: "B200", qty: 150, eta: "2026-08-16" },
  { shipmentId: "IN-3", sku: "A100", qty: 100, eta: "2026-08-17" }
];

function getInboundByDate(date) {
  var shipments = [];
  for (var i = 0; i < inboundShipments.length; i++) {
    if (inboundShipments[i].eta === date) {
      shipments.push(inboundShipments[i].sku + " x" + inboundShipments[i].qty);
    }
  }
  return shipments;
}

console.log("Inbound for 2026-08-15:", getInboundByDate("2026-08-15"));