/**
  题目：最长回文子串
  给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

  示例 1：
  输入: "babad"
  输出: "bab"
  注意: "aba" 也是一个有效答案。

  示例 2：
  输入: "cbbd"
  输出: "bb"
 */
export default function(str) {
  // left, right,
  let max = [0, 0];

  for (let i = 0, len = str.length; i < len; i++) {

    for (let j = 0; j < 2; j++) {
      let left = i + j, right = i;
      while(left > 0 && right < len && str[left-1] === str[right+1]) {
        left -= 1;
        right += 1;
      }
      max = right - left > max[1] - max[0]  ? [left, right] : max;
    }
  }

  return str.slice(max[0], max[1] + 1);
}
