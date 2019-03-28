/*
Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is 
now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  

*/


var increasingBST = function(root) {
  if (!root) return root;
  let myMap = new Map(); 
  
  // DFSInOrder Search will access each node from smallest to largest
  const DFSInOrder = (node) => {
    if (node.left) DFSInOrder(node.left);
    myMap.set(node.val, node);
    if (node.right) DFSInOrder(node.right);
  }
  DFSInOrder(root);
  let treeNodes = Array.from(myMap.values());
  for (let i = 0; i < treeNodes.length - 1; i += 1) {
    let current = treeNodes[i];
    let next = treeNodes[i + 1];
    current.left = null;
    current.right = next;
  }
  let lastNode = treeNodes[treeNodes.length - 1];
  lastNode.left = null; 
  lastNode.right = null;
  
  return treeNodes[0];
};
