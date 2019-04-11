/*
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
*/

var toGoatLatin = function(S) {
  let wordsArr = S.split(' ');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < wordsArr.length; i += 1) {
    let word = wordsArr[i];
    if (vowels.includes(word[0].toLowerCase())) {
      wordsArr[i] += 'ma';
    } else {
      let firstLetter = wordsArr[i][0];
      wordsArr[i] = wordsArr[i].slice(1) + firstLetter + 'ma';
    }
    for (let j = 0; j <= i; j += 1) {
      wordsArr[i] += 'a'
    }
  }
  return wordsArr.join(' ');
};
