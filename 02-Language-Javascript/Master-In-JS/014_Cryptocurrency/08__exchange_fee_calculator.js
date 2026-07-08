function exchangeFee(amount) {
    return amount > 10000 ? amount * 0.001 : amount * 0.002;
}

console.log("Fee:", exchangeFee(15000));