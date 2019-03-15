/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.
*/ 

const lengthOfLastWord = (s) => {
  // if there are more than one empty spaces, then it will make those empty string eles
  //so you need to filter them out.
  let arr = s.split(' ').filter(ele => {
    return ele !== '';
  });
  if (arr.length === 0) return 0;
  return arr[arr.length - 1].length;
};

