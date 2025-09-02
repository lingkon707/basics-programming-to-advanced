let grandfather = "Hasan"; // global

{
  let father = "Rahim"; // block scope
  const mother = "Amina"; // block scope
  var uncle = "Karim"; // function/global scope if outside function

  console.log("Inside block:", grandfather, father, mother, uncle); // ✅ All accessible
}

console.log("Outside block:", grandfather, uncle); // ✅ grandfather and uncle accessible
// father and mother are ❌ not accessible
