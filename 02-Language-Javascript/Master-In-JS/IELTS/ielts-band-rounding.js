// ielts-band-rounding.js

var avg = 6.75;

if (avg % 1 === 0.75) {
    console.log("Final Band:", Math.ceil(avg));
} else if (avg % 1 === 0.25) {
    console.log("Final Band:", Math.floor(avg));
} else {
    console.log("Final Band:", avg);
}