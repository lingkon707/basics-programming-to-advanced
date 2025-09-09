const data = [
  { name: "Rahim", mobile: "01711" },
  { name: "Karim", mobile: "01822", children: [{ name: "Hasan", mobile: "01933" }] }
];

function findUser(list, mobile) {
  for (let item of list) {
    if (item.mobile === mobile) return item;
    if (item.children) {
      const found = findUser(item.children, mobile);
      if (found) return found;
    }
  }
  return null;
}

console.log(findUser(data, "01933")); 
// { name: "Hasan", mobile: "01933" }
