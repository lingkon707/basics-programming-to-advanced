function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncCall() {
  console.log("Waiting...");
  await wait(1000);
  console.log("Done!");
}

asyncCall();
