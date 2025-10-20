const stats = [
  { name: "Rakib", goals: 5 },
  { name: "Siam", goals: 2 },
  { name: "Shanto", goals: 3 },
];

stats.sort((a, b) => b.goals - a.goals);
console.log("Players sorted by goals:", stats);
