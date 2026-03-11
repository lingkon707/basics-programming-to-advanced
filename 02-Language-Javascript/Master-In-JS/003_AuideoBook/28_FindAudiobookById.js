// Find audiobook by ID

const audiobooks = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
];

const book = audiobooks.find(b => b.id === 2);

console.log(book);