let focusMinutes = 0;
setInterval(() => {
  focusMinutes++;
  console.log(`⏳ Focused ${focusMinutes} minutes`);
  if (focusMinutes === 5) console.log("✅ Great! Take a 2-min break now.");
}, 60000);
