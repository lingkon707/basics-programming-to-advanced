// 27_eventSponsorshipVerification.js

var sponsorFundsPromised = 2000000;
var sponsorFundsReceived = 1500000;

console.log(
  "SPONSORSHIP AUDIT → Pending Amount:",
  sponsorFundsPromised - sponsorFundsReceived,
  "| STATUS:",
  sponsorFundsReceived < sponsorFundsPromised
    ? "FOLLOW-UP REQUIRED"
    : "FULLY RECEIVED"
);