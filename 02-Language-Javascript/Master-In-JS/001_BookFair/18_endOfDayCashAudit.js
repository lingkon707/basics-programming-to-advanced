// 18_endOfDayCashAudit.js

var expectedCash = 950000;
var countedCash = 948000;

console.log(
  "CASH AUDIT → Difference:",
  expectedCash - countedCash,
  "| RESULT:",
  expectedCash === countedCash ? "BALANCED" : "DISCREPANCY FOUND"
);