// Example: Using fetch with callback
function getUser(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
}
getUser("https://jsonplaceholder.typicode.com/users/1", (err, data) => {
  if(err) console.log("Error:", err);
  else console.log(data);
});
