// 13_weightedSubjectPriority.js
// Math 60%, Science 40%
var data = [
  ["A", 80, 90],
  ["B", 92, 70],
  ["C", 85, 88]
];

var best = "";
var bestScore = 0;

for (var i = 0; i < data.length; i++) {
  var score = data[i][1] * 0.6 + data[i][2] * 0.4;
  if (score > bestScore) {
    bestScore = score;
    best = data[i][0];
  }
}

console.log("TOP STUDENT (Subject Priority) →", best);