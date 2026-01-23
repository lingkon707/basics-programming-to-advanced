// 12_overallClassRiskSummary.js
var attendanceOk = false;
var syllabusOk = false;
var disciplineOk = true;

console.log(
  "FINAL CLASS STATUS →",
  attendanceOk && syllabusOk && disciplineOk
  ? "CLASS UNDER FULL CONTROL"
  : "MULTIPLE RISKS DETECTED – ADMIN INTERVENTION NEEDED"
);