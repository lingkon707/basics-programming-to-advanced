function process(movie, cb) {
  cb(movie);
}
process("Avatar", function(m) {
  console.log("Processing:", m);
});