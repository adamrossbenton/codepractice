from math import floor

def isPalindromeSlow(x):
    x_str = str(x)
    for i in range(floor(len(x_str)/2)):
        if x_str[i] != x_str[-i-1]:
            return False
        else:
            continue
    return True

def isPalindromeFaster(x):
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
    
    reverted_number = 0
    while x > reverted_number:
        reverted_number = floor(reverted_number * 10 + (x % 10))
        x = floor(x/10)
    
    print(x)
    print(reverted_number)
    print(reverted_number/10)

    return (x == reverted_number or x == floor(reverted_number/10))

print(isPalindromeFaster(121))