// Check raw material availability.

var materials = [
    { name: "Leather", stock: 40, required: 50 },
    { name: "Rubber", stock: 100, required: 80 },
    { name: "Thread", stock: 20, required: 30 }
];
var i, shortage;

for (i = 0; i < materials.length; i++) {
    shortage = materials[i].required - materials[i].stock;
    if (shortage > 0) {
        console.log(materials[i].name + ": Order " + shortage + " units");
    }
}