// Example: Match result based on runs
let teamScore = 180;
let target = 200;
let result = teamScore >= target ? "Won" : teamScore >= target/2 ? "Close" : "Lost";
console.log(`Score: ${teamScore}, Result: ${result}`);
