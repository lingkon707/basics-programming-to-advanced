package main

import "fmt"

func main() {
    // Create a slice
    numbers := []int{1001, 1002, 1003, 1004, 1005}
    fmt.Println("Original slice:", numbers)

    // 1️⃣ Access slice elements
    fmt.Println("First element:", numbers[0])
    fmt.Println("Third element:", numbers[2])

    // 2️⃣ Change slice elements
    numbers[1] = 2002
    fmt.Println("After change:", numbers)

    // 3️⃣ Append elements
    numbers = append(numbers, 3003, 4004)
    fmt.Println("After append:", numbers)

    // 4️⃣ Copy slice
    copied := make([]int, len(numbers)) // create slice with same length
    copy(copied, numbers)              // copy into new slice
    fmt.Println("Copied slice:", copied)

    // 5️⃣ Prove independence (change original, copied remains same)
    numbers[0] = 9999
    fmt.Println("After modifying original:", numbers)
    fmt.Println("Copied remains:", copied)
}
