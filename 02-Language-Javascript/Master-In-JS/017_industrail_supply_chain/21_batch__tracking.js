// 21__batch_tracking.js
var batches = [
  { batchId: "B001", sku: "A100", manufacturedDate: "2026-08-01", expiryDate: "2026-12-31" },
  { batchId: "B002", sku: "B200", manufacturedDate: "2026-07-15", expiryDate: "2026-10-15" },
  { batchId: "B003", sku: "A100", manufacturedDate: "2026-08-10", expiryDate: "2027-01-10" }
];

function findBatchesBySku(sku) {
  var found = [];
  for (var i = 0; i < batches.length; i++) {
    if (batches[i].sku === sku) {
      found.push(batches[i].batchId);
    }
  }
  return found;
}

console.log("Batches for A100:", findBatchesBySku("A100"));