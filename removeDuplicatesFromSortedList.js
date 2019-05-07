/*
Given a sorted linked list, delete all duplicates 
such that each element appear only once.
*/

const deleteDuplicates = (head) => {
  if (!head) return head;
  let prev = head;
  let current = prev.next;
  while (current !== null) {
    if (current.val === prev.val) {
      prev.next = current.next;
      current.next = null;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
