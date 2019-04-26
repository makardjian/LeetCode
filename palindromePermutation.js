/*
Given a string, determine if the string is a permutation of a palindrome. In other words, determine
if the string can be rearranged in such a way that its characters read the same forwards and backwards.
*/

function permutationOfPalindrome(str) {
  const unpairedCharacters = new Set();
  
  for (let char of str) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }
  return unpairedCharacters.size <= 1; 
}
