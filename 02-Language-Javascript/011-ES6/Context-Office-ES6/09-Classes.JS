class Invoice {
  constructor(number, client, amount) {
    this.number = number;
    this.client = client;
    this.amount = amount;
  }

  printInvoice() {
    console.log(`Invoice #${this.number} for ${this.client}: $${this.amount}`);
  }
}

const invoice1 = new Invoice(101, "Lingkon", 1500);
invoice1.printInvoice(); // Invoice #101 for Lingkon: $1500
