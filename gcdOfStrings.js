/*
For strings S and T, we say "T divides S" if and only if S = T + ... + T
(T concatenated with itself 1 or more times).
Return the largest string X such that X divides str1 and X divides str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
*/

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  return str1.substring(0, gcd(str1.length, str2.length));
}

export default gcdOfStrings;
