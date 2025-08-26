package main

import "fmt"

func main() {
    x := true
    y := false

    fmt.Println("x =", x, "y =", y)

    // Logical AND (&&)
    fmt.Println("x && y =", x && y) // true && false → false

    // Logical OR (||)
    fmt.Println("x || y =", x || y) // true || false → true

    // Logical NOT (!)
    fmt.Println("!x =", !x) // !true → false
    fmt.Println("!y =", !y) // !false → true
}
