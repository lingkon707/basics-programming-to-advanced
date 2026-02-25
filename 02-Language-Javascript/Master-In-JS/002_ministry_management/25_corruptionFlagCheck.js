// 25_corruptionFlagCheck.js
var complaints = 47;
var verifiedCases = 12;

console.log(
  "ANTI-CORRUPTION REPORT → Complaints:",
  complaints,
  "| Verified:",
  verifiedCases,
  "| STATUS:",
  verifiedCases > 10
    ? "HIGH RISK – INVESTIGATION COMMISSION REQUIRED"
    : "UNDER CONTROL"
);