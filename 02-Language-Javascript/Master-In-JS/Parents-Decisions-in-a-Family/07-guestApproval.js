const guests = ["Uncle", "Cousin", "Friend"];
const parentApproval = guests.map(g => g !== "Friend");

guests.forEach((g, i) => {
  console.log(`${g}: ${parentApproval[i] ? "✅ Allowed" : "🚫 Not Allowed"}`);
});
