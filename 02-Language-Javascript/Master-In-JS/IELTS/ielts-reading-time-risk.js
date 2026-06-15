// ielts-reading-time-risk.js

var time = 60;
var passages = 3;

var perPassage = time / passages;

if (perPassage < 18) {
    console.log("High risk of time pressure");
} else {
    console.log("Time management is okay");
}