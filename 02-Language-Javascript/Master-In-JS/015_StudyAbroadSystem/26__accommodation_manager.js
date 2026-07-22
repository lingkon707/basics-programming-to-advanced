function findAccommodation(city, budget) {
  var options = ["Dormitory", "Apartment", "Homestay"];
  var available = options.filter(function() { return budget >= 500; });
  console.log("Accommodation options:", available);
  return available;
}
