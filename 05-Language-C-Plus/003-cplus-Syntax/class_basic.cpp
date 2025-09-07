#include <iostream>
using namespace std;

class Car {
public:
    void drive() {
        cout << "Driving a car!" << endl;
    }
};

int main() {
    Car myCar;
    myCar.drive();
    return 0;
}
