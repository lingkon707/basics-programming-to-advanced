// 31_ministerPerformanceScore.js
var kpi = 78;
var leadership = 85;
var transparency = 60;

var avg = (kpi + leadership + transparency) / 3;

console.log(
  "MINISTER PERFORMANCE → Average:",
  avg.toFixed(2),
  "| STATUS:",
  avg < 70
    ? "PERFORMANCE REVIEW REQUIRED"
    : "SATISFACTORY"
);