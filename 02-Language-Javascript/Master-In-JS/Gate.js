// 5_gate.js

var gateStatus = "Closed";
function toggleGate() {
  gateStatus = gateStatus === "Closed" ? "Open" : "Closed";
  console.log("Gate is now", gateStatus);
}
toggleGate();