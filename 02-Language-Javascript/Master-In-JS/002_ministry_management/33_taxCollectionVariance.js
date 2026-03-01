// 33_taxCollectionVariance.js
var expectedTax = 900000000;
var collectedTax = 820000000;

console.log(
  "TAX COLLECTION REPORT → Expected:",
  expectedTax,
  "| Collected:",
  collectedTax,
  "| GAP:",
  expectedTax - collectedTax
);