#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x;

    cout << "Value via pointer: " << *ptr << endl;
    return 0;
}
