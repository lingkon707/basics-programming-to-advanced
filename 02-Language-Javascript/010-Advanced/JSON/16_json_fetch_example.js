// Example: JSON with fetch (API)
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));
