function paymentStatus(paid) {
    return paid ? "Paid" : "Due";
}

console.log(paymentStatus(true));