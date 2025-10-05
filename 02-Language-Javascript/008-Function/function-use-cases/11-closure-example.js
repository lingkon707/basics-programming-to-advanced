function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const click = counter();
console.log(click()); // 1
console.log(click()); // 2
