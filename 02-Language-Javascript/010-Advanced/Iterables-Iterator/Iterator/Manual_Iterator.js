function createIterator(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const myIterator = createIterator([10, 20, 30]);

console.log(myIterator.next()); // { value: 10, done: false }
console.log(myIterator.next()); // { value: 20, done: false }
console.log(myIterator.next()); // { value: 30, done: false }
console.log(myIterator.next()); // { value: undefined, done: true }
