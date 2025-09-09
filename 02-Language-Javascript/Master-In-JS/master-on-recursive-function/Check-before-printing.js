function moneyBag(dollar) {
    if (dollar > 800) { 
        return; // stop before printing
    }

    console.log(dollar + "$"); // printing
    moneyBag(dollar + 201); 
}

moneyBag(200);
