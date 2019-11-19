/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the 
matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  const results = [];
  let startRowIndex = 0;
  let endRowIndex = matrix.length - 1;
  let startColIndex = 0;
  let endColIndex = matrix[0].length - 1;
  const totalElements = ((matrix.length) * (matrix[0].length));
  
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    
    for (let i = startColIndex; i <= endColIndex; i += 1) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex += 1;
    
    for (let j = startRowIndex; j <= endRowIndex; j += 1) {
      results.push(matrix[j][endColIndex]);
    }
    
    endColIndex -= 1;

    // guard against traversal backwards traversal on a row or column
    if (totalElements === results.length) return results;
    
    for (let x = endColIndex; x >= startColIndex; x -= 1) {
      results.push(matrix[endRowIndex][x]);
    }
    endRowIndex -= 1;
    
    for (let l = endRowIndex; l >= startRowIndex; l -= 1) {
      results.push(matrix[l][startColIndex])
    }
    startColIndex += 1;
  }
  
  return results;
};