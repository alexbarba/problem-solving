function balancedSums(arr) {
  let memoPrev = 0;
  let memoNext = arr.reduce((sum, x) => sum + x, 0);
  const some = arr.some((x, index) => {

    if(index!==0)
        memoPrev += arr[index - 1];
    memoNext -= x;

    return memoPrev === memoNext;
  });

  return some ? 'YES' : 'NO';
}