const match = {
  opponent: "Dhaka United",
  score: { ourTeam: 3, opponent: 1 },
  goals: ["Rakib", "Rakib", "Shanto"],
  manOfTheMatch: "Rakib",
};

console.log(`Match vs ${match.opponent}`);
console.log(`Score: ${match.score.ourTeam} - ${match.score.opponent}`);
console.log(`Goals by: ${match.goals.join(", ")}`);
console.log(`Man of the Match: ${match.manOfTheMatch}`);
