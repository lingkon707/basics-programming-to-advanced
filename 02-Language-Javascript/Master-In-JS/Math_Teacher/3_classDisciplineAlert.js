// 3_classDisciplineAlert.js
var noiseLevel = 8; // scale 1–10

console.log(
  "Discipline Monitor → Noise Level:",
  noiseLevel,
  "| Decision:",
  noiseLevel >= 7 ? "STOP CLASS & WARN STUDENTS" : "Class Under Control"
);