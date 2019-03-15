/*
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
*/

//O(n * k) time complexity
var uniqueMorseRepresentations = function(words) {
  let mcArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let mcObj = {};
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  let uniqueCodeWords = {};
  
  for (let i = 0; i < mcArray.length; i += 1) {
      mcObj[alphabet[i]] = mcArray[i];
  }
  
  for (str of words) {
      let code = '';
      let letters = str.split('');
      letters.forEach(letter => {
          code += mcObj[letter];
      });
      uniqueCodeWords[code] = (uniqueCodeWords[code] || 0) + 1;
  }
  return Object.keys(uniqueCodeWords).length;
};
