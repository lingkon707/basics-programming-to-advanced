function securityCheck(isSuspicious) {
    if (isSuspicious) {
        return "Flag Raised";
    }
    return "Clear";
}

console.log(securityCheck(false));