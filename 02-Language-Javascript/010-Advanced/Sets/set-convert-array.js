// Example: Remove duplicates from array using Set
const arrWithDup = [1, 2, 2, 3, 3, 4];
const uniqueArr = [...new Set(arrWithDup)];
console.log(uniqueArr); // [1,2,3,4]
