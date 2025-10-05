function higher(fn, value) {
  return fn(value);
}
const square = n => n * n;
console.log(higher(square, 5)); // 25
