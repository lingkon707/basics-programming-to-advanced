var voters = [
    { region: "Dhaka" },
    { region: "Dhaka" },
    { region: "Gazipur" }
];

function countByRegion(region) {
    var count = 0;
    for (var i = 0; i < voters.length; i++) {
        if (voters[i].region === region) {
            count++;
        }
    }
    return count;
}

console.log(countByRegion("Dhaka"));