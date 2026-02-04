// 10_weightedAcademicDisciplineScore.js
// Marks 70%, Discipline 30%
var data = [
  ["A", 85, 90],
  ["B", 92, 60],
  ["C", 88, 95]
];

var best = "";
var score = 0;

for (var i = 0; i < data.length; i++) {
  var finalScore = data[i][1] * 0.7 + data[i][2] * 0.3;
  if (finalScore > score) {
    score = finalScore;
    best = data[i][0];
  }
}

console.log("TOP STUDENT (Weighted Discipline) →", best, "| Score:", score.toFixed(2));