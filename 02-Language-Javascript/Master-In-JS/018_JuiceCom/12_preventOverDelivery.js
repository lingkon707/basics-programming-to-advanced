// Prevent delivery above the ordered quantity.

function checkDelivery(ordered, loaded) {
    if (ordered <= 0 || loaded < 0) {
        return "Invalid Quantity";
    }
    if (loaded > ordered) {
        return "Overload: Remove Extra Units";
    }
    return "Delivery Quantity Approved";
}

console.log(checkDelivery(500, 550));
console.log(checkDelivery(500, 480));