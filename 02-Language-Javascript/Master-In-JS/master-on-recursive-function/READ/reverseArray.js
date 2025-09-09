function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr.pop()].concat(reverseArray(arr));
}

console.log(reverseArray([1, 2, 3, 4]));
// Output: [4,3,2,1]
