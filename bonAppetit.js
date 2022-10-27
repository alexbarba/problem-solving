function bonAppetit(bill, k, b) {
  const add = (accumulator, actual) => accumulator + actual
  
  const filtered = bill
    .filter((_, index) => index !== k)
  
  const sum = filtered.reduce(add, 0)
  
  return (b - sum) / 2 || 'Bon Appetit'
}

const k = 1

const bill = [3, 10, 2, 9]

const b = 7

bonAppetit(bill, k, b)