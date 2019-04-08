

var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let results = [];
  let startRowIndex = 0;
  let endRowIndex = matrix.length - 1;
  let startColIndex = 0;
  let endColIndex = matrix[0].length - 1;
  
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    
    for (let i = startColIndex; i <= endColIndex; i += 1) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex += 1;
    
    for (let j = startRowIndex; j <= endRowIndex; j += 1) {
      results.push(matrix[j][endColIndex]);
    }
    
    endColIndex -= 1;
    
    if (startRowIndex <= endRowIndex) { // handles edge case for a matrix of 1 row
      for (let x = endColIndex; x >= startColIndex; x -= 1) {
        results.push(matrix[endRowIndex][x]);
      }
      endRowIndex -= 1;
    }
    
    if (startColIndex <= endColIndex) { // handles edge case for a matrix of 1 col
      for (let l = endRowIndex; l >= startRowIndex; l -= 1) {
        results.push(matrix[l][startColIndex])
      }
      startColIndex += 1;
    }
  }
  
  return results;
};