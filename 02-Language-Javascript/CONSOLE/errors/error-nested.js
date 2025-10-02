// Example: Nested try...catch
try {
  try {
    throw new Error("Inner error");
  } catch (innerErr) {
    console.log("Caught inner error:", innerErr.message);
    throw innerErr; // rethrow
  }
} catch (outerErr) {
  console.log("Caught outer error:", outerErr.message);
}
