// Friend codes (binary representation)
// Friend A: 0101 (5)
// Friend B: 0011 (3)
let friendA = 5;  // 0101
let friendB = 3;  // 0011

// & (Bitwise AND) → Only 1 if both bits are 1
let commonFriends = friendA & friendB; 
console.log("Common friends (AND):", commonFriends); // 1 (0001)

// | (Bitwise OR) → 1 if at least one bit is 1
let totalFriends = friendA | friendB; 
console.log("Total friends (OR):", totalFriends); // 7 (0111)

// ^ (Bitwise XOR) → 1 if bits are different
let differentFriends = friendA ^ friendB;
console.log("Friends only one of them has (XOR):", differentFriends); // 6 (0110)

// ~ (Bitwise NOT) → Flips all bits
let notFriendA = ~friendA;
console.log("Not friend A (~):", notFriendA); // -6 (two's complement)

// << (Left Shift) → Multiply by 2 for each shift
let moreFriends = friendA << 1;
console.log("Friend A doubled friends (<<):", moreFriends); // 10 (1010)

// >> (Sign-propagating Right Shift) → Divide by 2 for each shift
let halfFriends = friendA >> 1;
console.log("Half friends (>>):", halfFriends); // 2 (0010)

// >>> (Zero-fill Right Shift) → Divide by 2, fill left with 0
let halfFriendsZeroFill = friendA >>> 1;
console.log("Half friends zero-fill (>>>):", halfFriendsZeroFill); // 2 (0010)
