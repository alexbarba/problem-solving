import math

def pageCount(n, p):
    if(n == p):
        return 0
    m = min(n - p, p)
    count = math.floor(m / 2)
    if(m == n - p and n % 2 == 0):
        count+=1
    return count

print(pageCount(83246,78132))
