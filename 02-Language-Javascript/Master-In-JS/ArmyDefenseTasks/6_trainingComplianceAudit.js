// 6_trainingComplianceAudit.js
var trainedUnits = 14;
var totalUnits = 16;

console.log(
  "TRAINING AUDIT → Trained Units:",
  trainedUnits,
  "| Compliance:",
  trainedUnits === totalUnits
    ? "FULLY COMPLIANT"
    : "NON-COMPLIANT UNITS DETECTED"
);