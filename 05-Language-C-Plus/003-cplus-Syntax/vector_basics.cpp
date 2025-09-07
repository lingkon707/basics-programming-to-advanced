#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3};
    numbers.push_back(4);

    for (int n : numbers) {
        cout << n << " ";
    }
    return 0;
}
