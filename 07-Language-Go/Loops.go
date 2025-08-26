package main
import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println("Count:", i)
    }

    nums := []int{10, 20, 30}
    for index, value := range nums {
        fmt.Println(index, value)
    }
}
