

type TwoStrings = [string, string];

const concat = ([a, b]: TwoStrings): string => a + b;

console.log(concat(["Hello, ", "World!"]));