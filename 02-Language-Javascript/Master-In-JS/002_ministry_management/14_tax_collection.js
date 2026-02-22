var tax = [20000, 30000, 15000];
var total = 0;

for (var i = 0; i < tax.length; i++) {
  total += tax[i];
}
console.log("Total Tax Collected:", total);