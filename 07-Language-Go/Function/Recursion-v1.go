package main

import "fmt"

// Local variable example
func localExample() {
    message := "I am only inside this function"
    fmt.Println(message)
}

// Recursion example: count down from n to 1
func countDown(n int) {
    if n == 0 { // base case
        return
    }
    fmt.Println(n)
    countDown(n - 1) // recursive call
}

func main() {
    fmt.Println("Local variable demo:")
    localExample()
    // fmt.Println(message) // ❌ Error: 'message' is local to the function

    fmt.Println("\nRecursion demo (count down):")
    countDown(5)
}
