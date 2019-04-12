/*
Given an absolute path for a file (Unix-style), simplify it. Or in other words, 
convert it to the canonical path.

Example 1:

Input: "/home/"
Output: "/home"

Example 2:

Input: "/a/./b/../../c/"
Output: "/c"
*/

const findPath = (str) => {
  let steps = str.split('/').filter(ele => {
      return (ele !== '.' && ele !== '');
  });
  
  let result = [];
  
  for (let i = 0; i < steps.length; i += 1) {
      if (steps[i] !== '..') {
          result.push(steps[i]);
      } else {
          result.pop();
      }
  }
  
  let finalResult = '/' + result.join('/');
  return finalResult;
}
