/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

// Breadth First Search Implementation
var invertTree = function(root) {
  if (!root) return root;
  let current, temp;
  let queue = [root];
  
  while (queue.length) {
    current = queue.shift();
    if (current.left !== null) {
      queue.push(current.left);
    }
    
    if (current.right !== null) {
      queue.push(current.right);
    }
    
    temp = current.left;
    current.left = current.right;
    current.right = temp;
  }
  return root;
};

// Recursive Depth First Search Solution
var invertTree = function(root) {
  if (root === null) return root;
  let temp = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(temp);
  return root;
};
