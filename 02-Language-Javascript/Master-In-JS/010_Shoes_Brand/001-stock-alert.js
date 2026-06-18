// 001-stock-alert.js

var product = { name: "Runner Pro", stock: 3, threshold: 5 };
var status = product.stock < product.threshold ? "LOW STOCK" : "OK";

console.log(product.name + " => " + status + " (" + product.stock + ")");