package main

import "fmt"

func main() {
    x := 10
    y := 3

    fmt.Println("x =", x, "y =", y)

    // Arithmetic Operators
    fmt.Println("Addition (+):", x+y)         // 10 + 3 = 13
    fmt.Println("Subtraction (-):", x-y)      // 10 - 3 = 7
    fmt.Println("Multiplication (*):", x*y)   // 10 * 3 = 30
    fmt.Println("Division (/):", x/y)         // 10 / 3 = 3 (integer division)
    fmt.Println("Modulus (%):", x%y)          // 10 % 3 = 1

    // Increment / Decrement
    x++ // increases x by 1
    fmt.Println("Increment (x++):", x)        // 11

    y-- // decreases y by 1
    fmt.Println("Decrement (y--):", y)        // 2
}
