// 19_meritAfterFilteringLowPerformers.js
var students = [
  ["X", 240],
  ["Y", 280],
  ["Z", 260]
];

var best = "";
var max = 0;

for (var i = 0; i < students.length; i++) {
  if (students[i][1] >= 250 && students[i][1] > max) {
    max = students[i][1];
    best = students[i][0];
  }
}

console.log("TOP STUDENT (Filtered Merit List) →", best);