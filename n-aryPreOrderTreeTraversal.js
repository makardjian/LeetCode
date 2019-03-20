/*
Given an n-ary tree, return the preorder traversal of its nodes' values.
*/

const preOrder = (root) => {
  if (!root) return [];
  let result = [];
  const traverseTree = (node) => {
    result.push(node.val);
    if (node.children !== null && node.children.length > 0) {
      for (let child of node.children) {
        traverseTree(child);
      }
    }
  }
  traverseTree(root);
  return result;
}
