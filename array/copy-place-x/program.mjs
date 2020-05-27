/**
  题目：复制某值
  存在一个容量(size表示)大于元素个数的数组，已知数组含有n个元素，想复制数组中的某个值(x表示)，
  并且原数组容量刚好满足size = n + x的数量，即可以原地复制。

  示例 1：
  输入: ["a", "b", "c", "a", "b", "c"], "b"
  输出: ["a", "b", "b", "c", "a", "b", "b", "c"]

  示例 2：
  输入: ["a", "a", "b", "b", "c", "c", "a", "a"], "a"
  输出: ["a", "a", "a", "a", "b", "b", "c", "c", "a", "a", "a", a"]

  示例 3：
  输入: ["a", "b", "a"], "a"
  输出: ["a", "a", "b", "a", "a"]
 */
export default function(arr, n, x) {
  for (let i = n - 1, j = arr.length - 1; i >= 0; i--, j--) {
    arr[j] = arr[i];
    if (arr[i] === x) {
      arr[--j] = arr[i];
    }
  }

  return arr;
}
