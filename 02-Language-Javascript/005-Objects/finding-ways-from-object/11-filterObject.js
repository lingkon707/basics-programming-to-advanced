// Filter object: keep only numbers > 50
let marks = { math: 70, english: 45, science: 80 };
let filtered = Object.fromEntries(
  Object.entries(marks).filter(([k, v]) => v > 50)
);
console.log(filtered); // { math: 70, science: 80 }
