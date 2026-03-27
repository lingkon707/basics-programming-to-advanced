var rules = [
    "No food inside lab",
    "Maintain silence",
    "Handle equipment carefully"
];

function showRules() {
    for (var i = 0; i < rules.length; i++) {
        console.log((i + 1) + ". " + rules[i]);
    }
}

showRules();