// Example: Error handling
async function task() {
  try {
    await Promise.reject("Failed task");
  } catch (err) {
    console.log("Caught:", err);
  }
}
task();
