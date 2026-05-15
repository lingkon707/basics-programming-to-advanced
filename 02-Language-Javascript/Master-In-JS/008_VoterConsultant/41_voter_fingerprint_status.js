function fingerprintVerified(status) {
    return status ? "Verified" : "Not Verified";
}

console.log(fingerprintVerified(true));