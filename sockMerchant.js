function sockMerchant(n, ar) {
  const counter = (counts, actual) => ({ ...counts, [actual]: (counts[actual] || 0) + 1})
  const counts = ar.reduce(counter, {})
  
  const pairs = Object.values(counts).reduce((pairs, actual) => pairs + Math.floor(actual / 2), 0)
  
  return pairs
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
