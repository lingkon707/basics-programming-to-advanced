#include <iostream>
using namespace std;

int main() {
    int num = 121, rev = 0, temp = num;

    while (temp > 0) {
        int digit = temp % 10;
        rev = rev * 10 + digit;
        temp /= 10;
    }

    if (rev == num)
        cout << "Palindrome" << endl;
    else
        cout << "Not a palindrome" << endl;

    return 0;
}
