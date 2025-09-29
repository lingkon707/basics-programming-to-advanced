let username: string = "Alice";
let age: number = 25;
let isAdmin: boolean = true;

function greet(name: string, age: number): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

console.log(username); 
console.log(age);      // 25
console.log(isAdmin);  // true
console.log(greet(username, age)); 
