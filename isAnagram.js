/*
Given two strings s and t , write a function to determine if t is an 
anagram of s. You may assume the string contains only lowercase alphabets.
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  // O(n log n) solution 
  // return s.split('').sort().join('') === t.split('').sort().join('');
  
  //O(n) solution
  let sObj = {};
  let tObj = {};
  
  for (let i = 0; i < s.length; i += 1) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
  }
  for (let j = 0; j < t.length; j += 1) {
    tObj[t[j]] = (tObj[t[j]] || 0) + 1
  }
  
  if (Object.keys(sObj).length !== Object.keys(tObj).length) {
    return false;
  }
  
  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }
  return true;
}