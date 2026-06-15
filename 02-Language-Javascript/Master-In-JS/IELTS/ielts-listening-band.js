// ielts-listening-band.js
var correct = 32;
var band;

if (correct >= 35) band = 8;
else if (correct >= 30) band = 7;
else if (correct >= 23) band = 6;
else band = 5;

console.log("Listening Band:", band);