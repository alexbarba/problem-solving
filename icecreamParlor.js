function icecreamParlor(m, arr) {
  return arr.reduce((nums, actual, index) => {
      const j = arr.slice(index + 1).findIndex((value) => 
          actual + value === m
      )
      
      if(j >= 0){
          const solution = `${index + 1} ${index + j + 2}`
          return [...nums, solution]
      }
      return nums
  }, [])
}