// 30_foreignAidComplianceCheck.js
var aidReceived = 100000000;
var properlyUsed = 85000000;

console.log(
  "FOREIGN AID COMPLIANCE → Used:",
  properlyUsed,
  "| Gap:",
  aidReceived - properlyUsed,
  "| STATUS:",
  properlyUsed < aidReceived
    ? "AUDIT REQUIRED"
    : "FULLY COMPLIANT"
);