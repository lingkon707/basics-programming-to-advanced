function processUserInput(callback) {
  let name = "Rafi";
  callback(name);
}
processUserInput(function(user) {
  console.log("Hello", user);
});
