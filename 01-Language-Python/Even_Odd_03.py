# Separate even and odd numbers


numbers = [10, 15, 20, 25, 30, 35]

evens = [n for n in numbers if n % 2 == 0]
odds  = [n for n in numbers if n % 2 != 0]

print("Even numbers:", evens)
print("Odd numbers:", odds)

