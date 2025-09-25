// 1. Sum of 3 numbers
type ThreeNumbers = [number, number, number];
const sum = ([a, b, c]: ThreeNumbers) => a + b + c;
console.log(sum([2, 4, 6]));

// 2. Concatenate 2 strings
type TwoStrings = [string, string];
const concat = ([a, b]: TwoStrings) => a + b;
console.log(concat(["Type", "Script"]));

// 3. Multiply 2 numbers
type TwoNumbers = [number, number];
const multiply = ([a, b]: TwoNumbers) => a * b;
console.log(multiply([3, 7]));

// 4. Average of numbers
type NumArr = number[];
const avg = (nums: NumArr) => nums.reduce((a, b) => a + b, 0) / nums.length;
console.log(avg([10, 20, 30, 40]));

// 5. Reverse string
type OneString = string;
const reverse = (s: OneString) => s.split("").reverse().join("");
console.log(reverse("hello"));

// 6. Count characters
type Str = string;
const countChars = (s: Str) => s.length;
console.log(countChars("typescript"));

// 7. Find max
type NumList = number[];
const maxNum = (nums: NumList) => Math.max(...nums);
console.log(maxNum([5, 9, 1, 7]));

// 8. Find min
const minNum = (nums: NumList) => Math.min(...nums);
console.log(minNum([5, 9, 1, 7]));

// 9. Square a number
type OneNum = number;
const square = (n: OneNum) => n * n;
console.log(square(9));

// 10. Check even
const isEven = (n: OneNum) => n % 2 === 0;
console.log(isEven(8));

// 11. Check odd
const isOdd = (n: OneNum) => n % 2 !== 0;
console.log(isOdd(11));

// 12. Uppercase string
const upper = (s: Str) => s.toUpperCase();
console.log(upper("typescript"));

// 13. Lowercase string
const lower = (s: Str) => s.toLowerCase();
console.log(lower("TYPESCRIPT"));

// 14. Repeat string
type RepeatInput = [string, number];
const repeatStr = ([s, n]: RepeatInput) => s.repeat(n);
console.log(repeatStr(["Hi ", 3]));

// 15. Join array of strings
type StrArr = string[];
const joinStr = (arr: StrArr) => arr.join(", ");
console.log(joinStr(["apple", "banana", "mango"]));

// 16. Filter positive numbers
const positive = (nums: NumList) => nums.filter(n => n > 0);
console.log(positive([-3, 0, 5, 9, -1]));

// 17. Double numbers
const double = (nums: NumList) => nums.map(n => n * 2);
console.log(double([1, 2, 3, 4]));