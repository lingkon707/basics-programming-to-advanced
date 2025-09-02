const friends = ["Ali", "Sakib", "Lingkon", "Rina"];
let i = 0;

while (i < friends.length) {
    if (friends[i] === "Lingkon") {
        console.log("Stop! Lingkon has arrived.");
        break; // Stop the loop
    }
    console.log("Waiting for:", friends[i]);
    i++;
}
