const reverseList = (head) => {
  if (!head) return false;
  let pre = null;
  let current = head;
  let oldNext;
  while (current) {
    oldNext = current.next;
    current.next = pre;
    pre = current;
    current = oldNext;
  }
  return pre;
};
export default reverseList;
