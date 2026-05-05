var voters = ["Rahim", "Karim", "Jabbar"];

function search(name) {
    for (var i = 0; i < voters.length; i++) {
        if (voters[i] === name) {
            return "Found";
        }
    }
    return "Not Found";
}

console.log(search("Karim"));