// 12_meritWithBonusMarks.js
var students = [
  ["R", 260, true],
  ["S", 255, false],
  ["T", 250, true]
];

var topper = "";
var max = 0;

for (var i = 0; i < students.length; i++) {
  var total = students[i][1] + (students[i][2] ? 10 : 0);
  if (total > max) {
    max = total;
    topper = students[i][0];
  }
}

console.log("TOP STUDENT (Bonus Rule) →", topper, "| Final Marks:", max);