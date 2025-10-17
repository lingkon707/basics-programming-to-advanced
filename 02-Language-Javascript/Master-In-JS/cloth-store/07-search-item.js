const storeItems = ["Panjabi", "Saree", "Jeans", "T-shirt"];
const query = "saree";

const found = storeItems.find(item => item.toLowerCase() === query.toLowerCase());
console.log(found ? `${found} found!` : "Item not available");
