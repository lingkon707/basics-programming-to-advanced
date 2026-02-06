// 17_matrixRowTopper.js
var matrix = [
  [70, 80, 90],
  [85, 88, 92],
  [78, 75, 80]
];

var bestRow = 0;
var maxSum = 0;

for (var i = 0; i < matrix.length; i++) {
  var sum = matrix[i][0] + matrix[i][1] + matrix[i][2];
  if (sum > maxSum) {
    maxSum = sum;
    bestRow = i + 1;
  }
}

console.log("TOP STUDENT (Matrix Row) → Student", bestRow);