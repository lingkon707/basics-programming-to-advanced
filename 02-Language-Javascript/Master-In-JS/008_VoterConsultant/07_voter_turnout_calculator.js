function turnout(total, voted) {
    return (voted / total) * 100 + "%";
}

console.log(turnout(1000, 750));