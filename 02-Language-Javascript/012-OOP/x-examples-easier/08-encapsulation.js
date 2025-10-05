class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  showBalance() {
    console.log(`Current Balance: ${this.#balance}`);
  }
}

const acc = new Account();
acc.deposit(500);
acc.showBalance();
