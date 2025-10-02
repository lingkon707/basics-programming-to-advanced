// Example: Run chase status
let runsRequired = 25;
let ballsLeft = 10;
let chaseStatus = runsRequired <= ballsLeft ? "Easy" : runsRequired <= ballsLeft*2 ? "Challenging" : "Impossible";
console.log(`Runs Required: ${runsRequired}, Balls Left: ${ballsLeft}, Status: ${chaseStatus}`);
