let text = "Like my Football";

console.log(text[0]);

console.log(text.length); 

console.log(text.trim()); 

console.log(text.slice(2, 6)); 

console.log(text.toUpperCase());

console.log(text.toLowerCase());


console.log("----------------Part---02");
console.log(text.concat(" is awesome!"));

console.log(text.replace('Football', 'Cricket'));

console.log(text.replaceAll('Football', 'Vollyball'));

console.log(text.split(' '));


console.log("----------------Part---03");
console.log(text.charAt(0));

console.log(text.charCodeAt(0));

console.log(text.at(0));

console.log("Next lines")


console.log(text.substring(2, 6));

// console.log(text.substr(2, 4));


console.log(text.trimStart());

console.log(text.trimEnd());

console.log(text.padStart(20, '*'));

console.log(text.padEnd(20, '*'));

console.log(text.repeat(2));


