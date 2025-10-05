const arr = [0, "Lingkon", false, 42, "", null];
const clean = arr.filter(Boolean);
console.log(clean); // ['Lingkon', 42]
