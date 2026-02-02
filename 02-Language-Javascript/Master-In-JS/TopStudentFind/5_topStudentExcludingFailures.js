// 5_topStudentExcludingFailures.js
var list = [
  ["Rana", 95, 92, 20],
  ["Mitu", 88, 90, 91],
  ["Hasan", 85, 84, 83]
];

var name = "";
var max = 0;

for (var i = 0; i < list.length; i++) {
  var fail = list[i][1] < 40 || list[i][2] < 40 || list[i][3] < 40;
  if (!fail) {
    var total = list[i][1] + list[i][2] + list[i][3];
    if (total > max) {
      max = total;
      name = list[i][0];
    }
  }
}

console.log("TOP STUDENT (Failures Excluded) →", name);