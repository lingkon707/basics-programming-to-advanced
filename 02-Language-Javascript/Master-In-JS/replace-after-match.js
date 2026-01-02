// main.js

let scores = [45, 60, 75, 60, 90];

// find index of value 60
let targetIndex = scores.findIndex(score => score === 60);

// replace only the first matched value
if (targetIndex !== -1) {
  scores[targetIndex] = 100;
}

console.log(scores);
// Output: [45, 100, 75, 60, 90]