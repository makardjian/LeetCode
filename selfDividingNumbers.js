/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing 
number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

var selfDividingNumbers = function(left, right) {
  let result = [];
  if (left <= 9) {
    for (let i = left; i <= 9; i += 1) {
      result.push(i);
    }
  }
  let start = Math.max(left, 10);
  for (let i = start; i <= right; i += 1) {
    let flag = true;
    let str = String(i);
    for (let digit of str) {
      digit = Number(digit);
      if (digit === 0 || i % digit !== 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) result.push(i);
  }
  return result;
};