var votes = {
    A: 0,
    B: 0
};

function countVote(candidate) {
    votes[candidate]++;
}

countVote("A");
countVote("B");
console.log(votes);