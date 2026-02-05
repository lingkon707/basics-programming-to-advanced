// 15_attendancePenaltySystem.js
var students = [
  ["X", 280, 60],
  ["Y", 270, 90]
];

var best = "";
var max = 0;

for (var i = 0; i < students.length; i++) {
  var penalty = students[i][2] < 75 ? 20 : 0;
  var finalScore = students[i][1] - penalty;

  if (finalScore > max) {
    max = finalScore;
    best = students[i][0];
  }
}

console.log("TOP STUDENT (Attendance Penalty) →", best);