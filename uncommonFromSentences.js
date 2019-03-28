/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.
*/
var uncommonFromSentences = function(A, B) {
  let words = {};
  let result = [];
  let array = A.split(' ').concat(B.split(' '));
  for (let word of array) {
    words[word] = (words[word] || 0) + 1;
  }
  let uniqueWords = Object.keys(words).filter(ele => {
    return words[ele] === 1;
  });
  return uniqueWords;
};
