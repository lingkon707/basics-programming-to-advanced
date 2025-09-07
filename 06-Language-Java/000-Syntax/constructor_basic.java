// Chapter: Constructor
public class constructor_basic {
    int value;

    constructor_basic() {
        value = 100;
    }

    public static void main(String[] args) {
        constructor_basic obj = new constructor_basic();
        System.out.println(obj.value);
    }
}
