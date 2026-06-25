// array-sort.js


var scores = [40, 10, 100, 30];

scores.sort(function (a, b) {
  return a - b;
});

console.log(scores);