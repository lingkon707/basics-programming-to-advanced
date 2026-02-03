// 7_topStudentByMatrixScan.js
var matrix = [
  [78, 82, 90],
  [88, 91, 84],
  [92, 89, 95]
];

var highest = 0;

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] > highest) {
      highest = matrix[i][j];
    }
  }
}

console.log("HIGHEST SCORE IN MATRIX →", highest);