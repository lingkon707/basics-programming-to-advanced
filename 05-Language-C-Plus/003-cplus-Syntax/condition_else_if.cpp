#include <iostream>
using namespace std;

int main() {
    int score = 75;

    if (score > 90)
        cout << "Grade A" << endl;
    else if (score > 60)
        cout << "Grade B" << endl;
    else
        cout << "Fail" << endl;

    return 0;
}
