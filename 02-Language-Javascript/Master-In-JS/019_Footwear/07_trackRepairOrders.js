// Track customer shoe repair orders.

var repairs = [
    { id: 101, status: "Completed" },
    { id: 102, status: "Pending" },
    { id: 103, status: "In Progress" }
];
var i;

for (i = 0; i < repairs.length; i++) {
    if (repairs[i].status !== "Completed") {
        console.log("Repair #" + repairs[i].id + ": " + repairs[i].status);
    }
}