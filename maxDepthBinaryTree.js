
/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root 
node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
*/

var maxDepthBinaryTree = function(root) {
  if (!root) return 0;
  let level = 0;
  let queue = [root];
  let current;
  while (queue.length) {
    let queueSize = queue.length;
    for (let i = 0; i < queueSize; i += 1) {
      current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    level += 1;
  }
  return level
};