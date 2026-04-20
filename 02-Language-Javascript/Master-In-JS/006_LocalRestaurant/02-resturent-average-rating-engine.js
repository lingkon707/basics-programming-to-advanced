function getAverageRating(resturent) {
  if (resturent.rating.totalUsers === 0) {
    return 0;
  }
  return resturent.rating.totalStars / resturent.rating.totalUsers;
}

console.log(getAverageRating({
  rating: { totalStars: 45, totalUsers: 10 }
}));