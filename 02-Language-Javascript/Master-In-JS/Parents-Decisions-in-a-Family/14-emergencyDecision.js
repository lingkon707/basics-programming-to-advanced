const fever = 101;
const medicineAtHome = false;

if (fever > 100 && !medicineAtHome)
  console.log("🏥 Parents decided to visit the doctor!");
else
  console.log("💊 Medicine at home, no hospital needed.");
