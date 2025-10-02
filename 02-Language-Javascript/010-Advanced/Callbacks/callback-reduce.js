// Example: reduce with callback
const nums2 = [1, 2, 3, 4];
const sum = nums2.reduce(function(acc, n) {
  return acc + n;
}, 0);
console.log(sum);
