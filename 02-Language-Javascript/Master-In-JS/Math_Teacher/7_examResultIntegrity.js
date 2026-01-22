// 7_examResultIntegrity.js
var totalScripts = 40;
var checkedScripts = 36;

console.log(
  "Result Processing → Checked:",
  checkedScripts,
  "| Pending:",
  totalScripts - checkedScripts,
  "| Risk:",
  checkedScripts !== totalScripts ? "RESULT DELAY & COMPLAINT RISK" : "Clear"
);