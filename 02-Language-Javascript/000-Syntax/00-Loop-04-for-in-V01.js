// loop syntaxes
// for (variable in object) { ... }

const person = { name: "Lingkon", age: 23, country: "Bangladesh" };

for (let key in person) {
  console.log(key, ":", person[key]);
}

// break; // if use - then , stop after printing once 
