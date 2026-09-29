function getFinalPrice(amount) {
    var discount = amount >= 3000 ? 10 : 5;

    return amount - (amount * discount / 100);
}

console.log(getFinalPrice(3500));