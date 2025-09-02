// main.js

// Example 1: Login check with try...catch
function checkLogin() {
  const username = document.getElementById("username").value;

  try {
    if (username === "") {
      throw "Username cannot be empty!";
    } else {
      document.getElementById("loginResult").textContent = `Hello, ${username}!`;
    }
  } catch (error) {
    document.getElementById("loginResult").textContent = `Error: ${error}`;
  } finally {
    console.log("Login check finished.");
  }
}

// Example 2: Discount calculation with try...catch
function checkDiscount() {
  const amount = parseFloat(document.getElementById("amount").value);

  try {
    if (isNaN(amount) || amount <= 0) {
      throw "Please enter a valid amount!";
    }
    const discount = amount * 0.1;
    document.getElementById("discountResult").textContent = `Your discount is $${discount}`;
  } catch (error) {
    document.getElementById("discountResult").textContent = `Error: ${error}`;
  } finally {
    console.log("Discount calculation finished.");
  }
}

// Example 3: Stock check with try...catch
function checkStock() {
  const stock = parseInt(document.getElementById("stockInput").value);

  try {
    if (isNaN(stock)) {
      throw "Stock value must be a number!";
    } else if (stock <= 0) {
      throw "Out of stock!";
    } else {
      document.getElementById("stockResult").textContent = `Stock available: ${stock}`;
    }
  } catch (error) {
    document.getElementById("stockResult").textContent = `Error: ${error}`;
  } finally {
    console.log("Stock check finished.");
  }
}
