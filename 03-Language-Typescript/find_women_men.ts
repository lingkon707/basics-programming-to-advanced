const people = [
  { name: "Alice", gender: "female" },
  { name: "Bob", gender: "male" },
  { name: "Clara", gender: "female" },
  { name: "David", gender: "male" },
];

const women = people.filter(p => p.gender === "female").map(p => p.name);

const men = people.filter(p => p.gender === "male").map(p => p.name);

console.log("Women:", women);
console.log("Men:", men);