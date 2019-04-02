/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
  let result = [];
  
  let newNums = [...nums].sort((a, b) => {
    return a - b;
  });
  
  let leftIndex = 0;
  let rightIndex = newNums.length - 1;
  
  while (leftIndex < rightIndex) {
    let sum = newNums[leftIndex] + newNums[rightIndex];
    if (sum === target) {
      
      for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === newNums[leftIndex]) {
          result.push(i);
          continue;
        }
        if (nums[i] === newNums[rightIndex]) {
          result.push(i);
        }
      }
      
      return result;
      
    } else if (sum < target) {
      leftIndex += 1;
    } else {
      rightIndex -= 1;
    }
  }
};