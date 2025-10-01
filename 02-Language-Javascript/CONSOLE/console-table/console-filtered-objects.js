const students = [
    { name: "Ali", grade: 85 },
    { name: "Sara", grade: 92 },
    { name: "John", grade: 78 }
];

const passed = students.filter(s => s.grade >= 80);
console.table(passed);
