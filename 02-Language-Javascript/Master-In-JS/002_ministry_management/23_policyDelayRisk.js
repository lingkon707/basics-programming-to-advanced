// 23_policyDelayRisk.js
var plannedDays = 90;
var actualDays = 130;

console.log(
  "POLICY IMPLEMENTATION → Planned:",
  plannedDays,
  "| Actual:",
  actualDays,
  "| RISK:",
  actualDays > plannedDays
    ? "NATIONAL DELAY – MINISTERIAL EXPLANATION REQUIRED"
    : "ON SCHEDULE"
);