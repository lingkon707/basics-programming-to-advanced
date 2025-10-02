// Example: Delay with Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve("Done after " + ms + "ms"), ms));
}
delay(1000).then(msg => console.log(msg));
