package main
import "fmt"

func main() {
    ch := make(chan string)

    go func() {
        ch <- "Message from Goroutine"
    }()

    msg := <-ch
    fmt.Println(msg)
}
