// 07_publisherComplianceAudit.js

var ruleViolations = 1;

console.log(
  "PUBLISHER AUDIT → Violations:",
  ruleViolations,
  "| DECISION:",
  ruleViolations > 0 ? "WARNING ISSUED" : "FULLY COMPLIANT"
);