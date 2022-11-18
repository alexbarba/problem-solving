const shuffleString = (chars='') =>
  chars.split('').sort(() => Math.random() - 0.5).join('');

const passwordGenerator = (length = 12) => {
  let password = '';
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '^$*.[]{}()?"!@#%&/\\,><\':;|_~`=+-';
  const numbers = '0123456789';
  
  // 1 / 4 of password are numbers
  password += shuffleString(numbers).substring(0, length / 4);

  // 1 / 4 of password are capital letters
  password += shuffleString(capitalLetters).substring(0, length / 4);

  // 1 / 4 of password are symbols
  password += shuffleString(symbols).substring(0, length / 4);
  
  // the rest of password are lower letters
  password += shuffleString(lowerCaseLetters).substring(0, length - password.length);

  return shuffleString(password);
};

export default passwordGenerator