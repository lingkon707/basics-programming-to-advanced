var voters = [];

function registerVoter(name, age, nid) {
    if (age < 18) {
        return "Under age";
    }

    voters.push({
        name: name,
        age: age,
        nid: nid,
        voted: false
    });

    return "Voter Registered";
}

console.log(registerVoter("Rahim", 22, "NID101"));
console.log(voters);