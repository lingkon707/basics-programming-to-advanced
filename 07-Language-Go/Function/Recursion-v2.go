package main

import "fmt"

// 1️⃣ Local Variable Example
func localExample() {
    message := "I am a local variable" // local to this function
    fmt.Println(message)
}

// 2️⃣ Recursion Example: Factorial
func factorial(n int) int {
    if n == 0 || n == 1 {
        return 1
    }
    return n * factorial(n-1) // recursive call
}

func main() {
    // Local variable demo
    localExample()
    // fmt.Println(message) // ❌ This will cause an error because message is local to localExample()

    // Recursion demo
    num := 5
    fmt.Println("Factorial of", num, "is", factorial(num))

    // Another recursion example: Sum of first n numbers
    n := 10
    fmt.Println("Sum of first", n, "numbers is", sum(n))
}

// Recursive function to calculate sum of first n numbers
func sum(n int) int {
    if n == 0 {
        return 0
    }
    return n + sum(n-1)
}
