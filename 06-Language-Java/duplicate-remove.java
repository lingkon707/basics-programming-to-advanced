import java.util.*;

public class RemoveDuplicateNames {
    public static void main(String[] args) {
        String names = "Rahim Karim Rahim Sumon Karim Anika Sumon";

        // Split and remove duplicates
        String[] arr = names.split(" ");
        LinkedHashSet<String> set = new LinkedHashSet<>(Arrays.asList(arr));

        // Join back into a string
        String result = String.join(" ", set);

        System.out.println("Without duplicates: " + result);
    }
}