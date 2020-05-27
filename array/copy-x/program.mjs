/**
  题目：复制某值
  复制数组中的某个值。

  示例 1：
  输入: ["a", "b", "c", "a", "b", "c"], "b"
  输出: ["a", "b", "b", "c", "a", "b", "b", "c"]

  示例 2：
  输入: ["a", "a", "b", "b", "c", "c", "a", "a"], "a"
  输出: ["a", "a", "a", "a", "b", "b", "c", "c", "a", "a", "a", a"]

  示例 3：
  输入: ["a", "a"], "a"
  输出: ["a", "a", "a", "a"]
 */
export default function(arr, x) {
  const newArr = new Array(arr.length * 2);

  for (let i = 0, iLen = arr.length, j = 0, jLen = newArr.length; i < iLen; i++, j++) {
    newArr[j] = arr[i];
    if (arr[i] === x) {
      newArr[++j] = arr[i];
    }
  }

  return newArr;
}
