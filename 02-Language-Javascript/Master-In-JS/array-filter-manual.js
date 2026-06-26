// array-filter-manual.js


var ages = [12, 18, 25, 10];
var adults = [];

for (var i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adults.push(ages[i]);
  }
}

console.log("Adults:", adults);