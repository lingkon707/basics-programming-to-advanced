var voters = [
    { name: "A", age: 17 },
    { name: "B", age: 20 },
    { name: "C", age: 25 }
];

function getEligible(voters) {
    var result = [];
    for (var i = 0; i < voters.length; i++) {
        if (voters[i].age >= 18) {
            result.push(voters[i]);
        }
    }
    return result;
}

console.log(getEligible(voters));