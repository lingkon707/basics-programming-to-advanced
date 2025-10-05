function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(5, 10, 15, 20)); // 50
