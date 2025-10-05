function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
for (const n of numbers()) console.log(n);
