// logical-default-value.js

function greet(name) {
  name = name || "Guest";
  console.log("Hello", name);
}

greet();