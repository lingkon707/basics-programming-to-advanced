function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
let double = multiplyBy(2);
console.log(double(10));
