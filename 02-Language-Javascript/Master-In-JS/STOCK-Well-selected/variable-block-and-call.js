// variable-scope-const.js
// variable-block-and-call


{
  const totalMangoesCollected = 25;
  console.log("Inside block:", totalMangoesCollected); // ✅ 25
}



const totalSnake = 2;
{
  console.log("Alone:", totalSnake); //  2
}





{
  const totalKolaCollected = 500;
}
console.log("Outside block:", totalKolaCollected); // error
