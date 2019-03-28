/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci 
sequence, such that each number is the sum of the two preceding ones, starting 
from 0 and 1.
*/

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let nums = [0, 1];
  let counter = 2; 
  let temp;

  while (counter <= n) {
    temp = nums[0];
    nums[0] = nums[1];
    nums[1] = temp + nums[1];
    counter += 1;
  }
  return nums[1];
} 

