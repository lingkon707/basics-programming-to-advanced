let Hello: { 
  code: any; 
  town: string; 
  act: true; 
} = {
  code: 7206,
  town: "Hasan ALi",
  act: true,
};

for (const key in Hello) {
  if (Hello.hasOwnProperty(key)) {
    console.log(`${key} is ${typeof Hello[key as keyof typeof Hello]}`);
  }
}
