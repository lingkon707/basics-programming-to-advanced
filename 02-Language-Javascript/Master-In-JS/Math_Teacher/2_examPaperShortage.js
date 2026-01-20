// 2_examPaperShortage.js
var students = 40;
var papersAvailable = 38;

console.log(
  "Exam Paper Status → Required:",
  students,
  "| Available:",
  papersAvailable,
  "| Action:",
  papersAvailable < students ? "IMMEDIATE PRINT REQUIRED" : "Sufficient"
);