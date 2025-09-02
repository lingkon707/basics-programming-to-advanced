

// 1. Login check
function checkLogin() {
  const username = document.getElementById("username").value;
  const message = (username != "") ? `Hello, ${username}!` : "Please enter your name";
  document.getElementById("loginResult").textContent = message;
}

// 2. Subscription check
function checkSubscription() {
  const isSubscribed = document.getElementById("subscribed").checked;
  const message = (!isSubscribed) ? "You are not subscribed" : "Thanks for subscribing!";
  document.getElementById("subResult").textContent = message;
}

// 3. Order check
function checkOrder() {
  const orderId = document.getElementById("orderId").value;
  const message = (orderId != "") ? `Your order #${orderId} is confirmed` : "Please enter order ID";
  document.getElementById("orderResult").textContent = message;
}

// 4. Discount check
function checkDiscount() {
  const amount = parseFloat(document.getElementById("amount").value);
  const discount = (amount != 0 && !isNaN(amount)) ? amount * 0.1 : 0;
  const message = (discount != 0) ? `Your discount is $${discount}` : "Enter a valid amount";
  document.getElementById("discountResult").textContent = message;
}

// 5. Stock check
function checkStock() {
  const stock = parseInt(document.getElementById("stockInput").value);
  const message = (!stock) ? "Out of stock" : `Stock available: ${stock}`;
  document.getElementById("stockResult").textContent = message;
}
