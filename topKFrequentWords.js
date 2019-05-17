/*
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the 
same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
*/

var topKFrequent = function(words, k) {
  let result = [];
  let wordMap = {};
  for (let word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }
  let countGraph = {};
  for (let key in wordMap) {
    let count = wordMap[key];
    if (countGraph[count] === undefined) {
      countGraph[count] = [key];
    } else {
      countGraph[count].push(key);
      countGraph[count].sort(); //O(n log k) 
    }
  }
  let sortedCounts = Array.from(new Set(Object.values(wordMap))).sort((a, b) => b - a);
  
  for (let count of sortedCounts) {
    while (countGraph[count].length > 0 && result.length < k) {
      result.push(countGraph[count].shift());
    }
    if (result.length === k) break;
  }
  return result;
};
//Time Complexity = n + n + n*log(k) + n ===> O(n log k) 
