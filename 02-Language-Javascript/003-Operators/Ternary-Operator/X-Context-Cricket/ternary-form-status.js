// Example: Player form status
let last5MatchesRuns = 200;
let form = last5MatchesRuns >= 250 ? "In-form" : last5MatchesRuns >= 150 ? "Average" : "Out of form";
console.log(`Last 5 Matches Runs: ${last5MatchesRuns}, Form: ${form}`);
