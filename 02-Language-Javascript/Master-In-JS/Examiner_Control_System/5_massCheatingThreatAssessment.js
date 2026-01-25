// 5_massCheatingThreatAssessment.js
var reportedCases = 7;

console.log(
  "CHEATING THREAT ASSESSMENT → Reports:",
  reportedCases,
  "| LEVEL:",
  reportedCases >= 5
    ? "SEVERE – TASK FORCE & CCTV REVIEW ACTIVATED"
    : "MONITOR CLOSELY"
);