const arrayPairSum = (nums) => {
  if (nums.length === 0) return [];
  const sortedNums = nums.sort((a, b) => a - b);

  let current = null;
  let next = null;
  let sum = null;
  let result = 0;
  for (let i = 0; i < sortedNums.length - 1; i += 2) {
    current = nums[i];
    next = nums[i + 1];
    sum = Math.min(current, next);
    result += sum;
  }
  return result;
};

export default arrayPairSum;
