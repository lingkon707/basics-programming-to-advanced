#include <iostream>
using namespace std;

int main() {
    int num = 12345;
    int count = 0;

    while (num != 0) {
        num /= 10;
        count++;
    }

    cout << "Number of digits = " << count << endl;
    return 0;
}
