// Example: Clamping value using Math.min & Math.max
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
console.log(clamp(15, 0, 10)); // 10
console.log(clamp(-5, 0, 10)); // 0
console.log(clamp(5, 0, 10));  // 5
