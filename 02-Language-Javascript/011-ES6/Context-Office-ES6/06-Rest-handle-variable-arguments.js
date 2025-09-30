const sumInvoices = (...amounts) => amounts.reduce((sum, a) => sum + a, 0);
console.log(sumInvoices(100, 200, 300)); // 600
