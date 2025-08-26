package main

import "fmt"

// Function with parameters
func greet(name string, age int) {
    fmt.Println("Hello,", name, "- you are", age, "years old.")
}

func main() {
    // Calling function with arguments
    greet("Lingkon", 23)
    greet("Kamal", 30)
    greet("Sara", 19)
}
