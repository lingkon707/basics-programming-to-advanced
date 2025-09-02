const orders = ["Order1", "Order2", "Order3", "Order4"];
const specialCustomer = "Lingkon";

for (let i = 0; i < orders.length; i++) {
    if (orders[i] === "Order3") {
        console.log("Special order found for:", specialCustomer);
        break; // Stop processing further orders
    }
    console.log("Processing:", orders[i]);
}
