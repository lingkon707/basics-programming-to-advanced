#include <iostream>
using namespace std;

int main() {
    char ch = 'a';

    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        cout << "Vowel" << endl;
    } else {
        cout << "Consonant" << endl;
    }

    return 0;
}
