// Nested do...while loops
let x = 1;
do {
  let y = 1;
  do {
    console.log(`x=${x}, y=${y}`);
    y++;
  } while (y <= 2);
  x++;
} while (x <= 3);
