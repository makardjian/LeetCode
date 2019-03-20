/*
Given the root node of a binary search tree (BST) and a value. You need to 
find the node in the BST that the node's value equals the given value. 
Return the subtree rooted with that node. If such node doesn't exist, 
you should return NULL.
*/

// Breadth-first Search
var searchBST = function(root, val) {
  if (!root) return [];
  let current;
  let queue = [root];
  
  while (queue.length) {
    current = queue.pop();
    if (current.val === val) {
      return current;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return null;
};

// Depth-first, pre-order Search;
var searchBST = function(root, val) {
  if (!root) return [];
  let result = null;
  
  const traverseTree = (node) => {
    if (node.val === val) {
        result = node;
        return;
    }
    if (node.right !== null) traverseTree(node.right);
    if (node.left !== null) traverseTree(node.left);
  }
  traverseTree(root);
  return result;
};
