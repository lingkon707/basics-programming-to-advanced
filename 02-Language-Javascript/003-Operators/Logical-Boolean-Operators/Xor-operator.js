// Friend codes (binary representation)
// Friend A knows friends 0101 (5)
// Friend B knows friends 0011 (3)
let friendA = 5; // 0101
let friendB = 3; // 0011

// XOR → friends only one of them knows
let uniqueFriends = friendA ^ friendB;

console.log("Friends only one friend knows (XOR):", uniqueFriends); // 6 (0110)
