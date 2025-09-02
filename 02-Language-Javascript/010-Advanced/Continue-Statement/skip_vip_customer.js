const customers = ["Karim", "Lingkon", "Sakib", "Nabila"];

for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Lingkon") {
        continue; // Skip VIP Lingkon
    }
    console.log("Processing order for:", customers[i]);
}
