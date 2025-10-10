const letters: string[] = ["A", "B", "C", "D"];
const randomIndex: number = Math.floor(Math.random() * letters.length);
const randomValue: string = letters[randomIndex];
console.log(`Index: ${randomIndex}, Value: ${randomValue}`);
