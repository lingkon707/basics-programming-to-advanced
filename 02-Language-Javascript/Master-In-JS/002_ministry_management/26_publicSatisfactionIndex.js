// 26_publicSatisfactionIndex.js
var surveyScore = 62;

console.log(
  "PUBLIC SATISFACTION INDEX →",
  surveyScore + "%",
  "| STATUS:",
  surveyScore < 70
    ? "LOW TRUST – POLICY REVIEW NEEDED"
    : "STABLE PUBLIC SUPPORT"
);