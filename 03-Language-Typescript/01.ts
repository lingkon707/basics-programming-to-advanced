let dataStock: (number | string | { city: string; country: string })[] = [
    100,
    "Hello TypeScript",
    { city: "Dhaka", country: "Bangladesh" },
    200,
    "ChatGPT",
    { city: "New York", country: "USA" }
];

// Loop through array
dataStock.forEach((item) => console.log(item));