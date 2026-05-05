function status(isRegistered) {
    return isRegistered ? "Active Voter" : "Inactive";
}

console.log(status(true));