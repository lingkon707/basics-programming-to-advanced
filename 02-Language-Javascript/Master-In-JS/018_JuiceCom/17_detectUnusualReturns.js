// Flag products with unusually high return rates.
var product = "Orange Juice";
var delivered = 500;
var returned = 65;
var returnRate;

if (delivered > 0 && returned >= 0 && returned <= delivered) {
    returnRate = returned / delivered * 100;
    console.log("Return Rate: " + returnRate + "%");
    if (returnRate > 5) {
        console.log("Action: Inspect Product Quality");
    }
} else {
    console.log("Invalid Return Data");
}