/*
Given a non-negative index k where k ≤ 33, return the kth 
index row of the Pascal's triangle.

Note that the row index starts from 0.
*/

var getRow = function(rowIndex) {
  const triangle = [[1], [1, 1]];
  if (rowIndex === 0) return triangle[0];
  if (rowIndex === 1) return triangle[1];
  let currentRow = 1;
  const buildRow = () => {
    let base = triangle[triangle.length - 1];
    let temp = [1];
    for (let i = 0; i < base.length - 1; i += 1) {
      let newVal = base[i] + base[i + 1];
      temp.push(newVal);
    }
    temp.push(1);
    triangle.push(temp);
  }
  
  while (currentRow < rowIndex) {
    buildRow();
    currentRow += 1;
  }
  return triangle[triangle.length - 1]; 
};
