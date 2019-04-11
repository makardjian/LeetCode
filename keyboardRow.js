/*
Given a List of words, return the words that can be typed using letters of alphabet on only one 
row's of American keyboard like the image below.
*/

// Time Complexity: O(k * n)
var findWords = function(words) {
  let target;
  let results = [];
  let row1 = {q: true, w: true, e: true, r: true, t: true,  y: true, u: true, i: true, o: true, p: true}
  let row2 = {a: true, s: true, d: true, f: true, g: true, h: true, j: true, k: true, l: true};
  let row3 = {z: true, x: true, c: true, v: true, b: true, n: true, m: true};
  
  for (let i = 0; i < words.length; i += 1) {
    let flag = true;
    let currentWord = words[i]
    if (row1[currentWord[0].toLowerCase()]) target = row1;
    else if (row2[currentWord[0].toLowerCase()]) target = row2;
    else if (row3[currentWord[0].toLowerCase()]) target = row3; 
    
    for (let j = 1; j < currentWord.length; j += 1) {
      let currentLetter = currentWord[j].toLowerCase();
      if (target[currentLetter] === undefined) {
        flag = false; 
        break;
      }
    }
    if (flag === true) results.push(currentWord);
  }
  return results;
};
