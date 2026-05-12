function voteStatus(hasVoted) {
    if (hasVoted) return "Vote Casted";
    return "Pending Vote";
}

console.log(voteStatus(false));