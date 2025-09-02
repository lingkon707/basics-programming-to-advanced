

const customers = ["Karim", "Lingkon", "Sakib", "Nabila"];
const unavailableCustomers = ["Lingkon"]; // Orders we want to skip

for (let i = 0; i < customers.length; i++) {
    if (unavailableCustomers.includes(customers[i])) {
        console.log("Skipping order for:", customers[i]);
        continue; // Skip this customer
    }
    console.log("Processing order for:", customers[i]);
}
