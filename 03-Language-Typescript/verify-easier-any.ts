let HelloGuys: { 
  code: any; 
  town: any; 
  act: any; 
} = {
  code: 7206,
  town: "Hasan ALi",
  act: true,
};

for (const key in HelloGuys) {
  if (HelloGuys.hasOwnProperty(key)) {
    console.log(`${key} is ${typeof HelloGuys[key as keyof typeof HelloGuys]}`);
  }
}
