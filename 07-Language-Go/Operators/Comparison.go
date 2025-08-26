// go run main.go

package main
import "fmt"

func main() {
    a := 10
    b := 20

    fmt.Println("a =", a, "b =", b)

    fmt.Println("Less than (<):", a < b)
    fmt.Println("Less than or equal (<=):", a <= b)
    fmt.Println("Greater than (>):", a > b)
    fmt.Println("Greater than or equal (>=):", a >= b)
    fmt.Println("Equal to (==):", a == b)
    fmt.Println("Not equal to (!=):", a != b)
}

