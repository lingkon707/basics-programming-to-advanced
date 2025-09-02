const customers = ["Ali", "Lingkon", "Sakib", "Rina"];

for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Lingkon") {
        console.log("Skipping VIP customer:", customers[i]);
        continue; // Skip Lingkon
    }
    if (customers[i] === "Rina") {
        console.log("Stop processing at customer:", customers[i]);
        break; // Stop loop
    }
    console.log("Processing order for:", customers[i]);
}
