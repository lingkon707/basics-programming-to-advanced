// max 800

function moneyBag(dollar) {
  if (dollar > 800) {
    return;
  }

  console.log(dollar);
  moneyBag(dollar + 200);
}

// moneyBag(200);
moneyBag(201);




// 201
// 401
// 601

// === Code Execution Successful ===
