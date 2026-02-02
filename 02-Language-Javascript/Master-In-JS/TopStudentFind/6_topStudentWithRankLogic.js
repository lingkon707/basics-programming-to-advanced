// 6_topStudentWithRankLogic.js
var students = [
  ["S1", 260],
  ["S2", 275],
  ["S3", 268]
];

var rank1 = students[0];

for (var i = 1; i < students.length; i++) {
  if (students[i][1] > rank1[1]) {
    rank1 = students[i];
  }
}

console.log("RANK 1 STUDENT →", rank1[0], "| Marks:", rank1[1]);