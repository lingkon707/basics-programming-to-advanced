const feedbacks = [];

function addFeedback(name, rating, comment) {
  feedbacks.push({ name, rating, comment });
}

addFeedback("Rafi", 5, "Brilliant performance!");
addFeedback("Nadia", 4, "Defense was solid, keep it up.");

console.table(feedbacks);
