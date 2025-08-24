let verifyValue: { age: number | string } = {
  age: "4", // or try: 4
};

if (typeof verifyValue.age === "string") {
  console.log("string");
} else {
  console.log("number");
}
