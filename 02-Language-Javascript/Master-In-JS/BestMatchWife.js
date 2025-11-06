
// best match wife

const wifeList = [{name:"Aisha",age:20,beauty:9},{name:"Fatima",age:22,beauty:7},{name:"Nabila",age:19,beauty:10}];
const myChoice = {age:20,beauty:8};


const bestMatch = wifeList.find(w=>w.age===myChoice.age && w.beauty>=myChoice.beauty);


console.log(bestMatch ? `Perfect match: ${bestMatch.name}` : "No match found!");