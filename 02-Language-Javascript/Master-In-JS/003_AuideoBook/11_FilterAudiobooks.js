// Filter audiobooks longer than 200 minutes

const audiobooks = [
  { title: "Book 1", duration: 150 },
  { title: "Book 2", duration: 300 },
];

const longBooks = audiobooks.filter(book => book.duration > 200);

console.log(longBooks);