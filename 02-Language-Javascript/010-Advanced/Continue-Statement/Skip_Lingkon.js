const friends = ["Ali", "Lingkon", "Sami", "Rina"];

for (let i = 0; i < friends.length; i++) {
    if (friends[i] === "Lingkon") {
        continue; // Skip Lingkon
    }
    console.log("Hello,", friends[i]);
}
