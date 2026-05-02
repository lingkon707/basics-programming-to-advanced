var age = 20;

function isEligible(age) {
    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible";
    }
}

console.log(isEligible(age));