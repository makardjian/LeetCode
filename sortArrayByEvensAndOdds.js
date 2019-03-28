/*
Given an array A of non-negative integers, half of the integers in A are odd, 
and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.
*/ 

var sortArrayByParityII = function(A) {
  if (!A.length) return A;
  let odds = [];
  let evens = [];
  let result = [];
  A.forEach(num => {
    if (num % 2 === 0) evens.push(num);
    else odds.push(num);
  });
  for (let i = 0; i < A.length; i += 1) {
    if (i % 2 === 0) result.push(evens.pop());
    else result.push(odds.pop());
  }
  return result;
};
