const budget = 10000;
const groceries = 4000;
const schoolFee = 3000;
const utilities = 2000;

const total = groceries + schoolFee + utilities;

if (total <= budget) console.log("✅ Budget fits perfectly.");
else console.log("⚠️ Need to cut down expenses.");
