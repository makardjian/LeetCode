/*
Given a non-empty binary tree, return the average value of the nodes 
on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. 
Hence return [3, 14.5, 11].
*/

const averageOfLevels = (root) => {
  if (!root) return 0;
  const results = [];
  const q = [root];

  while (q.length) {
    let sum = 0;
    const qLength = q.length;
    for (let i = 0; i < qLength; i += 1) {
      const current = q.shift();
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
      sum += current.val;
    }
    results.push(sum / qLength);
  }
  return results;
};

export default averageOfLevels;
