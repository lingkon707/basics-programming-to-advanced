// 1_topStudentByTotalMarks.js
var marks = [
  ["Rahim", 78, 82, 91],
  ["Karim", 88, 79, 85],
  ["Amina", 90, 92, 89]
];

var topName = "";
var topTotal = 0;

for (var i = 0; i < marks.length; i++) {
  var total = marks[i][1] + marks[i][2] + marks[i][3];
  if (total > topTotal) {
    topTotal = total;
    topName = marks[i][0];
  }
}

console.log("TOP STUDENT (Total Marks) →", topName, "| Total:", topTotal);