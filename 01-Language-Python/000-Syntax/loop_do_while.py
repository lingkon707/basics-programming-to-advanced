# loop_do_while.py
# Python doesn’t have do-while, simulate with while True and break

i = 1
while True:
    print("i =", i)
    i += 1
    if i > 3:
        break
