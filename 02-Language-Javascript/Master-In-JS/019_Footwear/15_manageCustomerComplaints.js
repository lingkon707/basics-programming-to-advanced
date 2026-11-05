// Identify unresolved customer complaints.

var complaints = [
    { id: 201, issue: "Size Problem", resolved: true },
    { id: 202, issue: "Sole Damage", resolved: false },
    { id: 203, issue: "Late Delivery", resolved: false }
];
var i;

for (i = 0; i < complaints.length; i++) {
    if (!complaints[i].resolved) {
        console.log("Open Complaint #" + complaints[i].id);
        console.log("Issue: " + complaints[i].issue);
    }
}