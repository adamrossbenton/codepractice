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