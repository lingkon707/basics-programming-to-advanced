// Identify unavailable shoe sizes.

var sizes = [36, 37, 38, 40, 41, 43];
var expectedSizes = [36, 37, 38, 39, 40, 41, 42, 43];
var i, j, found;

for (i = 0; i < expectedSizes.length; i++) {
    found = false;
    for (j = 0; j < sizes.length; j++) {
        if (expectedSizes[i] === sizes[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Missing Size: " + expectedSizes[i]);
    }
}