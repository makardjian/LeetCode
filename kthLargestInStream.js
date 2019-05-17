/*
Design a class to find the kth largest element in a stream. Note that it is 
the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an 
integer array nums, which contains initial elements from the stream. 
For each call to the method KthLargest.add, return the element representing the
kth largest elementment in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
*/

var KthLargest = function(k, nums) {
  this.k = k;
  this.values = nums.sort((a, b) => b - a);
};

KthLargest.prototype.add = function(val) {  
  let length = this.values.length;
  for (let i = 0; i < this.values.length; i += 1) {
    if (val > this.values[i]) {
      this.values.splice(i, 0, val);
      break;
    }
  }
  if (this.values.length === length) this.values.push(val);
  return this.values[this.k - 1];
};
