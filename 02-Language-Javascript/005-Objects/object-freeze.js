// Example: Object.freeze
const config = { appName: "MyApp", version: 1 };
Object.freeze(config);
config.version = 2;  // won’t change
console.log(config);
