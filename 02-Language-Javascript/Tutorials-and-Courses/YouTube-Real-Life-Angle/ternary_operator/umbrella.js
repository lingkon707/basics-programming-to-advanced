let haveUmbrella = false;
let friendsAvailable = true; // can go out if friends are available

// Using ternary operator
let activity = haveUmbrella 
    ? "Go for a walk in the rain." 
    : friendsAvailable 
        ? "Meet friends indoors at a café." 
        : "Stay home and read a book.";

console.log(activity);
