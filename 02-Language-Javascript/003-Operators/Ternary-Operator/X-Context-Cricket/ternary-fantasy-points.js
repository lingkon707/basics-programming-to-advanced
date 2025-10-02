// Example: Fantasy cricket points
let runsScored = 80;
let wicketsTaken = 3;
let fantasyPoints = runsScored >= 50 ? 20 : wicketsTaken >= 2 ? 15 : 5;
console.log(`Runs: ${runsScored}, Wickets: ${wicketsTaken}, Points: ${fantasyPoints}`);
