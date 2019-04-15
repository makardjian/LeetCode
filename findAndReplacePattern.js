/*
You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every 
letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to 
  another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.

*/

var findAndReplacePattern = function(words, pattern) {
  let results = [];
  let patternObj = {};
  let patternCounter = -1;
  let patternArray = pattern.split('').map(char => {
    if (patternObj[char] === undefined) {
      patternCounter += 1;
      patternObj[char] = patternCounter;
      return patternObj[char];
    } else {
      return patternObj[char];
    }
  });
  
  for (let word of words) {
    let wordObj = {};
    let wordCounter = -1;
    let wordArray = word.split('').map(char => {
      if (wordObj[char] === undefined) {
        wordCounter += 1;
        wordObj[char] = wordCounter;
        return wordObj[char];
      } else {
        return wordObj[char];
      }
    }); 
    
    if (JSON.stringify(wordArray) === JSON.stringify(patternArray)) {
      results.push(word);
    }
  }
  return results;
};
