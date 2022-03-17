def is_isogram(str):
    if str == "":
        return True
    else:
        ltrs = str[0].lower()
        for c in range(1,len(str)):
            if str[c].lower() in ltrs:
                return False
            else:
                ltrs += str[c].lower()
    return True

print(is_isogram("Dermatoglyphics"))
print(is_isogram("isogram"))
print(is_isogram("aba"))
print(is_isogram("moOse"))

# Way more elegant way to do this: use set(str)
# Turns string into a set of chars found in string
# Check if the string and its set are same length

def is_iso_better(str):
    return len(str) == len(set(str.lower()))

print(is_iso_better("Dermatoglyphics"))
print(is_iso_better("isogram"))
print(is_iso_better("aba"))
print(is_iso_better("moOse"))