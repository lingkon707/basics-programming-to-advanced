// Example: Callback with this context
const obj = {
  name: "UIPlaza",
  greet: function(callback) {
    callback.call(this);
  }
};
obj.greet(function() {
  console.log("Hello from", this.name);
});
