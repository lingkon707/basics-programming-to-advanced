function ageGroup(age) {
    if (age < 25) return "Youth";
    if (age < 60) return "Adult";
    return "Senior";
}

console.log(ageGroup(45));