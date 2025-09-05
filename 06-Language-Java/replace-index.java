public class ReplaceIndex {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50, 60, 70};

        System.out.println("Before: " + java.util.Arrays.toString(arr));

        // Replace value at index 5 (6th element)
        arr[5] = 999;

        System.out.println("After:  " + java.util.Arrays.toString(arr));
    }
}