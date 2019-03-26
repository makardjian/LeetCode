/*
Given two binary trees and imagine that when you put one of them to cover the other, 
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap,
then sum node values up as the new value of the merged node. Otherwise, 
the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
*/

var mergeTrees = function(t1, t2) {
  let t1Values = [];
  let t2Values = [];
  let result = [];
  
  const breadthFirstSearch = (root, arr) => {
    if (!root) return;
    let current;
    let queue = [root];
    
    while (queue.length) {
      current = queue.shift();
      if (current !== null) {
        arr.push(current.val);
        queue.push(current.left, current.right);
      } else {
        arr.push(null);
      }
    }
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] === null) arr.pop();
      else break;
    }
  } 
  breadthFirstSearch(t1, t1Values);
  breadthFirstSearch(t2, t2Values);
  
  let biggerArray = t1Values;
  let smallerArray = t2Values;
  if (t2Values.length > t1Values.length) {
    biggerArray = t2Values;
    smallerArray = t1Values;
  }
  
  for (let i = 0; i < smallerArray.length; i += 1) {
    if (biggerArray[i]  && smallerArray[i]) {
      result.push(biggerArray[i] + smallerArray[i])
    } else {
      result.push(biggerArray[i] || smallerArray[i]);
    }
  }
  
  let remainingValues = biggerArray.slice(smallerArray.length);
  result = result.concat(remainingValues);
  return result; 
}

/*
Note: I'm returning the array of values that would be in the binary tree.
Proper solution would have to declare a BinaryTree class equiped with an
insert method. Then call that method on each value in the result array.
*/
