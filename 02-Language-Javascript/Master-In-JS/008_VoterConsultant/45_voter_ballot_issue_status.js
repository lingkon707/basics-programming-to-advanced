function ballotIssued(isIssued) {
    return isIssued ? "Ballot Issued" : "Pending";
}

console.log(ballotIssued(false));