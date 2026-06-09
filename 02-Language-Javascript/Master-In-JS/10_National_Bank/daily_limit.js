// 9_daily_limit.js

function dailyWithdrawLimit(amount) {
  console.log(amount > 50000 ? "Limit Exceeded" : "Within Limit");
}
dailyWithdrawLimit(60000);