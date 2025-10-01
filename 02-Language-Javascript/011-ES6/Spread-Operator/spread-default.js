let defaults = { theme: "light", font: "Arial" };
let userSettings = { theme: "dark" };
let settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: "dark", font: "Arial" }
