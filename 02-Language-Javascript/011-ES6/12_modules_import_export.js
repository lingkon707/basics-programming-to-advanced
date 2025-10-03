// Export (in file math.js)
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;

// Import (in main.js)
import { add, mul } from './math.js';
console.log(add(2, 3));
