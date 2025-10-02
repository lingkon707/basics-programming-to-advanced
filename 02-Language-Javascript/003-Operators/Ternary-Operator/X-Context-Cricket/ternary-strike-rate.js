// Example: Strike rate
let runs2 = 40;
let balls2 = 20;
let strikeRate = runs2/balls2*100;
let srStatus = strikeRate >= 150 ? "Aggressive" : strikeRate >= 100 ? "Balanced" : "Defensive";
console.log(`Runs: ${runs2}, Balls: ${balls2}, Strike Rate: ${srStatus}`);
