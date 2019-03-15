/*
Given two strings, a haystack and a needle which represents a substring, 
return the first index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:
  Input: haystack = "hello", needle = "ll"
  Output: 2

Example 2:
  Input: haystack = "aaaaa", needle = "bba"
  Output: -1
*/

var needleHayStack = function(haystack, needle) {
  if (haystack.length < needle.length) return -1; 
  if (needle.length === 0) return 0; 
  if (!haystack.length) return 0;

 // init window variable and check for edge case solution
 let window = haystack.slice(0, needle.length);
 if (window === needle) return 0;
 let nextChar;

 for (let i = 1; i <= haystack.length - needle.length; i += 1) {
   window = window.slice(1);
   nextChar = haystack[i + needle.length - 1];
   window = window + nextChar;
   if (window === needle) return i; 
 }
 return -1;
};
