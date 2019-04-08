/*
Example 1:

Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4

Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, 
fill it row by row by using the previous list.
*/

var matrixReshape = function(nums, r, c) {
  let targetCells = r * c;
  let currentCells = nums[0].length * nums.length;
  if (targetCells !== currentCells) return nums;
  let result = [];
  
  let allNums = [];
  nums.forEach(row => {
    allNums = allNums.concat(row);
  });
  
  for (let i = 0; i < r; i += 1) {
    let row = allNums.slice(0, c);
    allNums = allNums.slice(c);
    result.push(row);
  }
  
  return result; 
};

