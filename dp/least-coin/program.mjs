/**
 * 题目：
 * 有1元、3元、5元硬币若干，要凑到n元需要最少几个硬币？
 */
export default function leastCoin(n) {
  const dp = [0, 1, 2, 1, 2, 1];

  for (let i = 6; i <= n; i++) {

    const collect = [];
    for (let unit of [1, 3, 5]) {
      collect.push(1 + dp[i-unit]);
    }

    dp[i] = Math.min(...collect);
  }

  return dp[n];
}
