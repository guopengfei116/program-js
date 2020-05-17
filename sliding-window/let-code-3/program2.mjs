export default function lengthOfLongestSubstring(str) {
  let ans = 0;
  let start = 0, end = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    for (let j = start; j < end; j++) {
      if (str[i] === str[j]) {
          start = j+1;
          break;
      }
    }
    end++;
    ans = end - start > ans ? end - start : ans;
  }

  return ans;
};
