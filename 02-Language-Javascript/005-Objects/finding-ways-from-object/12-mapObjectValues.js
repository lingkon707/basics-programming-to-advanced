// Map object values: increase each by 10
let marks = { math: 70, english: 45 };
let updated = Object.fromEntries(
  Object.entries(marks).map(([k, v]) => [k, v + 10])
);
console.log(updated); // { math: 80, english: 55 }
