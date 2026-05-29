function decision(cost, profit) {

  return profit > cost ? "Greenlight" : "Reject";
}

console.log(decision(100, 300));