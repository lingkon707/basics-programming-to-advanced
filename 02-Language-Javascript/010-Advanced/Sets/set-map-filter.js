// Example: Map & Filter with Set
const set9 = new Set([1,2,3,4]);
const squaredEven = [...set9].filter(x => x % 2 === 0).map(x => x ** 2);
console.log(squaredEven); // [4,16]
