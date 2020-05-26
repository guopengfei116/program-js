/**
  题目：删除某值
  删除数组中的某个值。

  示例 1：
  输入: ["a", "b", "c", "a", "b", "c", "a", "b", "c"], "b"
  输出: ["a", "c", "a", "c", "a", "c"]

  示例 2：
  输入: ["a", "a", "b", "b", "c", "c", "a", "a"], "a"
  输出: ["b", "b", "c", "c"]
 */
export default function(arr, x) {
  let newLen = 0;

  for (let i = 0, j = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== x) {
      arr[j++] = arr[i];
      newLen++;
    }
  }

  console.log(arr, newLen);
  return arr.slice(0, newLen);
}
