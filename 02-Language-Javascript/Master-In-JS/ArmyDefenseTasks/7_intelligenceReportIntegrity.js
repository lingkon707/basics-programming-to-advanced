// 7_intelligenceReportIntegrity.js
var reportsReceived = 9;
var verifiedReports = 7;

console.log(
  "INTELLIGENCE REVIEW → Verified:",
  verifiedReports,
  "| Unverified:",
  reportsReceived - verifiedReports,
  "| WARNING:",
  verifiedReports < reportsReceived
    ? "INTEL VALIDATION REQUIRED"
    : "INTEL CONFIRMED"
);