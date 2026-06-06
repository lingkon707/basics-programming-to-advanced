// 2_deposit.js

function deposit(account, amount) {
  account.balance += amount;
  console.log("Deposited:", amount, "New Balance:", account.balance);
}

deposit(accounts[0], 2000);