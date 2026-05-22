var center = {
    capacity: 500,
    current: 0
};

function enterCenter() {
    if (center.current >= center.capacity) {
        return "Center Full";
    }
    center.current++;
    return "Entry Allowed";
}

console.log(enterCenter());