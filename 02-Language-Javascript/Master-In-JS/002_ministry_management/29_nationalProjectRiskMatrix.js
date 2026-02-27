// 29_nationalProjectRiskMatrix.js
var riskLevel = 8; // scale 1-10
var budgetDeviation = 15; // percent

console.log(
  "PROJECT RISK MATRIX → Risk:",
  riskLevel,
  "| Budget Deviation:",
  budgetDeviation + "%",
  "| STATUS:",
  riskLevel > 7 || budgetDeviation > 10
    ? "CRITICAL – PRIME MINISTER BRIEFING REQUIRED"
    : "MANAGEABLE"
);