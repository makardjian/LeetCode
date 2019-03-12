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

I: two strings
O: boolean
C: none
E: 
  / needle's length > haystack ==> return -1
  / needle's length is 0 ==> return 0 
  / haystack is empty string and needle is empty string ==> -1

More Examples:
  /str = 'This is a fun problem. This is a fantastic day.'
  /subst= 'is a f' 

Plan:
/needle does not change
/and any substring within the haystack must be the same length as needle
/set first n chars of haystack equal to window variable 
/itterate over the string starting at 1
/ at each itteration delete first character from window, then add another charcter onto the windo
/ end for loop at str.length <= strlength - needle.length;
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
