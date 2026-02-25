// 24_departmentPerformanceRank.js
var depts = [
  ["Health", 82],
  ["Education", 91],
  ["Transport", 76]
];

var best = depts[0];

for (var i = 1; i < depts.length; i++) {
  if (depts[i][1] > best[1]) best = depts[i];
}

console.log("TOP PERFORMING DEPARTMENT →", best[0], "| Score:", best[1]);