var totalVoters = 1000;
var votedCount = 0;

function recordVote() {
    votedCount++;
}

function turnoutPercentage() {
    return (votedCount / totalVoters) * 100;
}

recordVote();
recordVote();
console.log(turnoutPercentage() + "%");