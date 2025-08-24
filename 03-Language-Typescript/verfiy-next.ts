let safeThis: {
  code: any;
  town: string;
  act: true;
} = {
  code: 7206,
  town: "Hasan ALi",
  act: true,
};

if (typeof safeThis.code === "number") {
  console.log("code is number");
} else if (typeof safeThis.code === "string") {
  console.log("code is string");
} else {
  console.log("code is something else");
}

if (typeof safeThis.town === "string") {
  console.log("town is string");
} else {
  console.log("town is not string");
}

if (typeof safeThis.act === "boolean") {
  console.log("act is boolean");
} else {
  console.log("act is not boolean");
}
