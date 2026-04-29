var lengthKm = 120;
var costPerKm = 850000;

var constructionCost = lengthKm * costPerKm;
var contingency = constructionCost * 0.1;


console.log("Pipeline Cost:", constructionCost + contingency);