#include <iostream>
using namespace std;

int main() {
    int num = 1234;
    int sum = 0;

    while (num > 0) {
        sum += num % 10;
        num /= 10;
    }

    cout << "Sum of digits = " << sum << endl;
    return 0;
}
