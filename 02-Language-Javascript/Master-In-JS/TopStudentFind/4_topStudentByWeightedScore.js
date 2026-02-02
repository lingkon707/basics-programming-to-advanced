// 4_topStudentByWeightedScore.js
// Math 50%, Physics 30%, English 20%
var records = [
  ["A", 80, 70, 90],
  ["B", 85, 88, 75],
  ["C", 92, 60, 80]
];

var best = "";
var bestScore = 0;

for (var i = 0; i < records.length; i++) {
  var score =
    records[i][1] * 0.5 +
    records[i][2] * 0.3 +
    records[i][3] * 0.2;

  if (score > bestScore) {
    bestScore = score;
    best = records[i][0];
  }
}

console.log("TOP STUDENT (Weighted System) →", best, "| Score:", bestScore.toFixed(2));