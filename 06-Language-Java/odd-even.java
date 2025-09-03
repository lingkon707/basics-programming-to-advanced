public class OddEven {
    public static void main(String[] args) {
        int number = 7; // you can change this number
        String result;

        if (number % 2 == 0) {
            result = "even";
        } else {
            result = "odd";
        }

        System.out.println(number + " is " + result + ".");
    }
}