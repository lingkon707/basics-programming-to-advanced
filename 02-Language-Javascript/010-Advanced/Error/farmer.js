

// 1. Check if farmer entered a name
function checkFarmerName() {
  const name = document.getElementById("farmerName").value;
  try {
    if (name === "") throw "Farmer name is missing!";
    document.getElementById("farmerResult").textContent = `Hello, ${name}`;
  } catch (e) {
    document.getElementById("farmerResult").textContent = `Error: ${e}`;
  } finally {
    console.log("Farmer name check done");
  }
}

// 2. Check vegetable quantity
function checkVegetable() {
  const qty = parseInt(document.getElementById("vegQty").value);
  try {
    if (!qty || isNaN(qty)) throw "Enter valid quantity!";
    document.getElementById("vegResult").textContent = `Vegetables available: ${qty} kg`;
  } catch (e) {
    document.getElementById("vegResult").textContent = `Error: ${e}`;
  } finally {
    console.log("Vegetable check done");
  }
}

// 3. Check cow milk
function checkMilk() {
  const milk = parseFloat(document.getElementById("milkAmount").value);
  try {
    if (!milk || isNaN(milk)) throw "Milk amount is invalid!";
    document.getElementById("milkResult").textContent = `Milk collected: ${milk} liters`;
  } catch (e) {
    document.getElementById("milkResult").textContent = `Error: ${e}`;
  } finally {
    console.log("Milk check done");
  }
}
