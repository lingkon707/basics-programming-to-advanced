let customer = null;
let names = customer ?? "Lingkon"; // If customer is null, use "Lingkon"
console.log("Customer name:", names);

let orderQuantity = undefined;
let quantity = orderQuantity ?? 1; // If orderQuantity is undefined, default to 1
console.log("Order quantity:", quantity);


// ??	Returns the right-hand value only if the left-hand value is null or undefined