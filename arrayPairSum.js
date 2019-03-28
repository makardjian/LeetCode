var arrayPairSum = function(nums) {
  if (nums.length === 0) return [];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  
  let current, next, sum;
  let result = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    current = nums[i];
    next = nums[i + 1];
    sum = Math.min(current, next);
    result += sum;
  }
  return result;
};
