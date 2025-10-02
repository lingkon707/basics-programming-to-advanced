// Example: Error-first callback pattern
function fetchData(callback) {
  let error = null;
  let data = "Sample Data";
  callback(error, data);
}
fetchData(function(err, data) {
  if(err) console.log("Error:", err);
  else console.log("Data:", data);
});
