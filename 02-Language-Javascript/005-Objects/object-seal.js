// Example: Object.seal
const account = { balance: 1000 };
Object.seal(account);
account.balance = 2000; // allowed
delete account.balance; // not allowed
console.log(account);
