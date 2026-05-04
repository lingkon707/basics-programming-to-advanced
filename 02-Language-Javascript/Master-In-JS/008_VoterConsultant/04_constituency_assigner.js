function assignConstituency(area) {
    if (area === "Dhaka") return "Constituency-1";
    if (area === "Gazipur") return "Constituency-2";
    return "General Constituency";
}

console.log(assignConstituency("Dhaka"));