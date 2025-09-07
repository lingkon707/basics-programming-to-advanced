#include <iostream>
using namespace std;

void swap(int &x, int &y) {
    int temp = x;
    x = y;
    y = temp;
}

int main() {
    int a = 3, b = 7;

    swap(a, b);

    cout << "After swap: a = " << a << ", b = " << b << endl;
    return 0;
}
