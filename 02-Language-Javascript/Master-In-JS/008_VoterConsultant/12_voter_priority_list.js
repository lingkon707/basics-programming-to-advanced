var voters = [
    { name: "A", priority: 2 },
    { name: "B", priority: 1 }
];

function sortByPriority(arr) {
    return arr.sort(function(a, b) {
        return a.priority - b.priority;
    });
}

console.log(sortByPriority(voters));