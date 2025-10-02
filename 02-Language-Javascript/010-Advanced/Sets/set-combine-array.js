// Example: Combine arrays and remove duplicates
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const combinedUnique = [...new Set([...arr1, ...arr2])];
console.log(combinedUnique); // [1,2,3,4]
