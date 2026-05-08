function validate(age) {
    if (age >= 18 && age <= 120) return true;
    return false;
}

console.log(validate(25));