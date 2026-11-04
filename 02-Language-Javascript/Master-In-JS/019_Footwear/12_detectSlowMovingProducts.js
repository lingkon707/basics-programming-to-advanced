// Find footwear with low sales.

var shoes = [
    { name: "Sports Shoe", sold: 120 },
    { name: "Formal Shoe", sold: 15 },
    { name: "Sandals", sold: 90 },
    { name: "Boots", sold: 8 }
];
var i;

for (i = 0; i < shoes.length; i++) {
    if (shoes[i].sold < 20) {
        console.log("Slow Moving: " + shoes[i].name);
    }
}