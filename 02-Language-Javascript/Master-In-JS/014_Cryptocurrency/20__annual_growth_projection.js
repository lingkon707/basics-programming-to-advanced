function growth(value, rate, years) {
    return value * Math.pow(1 + rate, years);
}

console.log("Projected Value:", growth(1000000, 0.25, 3));