// 3_topStudentWithPassCondition.js
var students = [
  ["Imran", 70, 65, 72],
  ["Sadia", 90, 92, 95],
  ["Fahim", 88, 40, 91]
];

var topper = "";
var highest = 0;

for (var i = 0; i < students.length; i++) {
  if (students[i][1] >= 50 && students[i][2] >= 50 && students[i][3] >= 50) {
    var sum = students[i][1] + students[i][2] + students[i][3];
    if (sum > highest) {
      highest = sum;
      topper = students[i][0];
    }
  }
}

console.log(
  topper
    ? "TOP STUDENT (Pass Rule Applied) → " + topper
    : "NO STUDENT QUALIFIED UNDER PASS RULE"
);