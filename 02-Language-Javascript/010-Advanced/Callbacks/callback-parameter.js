// Example: Callback with parameter
function processUser(user, callback) {
  callback(user);
}
processUser("Bob", function(u) {
  console.log("Processing user:", u);
});
