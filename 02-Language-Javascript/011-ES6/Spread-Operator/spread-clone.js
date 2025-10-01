let obj = { x:1, y: { z:2 } };
let clone = { ...obj };
clone.y.z = 100;
console.log(obj, clone); // shallow copy
