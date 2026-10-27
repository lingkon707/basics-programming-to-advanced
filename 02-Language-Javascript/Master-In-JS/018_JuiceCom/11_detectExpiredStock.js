// Identify expired beverage batches.

var batches = [
    { name: "Cola", daysLeft: 10 },
    { name: "Juice", daysLeft: -2 },
    { name: "Water", daysLeft: 30 }
];
var i, batch;

for (i = 0; i < batches.length; i++) {
    batch = batches[i];
    if (batch.daysLeft < 0) {
        console.log(batch.name + ": Expired");
    } else if (batch.daysLeft <= 7) {
        console.log(batch.name + ": Urgent Sale Review");
    }
}