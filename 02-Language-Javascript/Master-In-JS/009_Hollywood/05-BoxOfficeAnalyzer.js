// Concept: function + loop + condition (important)

function hitOrFlop(collections) {
  for (var i = 0; i < collections.length; i++) {
    console.log(collections[i] > 300 ? "Hit Movie" : "Flop Movie");
  }
}

hitOrFlop([150, 420, 280]);