#include <iostream>
using namespace std;

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += nums[i];
    }

    cout << "Sum = " << sum << endl;

    return 0;
}
