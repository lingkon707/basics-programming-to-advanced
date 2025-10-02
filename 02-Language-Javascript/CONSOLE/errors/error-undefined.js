// Example: Accessing undefined variable property
try {
  let obj;
  console.log(obj.name); // TypeError: Cannot read property 'name' of undefined
} catch (err) {
  console.log(err.name, ":", err.message);
}
