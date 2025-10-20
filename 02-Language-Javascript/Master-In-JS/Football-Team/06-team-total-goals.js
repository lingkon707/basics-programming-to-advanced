const players = [
  { name: "Rakib", goals: 4 },
  { name: "Shanto", goals: 2 },
  { name: "Siam", goals: 1 },
];

const totalGoals = players.reduce((sum, p) => sum + p.goals, 0);
console.log(`Team Total Goals: ${totalGoals}`);
