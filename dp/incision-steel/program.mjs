/**
 * 题目：
 * 有一段长长的钢条可以切断成若干来卖，长度为0-10的钢条单独售卖的价格为：
 * p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]。
 * 求长度为n的钢条，最好的切割方法是什么？
 */
export default function incisionSteel(n) {
  const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  const dp = [{revenue: 0, len: 0, next: null}];

  for (let i = 1; i <= n; i++) {

    // 计算所有长度的收益
    const revenues = [0];
    for (let j = 1, len = prices.length; j < len; j++) {
      if (i - j >= 0)
        revenues.push(prices[j] + dp[i-j].revenue);
    }

    // 存储最大收益
    let max = dp[0];
    for (let j = 1, len = revenues.length; j < len; j++) {
      if (revenues[j] > max.revenue)
        max = { revenue: revenues[j], len: j, next: dp[i-j] };
    }
    dp.push(max);
  }

  return result(dp[n]);
}

function result(dpLast) {
  const lens = [];
  while(dpLast) {
    lens.push(dpLast.len);
    dpLast = dpLast.next;
  }
  return lens;
}
