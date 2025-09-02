// Multiple customers

const customers = [null, "Sakib", undefined, "Rina"];

for (let i = 0; i < customers.length; i++) {
    let name = customers[i] ?? "Lingkon"; // Use "Lingkon" if customer is null or undefined
    console.log("Processing order for:", name);
}


// Explanation:

// ?? is perfect when you want a default value only if something is null or undefined.
// Unlike ||, it doesn’t override 0, false, or empty string.