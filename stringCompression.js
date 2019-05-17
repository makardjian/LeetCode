/*
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

Example 1:

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
*/

var compress = function(chars) {
  if (chars.length === 1) return chars.length;
  let base = 0;
  let count = 1;
  for (let i = 1; i < chars.length; i += 1) {
    if (chars[base] === chars[i]) {
      chars[i] = null;
      count += 1;
    } else {
      if (count === 1) {
        base = i
        continue;
      }
      let countArr = count.toString().split('');
      chars.splice(base + 1, count - 1, ...countArr);
      base = i + countArr.length - (count - 1);
      i = i - ((count - 1) - countArr.length);
      count = 1;
    }
  }
  if (count > 1) chars.splice(base + 1, count - 1, ...count.toString().split(''));
  return chars.length;
};
