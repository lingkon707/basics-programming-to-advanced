for (let i = 10; i <= 20; i++) {
  // Explicit type
  let status: string = (i % 2 === 0) ? "Even" : "Odd";

  console.log(`${i} is ${status}`);
}