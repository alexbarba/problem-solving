const splitInTwo = (num) => {
  const word = num.toString()
  const half = Math.floor(word.length / 2)

  if (word.length === 1) {
    return [word, 0];
  }

  return [word.slice(0, half), word.slice(half )];
};

const isKaprekar = num => {
  const splitted = splitInTwo(num**2);
  
  return Number(splitted[0]) + Number(splitted[1]) === num
}; 

function kaprekarNumbers(p, q) {
    const nums = []
    for(let i = p; i<=q; i++){
        if(isKaprekar(i)){
            nums.push(i)
        }
    }
    if(nums.length > 0){
        console.log(nums.join(' '))
    }
    else {
        console.log("INVALID RANGE")
    }
}