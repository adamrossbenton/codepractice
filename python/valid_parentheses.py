# def is_valid_silly(string):
#     par_types = (
#         ("(",")"),
#         ("{","}"),
#         ("[","]")
#     )

#     for letter in range(len(string)):
#         print("==========NEW LETTER==========")
#         print("Letter: ", letter)
#         for par in range(len(par_types)):
#             print("par: ", par)
#             open = par_types[par][0]
#             close = par_types[par][1]
#             print("open: ", open)
#             print("close: ", close)
#             if string[letter] == open:
#                 if close not in string or string.index(close,letter,len(string)) < letter:
#                     return False
#                 else if string.index(close,letter,len(string)) < 
#                 else:
#                     print("===FOUND ONE===")
#                     print("letter index: ", letter)
#                     print("open index: ", par)
#                     print("close index: ", string.index(close, letter, len(string)))
#         print("=====END=====")
#     return True
                
def silly_string(string):
    par_types = (
        ("(",")"),
        ("{","}"),
        ("[","]")
    )

    # Iterate through given string
    for s in range(len(string)):
        # List the current letter index

        # Check if each type of bracket is present within string
        for par_index in range(len(par_types)):
            # Declare current bracket type, as well as two other bracket types
            open = par_types[par_index][0]
            open_alt_1 = par_types[par_index-1][0]
            open_alt_2 = par_types[par_index-2][0]
            close = par_types[par_index][1]
            close_alt_1 = par_types[par_index-1][1]
            close_alt_2 = par_types[par_index-2][1]
            
            # Check if current character is the open bracket type you're currently checking
            if string[s] == open:
                # Check to see if the appropriate close bracket appears after
                if close not in string[s:]:
                    return False
                else:
                    # Check to see if another bracket type opens within the current open bracket
                    if open_alt_1 in string[s:] and string.index(close,s) > string.index(open_alt_1,s):
                        # Check to see if the other bracket type closes properly within your current bracket (i.e. [{}] vs [{]})
                        if string.index(close,s) < string.index(close_alt_1,s):
                            return False
                        else:
                            continue
                    # Repeat for second alternate bracket type
                    if open_alt_2 in string[s:] and string.index(close,s) > string.index(open_alt_2,s):
                        if string.index(close,s) < string.index(close_alt_2,s):
                            return False
                        else:
                            continue
            
            # DO IT AGAIN IN REVERSE!
            # Check if current character is the close bracket type you're currently checking
            if string[s] == close:
                # Check to see if the appropriate open bracket appears before
                if open not in string[:s]:
                    return False

    return True
                
test1 = "{}()"
test2 = "(){[}]"
test3 = "]})"

print(silly_string(test1))
print(silly_string(test2))
print(silly_string(test3))