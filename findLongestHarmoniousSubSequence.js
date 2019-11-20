/*
We define a harmounious array as an array where the difference between its 
maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its 
longest harmonious subsequence among all its possible subsequences.

The subsequence does not need to be continuous.

Example 1:

Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 

Note: The length of the input array will not exceed 20,000.
*/


const findLHS = function(nums) {
  if (nums.length <= 1) return 0;
  let max = 0;
  const map = new Map();
  nums.forEach(num => {
      map.set(num, (map.get(num) || 0) + 1);
  });
  for (let int of map.keys()) {
      let temp;
      if (map.has(int + 1)) temp = map.get(int + 1) + map.get(int);
      else continue;
      max = Math.max(temp, max);
  }
  return max;
};
