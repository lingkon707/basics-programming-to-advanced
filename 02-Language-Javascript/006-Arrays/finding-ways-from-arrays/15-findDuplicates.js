// Find duplicate elements
let nums = [1, 2, 3, 2, 4, 5, 1];
let duplicates = nums.filter((item, index) => nums.indexOf(item) !== index);
console.log(duplicates); // [2, 1]
