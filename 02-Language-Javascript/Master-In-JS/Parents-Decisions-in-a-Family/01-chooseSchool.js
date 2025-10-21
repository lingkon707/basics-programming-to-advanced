const schools = ["City School", "Sunrise Academy", "Green Valley High"];
const distance = [3, 5, 2];

let chosen = schools[distance.indexOf(Math.min(...distance))];
console.log(`🏫 Parents chose: ${chosen} (nearest school)`);
