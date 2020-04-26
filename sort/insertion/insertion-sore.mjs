export default function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }else {
        break;
      }
    }
  }

  return arr;
}
