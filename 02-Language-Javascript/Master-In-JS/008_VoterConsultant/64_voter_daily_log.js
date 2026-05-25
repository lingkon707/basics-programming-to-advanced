var logs = [];

function logAction(action) {
    logs.push(action);
}

logAction("Center Opened");
logAction("Voting Started");
console.log(logs);