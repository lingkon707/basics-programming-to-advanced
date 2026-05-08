function countRegion(voters) {
    var count = 0;
    for (var i = 0; i < voters.length; i++) {
        if (voters[i].region === "Dhaka") {
            count++;
        }
    }
    return count;
}

console.log(countRegion([{region:"Dhaka"},{region:"Gazipur"}]));