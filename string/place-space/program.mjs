/**
  题目：替换空格
  一个很长的字符串，替换里面的空格变成"%20"。

  示例 1：
  输入: "a b a b"
  输出: "a%20b%20a%20b"

  示例 2：
  输入: " ab "
  输出: "%20ab%20"

  示例 3：
  输入: "  "
  输出: "%20%20"
 */
export default function(str) {
  const arr = new Array(str.length);

  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] !== " ") {
      arr[i] = str[i];
    } else {
      arr[i] = "%20";
    }
  }

  return arr.join("");
}
