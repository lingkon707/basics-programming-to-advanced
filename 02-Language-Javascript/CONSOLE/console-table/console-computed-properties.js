const numbersArray = [1, 2, 3, 4, 5];
const squared = numbersArray.map(num => ({ Number: num, Square: num * num }));
console.table(squared);
