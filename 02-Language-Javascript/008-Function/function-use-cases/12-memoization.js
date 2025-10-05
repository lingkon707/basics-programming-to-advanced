function memoize(fn) {
  const cache = {};
  return function (x) {
    if (cache[x]) return cache[x];
    const result = fn(x);
    cache[x] = result;
    return result;
  };
}

const square = memoize(n => n * n);
console.log(square(5)); // 25 (calculated)
console.log(square(5)); // 25 (cached)
