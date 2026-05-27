// Concept: conditional logic (real decision making)

function acceptMovie(payment) {
  if (payment >= 20) return "Contract Accepted";
  return "Contract Rejected";
}

console.log(acceptMovie(25));