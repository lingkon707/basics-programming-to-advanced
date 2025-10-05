let marks = [40, 55, 70, 35];
marks = marks.map(m => (m < 50 ? m + 10 : m));
console.log(marks); // [50, 55, 70, 45]
