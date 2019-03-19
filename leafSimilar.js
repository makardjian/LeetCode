/*
Consider all the leaves of a binary tree.  From left to right order, 
the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/ */

var leafSimilar = function(root1, root2) {
  const checkLeaves = (root) => {
      let queue = [];
      let leafValues = [];
      queue.push(root);
      let current;
      
      while(queue.length) {
          current = queue.pop();
          if (current.left === null && current.right === null) {
              leafValues.push(current.val);
              continue;
          }
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
      }
      return leafValues;
  }
  
  const root1Vals = checkLeaves(root1);
  const root2Vals = checkLeaves(root2);
  if (root1Vals.length !== root2Vals.length) return false;
  for (let i = 0; i < root1Vals.length; i += 1) {
      if (root1Vals[i] !== root2Vals[i]) return false;
  }
  return true;
};
