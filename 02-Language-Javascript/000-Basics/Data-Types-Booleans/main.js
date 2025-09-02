// Example 1: Yes or No (Customer Membership)
let isMember = true;  // customer is a member
if (isMember) {
  console.log("Discount applied for member!");
} else {
  console.log("No discount, regular price.");
}

// Example 2: On or Off (Light Switch)
let lightOn = false; // light is off
if (lightOn) {
  console.log("The shop is open (light is ON).");
} else {
  console.log("The shop is closed (light is OFF).");
}

// Example 3: True or False (Order Ready)
let orderReady = true;
console.log("Is order ready?", orderReady); // Output: true

// Example 4: Business example - Payment status
let paymentReceived = false;
if (paymentReceived) {
  console.log("Processing delivery...");
} else {
  console.log("Waiting for payment from customer Lingkon...");
}

// Example 5: Boolean from a comparison
let stock = 0;
let inStock = stock > 0; // false because stock = 0
console.log("Is product in stock?", inStock);
