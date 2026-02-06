// 18_tieBreakerLogic.js
var students = [
  ["A", 270, 90],
  ["B", 270, 85]
];

var top = students[0];

if (students[1][1] === top[1] && students[1][2] > top[2]) {
  top = students[1];
}

console.log("TOP STUDENT (Tie Breaker Applied) →", top[0]);