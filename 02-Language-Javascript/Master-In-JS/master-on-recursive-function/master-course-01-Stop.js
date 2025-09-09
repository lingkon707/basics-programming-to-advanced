// moneyBag.js
function moneyBag(dollar) {

    console.log(dollar + "$"); // printing

    if (dollar >= 500) { // stop recursion in 500
        return;
    }

    moneyBag(dollar + 100); // recursion cycle
}

moneyBag(100);
