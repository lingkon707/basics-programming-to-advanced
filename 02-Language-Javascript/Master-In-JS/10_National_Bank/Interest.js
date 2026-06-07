
function applyInterest(account, rate) {
  var interest = account.balance * rate / 100;
  account.balance += interest;
  console.log("Interest Added:", interest);
}
applyInterest(accounts[0], 5);