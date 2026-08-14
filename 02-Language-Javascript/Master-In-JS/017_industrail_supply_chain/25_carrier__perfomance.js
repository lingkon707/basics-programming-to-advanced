// 25__carrier_performance.js

var carrierMetrics = [
  { carrier: "FedEx", shipments: 120, onTime: 110, damaged: 3 },
  { carrier: "UPS", shipments: 95, onTime: 85, damaged: 5 },
  { carrier: "DHL", shipments: 80, onTime: 75, damaged: 2 }
];

function getCarrierRating(carrier) {
  for (var i = 0; i < carrierMetrics.length; i++) {
    var cm = carrierMetrics[i];
    if (cm.carrier === carrier) {
      var otp = (cm.onTime / cm.shipments * 100).toFixed(1);
      var dr = (cm.damaged / cm.shipments * 100).toFixed(1);
      return "OTP: " + otp + "%, Damage Rate: " + dr + "%";
    }
  }
  return "Carrier not found";
}

console.log("FedEx performance:", getCarrierRating("FedEx"));