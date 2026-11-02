// Identify defective footwear.

var products = [
    { code: "SH101", defect: false },
    { code: "SH102", defect: true },
    { code: "SH103", defect: false },
    { code: "SH104", defect: true }
];
var i;

for (i = 0; i < products.length; i++) {
    if (products[i].defect) {
        console.log("Reject Product: " + products[i].code);
    }
}