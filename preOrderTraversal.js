//Given a binary tree, return the preorder traversal of its nodes' values.
const preOrderRecursive = (root) => {
  if (!root) return [];
  let results = [];
  const traverse = (node) => {
    results.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return results;
}

/*
Flipping lines 26 and 27 would allow us to return the binary tree values 
that result from doing a preOrder traversal on the right side of the tree first. 
As it stand now, I've implemented the more traditional left-side first traversal
*/
const preOrderItterative = (root) => {
  if (!root) return [];
  let results = [];
  let stack = [];
  stack.push(root);
  let current;
  
  while(stack.length) {
    current = stack.pop();
    results.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return results;
}
