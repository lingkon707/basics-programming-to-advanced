

// 1. Simple login check
function checkLogin() {
  const name = document.getElementById("username").value;
  try {
    if (name === "") throw "Name is empty!";
    document.getElementById("loginResult").textContent = `Hello, ${name}`;
  } catch (e) {
    document.getElementById("loginResult").textContent = `Error: ${e}`;
  } finally {
    console.log("Login check done");
  }
}

// 2. Simple discount check
function checkDiscount() {
  const amount = parseFloat(document.getElementById("amount").value);
  try {
    if (!amount || isNaN(amount)) throw "Invalid amount!";
    document.getElementById("discountResult").textContent = `Discount: $${amount*0.1}`;
  } catch (e) {
    document.getElementById("discountResult").textContent = `Error: ${e}`;
  } finally {
    console.log("Discount check done");
  }
}

// 3. Simple stock check
function checkStock() {
  const stock = parseInt(document.getElementById("stockInput").value);
  try {
    if (!stock || isNaN(stock)) throw "Out of stock!";
    document.getElementById("stockResult").textContent = `Stock: ${stock}`;
  } catch (e) {
    document.getElementById("stockResult").textContent = `Error: ${e}`;
  } finally {
    console.log("Stock check done");
  }
}
