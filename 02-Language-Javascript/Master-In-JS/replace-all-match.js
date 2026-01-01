let arr = [2, 4, 2, 6, 2];

arr = arr.map(num => num === 2 ? 99 : num);

console.log(arr);
// [99, 4, 99, 6, 99]