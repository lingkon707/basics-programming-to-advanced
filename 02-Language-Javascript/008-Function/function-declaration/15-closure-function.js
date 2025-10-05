function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const inc = counter();
console.log(inc());
console.log(inc());
