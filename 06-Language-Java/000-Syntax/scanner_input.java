// Chapter: Scanner Input
import java.util.Scanner;

public class scanner_input {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = input.nextInt();
        System.out.println("Your age is " + age);
    }
}
