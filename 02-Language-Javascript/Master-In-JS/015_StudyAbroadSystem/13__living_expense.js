function estimateLivingExpense(city, months) {
  var monthly = city === "New York" ? 1500 : city === "London" ? 1200 : 800;
  var total = monthly * months;
  console.log("Living expense:", total);
  return total;
}