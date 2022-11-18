function migratoryBirds(arr) {
  let max = 0
  const sums = arr.reduce((sums, actual) => {
      const count = (sums[actual] || 0) + 1
      if(count > max){
        max = count
      }
      return { ...sums, [actual]: count }
  }, {})
      
  const res = Object.entries(sums).reduce((min, [key, value]) =>{
      if(max != value)
          return min
      
      
      if(!min || value < min)
          return Number(key)
      
      
      return min
  }, null)
  
  return res
}