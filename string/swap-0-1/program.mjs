/**
  题目：0-1交换
  把一个0-1串(只包含0和1的串)进行排序，你可以交换任意两个位置，最少交换多少次？

  示例 1：
  输入: "100100"
  输出: 2

  示例 2：
  输入: "010101"
  输出: 1
 */
export default function(str) {
  let swapCount = 0;

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    while (str.charAt(i) === "0") {
      i++;
    }
    while (str.charAt(j) === "1") {
      j--;
    }

    if (i <= j) {
      swapCount++;
    } else {
      break;
    }
  }

  console.log(swapCount);
}
