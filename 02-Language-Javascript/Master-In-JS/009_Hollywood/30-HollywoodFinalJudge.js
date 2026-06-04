function judge(budget, collection) {
  return collection > budget ? "Hit Industry" : "Loss";
}
console.log(judge(100, 500));