// Example: Async function error handling
async function fetchData() {
  throw new Error("Failed to fetch");
}
fetchData().catch(err => console.log("Async error:", err.message));
