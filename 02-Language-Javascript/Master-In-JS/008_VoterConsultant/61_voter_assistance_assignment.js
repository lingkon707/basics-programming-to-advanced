function assignAssistant(age) {
    if (age > 65) {
        return "Assistant Assigned";
    }
    return "No Assistance Needed";
}

console.log(assignAssistant(70));