function checkId(id) {
    if (id && id.length === 10) {
        return "Valid ID";
    }
    return "Invalid ID";
}

console.log(checkId("1234567890"));