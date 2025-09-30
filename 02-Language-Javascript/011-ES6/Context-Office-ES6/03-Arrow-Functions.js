const calculateTax = (amount) => amount * 0.05; // 5% tax
console.log(calculateTax(2000)); // 100

// Summing invoice amounts
const invoices = [100, 200, 300];
const total = invoices.reduce((sum, invoice) => sum + invoice, 0);
console.log(total); // 600
