/*
Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.
*/

const firstUniqueChar = (s) => {
  const charObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const char of s) {
    charObj[char] = (charObj[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];
    if (charObj[current] === 1) return i;
  }
  return -1;
};

export default firstUniqueChar;
