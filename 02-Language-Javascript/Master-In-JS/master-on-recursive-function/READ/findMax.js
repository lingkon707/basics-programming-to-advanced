function findMax(arr, n) {
  if (n === 1) return arr[0]; 
  return Math.max(arr[n - 1], findMax(arr, n - 1));
}

console.log(findMax([3, 8, 1, 9, 5], 5)); 
// 9
