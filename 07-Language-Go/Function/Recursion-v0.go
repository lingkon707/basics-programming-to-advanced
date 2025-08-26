package main

import "fmt"

// Local variable
func local() {
    msg := "I am local"
    fmt.Println(msg)
}

// Recursion: countdown
func countdown(n int) {
    if n > 0 {
        fmt.Println(n)
        countdown(n - 1)
    }
}

func main() {
    local()
    countdown(5)
}
