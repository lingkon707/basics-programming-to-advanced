const arr = ["first", "second", "third"];
[arr[0], arr[2]] = [arr[2], arr[0]];
console.log(arr); // ['third', 'second', 'first']
