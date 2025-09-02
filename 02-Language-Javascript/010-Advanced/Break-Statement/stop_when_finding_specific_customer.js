const customers = ["Karim", "Lingkon", "Sakib", "Nabila"];

for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Lingkon") {
        console.log("Found VIP customer:", customers[i]);
        break; // Stop the loop immediately
    }
    console.log("Checking customer:", customers[i]);
}
