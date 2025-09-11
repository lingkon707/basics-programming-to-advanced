const customIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const val of customIterable) {
  console.log(val);
}
// 1, 2, 3
