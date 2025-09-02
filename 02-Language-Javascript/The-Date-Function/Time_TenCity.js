const now = new Date();

// List of countries with their time zones
const countries = [
  { name: "Dhaka", zone: "Asia/Dhaka" },
  { name: "New York", zone: "America/New_York" },
  { name: "London", zone: "Europe/London" },
  { name: "Tokyo", zone: "Asia/Tokyo" },
  { name: "Sydney", zone: "Australia/Sydney" },
  { name: "Dubai", zone: "Asia/Dubai" },
  { name: "Moscow", zone: "Europe/Moscow" },
  { name: "Paris", zone: "Europe/Paris" },
  { name: "Berlin", zone: "Europe/Berlin" },
  { name: "Toronto", zone: "America/Toronto" },
  { name: "Los Angeles", zone: "America/Los_Angeles" },
  { name: "Singapore", zone: "Asia/Singapore" },
  { name: "Delhi", zone: "Asia/Kolkata" }
];

// Loop through and print each country's local time
countries.forEach(country => {
  const localTime = now.toLocaleString("en-US", {
    timeZone: country.zone,
    dateStyle: "full",
    timeStyle: "long"
  });

  console.log(`${country.name} Time: ${localTime}`);
});
