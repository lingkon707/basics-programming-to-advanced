var tickets = [];

function createTicket(voter, issue) {
    tickets.push({
        voter: voter,
        issue: issue,
        status: "Open"
    });
}

createTicket("Rahim", "Finger mismatch");
console.log(tickets);