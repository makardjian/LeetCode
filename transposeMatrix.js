/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

 

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
*/

var transpose = function(A) {
  let result = [];
  let column = 0;
  
  while (column < A[0].length) {
    let temp = [];
    for (let i = 0; i < A.length; i += 1) {
      temp.push(A[i][column]);
    }
    result.push(temp);
    column += 1;
  }
  
  return result;
};
