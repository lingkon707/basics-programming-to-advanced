function moneyBag(dollar) {
    console.log(dollar + "$"); 

    if (dollar > 800) { 
        return;
    }

    moneyBag(dollar + 201); 
}

moneyBag(200);


// 200$
// 401$
// 602$
// 803$ - Check-happens-after-printing. ok , don't mislead

// === Code Execution Successful ===


// print --> condition check (jodi false) --> call

// print --> condition check (jodi true) --> stop recursion