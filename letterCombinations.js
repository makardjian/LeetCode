/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.
*/

const letterCombinations = (digits) => {
  const digitsObj = { '1': '', '2': 'abc', '3': 'def', '4': 'ghi',
                       '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv',
                       '9': 'wxyz', 0: '' };

  let result = [];
  const traverse = (arr, combo = '') => {
      if (!arr.length) {
          result.push(combo);
          return;
      }
      let newArr = arr.slice(1);

      for (let i = 0; i < arr[0].length; i += 1) {
          traverse(newArr, combo + arr[0][i])
      }
  }
  traverse(digits.split('').map(digit => digitsObj[digit].split('')));
  return result;
}