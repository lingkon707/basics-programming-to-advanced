// Array with string and number
let values: (string | number)[] = ["500", 600];

// Convert each item to number and sum
let do_sum = values.reduce((total, item) => total + Number(item), 0);

console.log(do_sum); // 1100