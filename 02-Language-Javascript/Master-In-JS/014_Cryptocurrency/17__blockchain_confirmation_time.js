function confirmationTime(blocks) {
    return blocks * 10;
}

console.log("Estimated Time:", confirmationTime(6), "minutes");