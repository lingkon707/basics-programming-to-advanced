// 2_topStudentByAverage.js
var data = [
  ["Nila", 85, 80, 90],
  ["Rafi", 88, 86, 84],
  ["Sami", 92, 89, 91]
];

var bestStudent = "";
var bestAvg = 0;

for (var i = 0; i < data.length; i++) {
  var avg = (data[i][1] + data[i][2] + data[i][3]) / 3;
  if (avg > bestAvg) {
    bestAvg = avg;
    bestStudent = data[i][0];
  }
}

console.log("TOP STUDENT (Average) →", bestStudent, "| Average:", bestAvg.toFixed(2));