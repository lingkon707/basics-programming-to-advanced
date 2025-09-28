numbers = [-100, -50, -33, -20, 0, 10, 25, 50, 79, 80, 100]

# Find all numbers between -33 and 79 (inclusive)
result = [n for n in numbers if -33 <= n <= 79]

print("Numbers between -33 and 79:", result)
