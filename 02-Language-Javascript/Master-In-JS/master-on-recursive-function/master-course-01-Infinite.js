function moneyBag(dollar) {
    console.log(dollar+ "$")

    moneyBag(dollar+100)
    //  moneyBag(dollar-100)
}

moneyBag(100)

// 100$
// 200$
// 300$
// 400$
// 500$
// 600$

// or 

// 100$
// 0$
// -100$
// -200$
// -300$
// -400$
// -500$