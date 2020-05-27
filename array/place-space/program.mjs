/**
  题目：替换空格
  一个很大的字符数组，替换里面的空格变成"%20"。
  注意：数组中元素只能为字符。

  示例 1：
  输入: ["a", " ", "c", "a", " ", "c"]
  输出: ["a", "%", "2", "0", "c", "a", "%", "2", "0", "c"]

  示例 2：
  输入: [" ", "a", "b", " "]
  输出: ["%", "2", "0", "a", "b", "%", "2", "0"]

  示例 3：
  输入: [" ", " "]
  输出: ["%", "2", "0", "%", "2", "0"]
 */
export default function(arr) {
  const spaceCount = arr.filter(v => v === " ").length;
  const len = arr.length;
  const newLen = len - spaceCount + spaceCount * 3;

  arr.length = newLen;
  for (let i = len - 1, j = newLen - 1; i >= 0; i--, j--) {
    if (arr[i] !== " ") {
      arr[j] = arr[i];
    } else {
      arr[j--] = "0";
      arr[j--] = "2";
      arr[j] = "%";
    }
  }

  return arr;
}
