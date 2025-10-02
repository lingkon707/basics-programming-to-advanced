// Example: Nested promises
new Promise((resolve) => {
  setTimeout(() => resolve(5), 500);
}).then(result => {
  return new Promise(res => res(result * 2));
}).then(final => console.log(final)); // 10
