var users = [
    { id: 1, trades: 20 },
    { id: 2, trades: 5 }
];

var activeUsers = 0;
for (var i = 0; i < users.length; i++) {
    activeUsers += users[i].trades > 10 ? 1 : 0;
}

console.log("Active Users:", activeUsers);