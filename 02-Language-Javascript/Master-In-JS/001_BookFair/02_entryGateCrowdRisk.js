// 02_entryGateCrowdRisk.js
var visitorsPerHour = 1200;

console.log(
  "ENTRY GATE MONITOR → Visitors/hour:",
  visitorsPerHour,
  "| RISK:",
  visitorsPerHour > 1000 ? "OVER-CROWDING ALERT" : "NORMAL FLOW"
);