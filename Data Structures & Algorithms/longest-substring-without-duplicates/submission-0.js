class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let map = new Map();
  let start = 0;
  let maxLenght = 0;
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
       start = Math.max(start, map.get(s[end]) + 1);
    }
    map.set(s[end], end);
    maxLenght = Math.max(maxLenght, end - start + 1)
  }
  return maxLenght;
    }
}
