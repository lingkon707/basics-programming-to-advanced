// 22_budgetOveruseAlert.js
var approvedBudget = 50000000;
var spentBudget = 62000000;

console.log(
  "BUDGET CONTROL → Approved:",
  approvedBudget,
  "| Spent:",
  spentBudget,
  "| STATUS:",
  spentBudget > approvedBudget
    ? "OVERS PENDING – PARLIAMENT REVIEW REQUIRED"
    : "WITHIN LIMIT"
);