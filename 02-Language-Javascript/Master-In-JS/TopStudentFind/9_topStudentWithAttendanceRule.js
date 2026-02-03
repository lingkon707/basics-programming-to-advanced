// 9_topStudentWithAttendanceRule.js
var students = [
  ["Rafi", 270, 85],
  ["Nila", 280, 65],
  ["Sami", 260, 90]
];

var top = "";
var max = 0;

for (var i = 0; i < students.length; i++) {
  if (students[i][2] >= 75 && students[i][1] > max) {
    max = students[i][1];
    top = students[i][0];
  }
}

console.log("TOP STUDENT (Attendance Rule) →", top || "No eligible student");