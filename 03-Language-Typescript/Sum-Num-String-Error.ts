let dataBase: { code: number | string, year: number | string } = {
  code: 1206 , 
  year : "2025"  
};

console.log(dataBase.code); // number
console.log(String(dataBase.code)); // make string

console.log(dataBase.year); // have string
console.log(Number(dataBase.year)); // make number


// note : number can write in string or without string both
// but name can only write on "Dhaka", not cityName : Dhaka ❌

