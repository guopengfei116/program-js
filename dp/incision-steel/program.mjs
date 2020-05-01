/**
 * 题目：
 * 有一段长长的钢条可以切断成若干来卖，长度为0-10的钢条单独售卖的价格为：
 * p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]。
 * 求长度为n的钢条，最好的切割方法是什么？
 */
export default function incisionSteel(n) {
  const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  const dp = [{price: 0, current: 0, next: 0}];

  for (let i = 1; i <= n; i++) {

    const collect = [];
    for (let j = 1, len = prices.length; j < len; j++) {
      if (i - j >= 0)
        collect.push(
          {
            price: prices[j] + prices[i-j],
            current: j,
            next: i-j
          }
        );
    }

    dp[i] = collect.reduce(
      (r, v) => r.price > v.price ? r : v,
      {price: 0}
    );
  }

  return dp[n];
}
