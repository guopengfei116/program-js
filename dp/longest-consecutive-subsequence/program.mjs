/**
 * 题目：
 * 有X，Y两个序列，求最长的连续公共子序列的长度。举例：
 * X：ABCBDAB
 * Y：BDCABA
 * 最长的连续子序列长度为2，有：BD，AB
 */
export default function(x, y) {
  const dp = new Array(x.length).fill(null).map(v => new Array(y.length).fill(0));
  let count = 0;

  // 递推二维数组：
  // 字符匹配: 长度 = (i-1,j-1) + 1
  // 字符不匹配: 长度 = 0
  for (let i = 0, xLen = x.length; i < xLen; i++) {
    for (let j = 0, yLen = y.length; j < yLen; j++) {
      if (x.charAt(i) === y.charAt(j)) {
        if (i == 0 || j == 0) dp[i][j] = 1;
        else dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = 0;
      }
    }

    count = Math.max(count, ...dp[i]);
  }

  console.log(dp);
  return count;
}
