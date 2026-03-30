function verifyDocuments(hasNID, hasCertificate) {
    return hasNID && hasCertificate;
}

console.log(verifyDocuments(true, true));