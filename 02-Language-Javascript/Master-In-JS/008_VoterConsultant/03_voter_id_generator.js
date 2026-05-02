function generateVoterId(name, index) {
    return name.substring(0, 3).toUpperCase() + "-" + index;
}

console.log(generateVoterId("Karim", 101));