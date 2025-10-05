const arr = [10, 5, 30, 15];
const sorted = arr.map((v, i) => ({index: i, value: v}))
  .sort((a, b) => a.value - b.value);
console.log(sorted);
// [{index:1,value:5}, {index:0,value:10}, {index:3,value:15}, {index:2,value:30}]
