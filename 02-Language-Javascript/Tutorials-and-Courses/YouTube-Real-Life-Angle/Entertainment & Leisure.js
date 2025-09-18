Watch movie (ternary)

let freeEvening = true;
console.log(freeEvening ? "Watch movie" : "Read book");


Game night (if-else)

let friendsAvailable = false;
if(friendsAvailable) console.log("Play board games");
else console.log("Play video games alone");


Music choice (switch)

let mood = "happy";
switch(mood){
    case "happy": console.log("Play upbeat music"); break;
    case "sad": console.log("Play calm music"); break;
}


Outdoor activity (logical operator)

let sunny = true;
let weekend = true;
console.log(sunny && weekend ? "Go cycling" : "Stay home");


Reading habit (ternary)

let libraryOpen = false;
console.log(libraryOpen ? "Go read books" : "Read at home");


TV series (array)

let series = ["Stranger Things", "Breaking Bad", "The Witcher"];
series.forEach(s => console.log("Watch " + s));


Play instrument (if-else)

let pianoAvailable = true;
if(pianoAvailable) console.log("Practice piano");
else console.log("Practice guitar");


Weekend trip (switch)

let place = "beach";
switch(place){
    case "beach": console.log("Pack swimsuit"); break;
    case "mountains": console.log("Pack hiking gear"); break;
}


Picnic plan (logical operator)

let weatherGood = false;
let friendsAvailable = true;
console.log(weatherGood && friendsAvailable ? "Go picnic" : "Postpone picnic");


Board game choice (array + ternary)

let games = ["Chess", "Monopoly", "Scrabble"];
let selectedGame = games[1];
console.log(selectedGame === "Chess" ? "Play Chess" : "Play other game");