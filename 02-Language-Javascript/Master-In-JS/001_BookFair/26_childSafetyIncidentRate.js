// 26_childSafetyIncidentRate.js

var totalVisitors = 15000;
var incidents = 3;

console.log(
  "CHILD SAFETY INCIDENT RATE →",
  ((incidents / totalVisitors) * 100).toFixed(3) + "%",
  "| STATUS:",
  incidents > 5 ? "SAFETY CONCERN" : "CONTROLLED"
);