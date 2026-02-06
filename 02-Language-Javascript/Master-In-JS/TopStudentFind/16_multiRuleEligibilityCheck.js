// 16_multiRuleEligibilityCheck.js
var students = [
  ["A", 85, 80, true],
  ["B", 90, 60, true],
  ["C", 88, 85, false]
];

var topper = "";

for (var i = 0; i < students.length; i++) {
  if (students[i][1] >= 80 && students[i][2] >= 75 && students[i][3]) {
    topper = students[i][0];
    break;
  }
}

console.log("TOP STUDENT (Multi-Rule Eligibility) →", topper || "None");