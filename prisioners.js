function saveThePrisoner(prisioners, sweets, start) {
  const temp = sweets % prisioners + start - 1
    if(temp % prisioners === 0) return prisioners
    return temp % prisioners 
}


const case1 = saveThePrisoner(353972922, 573651462, 244520504)

// 110226121 expected
console.log(case1)