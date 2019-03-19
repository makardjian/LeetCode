/*
A binary tree is univalued if every node in the tree has the same value.
Return true if and only if the given tree is univalued.
*/

var isUnivalTree = function(root) {
  if (!root) return false;
  let target = root.val;
  let queue = [];
  let current;
  queue.push(root);
  
  while (queue.length) {
      current = queue.pop();
      if (current.val !== target) return false
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
  }
  return true;
};
