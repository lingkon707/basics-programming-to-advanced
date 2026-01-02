let marks = [30, 55, 70, 40, 85];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 50) {
    marks[i] = 50;
  }
}

console.log(marks);
// Output: [30, 50, 50, 40, 50]