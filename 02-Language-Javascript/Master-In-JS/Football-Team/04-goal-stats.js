const matchStats = [
  { player: "Rakib", goals: 3 },
  { player: "Shanto", goals: 1 },
  { player: "Siam", goals: 0 },
];

const topScorer = matchStats.reduce((max, p) => p.goals > max.goals ? p : max);
console.log(`Top Scorer: ${topScorer.player} (${topScorer.goals} goals)`);

// end
