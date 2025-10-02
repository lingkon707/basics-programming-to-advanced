// Example: finally
Promise.resolve("Done")
  .finally(() => console.log("Finally runs"))
  .then(val => console.log(val));
