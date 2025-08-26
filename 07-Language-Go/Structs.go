package main
import "fmt"

type Person struct {
    name string
    age  int
}

func main() {
    p1 := Person{name: "Lingkon", age: 23}
    fmt.Println(p1.name, p1.age)
}
