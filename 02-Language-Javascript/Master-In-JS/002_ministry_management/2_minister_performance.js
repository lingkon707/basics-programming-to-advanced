var ministers = [
  {name: "Rahman", score: 85},
  {name: "Karim", score: 60},
  {name: "Salam", score: 92}
];

for (var i = 0; i < ministers.length; i++) {
  if (ministers[i].score >= 80) {
    console.log(ministers[i].name + " is Excellent");
  } else {
    console.log(ministers[i].name + " needs improvement");
  }
}