// 14_consistencyFilter.js
var students = [
  ["A", 90, 30],
  ["B", 78, 80],
  ["C", 88, 85]
];

var best = "";
var max = 0;

for (var i = 0; i < students.length; i++) {
  if (Math.abs(students[i][1] - students[i][2]) <= 10) {
    var avg = (students[i][1] + students[i][2]) / 2;
    if (avg > max) {
      max = avg;
      best = students[i][0];
    }
  }
}

console.log("TOP STUDENT (Consistency Rule) →", best);