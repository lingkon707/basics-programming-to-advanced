// 11_filterFailThenRank.js
var students = [
  ["X", 40, 80, 90],
  ["Y", 85, 88, 92],
  ["Z", 90, 35, 95]
];

var top = "";
var highest = 0;

for (var i = 0; i < students.length; i++) {
  if (students[i][1] >= 50 && students[i][2] >= 50 && students[i][3] >= 50) {
    var total = students[i][1] + students[i][2] + students[i][3];
    if (total > highest) {
      highest = total;
      top = students[i][0];
    }
  }
}

console.log("TOP STUDENT (Fail Filter Applied) →", top);