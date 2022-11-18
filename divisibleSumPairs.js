function divisibleSumPairs(n, k, ar) {
  return ar.reduce((res, a, i) => {
      const numsDivisiblesByK = ar.slice(i+1).filter(
          (b) => (a+b)%k === 0
      )
      
      if(numsDivisiblesByK.length >= 0){
          return res+numsDivisiblesByK.length
      }
      return res
  }, 0)
}