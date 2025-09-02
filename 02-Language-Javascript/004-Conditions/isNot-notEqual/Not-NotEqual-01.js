// main.js

// Example 1: Login check using !=
function checkLogin() {
  const username = document.getElementById("username").value;
  // Using != to check if input is not empty
  const message = (username != "") ? `Welcome, ${username}!` : "Username cannot be empty";
  document.getElementById("loginResult").textContent = message;
}

// Example 2: Subscription status using !
function checkSubscription() {
  const isSubscribed = document.getElementById("subscribed").checked;
  // Using ! to check if not subscribed
  const message = (!isSubscribed) ? "You are not subscribed. Please subscribe!" : "Thank you for subscribing!";
  document.getElementById("subResult").textContent = message;
}

// Example 3: Order status using !=
function checkOrder() {
  const orderId = document.getElementById("orderId").value;
  // Using != to check if input is not empty
  const message = (orderId != "") ? `Order #${orderId} is being processed` : "Please enter a valid order ID";
  document.getElementById("orderResult").textContent = message;
}

// Example 4: Discount check for business
function checkDiscount() {
  const totalAmount = parseFloat(document.getElementById("totalAmount").value);
  // Using != to ensure input is valid
  const discount = (totalAmount != 0 && !isNaN(totalAmount)) ? totalAmount * 0.1 : 0;
  const message = (discount != 0) ? `You get a discount of $${discount}` : "Enter a valid amount to get a discount";
  document.getElementById("discountResult").textContent = message;
}

// Example 5: Stock availability check
function checkStock() {
  const stock = parseInt(document.getElementById("stockInput").value);
  // Using ! to check if stock is zero or invalid
  const message = (!stock) ? "Out of stock!" : `In stock: ${stock} items`;
  document.getElementById("stockResult").textContent = message;
}


// ✅ Features included in this main.js:

// Login validation (!=)
// Subscription status check (!)
// Order status check (!=)
// Discount calculation with input validation (!= and !)
// Stock availability check (!)