function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // recursive call
}

countdown(5);
// 5, 4, 3, 2, 1, Done!
