def lcp_brute(strs):
    lcp = ""
    shortest = len(min(strs, key=len))
    for i in range(shortest):
        testchar = strs[0][i]
        same = True
        for s in strs:
            if s[i] != testchar:
                same = False
        if same:
            lcp += testchar
        else:
            break
    return lcp

samp_strs_1 = [
    "flow",
    "flower",
    "flight",
]

samp_strs_2 = [
    "cir",
    "car"
]

samp_strs_3 = [
    "bingus",
    "stingus"
]

print(lcp_brute(samp_strs_1))
print(lcp_brute(samp_strs_2))
print(lcp_brute(samp_strs_3))