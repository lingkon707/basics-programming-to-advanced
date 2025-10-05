function makeMultiplier(x) {
  return function(y) {
    return x * y;
  };
}
const double = makeMultiplier(2);
console.log(double(10)); // 20
