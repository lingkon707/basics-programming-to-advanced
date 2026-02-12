// 16_securityPersonnelAdequacy.js

var guardsPresent = 60;
var guardsRequired = 75;

console.log(
  "SECURITY CHECK → Shortage:",
  guardsRequired - guardsPresent,
  "| STATUS:",
  guardsPresent < guardsRequired ? "HIGH RISK" : "ADEQUATE"
);