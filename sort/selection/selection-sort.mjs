import { swapInArray } from "../../util/array.mjs";

export default function selectionSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {

    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swapInArray(arr, i, minIndex);
  }

  return arr;
}
