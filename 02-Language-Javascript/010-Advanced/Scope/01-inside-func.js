// Inside a function – var and let behave the same

function familyFunction() {
  var fatherVar = "Rahim";   // function-scoped
  let motherLet = "Amina";   // block-scoped, but function block here
  const childConst = "Kamal"; // block-scoped
  
  console.log("Inside function - father:", fatherVar); // ✅ Rahim
  console.log("Inside function - mother:", motherLet); // ✅ Amina
  console.log("Inside function - child:", childConst); // ✅ Kamal
}

familyFunction();
