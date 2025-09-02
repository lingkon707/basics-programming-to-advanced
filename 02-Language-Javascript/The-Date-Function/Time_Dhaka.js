// Current time in Dhaka (Bangladesh Standard Time)
const now = new Date();

const dhakaTime = now.toLocaleString("en-US", {
  timeZone: "Asia/Dhaka",
  dateStyle: "full",
  timeStyle: "long"
});

console.log("Dhaka Time:", dhakaTime);
