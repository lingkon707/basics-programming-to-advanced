const users = ["Ali", "Sara", "Rahim"];
const indexed = users.reduce((obj, name, index) => {
  obj[index] = name;
  return obj;
}, {});
console.log(indexed); // {0:'Ali', 1:'Sara', 2:'Rahim'}
