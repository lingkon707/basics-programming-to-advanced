package main

import "fmt"

func main() {
    num := 4500

    // 1️⃣ if
    if num > 4000 {
        fmt.Println("if: num is greater than 4000")
    }

    // 2️⃣ if ... else
    if num%2 == 0 {
        fmt.Println("else: num is even")
    } else {
        fmt.Println("else: num is odd")
    }

    // 3️⃣ if ... else if ... else
    if num < 1000 {
        fmt.Println("else if: num is less than 1000")
    } else if num < 3000 {
        fmt.Println("else if: num is between 1000 and 3000")
    } else {
        fmt.Println("else if: num is 3000 or more")
    }

    // 4️⃣ switch
    day := 3
    switch day {
    case 1:
        fmt.Println("switch: Monday")
    case 2:
        fmt.Println("switch: Tuesday")
    case 3:
        fmt.Println("switch: Wednesday")
    case 4:
        fmt.Println("switch: Thursday")
    case 5:
        fmt.Println("switch: Friday")
    default:
        fmt.Println("switch: Weekend")
    }
}
