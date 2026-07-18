function getIntakeDates(month) {
  var intakes = ["January", "May", "September"];
  var available = intakes.filter(function(i) { return i !== month; });
  console.log("Available intakes:", available);
  return available;
}