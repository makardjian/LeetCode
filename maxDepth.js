const maxDepth = (root) => {
  if (!root) return 0;
  let depth = 0;
  let queue = [];
  let current;
  queue.push(root);

  while (queue.length) {
    let queueSize = queue.length; //size of queue = number of nodes at a given depth;

    for (let i = 0; i < queueSize; i += 1) {
      current = queue.shift();
      queue.push(...current.children); //JS will not throw error if array is empty
    }
    depth += 1;
  }
  return depth;
}
