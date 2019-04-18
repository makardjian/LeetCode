/*
We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: 
changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, 
and the score of the matrix is the sum of these numbers.

Return the highest possible score.

Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
*/

/*
Brute Force:

The trick is knowing that you get different results if you run the columnLogic then the rowLogic
than if you run the rowLogic then the columnLogic.

So you must make two copies of the input array and test both cases then return the maximum 
of these two cases. 
*/
var matrixScore = function(A) {
  if (!A.length || !A[0].length) return 0;
  
  const toggleColumn = (matrix, colIndex) => {
    for (let i = 0; i < matrix.length; i += 1) {
       if (matrix[i][colIndex] === 0) matrix[i][colIndex] = 1;
       else matrix[i][colIndex] = 0;
    }
  }
  
  const calculateBinary = (arr) => {
    let newArr = arr.slice();
    if (newArr.length === 0) return 0;
    newArr.reverse();
    sum = 0;
    for (let i = 0; i < newArr.length; i += 1) {
      sum += newArr[i] * (2**i);
    }
    return sum;
  }
  
  const columnLogic = (matrix) => {
    let column = 0;
    while (column < matrix[0].length) {
      let zeros = 0;
      let ones = 0;
      for (let i = 0; i < matrix.length; i += 1) {
        if (matrix[i][column] === 1) ones += 1;
        else zeros += 1;
    }
    if (zeros > ones) toggleColumn(matrix, column);
    column += 1;
    }   
  }

  const rowLogic = (matrix) => {
    for (let i = 0; i < matrix.length; i += 1) {
      let rowScore = calculateBinary(matrix[i]);
      let toggledRow = matrix[i].map(ele => {
        if (ele === 0) return 1; 
        else return 0; 
      });
      let toggledRowScore = calculateBinary(toggledRow);
      if (toggledRowScore > rowScore) matrix[i] = toggledRow;
    }
  }

  let matrix1 = A.map(row => [...row])
  let matrix2 = A.map(row => [...row]);

  columnLogic(matrix1);
  rowLogic(matrix1);
  let test1Score = matrix1.reduce((acc,row) => {
    return acc + calculateBinary(row);
  }, 0);

  rowLogic(matrix2);
  columnLogic(matrix2);
  let test2Score = matrix2.reduce((acc,row) => {
    return acc + calculateBinary(row);
  }, 0);

  return Math.max(test1Score, test2Score); 
};


/*
Optimized: Once you realize that no matter what, the first index of every row should always be 1, 
even if all the other numbers in that row need to equal 0. Then you can itterate through the matrix
and change all the first values to 1, and then run columnLogic to output the correct number.

*/
var matrixScore = function(A) {
  if (!A.length || !A[0].length) return 0;
  
  const toggleColumn = (matrix, colIndex) => {
    for (let i = 0; i < matrix.length; i += 1) {
       if (matrix[i][colIndex] === 0) matrix[i][colIndex] = 1;
       else matrix[i][colIndex] = 0;
    }
  }
  
  const calculateBinary = (arr) => {
    let newArr = arr.slice();
    if (newArr.length === 0) return 0;
    newArr.reverse();
    sum = 0;
    for (let i = 0; i < newArr.length; i += 1) {
      sum += newArr[i] * (2**i);
    }
    return sum;
  }
  
  const toggleRow = (row) => {
    return row.map(ele => {
      if (ele === 1) return 0;
      else return 1;
    });
  }
  
  const columnLogic = (matrix) => {
    let column = 0;
    while (column < matrix[0].length) {
      let zeros = 0;
      let ones = 0;
      for (let i = 0; i < matrix.length; i += 1) {
        if (matrix[i][column] === 1) ones += 1;
        else zeros += 1;
    }
    if (zeros > ones) toggleColumn(matrix, column);
    column += 1;
    }   
  }
  
  for (let i = 0; i < A.length; i+= 1) {
    if (A[i][0] === 0) A[i] = toggleRow(A[i]);
  }
  
  columnLogic(A);
  return A.reduce((acc, row) => {
    return acc + calculateBinary(row);
  }, 0);
};