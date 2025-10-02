// Example: Check duplicates in array
function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
console.log(hasDuplicates([1, 2, 3, 3])); // true
