let input: string | number;

input = "Hello";
console.log(input); // Hello

input = 42;
console.log(input); // 42

interface Person { name: string; }
interface Employee { id: number; }

type Staff = Person & Employee;

const staff: Staff = { name: "Bob", id: 123 };
console.log(staff); // { name: 'Bob', id: 123 }
