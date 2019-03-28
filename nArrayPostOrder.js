/*
Given an n-ary tree, return the postorder traversal of its nodes' values.
*/
 
var postorder = function(root) {
  if (!root) return [];
  let result = [];
  
  const traverseTree = (node) => {
    if (node.children !== null && node.children.length > 0) {
      for (let child of node.children) {
        traverseTree(child);
      }
    }
    result.push(node.val);
  }
  traverseTree(root);
  return result;
};
