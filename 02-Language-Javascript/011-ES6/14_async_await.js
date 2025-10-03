// Async & Await
function delay() {
  return new Promise(resolve => setTimeout(() => resolve("Done!"), 1000));
}

async function run() {
  console.log("Start...");
  let result = await delay();
  console.log(result);
}
run();
