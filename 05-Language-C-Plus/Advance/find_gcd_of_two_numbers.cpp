#include <iostream>
using namespace std;

int main() {
    int a = 36, b = 60;
    int gcd = 1;

    for (int i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0)
            gcd = i;
    }

    cout << "GCD = " << gcd << endl;
    return 0;
}
