/**
  题目：无重复字符的最长子串
  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

  示例 1:
  输入: "abcabcbb"
  输出: 3
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

  示例 3:
  输入: "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
       请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
export default function(str) {
  const dp = [];
  let start = 0, end = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    for (let j = start; j < end; j++) {
      if (str[i] === str[j]) {
        start = j+1;
        break;
      }
    }
    end++;
    dp[i] = end - start;
  }

  console.log(dp);
  return Math.max(...dp);
}
