const friends = ["Ali", "Lingkon", "Sami", "Rina"];
let i = 0;

while (i < friends.length) {
    if (friends[i] === "Lingkon") {
        i++;
        continue; // Skip Lingkon
    }
    console.log("Meetup with:", friends[i]);
    i++;
}
