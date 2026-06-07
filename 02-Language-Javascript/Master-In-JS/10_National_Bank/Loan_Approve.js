// 7_loan_approve.js

function approveLoan(name, creditScore) {
  console.log("Loan Status:", creditScore > 650 ? "Approved" : "Rejected");
}
approveLoan("Karim", 700);