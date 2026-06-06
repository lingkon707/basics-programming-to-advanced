// 3_withdraw.js

function withdraw(account, amount) {
  if (account.balance >= amount) {
    account.balance -= amount;
    console.log("Withdrawn:", amount, "Remaining:", account.balance);
  } else {
    console.log("Insufficient Balance");
  }
}

withdraw(accounts[0], 3000);