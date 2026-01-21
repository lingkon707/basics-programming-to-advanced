// 5_syllabusDelayImpact.js
var syllabusCompleted = 55; // percent

console.log(
  "Syllabus Progress →",
  syllabusCompleted + "% completed",
  "| Impact:",
  syllabusCompleted < 60 ? "EXAM PREPARATION AT RISK" : "On Track"
);