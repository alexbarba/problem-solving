def beautifulTriplets(d, arr):
    count = 0

    for index, i in enumerate(arr):
        for j in arr[:index + 1]:
            if(i - j) == d:
                for k in arr[:index + 2]:
                    if((j - k) == d):
                        count+=1
                                    
    return count