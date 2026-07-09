var wallet = {
    encrypted: true,
    backup: false
};

var secure = wallet.encrypted && wallet.backup ? "Secure" : "Vulnerable";
console.log("Wallet Status:", secure);