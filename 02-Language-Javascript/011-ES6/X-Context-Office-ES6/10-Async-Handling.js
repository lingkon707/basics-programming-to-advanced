const fetchInvoices = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([100, 200, 300]), 1000);
  });
};

fetchInvoices().then(data => console.log("Invoices:", data));

