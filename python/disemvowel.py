# This works, but it's ugly
def disemvowel(str):
    vowels = "AEIOUaeiou"
    for ltr in vowels:
        str = str.replace(ltr,"")
    return str

print(disemvowel("This website is for losers LOL!"))

# Cool way using regex

import re

def dis_regex(str):
    return re.sub("[aeiou]","",str, flags = re.IGNORECASE)
    # First arg: look for
    # Second arg: replace with
    # Third arg: string on which to perform this
    # 4th arg: any other cool stuff
        # added IGNORECASE flag
        # don't have to search for AEIOUaeiou

print(dis_regex("This website is for losers LOL!"))