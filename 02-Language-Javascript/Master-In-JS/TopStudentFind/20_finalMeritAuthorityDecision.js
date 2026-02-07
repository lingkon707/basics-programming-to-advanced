// 20_finalMeritAuthorityDecision.js
var academicTop = "Sami";
var disciplineClear = true;
var attendanceClear = false;

console.log(
  academicTop && disciplineClear && attendanceClear
    ? "FINAL MERIT APPROVED → " + academicTop
    : "MERIT DECISION BLOCKED – POLICY VIOLATION DETECTED"
);