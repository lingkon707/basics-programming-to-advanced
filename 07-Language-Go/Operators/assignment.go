package main

import "fmt"

func main() {
    x := 1234
    fmt.Println("Start: x =", x)

    // Basic Assignment
    x = 1234
    fmt.Println("=  : x =", x)

    // Add and Assign
    x += 567
    fmt.Println("+= : x =", x) // 1234 + 567

    // Subtract and Assign
    x -= 200
    fmt.Println("-= : x =", x) // previous - 200

    // Multiply and Assign
    x *= 2
    fmt.Println("*= : x =", x)

    // Divide and Assign
    x /= 3
    fmt.Println("/= : x =", x)

    // Modulus and Assign
    x %= 1000
    fmt.Println("%= : x =", x)

    // Reset x for bitwise examples
    x = 4096
    fmt.Println("\nBitwise assignments start: x =", x)

    // Bitwise AND and Assign
    x &= 1023
    fmt.Println("&= : x =", x)

    // Bitwise OR and Assign
    x |= 2048
    fmt.Println("|= : x =", x)

    // Bitwise XOR and Assign
    x ^= 512
    fmt.Println("^= : x =", x)

    // Right shift and Assign
    x = 8192
    x >>= 4
    fmt.Println(">>= : x =", x)

    // Left shift and Assign
    x = 1234
    x <<= 2
    fmt.Println("<<= : x =", x)
}
