const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
}

const timeInWords = (hour, minutes) => {
  const hourInWords = numbers[hour]
  
  if (minutes === 0) {
    return `${hourInWords} o' clock`
  }

  if (minutes === 15) {
    return `quarter past ${hourInWords}`
  }

  if (minutes === 30) {
    return `half past ${hourInWords}`
  }

  if (minutes === 45) {
    return `quarter to ${numbers[hour + 1]}`
  }

  if (minutes < 30) {
    return `${numbers[minutes]} minute${minutes > 1 ? 's' : ''} past ${hourInWords}`
  }

  if (minutes > 30) {
    return `${numbers[60 - minutes]} minute${60 - minutes > 1 ? 's' : ''} to ${numbers[hour + 1]}`
  }
}