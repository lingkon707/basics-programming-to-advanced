function winner(votes) {
    return votes.A > votes.B ? "Candidate A" : "Candidate B";
}

console.log(winner({ A: 120, B: 90 }));