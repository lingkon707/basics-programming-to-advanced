// Chapter: Inheritance
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

public class inheritance_simple extends Animal {
    public static void main(String[] args) {
        inheritance_simple dog = new inheritance_simple();
        dog.sound();
    }
}
