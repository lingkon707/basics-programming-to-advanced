package main
import "fmt"

func main() {
    person := map[string]string{
        "name": "Lingkon",
        "city": "Dhaka",
    }
    fmt.Println(person["name"])
    fmt.Println(person["city"])
}
