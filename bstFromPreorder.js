var bstFromPreorder = function(preorder) { 
  let root = insertIntoBST(null, preorder[0]);
  
  for (let i = 1; i < preorder.length; i += 1) {
    insertIntoBST(root, preorder[i]);
  }
  
  return root;
};
 
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

