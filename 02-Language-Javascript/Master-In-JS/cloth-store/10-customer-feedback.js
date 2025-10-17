const feedbacks = [];

function addFeedback(name, rating, comment) {
  feedbacks.push({ name, rating, comment });
}

addFeedback("Tania", 5, "Beautiful saree collection!");
addFeedback("Imran", 4, "Good quality but delivery delayed.");

console.table(feedbacks);
