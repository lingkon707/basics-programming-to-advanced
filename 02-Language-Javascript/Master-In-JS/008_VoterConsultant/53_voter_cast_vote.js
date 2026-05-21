function castVote(voter) {
    if (voter.voted) {
        return "Already Voted";
    }

    voter.voted = true;
    return "Vote Cast Successfully";
}

var voter = { name: "Karim", voted: false };
console.log(castVote(voter));