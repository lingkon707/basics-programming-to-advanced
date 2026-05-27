function approveMovie(rating) {
  return rating > 7 ? "Approved" : "Rejected";
}
console.log(approveMovie(8.2));