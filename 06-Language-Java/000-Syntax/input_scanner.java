// Chapter: Taking Input
import java.util.Scanner;

public class input_scanner {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = input.nextLine();
        System.out.println("Hello, " + name);
    }
}
