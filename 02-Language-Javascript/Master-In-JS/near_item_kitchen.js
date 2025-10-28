// main.js

// Kitchen object with items and their distance from hands (in cm)
const kitchen = {
  spoon: 10,
  knife: 25,
  plate: 15,
  glass: 8,
  bowl: 12
};

// Find the item nearest to hands
let nearestItem = null;
let minDistance = Infinity;

for (const item in kitchen) {
  if (kitchen[item] < minDistance) {
    minDistance = kitchen[item];
    nearestItem = item;
  }
}

console.log(`The item nearest to your hands is: ${nearestItem} (${minDistance} cm away).`);