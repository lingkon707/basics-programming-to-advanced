import java.util.Arrays;

public class MinMaxArray {
    public static void main(String[] args) {
        int[] arr = {12, 45, 2, 67, 34, 89, 1};

        Arrays.sort(arr);

        System.out.println("Smallest: " + arr[0]);
        System.out.println("Largest: " + arr[arr.length - 1]);
    }
}