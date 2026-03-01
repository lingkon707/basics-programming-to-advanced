// 32_lawApprovalVoting.js
var totalMembers = 350;
var yesVotes = 210;

console.log(
  "LAW APPROVAL STATUS → YES Votes:",
  yesVotes,
  "| Required:",
  totalMembers / 2 + 1,
  "| RESULT:",
  yesVotes >= totalMembers / 2 + 1
    ? "BILL PASSED"
    : "BILL REJECTED"
);