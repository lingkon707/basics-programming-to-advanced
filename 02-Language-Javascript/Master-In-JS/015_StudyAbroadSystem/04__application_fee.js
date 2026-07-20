function calculateApplicationFee(country) {
  var fee = country === "USA" ? 100 : country === "UK" ? 80 : 50;
  console.log("Application fee:", fee);
  return fee;
}