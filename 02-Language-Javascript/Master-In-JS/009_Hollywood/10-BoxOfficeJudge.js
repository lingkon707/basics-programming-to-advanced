function judge(collection) {
  if (collection > 500) return "Blockbuster";
  return "Average";
}
console.log(judge(650));