/*
Given an array A of non-negative integers, 
return an array consisting of all the even elements of A, 
followed by all the odd elements of A.

You may return any answer array that satisfies this condition.
*/


var sortArrayByParity = function(A) {
  let evens = [];
  let odds = [];
  
  A.forEach(ele => {
      if (ele % 2 === 0) {
          evens.push(ele)
      } else {
          odds.push(ele);
      }
  });
  return evens.concat(odds);
};
