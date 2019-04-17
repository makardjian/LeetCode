/*
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you 
don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, 
after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns 
the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset 
can be any value between 0 and arr.length - 1.

*/

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let midIndex = Math.floor(((leftIndex + rightIndex) / 2));
  
  while (leftIndex <= rightIndex) {
    if (arr[midIndex] === target) return midIndex;
    else if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
      midIndex = Math.floor(((leftIndex + rightIndex) / 2));
    } else {
      leftIndex = midIndex + 1;
      midIndex = Math.floor(((leftIndex + rightIndex) / 2));
    }
  }
  return -1;
}

function shiftedArrSearch(shiftArr, num) {
  let pivot, original;
  
  if (shiftArr.length === 1) return 0;
  
  for (let i = 0; i < shiftArr.length - 1; i += 1) {
    if (shiftArr[i] > shiftArr[i + 1]) {
      pivot = i + 1;
      original = shiftArr.slice(pivot).concat(shiftArr.slice(0, pivot));
    }
  }
  if (original === undefined) original = shiftArr;
  
  let originalIndex = binarySearch(original, num);
  
  if (pivot === undefined) return originalIndex;
  else if (pivot < originalIndex)return originalIndex - pivot;
  else return originalIndex + pivot;

}

/*
Shifted : [9, 12, 17, 1, 2, 4, 5], num = 2

Original : [1, 2, 4, 5, 9, 12, 17] 
  /2 exists at index 1; 
  /pivot was equal to index 3 of shiftArr.


*/

