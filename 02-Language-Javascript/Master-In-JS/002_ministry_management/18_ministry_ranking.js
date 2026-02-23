var ranking = [
  {name: "Health", score: 88},
  {name: "Education", score: 95}
];

ranking.sort(function(a,b){
  return b.score - a.score;
});

console.log("Top Ministry:", ranking[0].name);