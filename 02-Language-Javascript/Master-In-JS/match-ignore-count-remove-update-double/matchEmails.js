const data = "Contact: user@gmail.com or info@domain.com";
const emails = data.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi);
console.log(emails); // ['user@gmail.com', 'info@domain.com']
