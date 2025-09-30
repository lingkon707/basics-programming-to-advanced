// 1. Add "Mr." or "Ms." before each family member’s name
const names = ["Rahim", "Karim", "Ayesha"];
const titled = names.map(n => `Mr./Ms. ${n}`);
console.log(titled);
