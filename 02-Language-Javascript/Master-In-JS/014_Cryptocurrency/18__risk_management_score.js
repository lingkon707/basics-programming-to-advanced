function riskScore(volatility, exposure) {
    var score = volatility * exposure;
    return score > 50 ? "Critical" : "Acceptable";
}

console.log("Risk:", riskScore(0.7, 90));