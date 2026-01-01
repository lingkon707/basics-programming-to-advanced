let arr = [5, 10, 15, 10, 20];

let index = arr.indexOf(10);
if (index !== -1) {
  arr[index] = 99;
}

console.log(arr);
// [5, 99, 15, 10, 20]