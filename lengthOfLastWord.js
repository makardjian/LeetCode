const lengthOfLastWord = (s) => {
  // splitting a string on an empty space will put all words into an array
  //but if there are more than one empty spaces, then it will make those empty string elements
  //so you need to filter them out.
  let arr = s.split(' ').filter(ele => {
    return ele !== '';
  });
  if (arr.length === 0) return 0;
  return arr[arr.length - 1].length;
};

