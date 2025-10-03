// Nested while loops
let x = 1;
while (x <= 3) {
  let y = 1;
  while (y <= 2) {
    console.log(`x=${x}, y=${y}`);
    y++;
  }
  x++;
}
