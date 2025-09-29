interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = { id: 1, name: "Alice" };

console.log(user); // { id: 1, name: 'Alice' }
