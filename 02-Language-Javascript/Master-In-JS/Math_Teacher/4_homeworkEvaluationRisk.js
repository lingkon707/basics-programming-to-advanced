// 4_homeworkEvaluationRisk.js
var submitted = 29;
var classSize = 42;

console.log(
  "Homework Review → Submission Rate:",
  Math.round((submitted / classSize) * 100) + "%",
  "| Risk:",
  submitted < 30 ? "ACADEMIC NEGLIGENCE DETECTED" : "Acceptable"
);