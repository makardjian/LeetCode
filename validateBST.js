/**
Prompt: Given a binary tree, determine if it is a valid binary search tree (BST).

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true
  let current = root;
  let results = [];
  
  const traverseTree = (node) => {
    if (node.left !== null) traverseTree(node.left);
    results.push(node.val);
    if (node.right !== null) traverseTree(node.right);
  }
  traverseTree(current);
  for (let i = 1; i < results.length; i += 1) {
    if (results[i - 1] >= results[i]) return false
  }
  return true
};

// Pur recursion solution
let isValidBST = (r, leftBound = -Infinity, rightBound = Infinity) => {
  if (r === null) return true;
  
  if (r.val <= leftBound) return false;
  if (r.val >= rightBound) return false;
  
  return isValidBST(r.left, leftBound, r.val) && isValidBST(r.right, r.val, rightBound);
};