export default function quickSort(arr) {
  const left = [];
  const right = [];
  const center = [];

  if (arr.length <= 1) {
    return arr;
  }

  const mid = arr[0];
  center.push(mid);
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      center.push(arr[i])
    }
  }

  // console.log(left, mid, right);
  console.log(left.concat(center).concat(right), mid);
  return quickSort(left).concat(center).concat(quickSort(right));
}
