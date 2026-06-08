// fraud_check.js

function fraudCheck(amount, country) {
  console.log("Fraud Check:", amount > 200000 && country !== "BD" ? "Alert" : "Safe");
}

fraudCheck(300000, "USA");