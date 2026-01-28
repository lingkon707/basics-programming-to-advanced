// 3_supplyChainRiskCheck.js
var supplyDaysLeft = 4;

console.log(
  "SUPPLY CHAIN STATUS → Days Remaining:",
  supplyDaysLeft,
  "| RISK LEVEL:",
  supplyDaysLeft <= 3 ? "CRITICAL – RESUPPLY REQUIRED" : "STABLE"
);