const jumpingOnClouds = (c) => {
  let count = 0;
  let actual = 0;
  while (actual < c.length - 1) {
    if (c[actual + 2] === 0) actual += 2;
    else actual+=1;
    
    count++;
  }
  
  return count;
};

