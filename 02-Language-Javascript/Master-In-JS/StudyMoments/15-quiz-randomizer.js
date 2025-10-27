const quiz = [
  { q: "What is 5+5?", a: 10 },
  { q: "Who discovered gravity?", a: "Newton" },
];
let pick = quiz[Math.floor(Math.random() * quiz.length)];
console.log("🧠 Quiz:", pick.q);
