// Example: Async function with callback
function fetchDataAsync(callback) {
  setTimeout(() => {
    callback("Fetched Data");
  }, 500);
}
fetchDataAsync(data => console.log(data));
