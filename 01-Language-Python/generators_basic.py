def my_generator():
    yield 1
    yield 2
    yield 3

for val in my_generator():
    print(val)
