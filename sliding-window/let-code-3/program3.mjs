export default function lengthOfLongestSubstring(str) {
  const dict = {};
  let ans = 0;
  let start = 0, end = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    if (dict.hasOwnProperty(str[i]) && dict[str[i]] >= start) {
      start = dict[str[i]] + 1;
    }

    dict[str[i]] = i;
    end++;
    ans = end - start > ans ? end - start : ans;
  }

  return ans;
}
