// Identify machines due for maintenance.

var machines = [
    { name: "Cutting Machine", hours: 480, limit: 500 },
    { name: "Sewing Machine", hours: 300, limit: 400 },
    { name: "Sole Press", hours: 520, limit: 500 }
];
var i;

for (i = 0; i < machines.length; i++) {
    if (machines[i].hours >= machines[i].limit) {
        console.log("Maintenance Due: " + machines[i].name);
    }
}