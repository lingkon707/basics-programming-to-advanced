function risk(budget) {
  if (budget > 300) return "High Risk";
  return "Safe";
}

console.log(risk(350));