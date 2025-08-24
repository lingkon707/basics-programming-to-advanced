let treeZone: { code: any , town: any, act : true} = {
  code: 7206,
  town : "Hasan ALi",
  act : true
};

if (typeof treeZone.code === "number") {
  console.log("Code Type is number");
} else if (typeof treeZone.code === "string") {
  console.log("Code Type is string");
} else {
  console.log("Code Type is something else");
}

console.log(treeZone.code);

