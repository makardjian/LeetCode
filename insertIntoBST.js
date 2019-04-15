/*
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, 
insert the value into the BST. Return the root node of the BST after the insertion. 
It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains 
a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
*/


var insertIntoBST = function(root, val) {
  let newNode = {
    val: val,
    left: null,
    right: null
  }
  
  if (!root) return newNode;

  let current = root;
  let prevNode;
  while (current !== null) {
    if (newNode.val < current.val) {
      prevNode = current;
      current = current.left;
    } else {
      prevNode = current;
      current = current.right;
    }
  }
  if (newNode.val < prevNode.val) prevNode.left = newNode;
  else prevNode.right = newNode;
  
  return root;
};
