let customerName = "";
let names = customerName || "Lingkon";   // || treats "" as falsy
console.log("Using ||:", names);         // Output: Lingkon

let name2 = customerName ?? "Lingkon";  // ?? treats "" as valid
console.log("Using ??:", name2);        // Output: (empty string)
