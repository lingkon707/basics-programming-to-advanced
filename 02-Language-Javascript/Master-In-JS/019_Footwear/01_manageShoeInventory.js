// Track available shoe sizes.

var inventory = [
    { size: 38, stock: 20 },
    { size: 39, stock: 15 },
    { size: 40, stock: 5 },
    { size: 41, stock: 12 }
];
var i;

for (i = 0; i < inventory.length; i++) {
    console.log("Size " + inventory[i].size + ": " + inventory[i].stock);
}