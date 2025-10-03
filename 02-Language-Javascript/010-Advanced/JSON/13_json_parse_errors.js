// JSON parse error example
try {
  let obj = JSON.parse("{name:'John'}"); // Invalid JSON
} catch (e) {
  console.log("Error:", e.message);
}
