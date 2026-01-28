// 1_troopReadinessStatus.js
var totalTroops = 1200;
var readyTroops = 980;

console.log(
  "TROOP READINESS REPORT → Ready:",
  readyTroops,
  "| Unready:",
  totalTroops - readyTroops,
  "| STATUS:",
  readyTroops >= 1000 ? "OPERATION READY" : "READINESS BELOW STANDARD"
);