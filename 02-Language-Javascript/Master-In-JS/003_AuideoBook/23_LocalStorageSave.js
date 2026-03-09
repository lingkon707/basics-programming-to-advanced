// Save audiobook to localStorage

const audiobook = {
  title: "JavaScript Pro",
  duration: 220,
};

localStorage.setItem("audiobook", JSON.stringify(audiobook));

console.log("Audiobook saved to localStorage");