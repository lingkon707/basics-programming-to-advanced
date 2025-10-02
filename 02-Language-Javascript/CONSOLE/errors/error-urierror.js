// Example: URIError
try {
  decodeURIComponent("%"); // malformed URI
} catch (err) {
  console.log(err.name, ":", err.message);
}
