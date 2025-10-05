function processData(data, callback) {
  console.log("Processing:", data);
  callback();
}

processData("Report", () => console.log("✅ Done!"));
