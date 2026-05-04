function getStation(village) {
    switch(village) {
        case "North": return "Station A";
        case "South": return "Station B";
        default: return "Main Station";
    }
}

console.log(getStation("North"));