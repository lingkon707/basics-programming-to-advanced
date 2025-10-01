// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './mathUtils.js';
console.log(add(100, 200)); // 300
