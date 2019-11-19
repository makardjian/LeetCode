/*
I: a positive integer
O: 2D matrix representing numbers 1 to n^2
C: none
E: 
-if n = 0 then, return [];
-if n = 1, then return [[1]]

Plan:
    -determine square of n
    -create an n x n 2D matrix
    -use rowIndex and columnIndex variables to dictate spiral traversal
    -at each itteration, srategically place the correct numbers at specific indexes
    instead of using push and unshift
*/
var generateMatrix = function(n) {
  if (!n) return [];
  if (n === 1) return [[1]];
  // you could use Math.pow(n, 2) here but what is more readable for other engineers? n * n
  const nSquared = n * n;
  // use the spread operator to create a 2D n x n matrix of undefined elements
  const result = [...Array(n)].map(() => [...Array(n)]);

  let startRowIndex = 0;
  let endRowIndex = n - 1;
  let startColIndex = 0;
  let endColIndex = n - 1;
  // using a counter is more efficient than an array where you would pop
  // off elements until the array is empty.
  let counter = 1;
  
  while (counter <= nSquared) {
      for (let i = startColIndex; i <= endColIndex; i += 1) {
          result[startRowIndex][i] = counter++;
      }
      startRowIndex += 1;

      for (let j = startRowIndex; j <= endRowIndex; j += 1) {
          result[j][endRowIndex] = counter++;
      }
      endColIndex -= 1;

      if (counter - 1 === nSquared) return result;

      for (let k = endColIndex; k >= startColIndex; k -= 1) {
          result[endRowIndex][k] = counter++;
      }
      endRowIndex -= 1;

      for (let z = endRowIndex; z >= startRowIndex; z -= 1) {
          result[z][startColIndex] = counter++;
      }
      startColIndex += 1;
  }
  return result;
};
