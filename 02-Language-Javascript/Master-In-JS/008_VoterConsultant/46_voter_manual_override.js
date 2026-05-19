function manualOverride(allowed) {

    if (allowed) {
        return "Override Applied";
    }
    return "Override Denied";
}

console.log(manualOverride(true));