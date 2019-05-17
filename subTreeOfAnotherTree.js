/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
*/


//helper function
var isSameTree = function(x, y) {
  if (!x && !y) return true;
  if ((!x && y) || (!y && x) || (x.val !== y.val)) return false;
  return isSameTree(x.left, y.left) && isSameTree(x.right, y.right); 
}

var isSubtree = function (s, t) {
  if ((!s && t) || (s && !t)) return false;
  if (s.val === t.val) {
    if (isSameTree(s, t)) {
      return true;
    }
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
}