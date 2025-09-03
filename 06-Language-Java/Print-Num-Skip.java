public class PrintNumbersSkip {
    public static void main(String[] args) {
        for (int i = 10; i <= 20; i++) {
            // Skip 15, 17, 19
            if (i == 15 || i == 17 || i == 19) {
                continue; // Skip this iteration
            }
            System.out.println(i);
        }
    }
}