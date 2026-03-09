// Sort audiobooks by duration

const audiobooks = [
  { title: "Book A", duration: 300 },
  { title: "Book B", duration: 150 },
];

audiobooks.sort((a, b) => a.duration - b.duration);

console.log(audiobooks);