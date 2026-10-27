// Compare ordered and delivered quantities.
var orders = [
    { shop: "Shop A", ordered: 100, delivered: 90 },
    { shop: "Shop B", ordered: 80, delivered: 80 },
    { shop: "Shop C", ordered: 120, delivered: 95 }
];
var i, shortage;

for (i = 0; i < orders.length; i++) {
    shortage = orders[i].ordered - orders[i].delivered;
    if (shortage > 0) {
        console.log(orders[i].shop + ": Short " + shortage);
    }
}