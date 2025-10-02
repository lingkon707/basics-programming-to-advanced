// Example: Async/Await with Promise
async function fetchData() {
  const data = await Promise.resolve("Async Data");
  console.log(data);
}
fetchData();
