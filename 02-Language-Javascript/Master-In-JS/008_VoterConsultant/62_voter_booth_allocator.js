function allocateBooth(serial) {
    if (serial <= 200) return "Booth A";
    if (serial <= 400) return "Booth B";
    return "Booth C";
}

console.log(allocateBooth(350));