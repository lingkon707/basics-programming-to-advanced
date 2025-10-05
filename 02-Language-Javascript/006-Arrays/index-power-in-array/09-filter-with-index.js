const nums = [5, 10, 15, 20, 25];
const evenIndex = nums.filter((_, index) => index % 2 === 0);
console.log(evenIndex); // [5, 15, 25]
