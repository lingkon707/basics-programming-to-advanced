function validateVoter(name, age) {
    if (name && age >= 18) {
        return "Registration Valid";
    }
    return "Invalid Registration";
}

console.log(validateVoter("Rahim", 19));