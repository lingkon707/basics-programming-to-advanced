class Bank {
  #secretCode = "12345";

  showCode() {
    console.log(`Access Denied!`);
  }
}

const b = new Bank();
b.showCode(); // Can't access #secretCode directly
