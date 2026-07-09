function stakingReward(amount, rate) {
    return amount * Math.pow(1 + rate, 1);
}

console.log("Yearly Reward:", stakingReward(5000, 0.12));