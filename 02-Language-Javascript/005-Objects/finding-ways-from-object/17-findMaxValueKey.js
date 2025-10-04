// Find subject with highest marks
let marks = { math: 70, english: 45, science: 85 };
let topSubject = Object.keys(marks).reduce((a, b) =>
  marks[a] > marks[b] ? a : b
);
console.log(topSubject); // science
