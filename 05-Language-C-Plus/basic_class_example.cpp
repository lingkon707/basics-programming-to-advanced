#include <iostream>
using namespace std;

class Person {
public:
    void sayHello() {
        cout << "Hello, I am a person." << endl;
    }
};

int main() {
    Person p;
    p.sayHello();
    return 0;
}
